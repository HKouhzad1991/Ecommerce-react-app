import React from "react";
import Logo from "../../assets/beauty/logo.svg";
import {
  InboxIcon,
  PhoneIcon,
  LocationMakerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
  LocationMarkerIcon,
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
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>11 north avenue Orlando, FL 32801</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a
                href="https://github.com/HKouhzad1991/HKouhzad1991"
                className=""
              >
                support:Hossein-Kouhzad
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
