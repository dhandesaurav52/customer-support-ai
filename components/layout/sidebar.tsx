"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, CreditCard, LayoutDashboard, MessageSquare, Settings, Signal } from "lucide-react";
import { sidebarItems } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const icons = {
  Dashboard: LayoutDashboard,
  Conversations: MessageSquare,
  "AI Agents": Bot,
  Analytics: Signal,
  Settings,
  Billing: CreditCard
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white px-4 py-6 dark:border-slate-800 dark:bg-slate-950 lg:flex">
      <div className="mb-8 px-3">
        <h1 className="text-xl font-bold tracking-tight">SupportPilot AI</h1>
        <p className="text-xs text-slate-500">Customer support intelligence</p>
      </div>
      <nav className="space-y-1">
        {sidebarItems.map((item) => {
          const Icon = icons[item.title as keyof typeof icons];
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
                active && "bg-primary-50 text-primary-600 dark:bg-slate-800 dark:text-primary-500"
              )}
            >
              <Icon size={16} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
