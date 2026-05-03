"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ContentCard } from "@/components/content-card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { programs } from "@/lib/data/programs"
import type { Program } from "@/lib/types"
import Link from "next/link"

const categories: { value: Program["category"] | "all"; label: string }[] = [
  { value: "all", label: "All Programs" },
  { value: "business", label: "Business" },
  { value: "education", label: "Education" },
  { value: "humanities", label: "Humanities" },
  { value: "sciences", label: "Sciences" },
  { value: "social-sciences", label: "Social Sciences" },
]

export default function ProgramsPage() {
  const [filter, setFilter] = useState<string>("all")
  const [onlineOnly, setOnlineOnly] = useState(false)

  const filtered = programs.filter((p) => {
    const matchesCategory = filter === "all" || p.category === filter
    const matchesOnline = !onlineOnly || p.onlineAvailable
    return matchesCategory && matchesOnline
  })

  const onlineCount = programs.filter((p) => p.onlineAvailable).length

  return (
    <main>
      <PageHeader
        title="Academic Programs"
        subtitle="Over 30 degree programs designed to prepare you for career success and lifelong learning."
        breadcrumbs={[{ label: "Programs" }]}
      />

      {/* Online Programs Banner */}
      <div className="bg-secondary/10 border-b border-secondary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/20 flex items-center justify-center rounded-lg shrink-0">
                <Icons.laptop className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {onlineCount} programs available 100% online
                </p>
                <p className="text-xs text-muted-foreground">
                  Same accredited curriculum, flexible scheduling
                </p>
              </div>
            </div>
            <Link
              href="/online"
              className="text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              Learn about online learning <Icons.arrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all border ${
                    filter === cat.value
                      ? "bg-secondary text-primary border-secondary"
                      : "bg-card text-foreground border-border hover:border-secondary/40"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            {/* Online toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOnlineOnly(!onlineOnly)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all border rounded-full ${
                  onlineOnly
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/40"
                }`}
              >
                <Icons.wifi className="w-4 h-4" />
                Available Online
                {onlineOnly && (
                  <span className="ml-1 text-xs opacity-80">({filtered.length})</span>
                )}
              </button>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program) => (
              <div key={program.slug} className="relative">
                {program.onlineAvailable && (
                  <Badge className="absolute top-3 right-3 z-10 bg-primary/90 text-primary-foreground border-0 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Icons.wifi className="w-3 h-3" />
                    Online
                  </Badge>
                )}
                <ContentCard
                  title={program.name}
                  description={program.description}
                  href={`/programs/${program.slug}`}
                  badge={program.degreeType}
                  tags={program.careerOutcomes.slice(0, 3)}
                  meta={program.department}
                />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No programs found matching your filters.</p>
          )}
        </div>
      </section>
    </main>
  )
}
