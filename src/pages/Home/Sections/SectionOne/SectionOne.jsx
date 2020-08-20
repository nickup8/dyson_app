import React from "react";
import style from "./SectionOne.module.sass";
import Header from "../../../../components/Header/Header";

const SectionOne = () => {
  return (
    <div className={style.sectionOne}>
      <div className="container">
        <Header />
      </div>
    </div>
  );
};

export default SectionOne;
