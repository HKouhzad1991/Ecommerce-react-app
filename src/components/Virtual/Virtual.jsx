import React from "react";
import css from "./Virtual.module.css";
import Shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";

const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>Virtual Try-On</span>
        <span>Never Buy The Wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>

      <div className={css.right}>
        <ReactCompareImage leftImage={Before} rightImage={After} />
      </div>
    </div>
  );
};

export default Virtual;
