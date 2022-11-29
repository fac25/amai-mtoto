// import Head from "next/head";
import styles from "../styles/Home.module.css";

import Head from "next/head";
import Form from "../components/Form";
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home() {
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
      <footer></footer>
    </div>
  );
}
