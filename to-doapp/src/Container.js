import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

class Container extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Header></Header>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Body></Body>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
