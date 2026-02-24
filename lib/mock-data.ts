import { Agent, Conversation, Message, NavItem, StatCard } from "@/types";

export const sidebarItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Conversations", href: "/conversations" },
  { title: "AI Agents", href: "/agents" },
  { title: "Analytics", href: "/analytics" },
  { title: "Settings", href: "/settings" },
  { title: "Billing", href: "/billing" }
];

export const dashboardStats: StatCard[] = [
  { label: "Total Conversations", value: "12,842", change: "+12.4%" },
  { label: "Active AI Agents", value: "8", change: "+1 new" },
  { label: "Messages Today", value: "2,431", change: "+8.9%" },
  { label: "Calls Today", value: "174", change: "+3.2%" }
];

export const recentConversations: Conversation[] = [
  { id: "CV-1024", customer: "Acme Inc.", channel: "chat", status: "resolved", updatedAt: "2m ago" },
  { id: "CV-1025", customer: "Northwind", channel: "email", status: "open", updatedAt: "5m ago" },
  { id: "CV-1026", customer: "Globex", channel: "chat", status: "pending", updatedAt: "11m ago" },
  { id: "CV-1027", customer: "Initech", channel: "voice", status: "resolved", updatedAt: "18m ago" }
];

export const chatMessages: Message[] = [
  { id: "1", sender: "user", body: "Hi, I need help with my subscription renewal.", time: "10:02" },
  { id: "2", sender: "ai", body: "Absolutely — I can help with that. Are you trying to change plans or update payment details?", time: "10:03" },
  { id: "3", sender: "user", body: "I want to switch to annual billing.", time: "10:04" },
  { id: "4", sender: "ai", body: "Great choice. I’ve prepared the annual upgrade options and discounts for you.", time: "10:04" }
];

export const agentList: Agent[] = [
  { id: "A-101", name: "Onboarding Assistant", role: "Guides new users through setup", status: "active", temperature: 0.4, voice: "Calm - Luna" },
  { id: "A-102", name: "Billing Copilot", role: "Answers invoices and payment queries", status: "active", temperature: 0.3, voice: "Clear - Orion" },
  { id: "A-103", name: "Retention Expert", role: "Handles churn-risk conversations", status: "paused", temperature: 0.6, voice: "Confident - Nova" }
];

export const dailyMessages = [
  { day: "Mon", messages: 380 },
  { day: "Tue", messages: 420 },
  { day: "Wed", messages: 390 },
  { day: "Thu", messages: 470 },
  { day: "Fri", messages: 520 },
  { day: "Sat", messages: 460 },
  { day: "Sun", messages: 410 }
];

export const callsVsMessages = [
  { name: "Week 1", calls: 120, messages: 1620 },
  { name: "Week 2", calls: 145, messages: 1880 },
  { name: "Week 3", calls: 132, messages: 1750 },
  { name: "Week 4", calls: 160, messages: 2040 }
];
