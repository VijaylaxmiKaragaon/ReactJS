import React, { Component } from "react";

class InputField extends Component {

  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>

        <input
          type="text"
          placeholder="Enter text"
          onChange={this.handleChange}
        />

        <h2>{this.state.text}</h2>

      </div>
    );
  }
}

export default InputField;