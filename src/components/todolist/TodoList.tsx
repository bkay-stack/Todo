import React from "react";
import "./todolist.style.css";
const TodoList = ({ todos }: { todos: string[] }) => {
  return (
    <div className="todo-list">
      <div className="text">
        <h1>TodoList</h1>
        <p>This is the todo list</p>
      </div>
    </div>
  );
};

export default TodoList;
