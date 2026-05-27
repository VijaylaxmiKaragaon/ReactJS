import React, { Component } from "react";

class EvenOdd extends Component {

  state = {
    number: "",
    result: ""
  };

  checkNumber = (event) => {

    let value = event.target.value;

    this.setState({
      number: value,
      result:
        value % 2 === 0
          ? "Even"
          : "Odd"
    });

  };

  render() {
    return (
      <div>

        <input
          type="number"
          placeholder="Enter number"
          onChange={this.checkNumber}
        />

        <h2>{this.state.result}</h2>

      </div>
    );
  }
}

export default EvenOdd;