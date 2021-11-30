import React, {useState} from "react";
import "./TodoList.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { produce } from 'immer';

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function TodoList(){
    const [todoList, setTodoList] = useState([
        { id: crypto.randomUUID(), content: "토끼는 전화해요", completed: false },
    ])

    function addTodo(content){
        if(content === '') return;

        const newTodo = {
            id: crypto.randomUUID(),
            completed: false,
            content,
        }
        setTodoList(old => [...old, newTodo])
    }

    function changeTodo(targetId, newContent){
        setTodoList(produce(old => {
            const target = old.find(todo => todo.id === targetId);

            target.content = newContent;
        }))
    }
    
    function completeTodo(targetId){
        setTodoList(produce(old => {
            const target = old.find(todo => todo.id === targetId);

            target.completed = ! target.completed;
        }))
    }

    function completeAll(){
        if(todoList.every(todo => todo.completed)){
            setTodoList(old => old.map(todo => ({...todo, completed: false})))
        } else {
            setTodoList(old => old.map(todo => ({...todo, completed: true})))
        }
    }


    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

    function clearCompleted(){
        setTodoList(old => old.filter(todo => todo.completed === false))
    }


    function deleteTodo(targetId){
        setTodoList(old => old.filter(todo => todo.id !== targetId))
    }

    const itemsLeftCount = todoList.filter(todo => todo.completed === false).length;

    const [filter, setFilter] = useState('all');

    function getFilteredTodoList(filter){
        if(filter === "active"){
            return todoList.filter(todo => !todo.completed);
        }
        if(filter === "completed"){
            return todoList.filter(todo => todo.completed);
        }
        return todoList;
    }

    const filteredTodoList = getFilteredTodoList(filter);

    return (
        <section className="todoapp">
            <div>
                <Header addTodo={addTodo}/>
                <Main todoList={filteredTodoList} deleteTodo={deleteTodo} completeTodo={completeTodo} changeTodo={changeTodo} completeAll={completeAll}/>
                <Footer count={itemsLeftCount} filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />
            </div>
        </section>
    )
}

export default TodoList;