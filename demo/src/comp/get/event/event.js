import React, { Component } from "react";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }

  update = () => {
    this.setState({ color: "blue" }, () => {
      console.log(this.state.color); 
    });
  }

  render() {
    return (
      <>
        <h1>Event handling</h1>
        <button onClick={this.update}>Change</button>
        <p>changing color:{this.state.color}</p>
      </>
    );
  }
}

export default Event;
