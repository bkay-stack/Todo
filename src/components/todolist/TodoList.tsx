import React from "react";
import "./todolist.style.css";
import checkIcon from "../../assets/images/icon-check.svg";
import deleteIcon from "../../assets/images/icon-cross.svg";
const TodoList = ({ todos }: { todos: string[] }) => {
  return (
    <div className="todo-list-item">
      {todos.map((todo, index) => (
        <>
          <div className="todo-list-items" key={index}>
            {/* <span className="span-btn"> */}
            <img src={checkIcon} alt="" />
            {/* </span> */}
            <p>{todo}</p>
            <div className="delete-icon">
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </>
      ))}

      <>
        {todos.length > 0 && (
          <div className="manager-list-items"> {todos.length} items left</div>
        )}
      </>
    </div>
  );
};

export default TodoList;
