import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-md space-y-5 p-8">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold">Create your workspace</h1>
        <p className="text-sm text-slate-500">Start automating support with AI agents in minutes.</p>
      </div>
      <form className="space-y-4">
        <FormInput label="Full Name" placeholder="Jane Doe" error="" />
        <FormInput label="Work Email" type="email" placeholder="jane@company.com" error="" />
        <FormInput label="Password" type="password" placeholder="Create a secure password" error="" />
        <button className="w-full rounded-xl bg-primary-500 py-2.5 text-sm font-semibold text-white hover:bg-primary-600">Create Account</button>
      </form>
      <p className="text-center text-sm text-slate-500">
        Already have an account? <Link href="/login" className="font-medium text-primary-500">Sign in</Link>
      </p>
    </Card>
  );
}
