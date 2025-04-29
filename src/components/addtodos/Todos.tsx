import React from "react";
import "./todos.style.css";
import { useState, useEffect } from "react";
import TodoList from "../todolist/TodoList";

// Todo Type
type Todo = {
  id: number;
  text: string;
  completed: boolean;
  status: string;
};
const Todos = () => {
  // State to manage todos and input value
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [inputValue, setInputValue] = useState<string>("");

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Function to add a new todo
  const addTodo = () => {
    // Step 1: Guard clause to ensure the input isn't empty or just spaces
    if (!inputValue.trim()) return; // Stops execution if the input is blank

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      status: "All",
    };

    setTodos([...todos, newTodo]);

    setInputValue("");
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
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todos;
