import React from "react";
import "./TodoList.css";

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function TodoList(){
    return (
        <section className="todoapp">
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="What needs to be done?" value="" />
                </header>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                    <li className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={true} />
                            <label>투두 리스트</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" value="투두 리스트" />
                    </li>
                    </ul>
                </section>
                <footer className="footer">
                    <span className="todo-count">
                        <strong>2</strong>
                        <span> items</span>
                        <span> left</span>
                    </span>
                    <ul className="filters">
                    <li>
                        <a href="#/" className="selected">All</a>
                    </li>
                    <span> </span>
                    <li>
                        <a href="#/active" className="">Active</a>
                    </li>
                    <span> </span>
                    <li>
                        <a href="#/completed" className="">Completed</a>
                    </li>
                    </ul>
                    <button className="clear-completed">Clear completed</button>
                </footer>
            </div>
        </section>
    )
}

export default TodoList;