import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    if (this.state.checked === false) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  };

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleChange}
          className="checkbox"
        ></Checkbox>
      </div>
    );
  }
}

export default CheckBox;
