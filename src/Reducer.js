import React, { useReducer } from "react";

//actions:

const Inc = "inc";
const Dec = "dec";
const Reset = "reset";

//reducer function:

const countReducer = (count, action) => {
  //   console.log("reducer");

  switch (action.type) {
    case "inc": {
      return count + action.by;
    }
    case "dec": {
      if (count > 0) return count - 1;
    }
    case "reset":
      {
        return (count = 0);
      }
      defalut: {
        return count;
      }
  }
};

function Reducer() {
  const [count, dispatch] = useReducer(countReducer, 0);
  console.log(count);

  //   let inc = () => {
  //     dispatch("inc");
  //   };
  //   let dec = () => {
  //     dispatch("dec");
  //   };
  // let reset = () => {
  //   dispatch(Reset);
  // };
  return (
    <>
      <div className="container-sm">
        <h1 className="text-center bg-danger text-white ">
          Count Using Reducer!
        </h1>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            dispatch({ type: Inc, by: 1.5 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: Dec });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: Reset });
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default Reducer;
