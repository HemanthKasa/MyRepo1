import React from "react";
import ReactDOM from "react-dom";

import TrafficLight from "./TrafficLight";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
