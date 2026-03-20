"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Icons } from "@/components/icons"
import Link from "next/link"

const academicProgress = {
  gpa: "3.45",
  creditsCompleted: 48,
  creditsRequired: 120,
  major: "Biology, Pre-Med",
  advisor: "Dr. Angela Foster",
  classification: "Sophomore",
}

const milestones = [
  { label: "Freshman Year Complete", done: true },
  { label: "Declared Major", done: true },
  { label: "Dean's List (Fall 2025)", done: true },
  { label: "Internship Secured", done: false },
  { label: "Junior Standing", done: false },
  { label: "Senior Capstone", done: false },
]

const wellnessResources = [
  { name: "Counseling Services", description: "Confidential support and mental health resources", icon: Icons.heart, href: "/chat" },
  { name: "Academic Tutoring", description: "Free peer and professional tutoring", icon: Icons.bookOpen, href: "/chat" },
  { name: "Career Services", description: "Internships, resume help, and career coaching", icon: Icons.briefcase, href: "/journey/careers" },
  { name: "Student Wellness", description: "Health services and wellness programs", icon: Icons.shield, href: "/chat" },
]

const upcomingEvents = [
  { title: "Spring Career Fair", date: "March 25, 2026", type: "Career" },
  { title: "Midterm Study Sessions", date: "March 20-24, 2026", type: "Academic" },
  { title: "SGA Elections", date: "April 2, 2026", type: "Campus" },
  { title: "Research Symposium", date: "April 15, 2026", type: "Academic" },
]

export default function StudentSuccessPage() {
  const progressPercent = Math.round((academicProgress.creditsCompleted / academicProgress.creditsRequired) * 100)

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415]">
      {/* Header */}
      <section className="relative overflow-hidden pt-8 pb-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#C9A227]/10 rounded-full blur-[120px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link href="/journey/dashboard" className="text-white/40 hover:text-white text-sm font-medium flex items-center gap-2 mb-6 transition-colors">
            <Icons.chevronRight className="w-4 h-4 rotate-180" />
            Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[#C9A227] font-bold text-sm uppercase tracking-widest mb-1">Student Success</p>
              <h1 className="text-2xl md:text-4xl font-black text-white">
                COMMAND{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-400">
                  CENTER
                </span>
              </h1>
            </div>
            <Badge className="bg-[#C9A227]/20 text-[#C9A227] border-[#C9A227]/30 font-bold self-start">
              {academicProgress.classification}
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 pb-16 relative z-10">
        {/* Academic Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "GPA", value: academicProgress.gpa, accent: true },
            { label: "Credits", value: `${academicProgress.creditsCompleted}/${academicProgress.creditsRequired}`, accent: false },
            { label: "Major", value: academicProgress.major, accent: false },
            { label: "Advisor", value: academicProgress.advisor, accent: false },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className={`p-5 ${item.accent ? "bg-[#C9A227]/10 border-[#C9A227]/30" : "bg-white/5 border-white/10"}`}>
                <p className="text-xs text-white/40 uppercase tracking-wider font-medium mb-1">{item.label}</p>
                <p className={`text-sm font-bold truncate ${item.accent ? "text-[#C9A227] text-lg" : "text-white"}`}>
                  {item.value}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Degree Progress */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="p-5 bg-white/5 border-white/10 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">Degree Progress</h2>
              <span className="text-[#C9A227] font-black">{progressPercent}%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A227] to-yellow-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
            <p className="text-xs text-white/40">{academicProgress.creditsCompleted} of {academicProgress.creditsRequired} credits completed toward your {academicProgress.major} degree.</p>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Milestones */}
            <Card className="p-6 bg-white/5 border-white/10">
              <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C9A227] rounded-full" />
                Success Milestones
              </h2>
              <div className="flex flex-col gap-3">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3 py-2"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      m.done ? "bg-emerald-500/20" : "bg-white/5 border border-white/20"
                    }`}>
                      {m.done ? (
                        <Icons.check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      )}
                    </div>
                    <span className={`text-sm ${m.done ? "text-white/40" : "text-white font-medium"}`}>
                      {m.label}
                    </span>
                    {m.done && <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] ml-auto">Done</Badge>}
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="p-6 bg-white/5 border-white/10">
              <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C9A227] rounded-full" />
                Upcoming Events
              </h2>
              <div className="flex flex-col gap-3">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="flex items-center justify-between p-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors">
                    <div>
                      <p className="text-sm font-bold text-white">{event.title}</p>
                      <p className="text-xs text-white/40">{event.date}</p>
                    </div>
                    <Badge className="bg-[#4B2E83]/30 text-white/60 border-[#4B2E83]/40 text-[10px]">{event.type}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Support Resources */}
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#C9A227] rounded-full" />
              Support Resources
            </h2>
            {wellnessResources.map((resource) => {
              const ResourceIcon = resource.icon
              return (
                <Link key={resource.name} href={resource.href} className="group">
                  <Card className="p-4 bg-white/5 border-white/10 hover:border-[#C9A227]/30 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#4B2E83]/30 flex items-center justify-center flex-shrink-0">
                        <ResourceIcon className="w-5 h-5 text-[#C9A227]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-[#C9A227] transition-colors">{resource.name}</p>
                        <p className="text-xs text-white/40">{resource.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}

            {/* AI Advisor */}
            <Card className="p-5 bg-gradient-to-br from-[#4B2E83]/30 to-[#1a0a2e] border-[#4B2E83]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/20 flex items-center justify-center">
                  <Icons.sparkles className="w-5 h-5 text-[#C9A227]" />
                </div>
                <p className="text-white font-bold text-sm">Miles AI Advisor</p>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Get personalized academic advice, study tips, and career guidance from your AI advisor.
              </p>
              <Button size="sm" className="w-full bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400" asChild>
                <Link href="/chat">
                  Chat Now
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
