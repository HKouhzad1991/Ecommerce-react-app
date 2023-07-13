import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./Slider.css";

const Slider = () => {
  return <div className="s-container">
    <Swiper>
    <SwiperSlide>swiperslide</SwiperSlide>
    </Swiper>
  </div>;
};

export default Slider;
