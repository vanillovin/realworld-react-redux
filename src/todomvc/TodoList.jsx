import React, {useState} from "react";
import "./TodoList.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function TodoList(){
    const [todoList, setTodoList] = useState([
        { id: crypto.randomUUID(), content: "토끼는 전화해요", completed: false },
    ])

    function addTodo(content){
        if(content === '') return;

        const newTodo = {
            id: crypto.randomUUID(),
            content,
            completed: false,
        }
        setTodoList(old => [...old, newTodo])
    }

    function deleteTodo(targetId){
        setTodoList(old => old.filter(todo => todo.id !== targetId))
    }

    function completeTodo(targetId){
        function findAndChange(todo){
            if(todo.id === targetId){
                return {...todo, completed: ! todo.completed }
            }
            
            return todo
        }

        setTodoList(old => old.map(findAndChange))
    }
    
    return (
        <section className="todoapp">
            <div>
                <Header addTodo={addTodo} />
                <Main todoList={todoList} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                <Footer />
            </div>
        </section>
    )
}

export default TodoList;