import React from "react";
import { Link } from "react-router-dom";
import { text } from "../assets/text/text";

import underConstructionIMG from "./../assets/images/underConstruction.svg";
function NotFound() {
  return (
    <div className="page page_pageNotFound">
      <div className="wrapper">
        <h1 className="title">{text.page.notFound.title}</h1>
        <div className="options">
          <a href="#" className="btn-secondaty">
            {text.page.notFound.contribute}
          </a>
          <Link to="/" className="btn-primary">
            {text.page.notFound.homepage}
          </Link>
        </div>
      </div>
      <img src={underConstructionIMG} alt="underConstructionIMG" />
    </div>
  );
}

export default NotFound;
