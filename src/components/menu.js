import React from "react";

import logo from "../../src/images/logo.svg";

import "./menu.css";

const Menu = () => {
  return (
    <div className={`menu-menu menu-root-class-name `}>
      <div id="mobile-menu" className="menu-mobile-navigation">
        <img alt="logo-home" src={logo} className="menu-logo" />
        <div className="menu-links">
          <span className="Link">Solutions</span>
          <span className="Link">How it works</span>
          <span className="Link">Prices</span>
        </div>
        <div id="close-mobile-menu" className="menu-close-mobile-menu">
          <svg viewBox="0 0 804.5714285714286 1024" className="menu-icon">
            <path
              d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="menu-desktop-navigation">
        <nav className="menu-centered">
          <div className="menu-left">
            <img alt="hero-logo" src={logo} className="menu-logo1" />
            <div className="menu-links1">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
          </div>
          <div className="menu-right">
            <span className="menu-sign-in Link">Sign In</span>
            <div className="menu-get-started">
              <span className="menu-text6">Gallery</span>
            </div>
            <div className="menu-container">
              <svg viewBox="0 0 877.7142857142857 1024" className="menu-icon2">
                <path
                  d="M877.714 768v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 475.429v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571zM877.714 182.857v73.143c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"
                  className=""
                ></path>
              </svg>
              <div id="open-mobile-menu" className="menu-burger-menu"></div>
            </div>
          </div>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
