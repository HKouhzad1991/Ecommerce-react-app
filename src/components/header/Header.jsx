import React, { useState } from "react";
import css from "./Header.module.css";
import AMAZON from "../../assets/beauty/logo.svg";
import { CgShoppingBag } from "react-icons/cg";
import {MdMenu } from "react-icons/md";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu((ShowMenu)=>!ShowMenu)
  }
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={AMAZON} alt="" />
        <span>Hossein Kouhzad</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <MdMenu/>
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
