import React from "react";
import ArticleCard from "../../components/ArticleCard";
import Layout from "../../components/Layout";

export async function getServerSideProps({ params }) {
  return {
    props: {
      trimester: params.trimester,
      topicId: params.topicId,
    },
  };
}

const Topic = ({ topicId, trimester }) => {
  return (
    <Layout>
      <h1>
        {topicId} - {trimester}
      </h1>
      <ArticleCard />
    </Layout>
  );
};

export default Topic;
