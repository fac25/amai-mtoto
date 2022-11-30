import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Layout from "../components/Layout";
import { getAllFAQs } from "../firebase/firestore";

export async function getServerSideProps() {
  console.log("hi");
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
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
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
