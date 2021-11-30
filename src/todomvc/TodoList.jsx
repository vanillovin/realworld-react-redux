import React, {useState, useEffect} from "react";
import "./TodoList.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import useTodoListAtom from './state';

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function useLocalStorage(key, state, setState){
    useEffect(()=>{
      const saved = localStorage.getItem(key);
      if(saved){
        setState(JSON.parse(saved));
      }
    }, [])
  
    useEffect(()=>{
      localStorage.setItem(key, JSON.stringify(state))
    }, [state])
}

function TodoList(){
    const { todoList, loadSaved } = useTodoListAtom();
    useLocalStorage("TODO-LIST", todoList, loadSaved);
    
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
                <Header />
                <Main todoList={filteredTodoList}/>
                <Footer count={itemsLeftCount} filter={filter} setFilter={setFilter} />
            </div>
        </section>
    )
}

export default TodoList;