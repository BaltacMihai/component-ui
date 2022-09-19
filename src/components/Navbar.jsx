import React from "react";
import { text } from "../assets/text/text";
import logo from "./../assets/images/icon.svg";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#" className="logo">
        <img src={logo} alt="logo" className="logo_image" />
        <p className="logo_title">{text.navbar.logoTitle}</p>
      </a>
      <div className="wrapper">
        <a href="#" className="items">
          {text.navbar.guides}
        </a>
        <a href="#" className="items">
          {text.navbar.paths}
        </a>
        <a href="#" className="items">
          {text.navbar.resources}
        </a>
        <a href="#" className="items">
          {text.navbar.about}
        </a>
        <a href="#" className="btn-primary">
          {text.navbar.contribute}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
