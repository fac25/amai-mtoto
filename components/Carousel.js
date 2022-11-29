import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Media from "../components/Media";

const Carousel = ({ mediaSrcArr, hasPagination, cardsHeight }) => {
  return (
    <div>
      <h1>Carousel</h1>
      <Swiper
        pagination={true}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {mediaSrcArr.map((mediaSrc, index) => {
          return (
            <SwiperSlide
              key={index}
              pagination={hasPagination ? { type: "fraction" } : true}
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
    </div>
  );
};

export default Carousel;
