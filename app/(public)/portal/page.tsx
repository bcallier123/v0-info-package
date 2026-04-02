"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Icons } from "@/components/icons"
import { useAuth } from "@/lib/auth-context"

const checklistItems = [
  "Submit Application",
  "Send High School Transcript",
  "Submit ACT/SAT Scores",
  "Complete FAFSA",
  "Apply for Scholarships",
  "Accept Admissions Offer",
  "Pay Housing Deposit",
  "Attend Orientation",
]

const quickActions = [
  { label: "FAFSA", href: "/financial-aid", icon: Icons.dollarSign },
  { label: "Scholarships", href: "/journey/steps/financial-aid", icon: Icons.award },
  { label: "Housing", href: "/housing-dining", icon: Icons.home },
  { label: "AI Advisor", href: "/chat", icon: Icons.sparkles },
]

export default function PortalPage() {
  const { user, toggleChecklist } = useAuth()

  const completedCount = checklistItems.filter((item) => user?.checklistProgress[item]).length
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100)

  if (!user) {
    return (
      <main>
        <section className="bg-gradient-to-br from-[#1a0a2e] via-primary to-[#2d1b4e] text-primary-foreground py-12 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10 max-w-md text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Icons.user className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="text-3xl font-black mb-2">Sign In Required</h1>
            <p className="text-primary-foreground/60 mb-6">Sign in to access your enrollment checklist and track your admissions progress.</p>
            <div className="flex flex-col gap-3">
              <Button className="bg-secondary text-secondary-foreground font-bold hover:bg-yellow-400" asChild>
                <Link href="/signup">Create Account</Link>
              </Button>
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-white/10" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="bg-gradient-to-br from-[#1a0a2e] via-primary to-[#2d1b4e] text-primary-foreground py-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">
                Welcome, {user.firstName}
              </p>
              <h1 className="text-3xl md:text-4xl font-black">Enrollment Checklist</h1>
              <p className="text-primary-foreground/60 mt-1">Track your admissions progress</p>
            </div>
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-bold">
              {progressPercent}% Complete
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress */}
          <Card className="p-6 mb-8 bg-card border-border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-black text-foreground">Enrollment Progress</h2>
              <span className="text-secondary font-black text-lg">{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-3 mb-2" />
            <p className="text-sm text-muted-foreground">{completedCount} of {checklistItems.length} steps completed</p>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickActions.map((action) => {
              const IconComp = action.icon
              return (
                <Link key={action.label} href={action.href} className="group block">
                  <Card className="p-5 text-center bg-card border-border hover:border-secondary/50 transition-all hover:shadow-lg">
                    <IconComp className="w-6 h-6 text-secondary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-black text-foreground uppercase tracking-wide">{action.label}</span>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Interactive Checklist */}
          <Card className="p-6 bg-card border-border mb-8">
            <h2 className="text-lg font-black text-foreground mb-1">Your Enrollment Checklist</h2>
            <p className="text-sm text-muted-foreground mb-4">Click on items to mark them as complete.</p>
            <ul className="flex flex-col gap-3">
              {checklistItems.map((item, i) => {
                const isDone = user.checklistProgress[item] || false
                return (
                  <li key={i}>
                    <button
                      onClick={() => toggleChecklist(item)}
                      className="flex items-center gap-3 py-2 w-full text-left border-b border-border last:border-0 hover:bg-muted/50 rounded-lg px-2 -mx-2 transition-colors"
                    >
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                        isDone ? "bg-green-500" : "bg-muted border border-border"
                      }`}>
                        {isDone ? (
                          <Icons.check className="w-4 h-4 text-white" />
                        ) : (
                          <span className="text-xs font-bold text-muted-foreground">{i + 1}</span>
                        )}
                      </div>
                      <span className={`flex-1 transition-all ${isDone ? "text-muted-foreground line-through" : "text-foreground font-semibold"}`}>
                        {item}
                      </span>
                      {!isDone && (
                        <Badge variant="outline" className="text-xs font-medium">Pending</Badge>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </Card>

          {/* Journey Dashboard Link */}
          <Card className="p-6 bg-secondary/10 border-secondary/30">
            <div className="flex items-start gap-4">
              <Icons.trendingUp className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-black text-foreground mb-1">Full Journey Dashboard</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  View your complete 11-stage journey from Discovery to Alumni Network. Track detailed tasks for every phase of your Miles College experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-secondary text-secondary-foreground font-bold hover:bg-yellow-400" size="sm" asChild>
                    <Link href="/journey/dashboard">
                      Go to Journey Dashboard <Icons.arrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
