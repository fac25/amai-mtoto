// import Head from "next/head";
import styles from "../styles/Home.module.css";
import Video from "../components/Video";

// import Media from "../components/Media";

import YouTube from "react-youtube";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Video />;
        {/* 
        <Media
        // mediaType="video"
        // mediaSrc="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        // mediaType="image"
        // mediaSrc="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        /> */}
      </main>

      <footer></footer>
    </div>
  );
}
