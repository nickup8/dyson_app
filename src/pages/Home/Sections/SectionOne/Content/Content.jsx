import React from "react";
import style from "./Content.module.sass";
import { ReactComponent as ButtonIcon } from "./../../../../../images/iconButtonArrow.svg";
import { ReactComponent as ButtonPlay } from "./../../../../../images/Play.svg";

const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.left_column}>
        <div className={style.text}>
          <h1 className="h1">Увлажнитель воздуха Dyson AM10</h1>
          <p className={style.description}>
            С функцией вентилятора. Убивает до 99,9% бактерий в воде с помощью
            безопасного УФ&nbsp;-&nbsp;излучения
          </p>
        </div>
        <div className={style.buttonArea}>
          <button className="button">
            Оформить предзаказ
            <span className="buttonIcon">
              <ButtonIcon />
            </span>
          </button>
        </div>
        <div className="testimonials">
          <div className="left">
            <div className="name"></div>
            <div className="rating"></div>
            <div className="description"></div>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <div className="center_column">Центр</div>
      <div className="right column">Правая колонка</div>
    </div>
  );
};

export default Content;
