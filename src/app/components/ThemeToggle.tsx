"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("arjun-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      applyTheme("light");
    } else {
      setTheme("dark");
      applyTheme("dark");
    }
  }, []);

  const applyTheme = (newTheme: "dark" | "light") => {
    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeTheme = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("arjun-theme", newTheme);
  };

  return (
    <div
      className="fixed bottom-5 left-5 z-50 flex items-center bg-white/90 dark:bg-[#141a26]/90 backdrop-blur-md border border-slate-300 dark:border-slate-700/60 rounded-full p-1 gap-0.5 shadow-xl transition-all duration-300"
      role="group"
      aria-label="Theme selector"
    >
      <button
        className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
          theme === "light"
            ? "bg-[#00C9A7] text-white shadow-md font-bold scale-105"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
        onClick={() => changeTheme("light")}
        aria-label="Switch to Light theme"
        title="Light Mode"
      >
        <Sun className="w-3.5 h-3.5" />
      </button>

      <button
        className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
          theme === "dark"
            ? "bg-[#00C9A7] text-[#0b0f19] shadow-md font-bold scale-105"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
        onClick={() => changeTheme("dark")}
        aria-label="Switch to Dark theme"
        title="Dark Mode"
      >
        <Moon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
