"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"
import { useRouter } from "next/navigation"

type StageStatus = "completed" | "in-progress" | "available" | "locked"

interface JourneyStageDefinition {
  id: string
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  tasks: string[]
  detailHref: string
}

const stageDefinitions: JourneyStageDefinition[] = [
  {
    id: "discover",
    title: "Discover Miles",
    description: "Explore programs, campus life, and what makes Miles College your home.",
    icon: Icons.search,
    tasks: ["Explore academic programs", "Learn about campus life", "Complete onboarding questionnaire"],
    detailHref: "/journey/explore",
  },
  {
    id: "apply",
    title: "Submit Application",
    description: "Complete your free application and start your official journey.",
    icon: Icons.fileText,
    tasks: ["Start online application", "Complete personal information", "Submit application"],
    detailHref: "/journey/steps/application",
  },
  {
    id: "documents",
    title: "Submit Documents",
    description: "Send your transcripts, test scores, and supporting materials.",
    icon: Icons.fileText,
    tasks: ["Request high school transcript", "Submit ACT/SAT scores", "Submit recommendation letters"],
    detailHref: "/journey/steps/documents",
  },
  {
    id: "financial-aid",
    title: "Financial Aid",
    description: "Complete FAFSA and explore scholarships to fund your education.",
    icon: Icons.dollarSign,
    tasks: ["Complete FAFSA application", "Apply for Miles scholarships", "Review financial aid offer"],
    detailHref: "/journey/steps/financial-aid",
  },
  {
    id: "acceptance",
    title: "Get Accepted",
    description: "Receive and accept your admission to Miles College.",
    icon: Icons.award,
    tasks: ["Receive admissions decision", "Accept your offer", "Pay enrollment deposit"],
    detailHref: "/journey/celebration",
  },
  {
    id: "orientation",
    title: "Orientation",
    description: "Register for orientation and prepare for your first day.",
    icon: Icons.users,
    tasks: ["Register for orientation", "Complete health forms", "Attend orientation session"],
    detailHref: "/journey/steps/orientation",
  },
  {
    id: "enrollment",
    title: "Enroll in Classes",
    description: "Select your courses and register for your first semester.",
    icon: Icons.bookOpen,
    tasks: ["Meet with academic advisor", "Register for classes", "Purchase textbooks"],
    detailHref: "/journey/steps/enrollment",
  },
  {
    id: "first-semester",
    title: "First Semester",
    description: "Start your academic journey and thrive at Miles College.",
    icon: Icons.graduationCap,
    tasks: ["Attend first day of classes", "Join student organizations", "Connect with a mentor"],
    detailHref: "/journey/success",
  },
  {
    id: "career-prep",
    title: "Career Preparation",
    description: "Build skills, gain experience, and prepare for your profession.",
    icon: Icons.briefcase,
    tasks: ["Complete career assessment", "Secure internship", "Build professional network"],
    detailHref: "/journey/careers",
  },
  {
    id: "graduation",
    title: "Graduation",
    description: "Complete your degree and celebrate your achievement.",
    icon: Icons.graduationCap,
    tasks: ["Complete degree requirements", "Apply for graduation", "Walk the stage"],
    detailHref: "/journey/alumni",
  },
  {
    id: "alumni",
    title: "Alumni Network",
    description: "Join the global Miles College alumni community.",
    icon: Icons.globe,
    tasks: ["Join alumni association", "Attend alumni events", "Give back as a mentor"],
    detailHref: "/journey/alumni",
  },
]

const notifications = [
  { id: 1, type: "action", message: "Your application is waiting. Complete it to move forward!", time: "2 hours ago" },
  { id: 2, type: "deadline", message: "Priority deadline: March 15, 2026", time: "3 days away" },
  { id: 3, type: "tip", message: "Submit your FAFSA early for the best aid package.", time: "Recommendation" },
]

const statusConfig: Record<StageStatus, { color: string; bgColor: string; label: string }> = {
  completed: { color: "text-emerald-400", bgColor: "bg-emerald-500/20 border-emerald-500/40", label: "Complete" },
  "in-progress": { color: "text-[#C9A227]", bgColor: "bg-[#C9A227]/20 border-[#C9A227]/60", label: "In Progress" },
  available: { color: "text-blue-400", bgColor: "bg-blue-500/20 border-blue-500/40", label: "Available" },
  locked: { color: "text-white/20", bgColor: "bg-white/5 border-white/10", label: "Locked" },
}

export default function JourneyDashboard() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null)
  const { user, toggleTask } = useAuth()
  const router = useRouter()

  // Compute stage statuses from user progress
  const stages = useMemo(() => {
    return stageDefinitions.map((def, index) => {
      const stageProgress = user?.journeyProgress[def.id] || {}
      const tasks = def.tasks.map((label) => ({
        label,
        done: stageProgress[label] || false,
      }))

      const allDone = tasks.length > 0 && tasks.every((t) => t.done)
      const someDone = tasks.some((t) => t.done)

      // Determine status based on progress
      let status: StageStatus = "locked"
      if (allDone) {
        status = "completed"
      } else if (someDone) {
        status = "in-progress"
      } else if (index === 0) {
        // First stage is always available
        status = "available"
      } else {
        // Check if previous stage is completed or in progress
        const prevDef = stageDefinitions[index - 1]
        const prevProgress = user?.journeyProgress[prevDef.id] || {}
        const prevTasks = prevDef.tasks.map((l) => prevProgress[l] || false)
        const prevAllDone = prevTasks.length > 0 && prevTasks.every((t) => t)
        const prevSomeDone = prevTasks.some((t) => t)

        if (prevAllDone) {
          status = "available"
        } else if (prevSomeDone) {
          // If previous stage is in progress, this one becomes available too
          status = "available"
        }
      }

      return { ...def, tasks, status }
    })
  }, [user?.journeyProgress])

  // Calculate overall progress
  const totalTasks = stages.reduce((sum, s) => sum + s.tasks.length, 0)
  const completedTasks = stages.reduce((sum, s) => sum + s.tasks.filter((t) => t.done).length, 0)
  const overallProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  // Determine current stage
  const currentStage = stages.find((s) => s.status === "in-progress") || stages.find((s) => s.status === "available") || stages[0]

  // Get next deadline based on current stage
  const getNextAction = () => {
    if (!currentStage) return "Start your journey"
    const nextTask = currentStage.tasks.find((t) => !t.done)
    return nextTask ? nextTask.label : "Continue to the next stage"
  }

  const studentName = user?.firstName || "Student"
  const activeStage = stages.find((s) => s.id === selectedStage)

  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415] flex items-center justify-center">
        <Card className="p-8 bg-white/5 border-white/10 text-center max-w-md mx-4">
          <div className="w-16 h-16 rounded-2xl bg-[#C9A227]/20 flex items-center justify-center mx-auto mb-6">
            <Icons.user className="w-8 h-8 text-[#C9A227]" />
          </div>
          <h2 className="text-2xl font-black text-white mb-2">Sign In Required</h2>
          <p className="text-white/60 mb-6">Create an account or sign in to track your journey progress and access your personalized dashboard.</p>
          <div className="flex flex-col gap-3">
            <Button className="bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400" asChild>
              <Link href="/signup">Create Account</Link>
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415]">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#C9A227]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[200px] bg-[#4B2E83]/20 rounded-full blur-[100px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 py-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#C9A227] font-bold text-sm uppercase tracking-widest mb-1"
              >
                Welcome back, {studentName}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-4xl font-black text-white"
              >
                YOUR JOURNEY{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-400">
                  DASHBOARD
                </span>
              </motion.h1>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/30 font-bold px-3 py-1.5">
                {overallProgress}% Complete
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 pb-16 relative z-10">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Overall Progress", value: `${overallProgress}%`, icon: Icons.trendingUp, accent: true },
            { label: "Current Stage", value: currentStage?.title || "Getting Started", icon: Icons.fileText, accent: false },
            { label: "Next Deadline", value: "March 15, 2026", icon: Icons.calendar, accent: false },
            { label: "Next Action", value: getNextAction(), icon: Icons.arrowRight, accent: false },
          ].map((item, i) => {
            const ItemIcon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Card className={`p-5 border ${item.accent ? "bg-[#C9A227]/10 border-[#C9A227]/30" : "bg-white/5 border-white/10"}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.accent ? "bg-[#C9A227]/20" : "bg-white/5"}`}>
                      <ItemIcon className={`w-5 h-5 ${item.accent ? "text-[#C9A227]" : "text-white/40"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white/40 uppercase tracking-wider font-medium">{item.label}</p>
                      <p className={`text-sm font-bold truncate ${item.accent ? "text-[#C9A227]" : "text-white"}`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card className="p-5 bg-white/5 border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">Journey Progress</h2>
              <span className="text-[#C9A227] font-black text-lg">{overallProgress}%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A227] to-yellow-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-xs text-white/40 mt-2">{completedTasks} of {totalTasks} tasks completed. Keep it up!</p>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Journey Roadmap */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-black text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#C9A227] rounded-full" />
              My Journey
            </h2>

            <div className="relative flex flex-col gap-2">
              {/* Connecting line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-emerald-500/30 via-[#C9A227]/30 to-white/10" />

              {stages.map((stage, i) => {
                const StageIcon = stage.icon
                const config = statusConfig[stage.status]
                const isActive = selectedStage === stage.id
                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                  >
                    <button
                      onClick={() => setSelectedStage(isActive ? null : stage.id)}
                      disabled={stage.status === "locked"}
                      className={`w-full text-left flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 border border-[#C9A227]/30"
                          : stage.status === "locked"
                            ? "opacity-40 cursor-not-allowed"
                            : "hover:bg-white/5"
                      }`}
                    >
                      {/* Node */}
                      <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center border-2 flex-shrink-0 ${config.bgColor}`}>
                        {stage.status === "completed" ? (
                          <Icons.check className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <StageIcon className={`w-5 h-5 ${config.color}`} />
                        )}
                        {stage.status === "in-progress" && (
                          <motion.div
                            className="absolute -inset-1 rounded-xl border-2 border-[#C9A227]/40"
                            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className={`font-bold text-sm ${stage.status === "locked" ? "text-white/30" : "text-white"}`}>
                            {stage.title}
                          </h3>
                          <Badge
                            className={`text-[10px] px-2 py-0 ${
                              stage.status === "completed"
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                : stage.status === "in-progress"
                                  ? "bg-[#C9A227]/20 text-[#C9A227] border-[#C9A227]/30"
                                  : stage.status === "available"
                                    ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                    : "bg-white/5 text-white/20 border-white/10"
                            }`}
                          >
                            {config.label}
                          </Badge>
                        </div>
                        <p className="text-xs text-white/40">{stage.description}</p>
                      </div>

                      {stage.status !== "locked" && (
                        <Icons.chevronRight className={`w-5 h-5 text-white/20 flex-shrink-0 mt-3 transition-transform ${isActive ? "rotate-90" : ""}`} />
                      )}
                    </button>

                    {/* Expanded detail with interactive tasks */}
                    <AnimatePresence>
                      {isActive && activeStage && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden ml-16"
                        >
                          <div className="p-4 mt-1 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
                              Tasks - Click to mark complete
                            </h4>
                            <ul className="flex flex-col gap-2 mb-4">
                              {activeStage.tasks.map((task, ti) => (
                                <li key={ti}>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      toggleTask(activeStage.id, task.label)
                                    }}
                                    className="flex items-center gap-2 w-full text-left hover:bg-white/5 rounded-lg p-1.5 -m-1.5 transition-colors"
                                  >
                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${task.done ? "bg-emerald-500/20" : "bg-white/5 border border-white/20"}`}>
                                      {task.done && <Icons.check className="w-2.5 h-2.5 text-emerald-400" />}
                                    </div>
                                    <span className={`text-sm ${task.done ? "text-white/40 line-through" : "text-white/70"}`}>
                                      {task.label}
                                    </span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                            <Button
                              size="sm"
                              className="bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400"
                              asChild
                            >
                              <Link href={activeStage.detailHref}>
                                {activeStage.status === "completed" ? "Review" : "Continue"}
                                <Icons.arrowRight className="w-3 h-3 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Notifications */}
            <div>
              <h2 className="text-lg font-black text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C9A227] rounded-full" />
                Alerts
              </h2>
              <div className="flex flex-col gap-3">
                {notifications.map((notif, i) => (
                  <motion.div
                    key={notif.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Card className="p-4 bg-white/5 border-white/10 hover:border-[#C9A227]/30 transition-colors">
                      <p className="text-sm text-white/80 mb-1">{notif.message}</p>
                      <p className="text-xs text-white/30">{notif.time}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-black text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C9A227] rounded-full" />
                Quick Links
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "My Tasks", icon: Icons.fileText, href: "/journey/steps/application" },
                  { label: "Documents", icon: Icons.fileText, href: "/journey/steps/documents" },
                  { label: "Financial Aid", icon: Icons.dollarSign, href: "/journey/steps/financial-aid" },
                  { label: "Career Path", icon: Icons.briefcase, href: "/journey/careers" },
                  { label: "Campus Life", icon: Icons.users, href: "/journey/explore" },
                  { label: "Ask Miles", icon: Icons.sparkles, href: "/chat" },
                ].map((link) => {
                  const LinkIcon = link.icon
                  return (
                    <Link key={link.label} href={link.href} className="group">
                      <Card className="p-4 bg-white/5 border-white/10 hover:border-[#C9A227]/30 transition-all text-center">
                        <LinkIcon className="w-5 h-5 text-white/30 mx-auto mb-2 group-hover:text-[#C9A227] transition-colors" />
                        <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">{link.label}</span>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* AI Recommendation */}
            <Card className="p-5 bg-gradient-to-br from-[#4B2E83]/30 to-[#1a0a2e] border-[#4B2E83]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/20 flex items-center justify-center">
                  <Icons.sparkles className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">AI Recommendation</p>
                  <p className="text-white/40 text-xs">Based on your progress</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {overallProgress < 10
                  ? "Start by exploring the campus and completing your onboarding questionnaire to personalize your journey."
                  : overallProgress < 30
                    ? "Great start! Focus on completing your application next to move forward in your journey."
                    : "You are making great progress! Consider submitting your FAFSA this week to maximize your financial aid eligibility."}
              </p>
              <Button
                size="sm"
                className="w-full bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400"
                asChild
              >
                <Link href={currentStage?.detailHref || "/journey/onboarding"}>
                  {overallProgress < 10 ? "Start Onboarding" : "Continue Journey"}
                  <Icons.arrowRight className="w-3 h-3 ml-2" />
                </Link>
              </Button>
            </Card>

            {/* Enrollment Checklist Link */}
            <Card className="p-5 bg-white/5 border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Icons.check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Enrollment Checklist</p>
                  <p className="text-white/40 text-xs">Track admissions steps</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 font-bold"
                asChild
              >
                <Link href="/portal">
                  View Checklist
                  <Icons.arrowRight className="w-3 h-3 ml-2" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
