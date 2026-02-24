export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-200 p-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {children}
    </main>
  );
}
