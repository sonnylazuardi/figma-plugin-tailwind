import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component {
  textbox: HTMLInputElement;

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = "5";
    this.textbox = element;
  };

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10);
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    );
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  render() {
    return (
      <div className="bg-white">
        <img src={require("./logo.svg")} />
        <div>Rectangle Creator</div>
        <div>
          Count: <input ref={this.countRef} />
        </div>
        <button className="primary" onClick={this.onCreate}>
          Create
        </button>
        <button onClick={this.onCancel}>Cancel</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
