import React, { Component } from "react";

export default class Life extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    counter: 0,
  };

  handleState = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleStop = () => {
    clearInterval(this.intervalId);
  };

  handleStart = () => {
    this.setCounter();
  };

  setCounter = () => {
    this.intervalId = setInterval(() => {
      this.handleState();
    }, 1000);
  };

  componentDidMount() {
    console.log("component Did Mount");
    this.setCounter();
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.intervalId);
  }

  render() {
    const { counter } = this.state;
    console.log("render");
    return (
      <div>
        Life
        {counter}
        <button onClick={this.handleState}>setState</button>
        <button onClick={this.handleStop}>stop</button>
        <button onClick={this.handleStart}>start</button>
      </div>
    );
  }
}
