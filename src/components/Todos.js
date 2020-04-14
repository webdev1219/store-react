import React, { Component } from "react";

class Todos extends Component {
  state = {
    input: "",
  };

  handleAddTodo = () => {};

  render() {
    const { input } = this.state;
    return (
      <div>
        <h2>Mis tareas</h2>
        <label htmlFor=""></label>
        <input type="text" value={input} onChange={} />
        <button onClick={this.handleAddTodo}>add todo</button>
        <ul>
          <li>todo 1</li>
          <li>todo 2</li>
        </ul>
      </div>
    );
  }
}
export default Todos;
