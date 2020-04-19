import React, { Component } from "react";
// import Counter from "./components/CounterControlled";
// import Conditional from "./components/Conditional";
// import ConditionalByStatus from "./components/ConditionalByStatus";
// import Form from "./components/Form";
// import Todos from "./components/Todos";
import Life from "./components/Life";
// import Form from "./components/Form";

// const STATUS = {
//   LOADING: "LOADING",
//   LOADED: "LOADED",
//   ERROR: "ERROR",
// };

class App extends Component {
  state = {
    show: true,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        {show && <Life />}
        <button onClick={this.handleShow}>show/hide</button>
        {/* <Todos /> */}
        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
