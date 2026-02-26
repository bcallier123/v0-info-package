import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { applicants } from "@/lib/data/applicants"

const statusCounts = {
  inquiry: applicants.filter((a) => a.status === "inquiry").length,
  applied: applicants.filter((a) => a.status === "applied").length,
  "under-review": applicants.filter((a) => a.status === "under-review").length,
  accepted: applicants.filter((a) => a.status === "accepted").length,
  enrolled: applicants.filter((a) => a.status === "enrolled").length,
  denied: applicants.filter((a) => a.status === "denied").length,
}

const funnelStages = [
  { label: "Inquiries", count: statusCounts.inquiry, color: "bg-blue-500", width: "100%" },
  { label: "Applied", count: statusCounts.applied, color: "bg-indigo-500", width: "80%" },
  { label: "Under Review", count: statusCounts["under-review"], color: "bg-yellow-500", width: "60%" },
  { label: "Accepted", count: statusCounts.accepted, color: "bg-green-500", width: "45%" },
  { label: "Enrolled", count: statusCounts.enrolled, color: "bg-secondary", width: "30%" },
]

const metrics = [
  { label: "Total Applicants", value: applicants.length, icon: Icons.users, change: "+12%" },
  { label: "Acceptance Rate", value: `${Math.round((statusCounts.accepted / (applicants.length - statusCounts.inquiry)) * 100)}%`, icon: Icons.check, change: "+3%" },
  { label: "Avg GPA", value: (applicants.reduce((sum, a) => sum + a.gpa, 0) / applicants.length).toFixed(2), icon: Icons.award, change: "+0.1" },
  { label: "Enrolled", value: statusCounts.enrolled, icon: Icons.graduationCap, change: "+1" },
]

const recentActivity = applicants
  .sort((a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime())
  .slice(0, 5)

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-black text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Admissions overview and key metrics</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const IconComp = m.icon
          return (
            <Card key={m.label} className="p-5 bg-card border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center">
                  <IconComp className="w-5 h-5 text-secondary" />
                </div>
                <Badge className="bg-green-500/10 text-green-600 border-green-500/30 text-xs font-bold">{m.change}</Badge>
              </div>
              <p className="text-2xl font-black text-foreground">{m.value}</p>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{m.label}</p>
            </Card>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Funnel */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-lg font-black text-foreground mb-6">Admissions Funnel</h2>
          <div className="flex flex-col gap-3">
            {funnelStages.map((stage) => (
              <div key={stage.label} className="flex items-center gap-4">
                <span className="text-sm font-semibold text-muted-foreground w-28 flex-shrink-0">{stage.label}</span>
                <div className="flex-1">
                  <div className="h-8 bg-muted overflow-hidden relative" style={{ width: stage.width }}>
                    <div className={`h-full ${stage.color} flex items-center justify-end pr-3`}>
                      <span className="text-xs font-black text-white">{stage.count}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-lg font-black text-foreground mb-6">Recent Activity</h2>
          <div className="flex flex-col gap-4">
            {recentActivity.map((a) => (
              <div key={a.id} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {a.firstName[0]}{a.lastName[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-sm">{a.firstName} {a.lastName}</p>
                  <p className="text-xs text-muted-foreground">{a.intendedMajor} - {a.studentType}</p>
                </div>
                <Badge className={`text-xs font-bold capitalize flex-shrink-0 ${
                  a.status === "enrolled" ? "bg-green-500/10 text-green-600 border-green-500/30" :
                  a.status === "accepted" ? "bg-blue-500/10 text-blue-600 border-blue-500/30" :
                  a.status === "under-review" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/30" :
                  a.status === "denied" ? "bg-red-500/10 text-red-600 border-red-500/30" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {a.status.replace("-", " ")}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
