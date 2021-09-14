import React, { useReducer } from "react";

const countReducer = (count, action) => {
  //   console.log("reducer");

  switch (action) {
    case "inc": {
      return count + 1;
    }
    case "dec": {
      return count - 1;
    }
    case "reset":
      {
        return 0;
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
  let reset = () => {
    dispatch("reset");
  };
  return (
    <>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          dispatch("inc");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("dec");
        }}
      >
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default Reducer;