import React from "react";
import Media from "./Media";

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

const ArticleCard = ({ articles }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={30}
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
                  <Link href={src} isExternal>
                    <CardBody>
                      <ExternalLinkIcon mx="2px" />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{title}</Heading>
                        <Divider />
                        <Text>
                          {author ? `Author: ${author}` : `Author: Unknown`}
                        </Text>
                        <Divider />
                        
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
