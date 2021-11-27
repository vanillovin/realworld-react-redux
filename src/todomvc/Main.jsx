import React from 'react';

function TodoItem ({ content, completed }){
    return (
        <li className={completed ? "completed" : null}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={completed} />
                <label>{content}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value={content} />
        </li>
    )
}

function Main(){
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                <TodoItem content="토끼는 그 분에게 전화를 해요" completed={true}/>
                <TodoItem content="자몽은 잠을 또 자야해요" completed={false}/>
            </ul>
        </section>
    )
}

export default Main;