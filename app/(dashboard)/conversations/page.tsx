import { ChatBubble } from "@/components/conversations/chat-bubble";
import { Card } from "@/components/ui/card";
import { chatMessages, recentConversations } from "@/lib/mock-data";

export default function ConversationsPage() {
  return (
    <div className="grid min-h-[calc(100vh-8rem)] gap-6 lg:grid-cols-[320px_1fr]">
      <Card className="space-y-4">
        <div className="space-y-3">
          <input placeholder="Search conversations" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" />
          <select className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
            <option>All Channels</option>
            <option>Chat</option>
            <option>Email</option>
            <option>Voice</option>
          </select>
        </div>
        <div className="space-y-2">
          {recentConversations.map((item) => (
            <button key={item.id} className="w-full rounded-xl border border-slate-200 p-3 text-left hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800">
              <p className="font-medium">{item.customer}</p>
              <p className="text-xs text-slate-500">{item.id} • {item.updatedAt}</p>
            </button>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col">
        <div className="border-b border-slate-200 pb-4 dark:border-slate-800">
          <h3 className="font-semibold">Acme Inc. — Subscription support</h3>
          <p className="text-xs text-slate-500">Handled by Billing Copilot</p>
        </div>
        <div className="flex-1 space-y-3 py-4">
          {chatMessages.map((message) => (
            <ChatBubble key={message.id} sender={message.sender} body={message.body} time={message.time} />
          ))}
        </div>
        <div className="mt-2 flex gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
          <input className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" placeholder="Type a reply..." />
          <button className="rounded-xl bg-primary-500 px-4 py-2 text-sm font-semibold text-white">Send</button>
        </div>
      </Card>
    </div>
  );
}
