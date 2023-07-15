import React from "react";
import css from "./Testimonials.module.css";
import Hero2 from "../../assets/testimonialHero.png";

const Testimoinals = () => {
  return (
    <div className={css.testimnials}>
      <div className={css.wrapper}>
        <span>Top Rated</span>
        <span>
          SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
          REJOICED.
        </span>
      </div>
      <img src={Hero2} alt="" />
    </div>
  );
};

export default Testimoinals;
