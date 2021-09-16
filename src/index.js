import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

function Unmount() {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <div className="container">
        <button className="btn  m-2 btn-danger" onClick={() => setShow(!show)}>
          Show / Hide component (Unmount)
        </button>
        {show ? <App /> : <h1>ComponentWillUnmouted</h1>}
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Unmount />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
