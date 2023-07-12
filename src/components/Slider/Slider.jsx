import React from "react";
import { Swiper, SwiperSlide } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper>
        <SwiperSlide1></SwiperSlide1>
        <SwiperSlide2></SwiperSlide2>
        <SwiperSlide3></SwiperSlide3>
      </Swiper>
    </div>
  );
};

export default Slider;
