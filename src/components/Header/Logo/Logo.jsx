import React from "react";
import style from "./Logo.module.sass";
import { ReactComponent as Logoimg } from "./../../../images/logo.svg";

const Logo = () => {
  return (
    <div className={style.logo}>
      <a href="/">
        <Logoimg />
      </a>
    </div>
  );
};

export default Logo;
