import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Counter from "./counter/Counter";
// import TodoList from "./todomvc/TodoList";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./realworld/pages/Main";
import ArticleDetail from "./realworld/pages/ArticleDetail";
import { QueryClient, QueryClientProvider } from "react-query";
// import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Realworld />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
