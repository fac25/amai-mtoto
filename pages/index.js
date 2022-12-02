import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Layout from "../components/Layout";
import ChakraButton from "../components/ChakraButton";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";

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
  const router = useRouter();
  const mediaSrcArr = [
    "https://plus.unsplash.com/premium_photo-1669052826135-aa5ca0417430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1669166717463-38a78c93412b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
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
        router.push(`/trimester-${i + 1}/exercise`);
    });
  }

  return (
    <Layout>
      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>
            Hello to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <Carousel mediaSrcArr={mediaSrcArr} cardsHeight={"400px"} />
          <Flex>
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
          ></SwiperSlide>
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
