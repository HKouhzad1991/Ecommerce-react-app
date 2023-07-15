import React from "react";
import css from "./Testimonials.module.css";
import Hero2 from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimoinals = () => {
  return (
    <div className={css.testimnials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </span>
        </div>
        <img src={Hero2} alt="" />
        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      {/* carousal review sec */}

      <div className={css.carousal}>
        <Swiper>
          {TestimonialsData.map((testimnials, i) => {
            <SwiperSlide>
              <div className={css.Testimonial}>
                <img src={testimonial.img} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimoinals;
