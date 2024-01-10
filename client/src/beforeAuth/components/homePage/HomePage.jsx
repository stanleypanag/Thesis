import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import FeatureDocs from "./featureDocs/FeatureDocs";
import "./homepage.css";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeatureDocs />
      <div className="about-title mb-10" id="about">
        <div className="breakLine1"></div>
        <div className="dot"></div>
        <h2 className="font-bold">About</h2>
        <div className="dot"></div>
        <div className="breakLine1"></div>
      </div>
      <div className="about rounded-tl-custom-large rounded-tr-custom-large pb-20">
        <About />
      </div>
    </div>
  );
};

export default HomePage;
