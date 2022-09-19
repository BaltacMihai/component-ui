import React, { useState } from "react";
import { Link } from "react-router-dom";
import { text } from "../assets/text/text";
import logo from "./../assets/images/icon.svg";
import hamburgerMenu from "./../assets/icons/hamburger.svg";
import closeMenu from "./../assets/icons/close.svg";
import { DONATION_LINK } from "../assets/data/donation";

function Navbar() {
  const [openMenu, setOpenMenu] = useState("false");

  if (openMenu)
    return (
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="logo_image" />
          <p className="logo_title">{text.navbar.logoTitle}</p>
        </Link>
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
          <a href={DONATION_LINK} className="items btn-primary">
            {text.navbar.contribute}
          </a>

          <img
            src={hamburgerMenu}
            className="menu"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          ></img>
        </div>
      </div>
    );
  else
    return (
      <div className="navbar navbar_open">
        <div className="wrapper">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo_image" />
            <p className="logo_title">{text.navbar.logoTitle}</p>
          </Link>
          <img
            src={closeMenu}
            className="menu"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          ></img>
        </div>
        <div className="menuItems">
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
          <a href={DONATION_LINK} className="items">
            {text.navbar.contribute}
          </a>
        </div>
      </div>
    );
}

export default Navbar;
