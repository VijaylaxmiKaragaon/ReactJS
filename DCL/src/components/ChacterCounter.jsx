import React, { Component } from "react";

class CharacterCounter extends Component {

  state = {
    text: "",
    count: 0
  };

  countCharacters = (event) => {

    let value = event.target.value;

    this.setState({
      text: value,
      count: value.length
    });

  };

  render() {
    return (
      <div>

        <input
          type="text"
          placeholder="Enter text"
          onChange={this.countCharacters}
        />

        <h2>
          {this.state.count} Characters
        </h2>

      </div>
    );
  }
}

export default CharacterCounter;