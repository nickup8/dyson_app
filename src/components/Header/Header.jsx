import React from "react";
import style from "./Header.module.sass";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Nav />
      <ButtonGroup />
    </header>
  );
};

export default Header;
