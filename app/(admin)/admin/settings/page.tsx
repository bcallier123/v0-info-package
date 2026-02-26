import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-black text-foreground">Settings</h1>
        <p className="text-muted-foreground">System configuration and preferences</p>
      </div>

      <Card className="p-6 bg-card border-border">
        <h2 className="text-lg font-black mb-4 text-foreground">System Status</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between py-2 border-b border-border">
            <div className="flex items-center gap-3">
              <Icons.globe className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">Application</span>
            </div>
            <Badge className="bg-green-500/10 text-green-600 border-green-500/30 font-bold text-xs">Online</Badge>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border">
            <div className="flex items-center gap-3">
              <Icons.sparkles className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">AI Chat</span>
            </div>
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs">FAQ Mode</Badge>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border">
            <div className="flex items-center gap-3">
              <Icons.shield className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">Database</span>
            </div>
            <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30 font-bold text-xs">Mock Data</Badge>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Icons.building className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">Authentication</span>
            </div>
            <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30 font-bold text-xs">Demo Mode</Badge>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-secondary/10 border-secondary/30">
        <div className="flex items-start gap-4">
          <Icons.info className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-black text-foreground mb-1">Phase 2 Features</h3>
            <p className="text-sm text-muted-foreground">
              Real database connections, authentication, file storage, email/SMS configuration, and
              system health monitoring will be available when deployed on the DGX Spark with PostgreSQL.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
