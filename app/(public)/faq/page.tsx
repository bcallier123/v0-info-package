"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { faqs } from "@/lib/data/faqs"

const categories = [
  { value: "all", label: "All" },
  { value: "admissions", label: "Admissions" },
  { value: "financial-aid", label: "Financial Aid" },
  { value: "housing", label: "Housing" },
  { value: "academics", label: "Academics" },
  { value: "campus-life", label: "Campus Life" },
  { value: "general", label: "General" },
]

export default function FAQPage() {
  const [search, setSearch] = useState("")
  const [catFilter, setCatFilter] = useState("all")

  const filtered = faqs.filter((f) => {
    const matchesSearch = f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase())
    const matchesCat = catFilter === "all" || f.category === catFilter
    return matchesSearch && matchesCat
  })

  return (
    <main>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about Miles College admissions, programs, and campus life."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative mb-6">
            <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setCatFilter(c.value)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all border ${
                  catFilter === c.value
                    ? "bg-secondary text-primary border-secondary"
                    : "bg-card text-foreground border-border hover:border-secondary/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <Accordion type="multiple" className="flex flex-col gap-3">
            {filtered.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border border-border bg-card px-4">
                <AccordionTrigger className="text-left text-foreground font-bold py-4 hover:text-secondary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No questions match your search.</p>
          )}
        </div>
      </section>
    </main>
  )
}
