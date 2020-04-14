import React, { Component } from "react";

class Form extends Component {
  state = {
    password: "input",
    name: "fasd",
  };

  handleInput = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, password } = this.state;
    return (
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInput}
        />
        <label htmlFor="name">password</label>
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default Form;
