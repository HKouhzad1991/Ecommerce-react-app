import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
