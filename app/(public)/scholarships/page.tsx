"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { scholarships } from "@/lib/data/scholarships"
import type { Scholarship } from "@/lib/types"

const typeFilters: { value: Scholarship["type"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "merit", label: "Merit" },
  { value: "athletic", label: "Athletic" },
]

export default function ScholarshipsPage() {
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")

  const filtered = scholarships.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase())
    const matchesType = typeFilter === "all" || s.type === typeFilter
    return matchesSearch && matchesType
  })

  return (
    <main>
      <PageHeader
        title="Scholarships"
        subtitle="Miles College offers renewable academic scholarships to incoming freshmen and community college graduates with excellent academic records. Scholarships are awarded on a first come, first served basis after admission."
        breadcrumbs={[{ label: "Scholarships" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-6 mb-8 bg-secondary/10 border-secondary/30">
            <h3 className="font-black text-foreground mb-3">Scholarship Eligibility</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-sm text-secondary uppercase tracking-wider mb-2">Incoming Freshmen</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>Complete Miles College application with transcripts</li>
                  <li>Submit SAT/ACT test scores (required for eligibility)</li>
                  <li>Complete and submit your FAFSA</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm text-secondary uppercase tracking-wider mb-2">Transfer Students</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>Submit application with required transcripts</li>
                  <li>Attended only 1 college prior to Miles</li>
                  <li>Graduated from a 2-year community or junior college</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search scholarships..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setTypeFilter(f.value)}
                  className={`px-3 py-2 text-xs font-bold uppercase tracking-wide transition-all border ${
                    typeFilter === f.value
                      ? "bg-secondary text-primary border-secondary"
                      : "bg-card text-foreground border-border hover:border-secondary/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {filtered.map((s) => (
              <Card key={s.id} className="p-6 bg-card border-border">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-lg font-black text-foreground">{s.name}</h3>
                      <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase">{s.type}</Badge>
                      {s.renewable && <Badge variant="outline" className="text-xs font-medium">Renewable</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.eligibility.map((e) => (
                        <span key={e} className="text-xs bg-muted px-2 py-1 font-medium text-muted-foreground">{e}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-black text-secondary">{s.amount}</p>
                    <p className="text-xs text-muted-foreground font-semibold">{s.deadline}</p>
                  </div>
                </div>
              </Card>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No scholarships match your search.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
