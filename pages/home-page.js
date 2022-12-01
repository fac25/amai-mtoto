import { title } from "process";
import React from "react";
import BabyProgress from "../components/BabyProgress";
import Layout from "../components/Layout";
import { getArticlesByTopicTrimester } from "../firebase/firestore";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

// export async function getServerSideProps({ params }) {
//   return {
//     props: {
//       trimester: params.trimester,
//       topicId: params.topicId,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  // const trimesterId = params.id;
  const trimesterId = 1;
  const exerciseArticles = await getArticlesByTopicTrimester(
    "exercise",
    trimesterId
  );
  const wellbeingArticles = await getArticlesByTopicTrimester(
    "wellbeing",
    trimesterId
  );

  const recipeArticles = await getArticlesByTopicTrimester(
    "recipe",
    trimesterId
  );

  // console.log(exerciseArticles);
  return {
    props: { exerciseArticles, wellbeingArticles, recipeArticles },
  };
}

// Query DB for articles related to the topic

// Display articles

const HomePage = ({ exerciseArticles, wellbeingArticles, recipeArticles }) => {
  return (
    <Layout>
      <div>
        <h2>Exercises</h2>
        {/* article card carousel*/}
        <ArticleCard articles={exerciseArticles} />
        <h2>Recipes</h2>
        {/* article card carousel*/}
        <h2>Well Being</h2>
        {/* article card carousel*/}
      </div>
    </Layout>
  );
};

function ArticleCard({ articles }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {articles.map((article, index) => {
          const { topic, trimesterRelated, title, media } = article;
          // console.log(article);
          return (
            <SwiperSlide key={index}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={media[0].src}
                    alt=""
                    borderRadius="lg"
                    boxSize="sm"
                    objectFit="cover"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{title}</Heading>
                    <Divider />
                    <Text>{`Trimester: ${trimesterRelated}`}</Text>
                    <Divider />
                    <Text>{`Topics: ${topic}`}</Text>
                  </Stack>
                </CardBody>
              </Card>
              {/* <p>{title}</p>
              <p>{`Trimester: ${trimesterRelated}`}</p>
              <p>{`Topics: ${topic}`}</p>
              <img src={media[0].src} alt="" /> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default HomePage;
