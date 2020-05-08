import React, { Component } from "react";

class EditText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      editClassName: props.editClassName,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <textarea
        name="text"
        type="text"
        placeholder="List Title Here"
        maxLength="115"
        rows="3"
        className={this.state.editClassName}
        value={this.state.text}
        onChange={this.handleChange}
      ></textarea>
    );
  }
}

export default EditText;
