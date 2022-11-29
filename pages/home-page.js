import React from "react";
import BabyProgress from "../components/BabyProgress";
import Layout from "../components/Layout";
import CarouselCard from "../components/CarouselCard";
import {
  getArticlesByTopic,
  getArticlesByTrimester,
} from "../firebase/firestore";

export async function getServerSideProps() {
  const exerciseArticles = await getArticlesByTopic("exercise");
  return {
    props: {},
  };
}

const HomePage = () => {
  // TODO
  // Query DB for articles related to the topic

  // Display articles

  // const mediaObj = [
  //   {
  //     thumbnailSrc:
  //       "https://plus.unsplash.com/premium_photo-1669052826135-aa5ca0417430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  //     href: "/articles/1",
  //     title: "Excercise",
  //   },
  //   {
  //     thumbnailSrc:
  //       "https://images.unsplash.com/photo-1669166717463-38a78c93412b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  //     href: "/articles/2",
  //     title: "Well Being",
  //   },
  // ];

  return <Layout>{/* <CarouselCard /> */}</Layout>;
};

export default HomePage;
