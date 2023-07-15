import React from "react";
import css from "./Testimonials.module.css";
import Hero2 from "../../assets/testimonialHero.png";

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
          <Swiper></Swiper>
          </div>
          
    </div>
  );
};

export default Testimoinals;
