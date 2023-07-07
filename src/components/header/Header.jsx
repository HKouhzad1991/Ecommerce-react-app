import React from "react";
import css from "./Header.module.css";
// import Logo from "../../assets/logo.png";
import AMAZON from "../../assets/amazon/Amazon-Logo-PNG-Transparent@zeevector.png";


const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={AMAZON} alt="" />
        <span>AMAZON HK</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>menu</div>
        <input type="text" className={css.search} />
        <span>PNG icon of card</span>
      </div>
    </div>
  );
};

export default Header;
