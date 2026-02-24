export type NavItem = {
  title: string;
  href: string;
};

export type StatCard = {
  label: string;
  value: string;
  change: string;
};

export type Conversation = {
  id: string;
  customer: string;
  channel: "chat" | "email" | "voice";
  status: "open" | "resolved" | "pending";
  updatedAt: string;
};

export type Message = {
  id: string;
  sender: "user" | "ai";
  body: string;
  time: string;
};

export type Agent = {
  id: string;
  name: string;
  role: string;
  status: "active" | "paused";
  temperature: number;
  voice: string;
};
