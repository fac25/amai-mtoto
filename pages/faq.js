import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Layout from "../components/Layout";
import { getAllFAQs } from "../firebase/firestore";

export async function getServerSideProps() {
  const questionsData = await getAllFAQs();
  return {
    props: {
      questionsData,
    },
  };
}

export default function FaqPage({ questionsData }) {
  console.log(questionsData);
  const data = {
    title: "FAQ (How it works)",
    rows: [...questionsData],
  };

  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return (
    <Layout>
      <div style={{ maxWidth: "50%" }}>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </Layout>
  );
}
