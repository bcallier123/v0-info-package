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
        title="Online Programs"
        subtitle="Over 30 accredited degree programs available 100% online. Flexible scheduling, expert faculty, and the same HBCU quality."
        breadcrumbs={[{ label: "Online Programs" }]}
      />

      {/* Online Info Banner */}
      <div className="bg-gradient-to-r from-[#C9A227]/10 via-[#C9A227]/5 to-[#C9A227]/10 border-b border-[#C9A227]/15">
        <div className="container mx-auto px-5 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-[#C9A227]/15 flex items-center justify-center rounded-xl shrink-0">
                <Icons.laptop className="w-5 h-5 text-[#C9A227]" />
              </div>
              <div>
                <p className="text-sm font-black text-foreground">
                  {onlineCount} programs available 100% online
                </p>
                <p className="text-xs text-muted-foreground">
                  Same accredited curriculum, learn from anywhere
                </p>
              </div>
            </div>
            <Link
              href="/online"
              className="text-sm font-bold text-[#C9A227] hover:text-[#C9A227]/80 transition-colors flex items-center gap-1"
            >
              How online learning works <Icons.arrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-14 lg:py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4B2E83]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          {/* Filters */}
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all rounded-full border ${
                    filter === cat.value
                      ? "bg-[#C9A227] text-[#0a0415] border-[#C9A227] shadow-lg shadow-[#C9A227]/20"
                      : "bg-card text-foreground border-border hover:border-[#C9A227]/40"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            {/* Online-only toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOnlineOnly(!onlineOnly)}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all border rounded-full ${
                  onlineOnly
                    ? "bg-[#4B2E83] text-white border-[#4B2E83] shadow-lg shadow-[#4B2E83]/20"
                    : "bg-card text-foreground border-border hover:border-[#4B2E83]/40"
                }`}
              >
                <Icons.wifi className="w-4 h-4" />
                Online-Ready Only
                {onlineOnly && (
                  <span className="ml-1 text-xs opacity-80">({filtered.length})</span>
                )}
              </button>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((program) => (
              <div key={program.slug} className="relative">
                {program.onlineAvailable && (
                  <Badge className="absolute top-3 right-3 z-10 bg-[#C9A227]/90 text-[#0a0415] border-0 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-[#C9A227]/20">
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
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.search className="w-7 h-7 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-bold">No programs found matching your filters.</p>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your filter selections.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
