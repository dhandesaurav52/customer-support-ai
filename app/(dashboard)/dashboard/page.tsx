import { ActivityChart } from "@/components/dashboard/activity-chart";
import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { dashboardStats, recentConversations } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.label} className="space-y-2">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs font-medium text-emerald-500">{stat.change}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-5">
        <Card className="xl:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Conversations</h3>
          </div>
          <Table>
            <thead>
              <tr className="text-left text-xs uppercase text-slate-500">
                <th className="pb-3">ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Channel</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Updated</th>
              </tr>
            </thead>
            <tbody>
              {recentConversations.map((row) => (
                <tr key={row.id} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="py-3 font-medium">{row.id}</td>
                  <td>{row.customer}</td>
                  <td className="capitalize">{row.channel}</td>
                  <td className="capitalize">{row.status}</td>
                  <td>{row.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>

        <Card className="xl:col-span-2">
          <h3 className="mb-4 text-lg font-semibold">Activity Overview</h3>
          <ActivityChart />
        </Card>
      </section>
    </div>
  );
}
