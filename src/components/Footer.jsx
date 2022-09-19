import React from "react";
import { text } from "../assets/text/text";
import logo from "./../assets/images/icon.svg";

function Footer() {
  const CURRENT_YEAR = new Date();
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="logo">
          <div className="logo_item">
            <img src={logo} alt="logo" className="logo_image" />
            <p className="logo_title">{text.footer.logoTitle}</p>
          </div>
          <p>{text.footer.logoDescription}</p>
        </div>
        <div className="navigation">
          <a href="#" className="items">
            {text.footer.about}
          </a>
          <a href="#" className="items">
            {text.footer.faq}
          </a>
          <a href="#" className="items">
            {text.footer.behingScene}
          </a>
          <a href="#" className="items">
            {text.footer.termsUse}
          </a>
          <a href="#" className="items">
            {text.footer.contribute}
          </a>
        </div>
      </div>
      <p className="copyright">
        Copyright &copy; {CURRENT_YEAR.getFullYear()} ComponentUI. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
