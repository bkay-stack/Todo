import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the theme
type Theme = "light" | "dark";

// Create a custom hook to use the theme context
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create a context for the theme
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
