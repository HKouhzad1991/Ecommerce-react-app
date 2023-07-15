import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/sun screen cream/Honeyview_intro-1665702977-removebg-preview.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={CSS.container}>
      {/* left side */}

      <div className={css.h_sides}>
        <span className={css.text1}>
          Skin Protection Cream <hr />
        </span>

        <div className={css.text2}>
          <span>Trendy Collection</span>

          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/*middle side hero image  */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* right side */}

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffics</span>
        </div>
        <div className={css.customers}>
          <span>100K</span>
          <span>Happy customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
