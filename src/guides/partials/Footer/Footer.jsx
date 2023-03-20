import React from "react";
import mapIcon from "./../../../assets/icons/map.svg";
import arrowIcon from "./../../../assets/icons/arrow-right.svg";
import style from "./Footer.module.css";

function Footer({ path, nextCourse }) {
  return (
    <div className={"footer " + style.footer}>
      <a className={"btn-primary " + style.btn} href={path}>
        <img src={mapIcon} alt="" className={style.icon} />
        View path
      </a>
      <a className={"btn-secondary " + style.btn} href={nextCourse}>
        <img src={arrowIcon} alt="" className={style.icon} />
        Next guide
      </a>
    </div>
  );
}

export default Footer;
