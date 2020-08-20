import React from "react";
import style from "./ButtonGroup.module.sass";
import { ReactComponent as ProfileIcon } from "./../../../images/iconProfile.svg";
import { ReactComponent as CartIcon } from "./../../../images/iconCart.svg";

const ButtonGroup = () => {
  return (
    <div className={style.button_group}>
      <div className={style.button}>
        <ProfileIcon />
      </div>
      <div className={style.button}>
        <CartIcon />
      </div>
    </div>
  );
};

export default ButtonGroup;
