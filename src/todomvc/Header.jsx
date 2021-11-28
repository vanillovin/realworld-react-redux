import React, {useState} from 'react';

// https://www.notion.so/3-TodoMVC-8993956da3934aa89779e8bfe810509d#aac477b36e0d4d95a957f29de0708c93

export default function Header({ addTodo }){
    const [todoInput, setTodoInput] = useState('');

    function handleChange(e){
        setTodoInput(e.target.value);
    }

    function handleKeyUp(e){
        if(e.key === "Enter"){
            addTodo(todoInput);
            setTodoInput('');
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?"
                   value={todoInput}
                   onChange={handleChange}
                   onKeyUp={handleKeyUp} />
        </header>
    )
}