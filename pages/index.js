import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Layout from "../components/Layout";
import ChakraButton from "../components/ChakraButton";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";

import BabyProgressStockPhoto from "../public/landingPageImages/BabyProgressStockPhoto.jpeg";
import PregnancySymptomsStockPhoto from "../public/landingPageImages/PregnancySymptomsStockPhoto.jpeg";
import EatingApple from "../public/landingPageImages/EatingApple.jpeg";
import Exercising from "../public/landingPageImages/Exercising.jpeg";
import Meditating from "../public/landingPageImages/Meditating.jpeg";
import Group from "../public/landingPageImages/Group.jpeg";

import carouselWriting from "../lib/data/carouselContent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Head from "next/head";

import Form from "../components/Form";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home() {
  console.log(carouselWriting);
  const router = useRouter();
  const mediaSrcArr = [
    BabyProgressStockPhoto.src,
    PregnancySymptomsStockPhoto.src,
    EatingApple.src,
    Exercising.src,
    Meditating.src,
    Group.src,
  ];

  const buttonTexts = [
    "Explore Trimester 1",
    "Explore Trimester 2",
    "Explore Trimester 3",
  ];

  function onClick(e) {
    buttonTexts.map((buttonText, i) => {
      e.target.innerText === buttonText &&
        // Needs to be changed to /summary when we have route
        router.push(`/trimester-${i + 1}/summary`);
    });
  }

  return (
    <Layout>
      <div className={styles.container}>
        <main>
          {/* <h1 className={styles.title}>Amai Mtoto</h1> */}
          <Carousel mediaSrcArr={mediaSrcArr} cardsHeight={"400px"} />
          <Flex flexWrap="wrap" justifyContent="center">
            {buttonTexts.map((button, i) => {
              return (
                <div key={i}>
                  <ChakraButton functionToCallWhenButtonIsClicked={onClick}>
                    {button}
                  </ChakraButton>
                </div>
              );
            })}
          </Flex>
        </main>
      </div>
    </Layout>
  );
}

function Carousel({ mediaSrcArr, cardsHeight }) {
  return (
    <Swiper
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
      pagination={true}
      className="mySwiper"
    >
      {mediaSrcArr.map((mediaSrc, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${mediaSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: cardsHeight,
            }}
          >
            <div>
              <p>{carouselWriting[index]}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

/* const formElements = [
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

// function formSubmitFunction(formData) {
//   console.log(formData);
// }

/*
// return (
//   <div className={styles.container}>
//     <main>
//       <h1 className={styles.title}>
//         Hello to <a href="https://nextjs.org">Next.js!</a>
//       </h1>
//     </main>
//     <Form
//       formElements={formElements}
//       formSubmitFunction={formSubmitFunction}
//     />
//     <Footer></Footer>
//   </div>
*/
