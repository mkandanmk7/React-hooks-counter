import React, { useState } from "react";
import Reducer from "./Reducer";

function App() {
  const [count, setCount] = useState(0);

  const [name, changeName] = useState("Mythu");

  //diff functions for counters:

  // const inc = () => {
  //   // console.log("incremented");
  //   setCount(count + 1);
  // };

  // const dec = () => {
  //   // console.log("Decremented");
  //   if (count > 0) setCount(count - 1);;
  // };

  // const reset = () => {
  //   // console.log("reseted");
  //   setCount(0);
  // };

  return (
    <>
      <Reducer />
      <div className="App">
        <h1>Fucntional Counter</h1>
        <div className="counter">
          <p>Counter : {count}</p>
          <p>
            <b>Name: </b>
            {name}
          </p>
          <div className="name">
            <button onClick={() => changeName("Muthu")}>Change Name</button>
          </div>
        </div>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
