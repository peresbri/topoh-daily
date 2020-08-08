import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SubscribeForm } from "./SubscribeForm";

interface IProps {
  name?: string;
}

function Welcome(props: IProps) {
  return <h1>Welcome {props.name || "Brian"}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SubscribeForm />
      </header>
    </div>
  );
}

export default App;
