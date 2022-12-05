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

const TOPIC = ["exercise", "nutrition", "wellbeing"];

export async function getServerSideProps({ query }) {
  const chosenTrimester = query.trimester || 1;
  const articlesByTrimester = await getArticlesByTrimester(chosenTrimester);

  const articlesByTrimesterTopic = getArticleByTopic(articlesByTrimester);

  return {
    props: {
      chosenTrimester,
      articlesByTrimesterTopic,
    },
  };
}

// get the article by topic
function getArticleByTopic(articles) {
  let articleByTopic = [];

  for (let i = 0; i < TOPIC.length; i++) {
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

const HomePage = ({ chosenTrimester, articlesByTrimesterTopic }) => {
  const { user } = useAuth();
  const [babySizeObj, setBabySizeObj] = useState({});
  const [name, setName] = useState();
  const [weekNum, setWeekNum] = useState();
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

  const topicCards = TOPIC.map((topic, index) => ({
    name: topic,
    content: (
      <ArticleCard
        key={`card-${index}`}
        articles={articlesByTrimesterTopic[index]}
      />
    ),
  }));

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
        chosenTrimester={chosenTrimester}
        topicCards={topicCards}
      />
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
            const { topic, trimesterRelated, title, src, author } = article;

            return (
              <SwiperSlide key={index}>
                <Card maxW="sm">
                  <Link href={src} isExternal>
                    <CardBody>
                      <ExternalLinkIcon mx="2px" />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{title}</Heading>
                        <Divider />
                        <Text>
                          {author ? `Author: ${author}` : `Author: Unknown`}
                        </Text>
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
