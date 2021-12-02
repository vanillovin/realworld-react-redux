import React from "react";
import useTodoListAtom from "./state";

type CountLabelProps = {
  count: number;
};

function CountLabel({ count }: CountLabelProps) {
  return (
    <>
      <strong>{count}</strong>
      <span> {count === 1 ? "item" : "items"}</span>
      <span> left</span>
    </>
  );
}

type FooterProps = {
  count: number;
  filter: Filter;
  setFilter: (f: Filter) => void;
};

function Footer({ count, filter, setFilter }: FooterProps) {
  const { clearCompleted } = useTodoListAtom();

  const FILTER_LIST: Array<Filter> = ["all", "active", "completed"];

  return (
    <footer className="footer">
      <span className="todo-count">
        {count === 0 ? null : <CountLabel count={count} />}
      </span>
      <ul className="filters">
        {FILTER_LIST.map((name) => (
          <li>
            <a
              href={"#/" + name}
              className={filter === name ? "selected" : undefined}
              onClick={(e) => setFilter(name)}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed" onClick={(e) => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
