import React, { useState } from 'react';
import useTodoListAtom from './state';

function TodoItem ({ id, content, completed }){
    const [editing, setEditing] = useState(false);

    function handleDoubleClick(e) {
        setEditing(true);
    }

    function handleBlur(e) {
        setEditing(false);
    }

    const { deleteTodo, completeTodo, changeTodo } = useTodoListAtom();
    
    function handleDelete(e) {
        deleteTodo(id);
    }

    function handleComplete(e){
        completeTodo(id);
    }

    const [todoInput, setTodoInput] = useState(content);

    function handleChange(e){
        setTodoInput(e.target.value);
    }
    
    function handleKeyUp(e){
        if(e.key === "Enter"){
            changeTodo(id, todoInput);
            setEditing(old => false);
        }
    }
    
    return (
        <li className={(completed ? 'completed' : '') + ' ' + (editing ? 'editing' : '')}>
            <div className="view" onDoubleClick={handleDoubleClick} >
                <input className="toggle" type="checkbox" checked={completed} onClick={handleComplete} />
                <label>{content}</label>
                <button className="destroy" onClick={handleDelete}></button>
            </div>
            <input className="edit" value={todoInput} onKeyUp={handleKeyUp} onChange={handleChange} onBlur={handleBlur} />
        </li>
    )
}

function Main({ todoList }){
    const { completeAll } = useTodoListAtom();

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"
              checked={todoList.every(todo => todo.completed)}
              onClick={(e) => completeAll()} />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {todoList.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </section>
    )
}

export default Main;