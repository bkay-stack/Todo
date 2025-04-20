import React from "react";
import "./todolist.style.css";
import checkIcon from "../../assets/images/icon-check.svg";
import deleteIcon from "../../assets/images/icon-cross.svg";
const TodoList = ({ todos }: { todos: string[] }) => {
  return (
    <div className="todo-wrapper">
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
            <div className="manager-list-items-mobile">
              <p>{todos.length} items left</p>

              <div className="clear-completed">
                <p>Clear completed</p>
              </div>
            </div>
          )}

          {todos.length > 0 && (
            <div className="manager-list-items-desktop">
              <p>{todos.length} items left</p>
              <div className="filter-desktop">
                <div className="filter-items">
                  <p>All</p>
                </div>
                <div className="filter-items">
                  <p>Active</p>
                </div>
                <div className="filter-items">
                  <p>Completed</p>
                </div>
              </div>
              <p>Clear completed</p>
            </div>
          )}
        </>
      </div>
      <>
        {todos.length > 0 && (
          <div className="filter-mobile">
            <div className="filter-items">
              <p>All</p>
            </div>
            <div className="filter-items">
              <p>Active</p>
            </div>
            <div className="filter-items">
              <p>Completed</p>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default TodoList;
