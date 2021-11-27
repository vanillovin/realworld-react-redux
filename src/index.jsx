import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './counter/Counter';
import TodoList from './todomvc/TodoList';
// import reportWebVitals from './reportWebVitals';

//<TodoList />

ReactDOM.render(
    <React.StrictMode>
         <App />
         <Counter />
    </React.StrictMode>,
    document.getElementById('app')
);
