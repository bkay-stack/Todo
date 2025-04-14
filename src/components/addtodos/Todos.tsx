import React from "react";
import "./todos.style.css";
import { useState } from "react";
import TodoList from "../todolist/TodoList";
const Todos = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Function to add a new todo
  const addTodo = () => {
    console.log("Adding todo:", inputValue, todos);
    setTodos([...todos, inputValue]); // Add the new todo to the list
    setInputValue("");
    // Clear the input field after adding
  };

  return (
    <div className="todos">
      {/* Todo input field */}
      <input
        id="todo-input"
        type="text"
        placeholder="Create a new todo..."
        className="todo-input-field"
        onChange={handleInputChange}
        value={inputValue}
      />
      {/* Add button */}
      <button onClick={addTodo} className="todo-add-button"></button>

      {/* Todo list */}
      <TodoList todos={todos} />

      {/* Todo list */}
    </div>
  );
};

export default Todos;
