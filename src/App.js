//Link that helped me with this
//https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h1>Number of laps: {count} </h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
