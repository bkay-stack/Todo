import React from "react";
import "./todolist.style.css";
import deleteIcon from "../../assets/images/icon-cross.svg";

// Todo Type
type Todo = {
  id: number;
  text: string;
};

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  console.log(todos);

  // Delete function

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log("clicked");
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-list-item">
        {todos.map((todo) => (
          <div key={todo.id}>
            <div className="todo-list-items">
              <div className="todo-task">
                <input type="checkbox" name="checker" className="checkers" />
                <p>{todo.text}</p>
              </div>
              <div className="delete-icon">
                <img
                  src={deleteIcon}
                  alt="Delete"
                  role="button"
                  onClick={() => deleteTodo(todo.id)}
                />
              </div>
            </div>
          </div>
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
