import React from "react";
import "./todo.style.css";
import { ThemeContext } from "../toggletheme/ThemeContext";
import lightThemeIcon from "../../assets/images/icon-moon.svg";
import darkThemeIcon from "../../assets/images/icon-sun.svg";

const Todo = () => {
  const useTheme = React.useContext(ThemeContext);

  if (!useTheme) {
    throw new Error("ThemeContext is undefined. Please ensure it is provided.");
  }

  const { theme, toggleTheme } = useTheme;

  return (
    // Main component for the Todo application
    <main>
      {/* T */}
      <header className={`todo-header ${theme === "dark" ? "active" : ""}`}>
        {/* Header for the Todo application */}
        <div className={`todo-header-container ${theme}`}>
          <div className="title-wrapper">
            <div className="todo-title">
              <h1 className="todo-title-header">Todo</h1>
            </div>
            {/* Toggle theme button */}
            <div className="theme-toggle">
              {theme === "dark" ? (
                <img
                  src={darkThemeIcon}
                  alt="Dark Theme"
                  className="theme-icon"
                  onClick={toggleTheme}
                />
              ) : (
                <img
                  src={lightThemeIcon}
                  alt="Light Theme"
                  className="theme-icon"
                  onClick={toggleTheme}
                />
              )}
            </div>
          </div>
        </div>
      </header>
      <h1 className="me">Me</h1>
      <h1>Me</h1>
    </main>
  );
};

export default Todo;
