import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Counter from "./counter/Counter";
import TodoList from "./todomvc/TodoList";
// import reportWebVitals from './reportWebVitals';

// <App /> <Counter />

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById("app")
);
