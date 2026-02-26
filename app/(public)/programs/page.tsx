"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ContentCard } from "@/components/content-card"
import { programs } from "@/lib/data/programs"
import type { Program } from "@/lib/types"

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

  const filtered = filter === "all" ? programs : programs.filter((p) => p.category === filter)

  return (
    <main>
      <PageHeader
        title="Academic Programs"
        subtitle="Over 30 degree programs designed to prepare you for career success and lifelong learning."
        breadcrumbs={[{ label: "Programs" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program) => (
              <ContentCard
                key={program.slug}
                title={program.name}
                description={program.description}
                href={`/programs/${program.slug}`}
                badge={program.degreeType}
                tags={program.careerOutcomes.slice(0, 3)}
                meta={program.department}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No programs found in this category.</p>
          )}
        </div>
      </section>
    </main>
  )
}
