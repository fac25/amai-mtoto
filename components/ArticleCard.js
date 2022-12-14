import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Chakra-UI
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import ArticleCardStyle from "../styles/ArticleCard.module.css";

const ArticleCard = ({ articles }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // loop={true}
        className="mySwiper"
        mt={10}
      >
        {articles.length > 0 &&
          articles.map((article, index) => {
            const { topic, trimesterRelated, title, src, author } = article;

            return (
              <SwiperSlide key={index}>
                <Card maxW="sm">
                  <Link title={`${title} - ${author}`} href={src} isExternal>
                    <CardBody className={ArticleCardStyle.card}>
                      <ExternalLinkIcon
                        mx="2px"
                        className={ArticleCardStyle.logo}
                      />
                      <Stack mt="6" spacing="3">
                        <Heading
                          className={ArticleCardStyle.card_text}
                          size="md"
                        >
                          {title}
                        </Heading>
                        <Divider />
                        <Text className={ArticleCardStyle.card_text}>
                          {author || "Unknown Author"}
                        </Text>
                      </Stack>
                    </CardBody>
                  </Link>
                </Card>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default ArticleCard;
