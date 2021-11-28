import React from 'react';

function CountLabel({count}){
    return (
        <>
            <strong>{count}</strong>
            <span> {count === 1 ? 'item' : 'items'}</span>
            <span> left</span>
        </>
    )
}

function Footer ({count}){
    return (
        <footer className="footer">
            <span className="todo-count">
                {count === 0
                  ? null
                  : <CountLabel count={count} />}
            </span>
            <ul className="filters">
            <li>
                <a href="#/" className="selected">All</a>
            </li>
            <span> </span>
            <li>
                <a href="#/active" className="">Active</a>
            </li>
            <span> </span>
            <li>
                <a href="#/completed" className="">Completed</a>
            </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;