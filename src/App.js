import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "./js/store";
const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
