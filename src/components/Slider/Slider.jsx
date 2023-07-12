import React from "react";
import Swiper from "swiper";
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
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
