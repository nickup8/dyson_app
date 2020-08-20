import React from "react";
import style from "./SectionOne.module.sass";
import Header from "../../../../components/Header/Header";
import Content from "./Content/Content";

const SectionOne = () => {
  return (
    <div className={style.sectionOne}>
      <div className="container">
        <div className={style.grid_wrap}>
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
