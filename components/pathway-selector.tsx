"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { pathways } from "@/lib/data/pathways"
import { cn } from "@/lib/utils"

const pathwayIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  freshman: Icons.graduationCap,
  transfer: Icons.arrowRight,
  international: Icons.globe,
  returning: Icons.users,
}

export function PathwaySelector() {
  const [selected, setSelected] = useState<string | null>(null)
  const activePathway = pathways.find((p) => p.type === selected)

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4">
            YOUR PATH STARTS HERE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-foreground">
            I AM A...
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Select your student type to see a personalized checklist of next steps.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
          {pathways.map((pathway) => {
            const IconComp = pathwayIcons[pathway.type] || Icons.users
            const isActive = selected === pathway.type
            return (
              <button
                key={pathway.id}
                onClick={() => setSelected(isActive ? null : pathway.type)}
                className={cn(
                  "flex flex-col items-center gap-3 p-6 border-2 transition-all duration-300 text-center",
                  isActive
                    ? "border-secondary bg-secondary/10 shadow-lg"
                    : "border-border bg-card hover:border-secondary/40",
                )}
              >
                <div className={cn(
                  "w-14 h-14 flex items-center justify-center transition-colors",
                  isActive ? "bg-secondary text-primary" : "bg-muted text-muted-foreground",
                )}>
                  <IconComp className="w-7 h-7" />
                </div>
                <span className={cn(
                  "text-sm font-black uppercase tracking-wide",
                  isActive ? "text-secondary" : "text-foreground",
                )}>
                  {pathway.label}
                </span>
              </button>
            )
          })}
        </div>

        {activePathway && (
          <Card className="max-w-2xl mx-auto p-6 md:p-8 bg-card border-secondary/30 animate-fade-in-up">
            <h3 className="text-xl font-black mb-2 text-foreground">{activePathway.label}</h3>
            <p className="text-muted-foreground mb-6">{activePathway.description}</p>

            <ol className="flex flex-col gap-4">
              {activePathway.steps.map((step) => (
                <li key={step.order} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-primary font-black text-sm flex items-center justify-center">
                    {step.order}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    {step.deadline && (
                      <p className="text-xs text-secondary font-bold mt-1">Deadline: {step.deadline}</p>
                    )}
                  </div>
                  {step.link && (
                    <Link href={step.link} className="text-secondary hover:underline text-sm font-semibold flex-shrink-0 self-center">
                      Go
                    </Link>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400" asChild>
                <Link href="/apply">Start Your Application</Link>
              </Button>
              <Button variant="outline" className="font-bold" asChild>
                <Link href="/chat">Talk to AI Advisor</Link>
              </Button>
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
