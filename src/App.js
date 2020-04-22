import React, { Component } from "react";
import Counter from "./components/CounterControlled";
// import Conditional from "./components/Conditional";
// import ConditionalByStatus from "./components/ConditionalByStatus";
// import Form from "./components/Form";
import Todos from "./components/Todos";
// import Life from "./components/Life";
import Form from "./components/Form";
import { Route, Link, Switch, withRouter } from "react-router-dom";

// const STATUS = {
//   LOADING: "LOADING",
//   LOADED: "LOADED",
//   ERROR: "ERROR",
// };

const TodosWithRouter = withRouter(Todos);

class App extends Component {
  renderTodo = (props) => {
    return <Todos {...props} />;
  };

  render() {
    return (
      <div className="App">
        <Link to="/children/algo">children</Link> |
        <Link to="/render/algo">Render</Link> |
        <Link to="/component/algo">Component</Link> |
        <Link to="/children-not-prop/algo">Children not prop</Link>
        <Switch>
          <Route
            exact
            path="/children/:id"
            children={(props) => <Todos {...props} />}
          />
          <Route exact path="/render/:id" render={this.renderTodo} />
          <Route path="/component/:id" component={Todos} />
          <Route path="/children-not-prop/:id">
            <TodosWithRouter />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
