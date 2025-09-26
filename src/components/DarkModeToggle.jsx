import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Al montar, leer preferencia guardada o detectar preferencia del SO
  useEffect(() => {
    const stored = localStorage.getItem("dark-mode");
    if (stored === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (!stored) {
      // Si no hay preferencia guardada, usar la del sistema
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Cada vez que cambie el estado, guardar en localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-transform"
    >
      {darkMode ? (
        <Sun size={22} className="text-yellow-400" />
      ) : (
        <Moon size={22} className="text-indigo-600" />
      )}
    </button>
  );
}