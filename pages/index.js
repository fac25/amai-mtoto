import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Layout from "../components/Layout";
import ChakraButton from "../components/ChakraButton";
import { useRouter } from "next/router";
import { Flex, VStack, Heading } from "@chakra-ui/react";
import Image from "next/image";

import Meditating from "../public/landingPageImages/Meditating.jpeg";

import landingStyles from "../styles/landing.module.css";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home() {
  const router = useRouter();

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
          <Flex flexDirection={["column-reverse", "row"]} py={20}>
            <Flex flexWrap="wrap" justifyContent="center">
              <VStack mr={30}>
                <Heading
                  as="h2"
                  fontSize={20}
                  mb={10}
                  mt={10}
                  textAlign="center"
                >
                  Amai Mtoto, with you on every step of your pregnancy journey
                </Heading>
                {buttonTexts.map((button, i) => {
                  return (
                    <div key={i}>
                      <ChakraButton functionToCallWhenButtonIsClicked={onClick}>
                        {button}
                      </ChakraButton>
                    </div>
                  );
                })}
              </VStack>
            </Flex>

            <div className={landingStyles.imageDiv}>
              <Image
                src={Meditating}
                alt="A black pregnant woman sitting on a yoga mat looking calm and happy"
                width={800}
                height={1833}
              />
            </div>
          </Flex>
        </main>
      </div>
    </Layout>
  );
}
