import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ContentPickerSelect from "./components/ContentPickerSelect";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

module.hot.accept();
