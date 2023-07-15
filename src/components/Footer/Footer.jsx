import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
    return <div className={css.cFooterWrapper}>
        <hr />
        
        <div className={css.cFooter}>
            <div className={css.cLogo}>
            <img src={Logo} alt="" />
            </div>
        </div>
    </div>;
};

export default Footer;
