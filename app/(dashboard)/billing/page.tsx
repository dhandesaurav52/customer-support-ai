import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold">Current Plan</h3>
        <p className="text-sm text-slate-500">Growth Plan • $99/month • 10,000 AI conversations</p>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { name: "Starter", price: "$29/mo" },
          { name: "Growth", price: "$99/mo" },
          { name: "Scale", price: "$299/mo" }
        ].map((plan) => (
          <Card key={plan.name} className="space-y-3">
            <h4 className="font-semibold">{plan.name}</h4>
            <p className="text-2xl font-bold">{plan.price}</p>
            <button className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">Choose Plan</button>
          </Card>
        ))}
      </div>

      <Card className="space-y-3">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <p className="text-sm text-slate-500">Visa ending in 4242 • Expires 10/28</p>
        <button className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">Update Payment Method</button>
      </Card>

      <Card>
        <h3 className="mb-4 text-lg font-semibold">Invoices</h3>
        <Table>
          <thead>
            <tr className="text-left text-xs uppercase text-slate-500">
              <th className="pb-2">Invoice</th><th className="pb-2">Date</th><th className="pb-2">Amount</th><th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-slate-100 dark:border-slate-800"><td className="py-3">INV-1008</td><td>2026-01-01</td><td>$99.00</td><td>Paid</td></tr>
            <tr className="border-t border-slate-100 dark:border-slate-800"><td className="py-3">INV-1007</td><td>2025-12-01</td><td>$99.00</td><td>Paid</td></tr>
            <tr className="border-t border-slate-100 dark:border-slate-800"><td className="py-3">INV-1006</td><td>2025-11-01</td><td>$99.00</td><td>Paid</td></tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
