import React, { Component } from "react";

class Handling extends Component {
  constructor() {
    super();
    this.state = {
      form: " ",
    };
  }
  render() {
    return (
      <>
        <h1>form with submit button</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            UserName :
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Enter your username"
              onChange={this.handleInput}
            ></input>
          </label>{" "}
          <br></br>
          <label>
            E-mail :
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Enter your mail-id"
              onChange={this.handleInput}
            ></input>
          </label>
          <br></br>
          <label>
            Password :
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Enter your password"
              onChange={this.handleInput}
            ></input>
          </label>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Handling;
