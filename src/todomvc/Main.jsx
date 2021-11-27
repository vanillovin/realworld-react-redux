import React from 'react';

function Main(){
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" checked={false} />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" checked={true} />
                    <label>투두 리스트</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" value="투두 리스트" />
            </li>
            </ul>
        </section>
    )
}

export default Main;