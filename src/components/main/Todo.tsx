import React from "react";
import "./todo.style.css";
import { ThemeContext } from "../toggletheme/ThemeContext";
import darkThemeIcon from "../../assets/images/icon-moon.svg";
import lightThemeIcon from "../../assets/images/icon-sun.svg";

const Todo = () => {
  const useTheme = React.useContext(ThemeContext);

  if (!useTheme) {
    throw new Error("ThemeContext is undefined. Please ensure it is provided.");
  }

  const { theme, toggleTheme } = useTheme;

  return (
    <main className="todo">
      <header className="todo-header">
        <div className={`todo-header-container ${theme}`}>
          <div className="title-wrapper">
            <div className="todo-title">
              <h1 className="todo-title-header">Todo</h1>
            </div>
            <div className="theme-toggle">
              <div className="sun">
                <h1>Me</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Todo;
