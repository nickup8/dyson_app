import React from "react";
import style from "./Content.module.sass";

const Content = () => {
  return (
    <div className={style.content}>
      <div className="left_column">Левая колонка</div>
      <div className="center_column">Центр</div>
      <div className="right column">Правая колонка</div>
    </div>
  );
};

export default Content;
