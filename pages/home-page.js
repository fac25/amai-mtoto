import React, { useState } from "react";
import Layout from "../components/Layout";
import TrimesterTabs from "../components/TrimesterTabs";
import { Text } from "@chakra-ui/react";
import TopicSection from "../components/TopicSection";

export async function getServerSideProps({ query }) {
  const selectedTrimester = query.trimester || 1;
  return {
    props: {
      selectedTrimester,
    },
  };
}

const HomePage = ({ selectedTrimester }) => {
  

  const tabs = TABS_CONTENT.map((tab) => {
    const tabObj = {};
    tabObj.name = tab.name;
    tabObj.content = tab.topics.map(({ topicName, summary }, index) => (
      <TopicSection
        key={`section-${index}`}
        topicName={topicName}
        summary={summary}
      />
    ));
    return tabObj;
  });

  return (
    <Layout>
      <TrimesterTabs tabs={tabs} selectedTrimester={selectedTrimester} />
    </Layout>
  );
};

export default HomePage;
