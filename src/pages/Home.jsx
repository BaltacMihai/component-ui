import React from "react";
import { text } from "../assets/text/text";
import illustration from "../assets/images/homepage_illustrations.svg";
function Home() {
  return (
    <div className="page page_home">
      <section>
        <div className="wrapper">
          <h1 className="title">{text.page.home.title}</h1>
          <h2 className="subtitle">{text.page.home.subtitle}</h2>
          <a href="#" className="cta btn-primary">
            {text.page.home.cta}
          </a>
        </div>

        <img
          src={illustration}
          alt="Homepage illustration"
          className="illustration"
        />
      </section>
    </div>
  );
}

export default Home;
