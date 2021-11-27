import React from "react";
import "./TodoList.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// https://github.com/twinstae/realworld-react-redux/commits/main/todoMVC-react

function TodoList(){
    return (
        <section className="todoapp">
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </section>
    )
}

export default TodoList;