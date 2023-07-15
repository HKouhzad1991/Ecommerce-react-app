import React from "react";
import Logo from "../../assets/beauty/logo.svg";
import {
  InboxIcon,
  PhoneIcon,
  LocationMakerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Hossein Kouhzad</span>
        </div>
        <div className={css.block}>
          <div className={css.details}>
                      <span>Contact Us</span>
                      <span>css.pngLine</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
