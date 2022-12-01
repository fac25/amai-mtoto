import React, { useState } from "react";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
import { Text } from "@chakra-ui/react";

export async function getServerSideProps({ query }) {
  const selectedTrimester = query.trimester;
  return {
    props: {
      selectedTrimester: selectedTrimester,
    },
  };
}

const HomePage = ({ selectedTrimester }) => {
  const tabs = [
    { name: "Trimester 1", content: <Text>I am content 1</Text> },
    { name: "Trimester 2", content: <Text>I am content 2</Text> },
    { name: "Trimester 3", content: <Text>I am content 3</Text> },
  ];
  return (
    <Layout>
      <Tabs tabs={tabs} selectedTrimester={selectedTrimester} />
    </Layout>
  );
};

export default HomePage;
