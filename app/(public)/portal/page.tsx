import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Icons } from "@/components/icons"

const checklist = [
  { task: "Submit Application", done: true },
  { task: "Send High School Transcript", done: true },
  { task: "Submit ACT/SAT Scores", done: false },
  { task: "Complete FAFSA", done: false },
  { task: "Apply for Scholarships", done: false },
  { task: "Accept Admissions Offer", done: false },
  { task: "Pay Housing Deposit", done: false },
  { task: "Attend Orientation", done: false },
]

const completedCount = checklist.filter((c) => c.done).length
const progressPercent = Math.round((completedCount / checklist.length) * 100)

const quickActions = [
  { label: "FAFSA", href: "/financial-aid", icon: Icons.dollarSign },
  { label: "Scholarships", href: "/scholarships", icon: Icons.award },
  { label: "Housing", href: "/housing-dining", icon: Icons.home },
  { label: "AI Advisor", href: "/chat", icon: Icons.sparkles },
]

export default function PortalPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#1a0a2e] via-primary to-[#2d1b4e] text-primary-foreground py-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-1">Welcome back</p>
              <h1 className="text-3xl md:text-4xl font-black">Student Dashboard</h1>
              <p className="text-primary-foreground/60 mt-1">Track your admissions progress</p>
            </div>
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-bold">Demo Mode</Badge>
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
            <p className="text-sm text-muted-foreground">{completedCount} of {checklist.length} steps completed</p>
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

          {/* Checklist */}
          <Card className="p-6 bg-card border-border mb-8">
            <h2 className="text-lg font-black text-foreground mb-4">Your Enrollment Checklist</h2>
            <ul className="flex flex-col gap-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                  <div className={`w-6 h-6 flex items-center justify-center flex-shrink-0 ${
                    item.done ? "bg-green-500" : "bg-muted"
                  }`}>
                    {item.done ? (
                      <Icons.check className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-xs font-bold text-muted-foreground">{i + 1}</span>
                    )}
                  </div>
                  <span className={`flex-1 ${item.done ? "text-muted-foreground line-through" : "text-foreground font-semibold"}`}>
                    {item.task}
                  </span>
                  {!item.done && (
                    <Badge variant="outline" className="text-xs font-medium">Pending</Badge>
                  )}
                </li>
              ))}
            </ul>
          </Card>

          {/* Important Info */}
          <Card className="p-6 bg-secondary/10 border-secondary/30">
            <div className="flex items-start gap-4">
              <Icons.info className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-black text-foreground mb-1">This is a Demo Portal</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  This portal preview demonstrates the student dashboard experience. In production, it connects to the Miles College student information system.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400" size="sm" asChild>
                    <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                      Go to Official Portal <Icons.externalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="font-bold" asChild>
                    <Link href="/login">Back to Login</Link>
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
