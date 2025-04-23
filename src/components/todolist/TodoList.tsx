import React from "react";
import "./todolist.style.css";
import deleteIcon from "../../assets/images/icon-cross.svg";

// Todo Type
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  console.log(todos);

  // completed Todos function
  const completedTodos = (event: React.ChangeEvent<HTMLInputElement>) => {
    // variable to get the id of the todo
    const id = Number(event.target.id);
    const isChecked = event.target.checked;

    // Update the completed status of the todo
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: isChecked } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete function
  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log("clicked");
  };

  // Clear function
  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-list-item">
        {todos.map((todo) => (
          <div key={todo.id}>
            <div className="todo-list-items">
              <div className="todo-task">
                <input
                  type="checkbox"
                  name="checker"
                  className="checkers"
                  id={todo.id.toString()}
                  checked={todo.completed}
                  onChange={completedTodos}
                />
                <p className={todo.completed ? "strike-through" : ""}>
                  {todo.text}
                </p>
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
                <p onClick={() => clearTodos()}>Clear completed</p>
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
