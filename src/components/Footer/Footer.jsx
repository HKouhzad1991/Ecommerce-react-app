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
  InboxInIcon,
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
              <a href="tel:+989113191788">tel:+98-911-319-1788</a>
            </span>

            <span className={css.pngLine}>
              <InboxInIcon className={css.icon} />
              <a href="https://hosseinkouhzad2017@gmail.com">support: Gmail</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>sign in</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright @2023 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
