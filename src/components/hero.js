import React from "react";

import "./hero.css";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <header className="hero-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          We help you scale your small business', Description
        </h1>
        <span className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </span>
        <StaticImage
          alt="hero-img"
          src="../../src/images/tel.webp"
          className="hero-image"
        />
      </div>
      <div className="hero-image1">
        <StaticImage
          alt="hero-img"
          src="../../src/images/hero.jpg"
          className="hero-image2"
        />
        <StaticImage
          alt="hero-img"
          src="../../src/images/nur.jpg"
          className="hero-image3"
        />
      </div>
    </header>
  );
};

export default Hero;
