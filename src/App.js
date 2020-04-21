import React, { Component } from "react";
import Counter from "./components/CounterControlled";
// import Conditional from "./components/Conditional";
// import ConditionalByStatus from "./components/ConditionalByStatus";
// import Form from "./components/Form";
import Todos from "./components/Todos";
// import Life from "./components/Life";
import Form from "./components/Form";
import { Route, Link, Switch } from "react-router-dom";

// const STATUS = {
//   LOADING: "LOADING",
//   LOADED: "LOADED",
//   ERROR: "ERROR",
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/a">Form</Link> | <Link to="/a/b">Counter</Link> |
        <Switch>
          <Route exact path="/a">
            <Form />
          </Route>
          <Route exact path="/a/b">
            <Counter />
          </Route>
          <Route path="/a/b/c">
            <Todos />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
