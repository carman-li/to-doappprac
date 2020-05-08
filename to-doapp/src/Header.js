import React, { Component } from "react";
import logo from "./logo.jpg";

class Header extends Component {
  render() {
    return (
      <div>
        <img id="logo" src={logo} alt="logo"></img>
        <h1>Welcome to goose. The simplest to-do application.</h1>
      </div>
    );
  }
}

export default Header;
