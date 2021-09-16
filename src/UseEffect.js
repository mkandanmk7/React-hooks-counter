import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);

  const [name, changeName] = useState("Mythu");

  useEffect(() => {
    console.log("rendered");
  }, []);

  return (
    <div className="container">
      <h1 className="text-center bg-info">Use Effect hooks</h1>
      <div className="container-sm">
        <div className="counter text-danger">
          <p>Counter : {count}</p>
          <p>
            <b>Name: </b>
            {name}
          </p>
          <div className="name">
            <button
              className="btn btn-dark"
              onClick={() => changeName("Muthu")}
            >
              Change Name
            </button>
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
          <button className="btn btn-primary m-2" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
