import React from "react";
import style from "./Nav.module.sass";

const Nav = () => {
  return (
    <div className={style.nav}>
      <ul>
        <li>
          <a href="https://www.youtube.com/?gl=RU&hl=ru">Ассортимент</a>
        </li>
        <li>
          <a href="https://www.youtube.com/?gl=RU&hl=ru">Адреса магазинов</a>
        </li>
        <li>
          <a href="https://www.youtube.com/?gl=RU&hl=ru">
            Поддержка и контакты
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/?gl=RU&hl=ru">Отзывы</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
