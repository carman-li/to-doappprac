import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";

ReactDOM.render(
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <Header />
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
