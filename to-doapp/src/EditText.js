import React, { Component } from "react";

class EditText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      editClassName: props.editClassName,
      placeholder: props.placeholder,
      maxLength: props.maxLength,
      rows: props.rows,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="textAreaContainer">
        <textarea
          name="text"
          type="text"
          align="bottom"
          placeholder={this.state.placeholder}
          maxLength={this.state.maxLength}
          rows={this.state.rows}
          className={this.state.editClassName}
          value={this.state.text}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default EditText;
