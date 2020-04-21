import React, { Component } from "react";

class Input extends Component {
  state = {
    input: "",
  };

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleClick = (e) => {
    const { click } = this.props;
    click(this.state.input);
    this.setState(
      {
        input: "",
      },
      () => {
        console.log("input", this.state.input);
      }
    );
  };

  render() {
    const { input } = this.state;

    // <button onClick={this.handleAddTodo}>add todo</button>
    return (
      <div>
        <label htmlFor=""></label>
        <input type="text" value={input} onChange={this.handleInput} />
        <button onClick={this.handleClick}>add todo</button>
      </div>
    );
  }
}

class Todos extends Component {
  state = {
    todos: ["comprar leche"],
  };

  handleAddTodo = (inputValue) => {
    console.log("handleTodo", inputValue);
    const { todos } = this.state;
    this.setState({
      todos: [...todos, inputValue],
    });
  };

  handleDelete = (e) => {
    // console.log(e.target);
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Mis tareas</h2>
        <Input click={this.handleAddTodo} />
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <li>{todo}</li>
                <button onClick={this.handleDelete}>delete</button>
              </div>
            );
          })}
          {/* {todos.map((todo, index) => {
            return (
              <Todo key={index} algo={} />
            );
          })} */}
        </ul>
      </div>
    );
  }
}
export default Todos;
