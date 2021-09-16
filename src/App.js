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
      <div className="App container-sm">
        <h1>Fucntional Counter</h1>
        <div className="counter text-primary">
          <p>Counter : {count}</p>
          <p>
            <b>Name: </b>
            {name}
          </p>
          <div className="name">
            <button onClick={() => changeName("Muthu")}>Change Name</button>
          </div>
        </div>
        <div className="d-flex m-3">
          <button
            className="btn m-2 btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="btn m-2 btn-primary"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button className="btn btn-primary" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
