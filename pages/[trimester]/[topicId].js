import React from "react";
import ArticleCard from "../../components/ArticleCard";
import Layout from "../../components/Layout";
import topicSummaryArr from "../../lib/data/topicSummary";
import { getArticleByTopic } from "../../lib/helper-functions.js";
import { getArticlesByTrimester } from "../../firebase/firestore";
import { Heading } from "@chakra-ui/react";
import TopicPages from "../../styles/TopicPages.module.css";

export async function getServerSideProps({ params, resolvedUrl }) {
  const topicId = params.topicId;
  const trimester = params.trimester.slice(params.trimester.length - 1);
  const trimesterArticlesDb = await getArticlesByTrimester(trimester);

  return {
    props: {
      trimesterArticlesDb,
      topicId,
      resolvedUrl,
    },
  };
}

const Topic = ({ trimesterArticlesDb, topicId, resolvedUrl }) => {
  const topicContent = topicSummaryArr.find(
    (topic) => topic.id === resolvedUrl
  );
  const localTopicArticles = topicContent.resources;
  const topicArticles = getArticleByTopic(
    [...localTopicArticles, ...trimesterArticlesDb],
    topicId
  );

  return (
    <Layout>
      <Heading className={TopicPages.heading}>{topicContent.title}</Heading>
      {topicContent.content}
      <Heading className={TopicPages.resource} as="h2">
        Resources:
      </Heading>
      <ArticleCard articles={topicArticles} />
    </Layout>
  );
};

export default Topic;
