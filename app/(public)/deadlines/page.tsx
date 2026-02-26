"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { deadlines } from "@/lib/data/deadlines"

const studentTypes = [
  { value: "all", label: "All" },
  { value: "freshman", label: "Freshman" },
  { value: "transfer", label: "Transfer" },
  { value: "international", label: "International" },
  { value: "returning", label: "Returning" },
]

export default function DeadlinesPage() {
  const [filter, setFilter] = useState("all")

  const filtered = filter === "all"
    ? deadlines
    : deadlines.filter((d) => d.studentType === filter || d.studentType === "all")

  const sorted = [...filtered].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <main>
      <PageHeader
        title="Important Deadlines"
        subtitle="Stay on track with key dates for admissions, financial aid, housing, and orientation."
        breadcrumbs={[{ label: "Deadlines" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-10">
            {studentTypes.map((t) => (
              <button
                key={t.value}
                onClick={() => setFilter(t.value)}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all border ${
                  filter === t.value
                    ? "bg-secondary text-primary border-secondary"
                    : "bg-card text-foreground border-border hover:border-secondary/40"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-border" />
            <div className="flex flex-col gap-8">
              {sorted.map((d) => (
                <div key={d.id} className="relative flex gap-6 pl-2">
                  <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 z-10 ${
                    d.priority === "high" ? "bg-secondary" : "bg-muted"
                  }`}>
                    <Icons.calendar className={`w-4 h-4 ${d.priority === "high" ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <Card className="p-5 flex-1 bg-card border-border">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-black text-foreground">{d.title}</h3>
                      {d.priority === "high" && (
                        <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs flex-shrink-0">Priority</Badge>
                      )}
                    </div>
                    <p className="text-secondary font-bold text-sm mb-2">{d.date}</p>
                    <p className="text-sm text-muted-foreground">{d.description}</p>
                    <Badge variant="outline" className="mt-3 text-xs font-medium capitalize">{d.studentType === "all" ? "All Students" : d.studentType}</Badge>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
