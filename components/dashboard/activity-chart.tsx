"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { dailyMessages } from "@/lib/mock-data";

export function ActivityChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dailyMessages}>
          <defs>
            <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip />
          <Area type="monotone" dataKey="messages" stroke="#4F46E5" fillOpacity={1} fill="url(#colorMessages)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
