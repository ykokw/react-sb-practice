import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TextLink from "./components/TextLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TextLink href="https://reactjs.org" bold>
          Learn React
        </TextLink>
      </header>
    </div>
  );
}

export default App;
