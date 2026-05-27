import React, { Component } from "react";

class ResetCounter extends Component {
  constructor() {
    super();

    this.state = {
      count: 9
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div>
        <h2>Count = {this.state.count}</h2>

        <button onClick={this.increment}>
          Increment
        </button>

        <button onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default ResetCounter;