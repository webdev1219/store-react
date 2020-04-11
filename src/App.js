import React from "react";
import Conditional from "./components/Conditional";
import ConditionalByStatus from "./components/ConditionalByStatus";

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

function App() {
  return (
    <div className="App">
      <Conditional />
      <ConditionalByStatus status={STATUS.LOADING} />
    </div>
  );
}

export default App;
