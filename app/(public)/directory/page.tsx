"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { directoryEntries } from "@/lib/data/directory"

export default function DirectoryPage() {
  const [search, setSearch] = useState("")

  const filtered = directoryEntries.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.department.toLowerCase().includes(search.toLowerCase()) ||
    d.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>
      <PageHeader
        title="Contact Directory"
        subtitle="Find the right office or person to help you with your questions."
        breadcrumbs={[{ label: "Directory" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mb-10">
            <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, department, or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((entry) => (
              <Card key={entry.id} className="p-5 bg-card border-border">
                <h3 className="font-black text-foreground mb-1">{entry.name}</h3>
                <p className="text-sm text-secondary font-bold mb-1">{entry.title}</p>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">{entry.department}</p>
                <div className="flex flex-col gap-1.5 text-sm">
                  <a href={`tel:${entry.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                    <Icons.phone className="w-3.5 h-3.5" /> {entry.phone}
                  </a>
                  <a href={`mailto:${entry.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                    <Icons.mail className="w-3.5 h-3.5" /> {entry.email}
                  </a>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Icons.building className="w-3.5 h-3.5" /> {entry.office}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Icons.calendar className="w-3.5 h-3.5" /> {entry.hours}
                  </span>
                </div>
              </Card>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No contacts match your search.</p>
          )}
        </div>
      </section>
    </main>
  )
}
