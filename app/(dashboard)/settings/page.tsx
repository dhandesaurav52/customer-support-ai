import { Card } from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <h3 className="text-lg font-semibold">Profile Settings</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput label="Full Name" defaultValue="Ava Chen" />
          <FormInput label="Email" defaultValue="ava@supportpilot.ai" />
        </div>
      </Card>

      <Card className="space-y-4">
        <h3 className="text-lg font-semibold">Change Password</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <FormInput label="Current Password" type="password" />
          <FormInput label="New Password" type="password" />
          <FormInput label="Confirm Password" type="password" />
        </div>
      </Card>

      <Card className="space-y-4">
        <h3 className="text-lg font-semibold">API & Webhooks</h3>
        <FormInput label="API Key" defaultValue="sk_live_••••••••••••x9Z2" readOnly />
        <FormInput label="Webhook URL" placeholder="https://api.yourapp.com/webhooks/supportpilot" />
      </Card>

      <Card className="space-y-3 border-rose-200 dark:border-rose-900">
        <h3 className="text-lg font-semibold text-rose-500">Danger Zone</h3>
        <p className="text-sm text-slate-500">Delete your account and remove all project data permanently.</p>
        <button className="rounded-xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-600">Delete Account</button>
      </Card>
    </div>
  );
}
