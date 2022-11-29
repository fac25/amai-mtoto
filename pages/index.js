// import Head from "next/head";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Carousel from "../components/Carousel";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home() {
  const mediaSrcArr = [
    "https://plus.unsplash.com/premium_photo-1669052826135-aa5ca0417430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1669166717463-38a78c93412b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  ];
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Hello to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Carousel mediaSrcArr={mediaSrcArr} cardsHeight={"400px"} />
      </main>

      <footer></footer>
    </div>
  );
}
