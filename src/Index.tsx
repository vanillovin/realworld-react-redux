import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Counter from "./counter/Counter";
// import TodoList from "./todomvc/TodoList";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./realworld/pages/Main";
import ArticleDetail from "./realworld/pages/ArticleDetail";
// import reportWebVitals from './reportWebVitals';

// <App /> <Counter />

function Realworld() {
  return (
    <Router>
      <Routes>
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Realworld />
  </React.StrictMode>,
  document.getElementById("app")
);
