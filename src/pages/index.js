import React from "react";

import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import "./home.css";
import "../style.css";
import Menu from "../components/Menu";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Little Far Flung Owl</title>
        <meta property="og:title" content="Little Far Flung Owl" />
      </Helmet>
      <section className="home-hero">
        <Menu rootClassName="menu-root-class-name"></Menu>
        <div className="home-container1">
          <Hero></Hero>
        </div>
      </section>
    </div>
  );
};

export default Home;
