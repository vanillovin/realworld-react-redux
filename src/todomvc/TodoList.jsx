import React, {useState} from "react";
import "./TodoList.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function TodoList(){
    const [todoList, setTodoList] = useState([
        { content: "토끼는 깡총깡총", completed: true },
        { content: "토끼는 전화해요", completed: false },
        { content: "자몽은 잠을 또 자야해요", completed: false },
    ])

    function addTodo(content){
        if(content === '') return;

        const newTodo = {
            content,
            completed: false,
        }
        setTodoList(old => [...old, newTodo])
    }
    
    return (
        <section className="todoapp">
            <div>
                <Header addTodo={addTodo} />
                <Main todoList={todoList} />
                <Footer />
            </div>
        </section>
    )
}

export default TodoList;