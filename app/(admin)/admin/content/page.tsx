import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const contentTypes = [
  { type: "programs", label: "Programs", count: 12, icon: Icons.graduationCap },
  { type: "scholarships", label: "Scholarships", count: 8, icon: Icons.award },
  { type: "faqs", label: "FAQs", count: 6, icon: Icons.messageCircle },
  { type: "events", label: "Events", count: 5, icon: Icons.calendar },
]

export default function AdminContentPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-black text-foreground">Content Manager</h1>
        <p className="text-muted-foreground">Manage website content (Phase 2 feature - currently read-only)</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contentTypes.map((ct) => {
          const IconComp = ct.icon
          return (
            <Card key={ct.type} className="p-6 bg-card border-border hover:border-secondary/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center">
                  <IconComp className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-black text-foreground">{ct.label}</p>
                  <p className="text-xs text-muted-foreground">{ct.count} items</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">CRUD editor coming in Phase 2 with database integration.</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
