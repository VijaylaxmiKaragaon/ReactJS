import React, { Component } from "react";

class StudentName extends Component {

  state = {
    name: "Raj"
  };

  updateName = () => {
    this.setState({
      name: "Kumar"
    });
  };

  render() {
    return (
      <div>

        <h2>Name: {this.state.name}</h2>

        <button onClick={this.updateName}>
          Update
        </button>

      </div>
    );
  }
}

export default StudentName;