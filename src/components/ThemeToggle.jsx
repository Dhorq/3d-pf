import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme || storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [setIsDarkMode]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      className={cn(
        "fixed bottom-5 left-5 z-1 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden cursor-pointer"
        // max-sm:hidden
      )}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
