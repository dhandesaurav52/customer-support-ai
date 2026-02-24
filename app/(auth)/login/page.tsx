import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md space-y-5 p-8">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold">Sign in to SupportPilot</h1>
        <p className="text-sm text-slate-500">Manage AI-driven support from one workspace.</p>
      </div>
      <form className="space-y-4">
        <FormInput label="Work Email" type="email" placeholder="you@company.com" error="" />
        <FormInput label="Password" type="password" placeholder="••••••••" error="" />
        <button className="w-full rounded-xl bg-primary-500 py-2.5 text-sm font-semibold text-white hover:bg-primary-600">Sign In</button>
      </form>
      <p className="text-center text-sm text-slate-500">
        New here? <Link href="/register" className="font-medium text-primary-500">Create account</Link>
      </p>
    </Card>
  );
}
