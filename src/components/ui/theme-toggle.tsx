"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunMedium, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 p-1 border dark:border-gray-700 rounded-md bg-white dark:bg-gray-800">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-md ${
          theme === "light"
            ? "bg-primary-100 text-primary-600 dark:bg-gray-700 dark:text-primary-400"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        }`}
        aria-label="Light mode"
      >
        <SunMedium size={18} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-md ${
          theme === "dark"
            ? "bg-gray-200 text-secondary-700 dark:bg-gray-700 dark:text-gray-200"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        }`}
        aria-label="Dark mode"
      >
        <Moon size={18} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-md ${
          theme === "system"
            ? "bg-gray-200 text-secondary-700 dark:bg-gray-700 dark:text-gray-200"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        }`}
        aria-label="System preference"
      >
        <Laptop size={18} />
      </button>
    </div>
  );
}
