import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Firestore
import {
  getArticlesByTrimester,
  getUserById,
  getBabySizeByWeek,
} from "../firebase/firestore";

// Swiper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Chakra-UI
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

// User defined components
import BabyProgress from "../components/BabyProgress";
import Layout from "../components/Layout";
import TrimesterTabs from "../components/TrimesterTabs";
import { useAuth } from "../context/AuthContext";
import {
  whichWeekToQueryFromBabySize,
  whichTrimesterAreYouIn,
} from "../lib/helper-functions";

const TOPIC = ["exercise", "wellbeing", "recipe"];

export async function getServerSideProps({ query }) {
  const selectedTrimester = query.trimester;
  const articlesByTrimester = await getArticlesByTrimester(selectedTrimester);

  const articlesByTrimesterTopic = getArticleByTopic(articlesByTrimester);

  return {
    props: {
      selectedTrimester,
      articlesByTrimesterTopic,
    },
  };
}

// get the article by topic
function getArticleByTopic(articles) {
  let articleByTopic = [];

  for (let i = 0; i < 3; i++) {
    articleByTopic.push([]);
  }

  TOPIC.map((topic, index) => {
    articles.forEach((article) => {
      if (article.topic.includes(TOPIC[index])) {
        articleByTopic[index].push(article);
      }
    });
  });
  return articleByTopic;
}

const HomePage = ({ selectedTrimester, articlesByTrimesterTopic }) => {
  const tabs = [
    { name: "Trimester 1", content: <Text>I am content 1</Text> },
    { name: "Trimester 2", content: <Text>I am content 2</Text> },
    { name: "Trimester 3", content: <Text>I am content 3</Text> },
  ];
  const { user } = useAuth();
  const [babySizeObj, setBabySizeObj] = useState({});
  const [name, setName] = useState();
  const [weekNum, setWeekNum] = useState();
  const [chosenTrimester, setChosenTrimester] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      //- [x] for this user, get their username and due date from the db
      //console.log(user);
      getUserById(user.uid).then((userFromDb) => {
        //console.log(userFromDb);
        let username = userFromDb.username;
        setName(username);
        let dueDate = userFromDb.dueDate;
        //- [x] then get the correct babySize from the db
        let weekToQuery = whichWeekToQueryFromBabySize(dueDate);
        setWeekNum(weekToQuery);
        getBabySizeByWeek(`Week ${weekToQuery}`)
          .then((babySizeData) => {
            //console.log(babySizeData);
            setBabySizeObj(babySizeData);
          })
          .then(() => {
            // - [x] redirect to correct trimester tab based on due date
            let trimesterThisUserIsIn = whichTrimesterAreYouIn(dueDate);
            router.push(`/home-page?trimester=${trimesterThisUserIsIn}`);
          });
      });
    }
    //- [x] then render it
    //- [x] for non-logged in users, hide babyprogress component
  }, [user]);
  return (
    <Layout>
      {!user ? null : (
        <BabyProgress
          mediaSrc={babySizeObj.imgSrc}
          username={name}
          weekNum={weekNum}
          sizeDescriptor={babySizeObj.description}
        />
      )}
      <TrimesterTabs
        tabs={tabs}
        chosenTrimester={chosenTrimester}
        setChosenTrimester={setChosenTrimester}
      />

      {TOPIC.map((topic, index) => {
        return (
          <>
            <Heading as="h3" mt={10} key={index}>
              {TOPIC[index].charAt(0).toUpperCase() + TOPIC[index].slice(1)}
            </Heading>
            <ArticleCard articles={articlesByTrimesterTopic[index]} />
          </>
        );
      })}
    </Layout>
  );
};

function ArticleCard({ articles }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // loop={true}
        className="mySwiper"
        mt={10}
      >
        {articles.length > 0 &&
          articles.map((article, index) => {
            const { topic, trimesterRelated, title, media } = article;

            return (
              <SwiperSlide key={index}>
                <Card maxW="sm">
                  <Link href={media[0].src} isExternal>
                    <CardBody>
                      <ExternalLinkIcon mx="2px" />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{title}</Heading>
                        <Divider />
                        <Text>{`Trimester: ${trimesterRelated}`}</Text>
                        <Divider />
                        <Text>{`Topics: ${topic}`}</Text>
                      </Stack>
                    </CardBody>
                  </Link>
                </Card>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default HomePage;
