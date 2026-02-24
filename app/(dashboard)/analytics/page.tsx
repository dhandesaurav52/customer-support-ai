import { CallsVsMessagesChart, DailyMessagesChart } from "@/components/analytics/charts";
import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card><p className="text-sm text-slate-500">Success Rate</p><p className="text-2xl font-bold">94.2%</p></Card>
        <Card><p className="text-sm text-slate-500">Avg. Response Time</p><p className="text-2xl font-bold">18s</p></Card>
        <Card><p className="text-sm text-slate-500">CSAT Score</p><p className="text-2xl font-bold">4.8/5</p></Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-lg font-semibold">Daily Messages</h3>
          <DailyMessagesChart />
        </Card>
        <Card>
          <h3 className="mb-4 text-lg font-semibold">Calls vs Messages</h3>
          <CallsVsMessagesChart />
        </Card>
      </div>

      <Card>
        <h3 className="mb-4 text-lg font-semibold">Agent Performance</h3>
        <Table>
          <thead>
            <tr className="text-left text-xs uppercase text-slate-500">
              <th className="pb-2">Agent</th><th className="pb-2">Handled</th><th className="pb-2">Resolution</th><th className="pb-2">CSAT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-slate-100 dark:border-slate-800"><td className="py-3">Onboarding Assistant</td><td>1,204</td><td>96%</td><td>4.9</td></tr>
            <tr className="border-t border-slate-100 dark:border-slate-800"><td className="py-3">Billing Copilot</td><td>982</td><td>93%</td><td>4.7</td></tr>
            <tr className="border-t border-slate-100 dark:border-slate-800"><td className="py-3">Retention Expert</td><td>645</td><td>91%</td><td>4.6</td></tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
