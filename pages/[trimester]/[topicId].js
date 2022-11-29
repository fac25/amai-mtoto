import React from "react";
import ArticleCard from "../../components/ArticleCard";

export async function getServerSideProps({ params }) {
  return {
    props: {
      topicId: params.topicId,
    },
  };
}

const Topic = () => {
  return (
    <div>
      <ArticleCard />
    </div>
  );
};

export default Topic;
