import React, { Component } from "react";
import EditText from "./EditText";
import CheckBox from "./CheckBox";

class Body extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col title">
            <EditText
              editClassName="listTitle"
              placeholder="List Title Here"
              maxLength="115"
              rows="3"
            ></EditText>
          </div>
        </div>
        <div className="form-row">
          <div className="col-1 checkboxContainer">
            <CheckBox editClassName="checkbox"></CheckBox>
          </div>
          <div className="col itemContainer">
            <EditText
              editClassName="item"
              placeholder="List Item Here"
              maxLength="50"
              rows="1"
            ></EditText>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
