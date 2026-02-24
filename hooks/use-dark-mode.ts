"use client";

import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("supportpilot-theme");
    const preferred = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(preferred);
    document.documentElement.classList.toggle("dark", preferred);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    window.localStorage.setItem("supportpilot-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return { isDark, toggle };
}
