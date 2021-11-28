import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './counter/Counter';
import TodoList from './todomvc/TodoList';
// import reportWebVitals from './reportWebVitals';

// <App /> <Counter /><TodoList />

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
);
