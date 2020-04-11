import React, { Component } from "react";
import Header from "./Header";

const datos = [
  "escuchar al profe",
  "no mirar el movil en clase",
  "aprender b o v",
  "aprender react",
];

class Counter extends Component {
  state = {
    counter: 0,
    todos: [],
  };

  handleClickIncrement = (e) => {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log("click increment", e);
  };

  handleClickDecrease = () => {
    // const test = this.state.counter--;
    // console.log("click decrease", test);
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  handleClickAddTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        datos[this.getRandomIntInclusive(0, datos.length - 1)],
      ],
    });
  };

  render() {
    console.log("render Counter");
    return (
      <div>
        <h2>Counter</h2>
        <Header />
        <p>{this.state.counter}</p>
        <h2>Todo</h2>
        <ul>
          {this.state.todos.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <button onClick={this.handleClickIncrement}>increment</button>
        <button onClick={this.handleClickDecrease}>decrease</button>
        <button onClick={this.handleClickAddTodo}>add Todo</button>
      </div>
    );
  }
}

export default Counter;
