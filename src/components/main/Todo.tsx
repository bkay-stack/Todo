import React from "react";
import "./todo.style.css";
import { useTheme } from "../toggletheme/ThemeContext";
// import darkThemeIcon from "../../assets/images/icon-moon.svg";
// import lightThemeIcon from "../../assets/images/icon-sun.svg";

// import bgMobile from "../../assets/images/bg-mobile-light.jpg";
// import bgDesktop from "../../assets/images/bg-desktop-light.jpg";
// import bgMobileDark from "../../assets/images/bg-mobile-dark.jpg";
// import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";
const Todo = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <main className="todo">
      <header className="todo-header">
        <div className="todo-content-header">
          <div className="todo-title">
            <h1 className="todo-title-header">Todo</h1>
          </div>
          <div className="theme-toggle"></div>
        </div>
      </header>
    </main>
  );
};

export default Todo;
