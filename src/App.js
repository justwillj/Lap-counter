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
    /*CODE REVIEW: this is redundant. */
    if (count === 0) {
      setCount(0);
    }
  };

  const resetCount = () => setCount(0);

  return (
    <div className="main">
      <h1>Number of laps: {count} </h1>
        {/* CODE REVIEW: since you are using setCount in the decrease function, you don't need to 
        call it here. */}
      <button onClick={decrease}>-</button>
        {/* CODE REVIEW: It is not best practice to mutate state in the JSX. Instead we want to 
        have named callback functions like you do with your decrement function */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
