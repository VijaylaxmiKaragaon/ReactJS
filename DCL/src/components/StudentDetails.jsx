import React, { Component } from "react";

class StudentDetails extends Component {

  state = {
    name: "Vijaylaxmi Karagaon",
    age: 20,
    course: "React"
  };

  updateAge = () => {
    this.setState({
      age: 22
    });
  };

  render() {
    return (
      <div>

        <h2>Name: {this.state.name}</h2>

        <h2>Age: {this.state.age}</h2>

        <h2>Course: {this.state.course}</h2>

        <button onClick={this.updateAge}>
          Update Age
        </button>

      </div>
    );
  }
}

export default StudentDetails;