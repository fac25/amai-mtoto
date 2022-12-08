import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Layout from "../components/Layout";
import { getAllFAQs } from "../firebase/firestore";
import faqStyle from "../styles/Faq.module.css";

export async function getServerSideProps() {
  const questionsData = await getAllFAQs();
  return {
    props: {
      questionsData,
    },
  };
}

export default function FaqPage({ questionsData }) {
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
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </Layout>
  );
}
