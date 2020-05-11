import React, { Component } from "react";
import EditText from "./EditText";
import CheckBox from "./CheckBox";

class Body extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col title">
            <EditText editClassName="listTitle"></EditText>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CheckBox editClassName="checkbox"></CheckBox>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
