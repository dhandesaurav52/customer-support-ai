import { cn } from "@/lib/utils";

export function ChatBubble({ sender, body, time }: { sender: "user" | "ai"; body: string; time: string }) {
  return (
    <div className={cn("flex w-full", sender === "user" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
          sender === "user"
            ? "rounded-br-md bg-primary-500 text-white"
            : "rounded-bl-md border border-slate-200 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        )}
      >
        <p>{body}</p>
        <p className={cn("mt-1 text-[11px]", sender === "user" ? "text-indigo-100" : "text-slate-400")}>{time}</p>
      </div>
    </div>
  );
}
