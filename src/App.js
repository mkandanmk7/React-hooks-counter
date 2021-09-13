import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const inc = () => {
    // console.log("incremented");
    setCount(count + 1);
  };

  const dec = () => {
    // console.log("Decremented");
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    // console.log("reseted");
    setCount(0);
  };

  return (
    <>
      <div className="App">
        <h1>Fucntional Counter</h1>
        <div className="counter">
          <p>Counter : {count}</p>
        </div>
        <div className="btns">
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
