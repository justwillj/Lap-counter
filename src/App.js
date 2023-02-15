//Link that helped me with this
//https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count === 0) {
      setCount(0);
    }
  };

  const resetCount = () => setCount(0);

  return (
    <div className="main">
      <h1>Number of laps: {count} </h1>
      <button onClick={() => setCount(decrease)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(resetCount)}>Reset</button>
    </div>
  );
}

export default App;
