import { cn } from "@/lib/utils";

export function FormInput({
  label,
  error,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input
        {...props}
        className={cn(
          "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-900",
          className
        )}
      />
      {error ? <p className="text-xs text-rose-500">{error}</p> : null}
    </label>
  );
}
