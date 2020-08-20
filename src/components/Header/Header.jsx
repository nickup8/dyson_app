import React from "react";
import style from "./Header.module.sass";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <a href="/">
          <svg
            width="138"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.075.269h-5.333l-3.71 23.521h3.346l.63-4.267h4.47l.63 4.267h3.677L40.075.27zm-2.849 4.166l1.756 11.896H35.47l1.756-11.896zM56.809 23.79c-.364-.873-.398-1.714-.398-2.856v-3.629c0-2.453-.596-4.234-2.417-5.007 1.623-.773 2.384-2.352 2.384-4.771V5.679c0-3.63-1.623-5.41-5.398-5.41h-5.5V23.79h3.644v-9.576h1.258c1.656 0 2.385.806 2.385 2.99V20.9c0 1.916.133 2.285.331 2.89h3.71zM50.88 3.63c1.292 0 1.855.74 1.855 2.42v2.318c0 1.882-.828 2.486-2.186 2.486h-1.424V3.63h1.755zm11.273 2.049c0-1.68.729-2.319 1.888-2.319 1.16 0 1.888.639 1.888 2.319V18.38c0 1.68-.729 2.319-1.888 2.319-1.16 0-1.888-.639-1.888-2.319V5.68zM58.51 18.145c0 3.763 1.954 5.914 5.53 5.914 3.578 0 5.532-2.15 5.532-5.914V5.914C69.572 2.15 67.618 0 64.041 0S58.51 2.15 58.51 5.914v12.231zM77.306.269H71.94V23.79h3.643v-8.837h1.723c3.643 0 5.432-2.05 5.432-5.813V6.082c0-3.763-1.789-5.813-5.432-5.813zm0 3.36c1.159 0 1.788.538 1.788 2.218v3.528c0 1.68-.63 2.218-1.788 2.218h-1.723V3.629h1.723zm11.364 0h3.81V23.79h3.642V3.63h3.81V.269H88.67v3.36zm16.51 0h6.292V.269h-9.936V23.79h9.936v-3.36h-6.292v-6.89h5.001v-3.36h-5.001V3.63zm15.672 11.391v3.36c0 1.68-.729 2.285-1.888 2.285-1.159 0-1.889-.605-1.889-2.285V5.68c0-1.68.73-2.319 1.889-2.319s1.888.639 1.888 2.319V8.2h3.445V5.914c0-3.763-1.856-5.914-5.433-5.914s-5.432 2.15-5.432 5.914v12.231c0 3.763 1.855 5.914 5.432 5.914 3.577 0 5.433-2.15 5.433-5.914V15.02h-3.445zm9.298-1.31h4.141v10.08H138V.27h-3.709v10.08h-4.141V.27h-3.643v23.52h3.643V13.71zM3.68.144H0v11.2h3.68V.145zm0 18.668H0v4.978h3.68v-4.978zM11.04.144H7.36v7.467h3.68V.144zm7.36 0h-3.68v11.2h3.68V.145zm-7.36 14.935H7.36v8.711h3.68v-8.71zm7.36 3.733h-3.68v4.978h3.68v-4.978z"
              fill="#636969"
            />
          </svg>
        </a>
      </div>
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
      <div className={style.button_group}>
        <div className={style.button}>
          <svg
            width="50"
            height="50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33 33v-2a4 4 0 00-4-4h-8a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8z"
              stroke="#3C3D3D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className={style.button}>
          <svg
            width="50"
            height="50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 36a1 1 0 100-2 1 1 0 000 2zm11 0a1 1 0 100-2 1 1 0 000 2zM13 15h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L35 20H18"
              stroke="#3C3D3D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
