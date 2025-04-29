import { createContext, useState, useEffect } from "react";

// Define the type for the theme
type Theme = "light" | "dark";

// Create a custom hook to use the theme context
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create a context for the theme
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// provider ContextProps
type ThemeProviderProps = {
  children: React.ReactNode;
};

// Create a provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Set the theme based on the user's preference
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Set the initial theme based on local storage or default to light

  useEffect(() => {
    const getStoredTheme = localStorage.getItem("theme") as Theme;
    if (getStoredTheme) {
      setTheme(getStoredTheme);
      document.documentElement.setAttribute("data-theme", getStoredTheme);
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Render the context provider
  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
