import React, { Component } from "react";
// import Counter from "./components/CounterControlled";
// import Conditional from "./components/Conditional";
// import ConditionalByStatus from "./components/ConditionalByStatus";
// import Form from "./components/Form";
// import Todos from "./components/Todos";
import Form from "./components/Form";

// const STATUS = {
//   LOADING: "LOADING",
//   LOADED: "LOADED",
//   ERROR: "ERROR",
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Todos /> */}
        <Form />
      </div>
    );
  }
}

export default App;
