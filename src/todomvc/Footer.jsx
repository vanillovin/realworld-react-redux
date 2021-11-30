import React from 'react';
import useTodoListAtom from './state';

function CountLabel({count}){
    return (
        <>
            <strong>{count}</strong>
            <span> {count === 1 ? 'item' : 'items'}</span>
            <span> left</span>
        </>
    )
}

function Footer ({count, filter, setFilter}){
    const { clearCompleted } = useTodoListAtom();

    return (
        <footer className="footer">
            <span className="todo-count">
                {count === 0
                  ? null
                  : <CountLabel count={count} />}
            </span>
            <ul className="filters">
                {['all', 'active', 'completed'].map((name) => (
                        <li>
                            <a href={"#/" + name} className={filter === name ? 'selected' : null}
                                onClick={(e) => setFilter(name)}>
                                {name}
                            </a>
                        </li>
                    ))}
            </ul>
            <button className="clear-completed" onClick={(e) => clearCompleted()}>Clear completed</button>
        </footer>
    )
}

export default Footer;