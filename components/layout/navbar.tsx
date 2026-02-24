"use client";

import { Bell, ChevronDown, Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

export function Navbar() {
  const { isDark, toggle } = useDarkMode();

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div>
        <p className="text-sm text-slate-500">Welcome back</p>
        <h2 className="text-lg font-semibold">Support Operations</h2>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggle} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800" aria-label="Toggle theme">
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800" aria-label="Notifications">
          <Bell size={16} />
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
          <div className="h-7 w-7 rounded-full bg-primary-500" />
          <span className="text-sm font-medium">Ava Chen</span>
          <ChevronDown size={14} />
        </button>
      </div>
    </header>
  );
}
