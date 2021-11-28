import React, { useState } from 'react';

function TodoItem ({ id, content, completed, deleteTodo, completeTodo }){
    function handleDelete(e) {
        deleteTodo(id);
    }

    function handleComplete(e){
        completeTodo(id);
    }
    
    return (
        <li className={completed ? "completed" : null}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={completed} onClick={handleComplete} />
                <label>{content}</label>
                <button className="destroy" onClick={handleDelete}></button>
            </div>
            <input className="edit" value={content} />
        </li>
    )
}

function Main({ todoList, deleteTodo, completeTodo }){
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {todoList.map(todo => <TodoItem {...todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)}
            </ul>
        </section>
    )
}

export default Main;