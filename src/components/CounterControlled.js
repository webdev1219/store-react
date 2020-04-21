import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.value || 0,
    };
  }

  // We are controlling if we have props some props in order to know if is controlled or not
  isControlled() {
    return this.props.value != null;
  }

  increase = () => {
    // Depending on the function isControlled() we take the value from props or state.
    if (!this.isControlled()) {
      this.setState({ counter: this.state.counter + 1 });
    } else {
      // we have to trigger the callback prop.
      this.props.onChangeIncrease();
    }
  };

  decrease = () => {
    // Depending on the function isControlled() we take the value from props or state.
    if (!this.isControlled()) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      // we have to trigger the callback prop.
      this.props.onChangeDecrease();
    }
  };

  render() {
    console.log("render");
    return (
      <div>
        {!this.isControlled() ? this.state.counter : this.props.value}
        <button onClick={this.increase}>increase</button>
        <button onClick={this.decrease}>decrease</button>
      </div>
    );
  }
}

export default Counter;
