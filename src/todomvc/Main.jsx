import React, { useState } from 'react';

function TodoItem ({ id, content, completed, deleteTodo }){
    function handleDelete(e) {
        deleteTodo(id);
    }
    
    return (
        <li className={completed ? "completed" : null}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={completed} />
                <label>{content}</label>
                <button className="destroy" onClick={handleDelete}></button>
            </div>
            <input className="edit" value={content} />
        </li>
    )
}

function Main({ todoList, deleteTodo }){
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {todoList.map(todo => <TodoItem {...todo} deleteTodo={deleteTodo} />)}
            </ul>
        </section>
    )
}

export default Main;