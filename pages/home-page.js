import React from "react";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";

const HomePage = () => {
  const tabs = [{ name: "Trimester 1", content: "I am content" }];
  return (
    <Layout>
      <Tabs tabs={tabs} />
    </Layout>
  );
};

export default HomePage;
