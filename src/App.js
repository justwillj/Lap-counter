import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h1>Number of laps:</h1>
      <button>-</button>
      <button>+</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
