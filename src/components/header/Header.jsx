import React from "react";
import css from "./Header.module.css";
import AMAZON from "../../assets/beauty/logo.svg";
import { CgShoppingBag } from "react-icons/cg";
import {GoThreeBars} from "react-icons/go"

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={AMAZON} alt=""/>
        <span>Hossein Kouhzad</span>
      </div>

      <div className={css.right}>
        <GoThreeBars/>
        <div className={css.bars}>
        
        </div>
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
