import React, { Component } from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Checkbox from "@material-ui/core/Checkbox";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "./MyTheme";

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      editClassName: props.editClassName,
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
      <MuiThemeProvider theme={MyTheme}>
        <Checkbox
          className="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
          color="primary"
          icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 40 }} />}
          checkedIcon={<CheckBoxIcon style={{ fontSize: 40 }} />}
        ></Checkbox>
      </MuiThemeProvider>
    );
  }
}

export default CheckBox;
