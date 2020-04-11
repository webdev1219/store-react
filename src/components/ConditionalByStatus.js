import React, { Component } from "react";

// class ConditionalByStatus extends Component {
//   render() {
//     const { status } = this.props;
//     return (
//       <div>
//         {status === "LOADING" && <div>LOADING</div>}
//         {status === "LOADED" && <div>LOADED</div>}
//         {status === "ERROR" && <div>ERROR</div>}
//       </div>
//     );
//   }
// }

class ConditionalByStatus extends Component {
  render() {
    const { status } = this.props;
    let result = undefined;
    switch (status) {
      case "LOADING":
        result = <div>LOADING</div>;
        break;
      case "LOADED":
        result = <div>LOADED</div>;
        break;
      case "ERROR":
        result = <div>ERROR</div>;
        break;
      default:
        break;
    }
    return result;
  }
}

export default ConditionalByStatus;
