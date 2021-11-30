import React, {useState} from "react";
import "./TodoList.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import useTodoListAtom from './state';

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function TodoList(){
    const { todoList, addTodo, changeTodo, completeTodo, completeAll, deleteTodo, clearCompleted } = useTodoListAtom();
    
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