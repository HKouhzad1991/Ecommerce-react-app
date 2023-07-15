import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/sun screen cream/Honeyview_intro-1665702977-removebg-preview.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 2.5, type: "spring" };

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
        <motion.div
          initial={{ bottom: "4rem" }}
          whileInView={{ bottom: "-1rem" }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />

        <motion.div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
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
