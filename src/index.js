import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/sass/site.scss";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
//because of the github, you need to add the basename and instead of browserRouter add hashRouter
// also I added in the package.json the homepage
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
