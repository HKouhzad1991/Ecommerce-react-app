import React from "react";
import css from "./Hero.module.css";
import sunskin from "../../assets/sun cream2/4_vinosun_cream_spf50_ingredients_caudalie_en.avif";

const Hero = () => {
  return (
    <div className={CSS.container}>
      {/* left side */}

      <div className={css.h_sides}>
        <span>Skin Protection Cream</span>
        <div className="sunskin-img">
          <img src={sunskin} alt="" />
        </div>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
        {/*middle side hero image  */}
      </div>
    </div>
  );
};

export default Hero;
