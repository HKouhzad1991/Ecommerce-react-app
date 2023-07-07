import React from "react";
import css from "./Header.module.css";
import AMAZON from "../../assets/amazon/Amazon-Logo-PNG-Transparent@zeevector.png";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={AMAZON} alt="" />
        <span>Hossein Kouhzad</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collection</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Gallery</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
