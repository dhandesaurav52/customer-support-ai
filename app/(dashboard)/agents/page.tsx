"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";
import { Modal } from "@/components/ui/modal";
import { agentList } from "@/lib/mock-data";

export default function AgentsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">AI Agents</h1>
        <button onClick={() => setOpen(true)} className="rounded-xl bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600">Create Agent</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {agentList.map((agent) => (
          <Card key={agent.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{agent.name}</h3>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs capitalize dark:bg-slate-800">{agent.status}</span>
            </div>
            <p className="text-sm text-slate-500">{agent.role}</p>
            <p className="text-xs text-slate-500">Voice: {agent.voice}</p>
          </Card>
        ))}
      </div>

      <Modal open={open} title="Create AI Agent" onClose={() => setOpen(false)}>
        <form className="space-y-4">
          <FormInput label="Agent Name" placeholder="e.g. Returns Assistant" />
          <label className="block space-y-2">
            <span className="text-sm font-medium">Role Description</span>
            <input className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" placeholder="Describe this agent's role" />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium">System Prompt</span>
            <textarea rows={4} className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" placeholder="You are a helpful support AI..." />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium">Voice Selection</span>
            <select className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
              <option>Luna</option>
              <option>Orion</option>
              <option>Nova</option>
            </select>
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium">Temperature</span>
            <input type="range" min={0} max={1} step={0.1} className="w-full" />
          </label>
          <label className="flex items-center justify-between text-sm font-medium">
            Enable Agent
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300" defaultChecked />
          </label>
          <button type="button" onClick={() => setOpen(false)} className="w-full rounded-xl bg-primary-500 py-2 text-sm font-semibold text-white">Save Agent</button>
        </form>
      </Modal>
    </div>
  );
}
