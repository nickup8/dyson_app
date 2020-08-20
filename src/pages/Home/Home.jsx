import React from "react";
import "./Home.module.sass";
import SectionOne from "./Sections/SectionOne/SectionOne";
// import SectionTwo from "./Sections/SectionTwo/SectionTwo";
// import SectionThree from "./Sections/SectionThree/SectionThree";
// import SectionFour from "./Sections/SectionFour/SectionFour";

const Home = () => {
  return (
    <div className="home">
      <SectionOne />
      {/* <SectionTwo />
      <SectionThree />
      <SectionFour /> */}
    </div>
  );
};

export default Home;
