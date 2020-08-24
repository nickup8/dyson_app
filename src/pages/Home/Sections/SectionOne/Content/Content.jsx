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
        <div className={style.testimonials}>
          <div className={style.left}>
            <div className={style.name}>
              <h4>Сергей</h4>
            </div>
            <div className={style.rating}>
              <ul>
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
              </ul>
            </div>
            <div className={style.description}>
              <p>
                Уже 5 лет я тесно знаком с фирмой «Dyson». Узнав, что на рынке
                стал популярен увлажнитель этой модели, заинтересовался им. В
                ближайшем магазине бытовой техники....
              </p>
            </div>
          </div>
          <div className={style.right}></div>
        </div>
      </div>
      <div className="center_column">Центр</div>
      <div className="right column">Правая колонка</div>
    </div>
  );
};

export default Content;
