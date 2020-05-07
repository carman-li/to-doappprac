import React, { Component } from "react";

class EditText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      editClassName: props.editClassName,
      width: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    let newWidth = this.state.text.length;

    this.setState({ width: newWidth });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <input
        name="text"
        type="text"
        placeholder="List Title Here"
        maxLength="100"
        size={this.state.width}
        className={this.state.editClassName}
        value={this.state.text}
        onChange={this.handleChange}
      ></input>
    );
  }
}

export default EditText;
