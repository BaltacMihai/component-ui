import React from "react";
import { paths } from "../assets/data/paths-page";

function PathCard() {
  return (
    <div className="path-card">
      <div className="details">
        <div className="identity">
          <div className="path-logo">{paths.main.icon}</div>
          <div className="titles">
            <h2 className="title">{paths.main.title}</h2>
            <p className="number-guides">{paths.main.guides}</p>
          </div>
        </div>

        <p className="btn-primary">{paths.cta}</p>
      </div>
      <p className="description">{paths.main.description}</p>
    </div>
  );
}

export default PathCard;
