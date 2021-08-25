import * as React from "react";
import * as ReactDOM from "react-dom";
import { apiHandler } from "./apiHandler";
import "./ui.css";

let textbox: HTMLInputElement;

const App = () => {
  const countRef = (element: HTMLInputElement) => {
    if (element) element.value = "5";
    textbox = element;
  };

  const onCreate = () => {
    const count = parseInt(textbox.value, 10);

    apiHandler.createRectangles(count);
  };

  const onCancel = () => {};

  return (
    <div className="bg-white">
      <img src={require("./logo.svg")} />
      <div>Rectangle Creator</div>
      <div>
        Count: <input ref={countRef} />
      </div>
      <button className="primary" onClick={onCreate}>
        Create
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
