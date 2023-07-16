import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Slider.css";
import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        slidesPerView={4}
        spaceBetween={45}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>

              <div>Shop Now</div>
            </div>
            <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
