import React from "react";
import ArticleCard from "../../components/ArticleCard";

export async function getServerSideProps({ params }) {
  return {
    props: {
      trimester: params.trimester,
      topicId: params.topicId,
    },
  };
}

const Topic = ({topicId, trimester}) => {
  return (
    <div>
      <h1>{topicId} - {trimester}</h1>
      <ArticleCard />
    </div>
  );
};

export default Topic;
