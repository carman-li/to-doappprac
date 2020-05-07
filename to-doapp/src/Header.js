import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img id="logo" src="logo.jpg" alt="logo"></img>
            <h1>Welcome to goose. The world's simplest to-do application.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
