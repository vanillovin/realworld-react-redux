import React, { useState } from "react";
import useTodoListAtom from "./state";

function TodoItem({ id, content, completed }: Todo) {
  const [editing, setEditing] = useState(false);

  function handleDoubleClick(e: React.MouseEvent) {
    setEditing(true);
  }

  function handleBlur(e: React.FocusEvent) {
    setEditing(false);
  }

  const { deleteTodo, completeTodo, changeTodo } = useTodoListAtom();

  function handleDelete(e: React.MouseEvent) {
    deleteTodo(id);
  }

  function handleComplete(e: React.MouseEvent) {
    completeTodo(id);
  }

  const [todoInput, setTodoInput] = useState(content);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  function handleKeyUp(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      changeTodo(id, todoInput);
      setEditing((old) => false);
    }
  }

  return (
    <li
      className={
        (completed ? "completed" : "") + " " + (editing ? "editing" : "")
      }
    >
      <div className="view" onDoubleClick={handleDoubleClick}>
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onClick={handleComplete}
        />
        <label>{content}</label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      <input
        className="edit"
        value={todoInput}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </li>
  );
}

type MainProps = {
  todoList: Array<Todo>;
};

function Main({ todoList }: MainProps) {
  const { completeAll } = useTodoListAtom();

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={todoList.every((todo) => todo.completed)}
        onClick={(e) => completeAll()}
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
}

export default Main;
