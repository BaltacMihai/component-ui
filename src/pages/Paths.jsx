import React from "react";
import { text } from "../assets/text/text";
import PathCard from "../components/PathCard";

function Paths() {
  return (
    <div className="page page_paths">
      <div className="wrapper">
        <h1 className="title">{text.page.paths.title}</h1>

        <PathCard />
      </div>
    </div>
  );
}

export default Paths;
