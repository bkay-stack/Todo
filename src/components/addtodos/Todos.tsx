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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    addTodo(); // Call the addTodo function
  };
  return (
    <div className="todos">
      {/* Todo input field */}

      <form className="input" onSubmit={handleSubmit}>
        {/* Add button */}
        <span className="todo-add-button"></span>
        {/* Input field */}
        <input
          id="todo-input"
          type="text"
          placeholder="Create a new todo..."
          className="todo-input-field"
          onChange={handleInputChange}
          value={inputValue}
        />
      </form>
      {/* Todo list */}
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
