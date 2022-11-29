// import Head from "next/head";
import styles from "../styles/Home.module.css";
import Head from "next/head";

import Form from "../components/Form";

import Footer from "../components/Footer";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home() {
  const formElements = [
    {
      label: "Email",
      inputType: "email",
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      error: "Invalid email. Please use an @.",
    },
    {
      label: "Username",
      inputType: "text",
    },
    {
      label: "Trimester",
      inputType: "number",
    },
  ];

  function formSubmitFunction(formData) {
    console.log("hello");
  }

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Hello to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <Form
        formElements={formElements}
        formSubmitFunction={formSubmitFunction}
      />
      <Footer></Footer>
    </div>
  );
}
