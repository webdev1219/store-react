import React, { Component } from "react";
import Counter from "./Counter";

class Conditional extends Component {
  state = {
    isVisible: true,
    show: true,
  };

  handleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      show: !this.state.show,
    });
  };

  metodo() {
    return <div>metodo()</div>;
  }

  render() {
    const { isVisible, show } = this.state;
    console.log("render Conditional");
    return (
      <div>
        {isVisible && (
          <div>
            <Counter />
          </div>
        )}
        {this.metodo()}
        {show && <div>algo</div>}
        {!show && <div>algo negado</div>}
        {/* mismo comportamiento */}
        {show ? <div>algo</div> : <div>algo negado</div>}
        <button onClick={this.handleVisibility}>show/hide</button>
      </div>
    );
  }
}

export default Conditional;
