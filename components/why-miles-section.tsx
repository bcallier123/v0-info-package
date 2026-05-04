"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Image from "next/image"

const reasons = [
  {
    icon: Icons.laptop,
    title: "100% Online Degrees",
    description: "Complete your entire degree from anywhere in the world. No campus visits required -- just a laptop and an internet connection.",
    accent: "from-[#4B2E83] to-purple-500",
    iconBg: "bg-[#4B2E83]",
  },
  {
    icon: Icons.clock,
    title: "Learn on Your Schedule",
    description: "Asynchronous coursework plus live virtual sessions let you study when it works for you -- mornings, evenings, or weekends.",
    accent: "from-[#C9A227] to-yellow-400",
    iconBg: "bg-[#C9A227]",
  },
  {
    icon: Icons.award,
    title: "97% Receive Financial Aid",
    description: "Online students qualify for the same scholarships, grants, and financial aid as any Miles student.",
    accent: "from-emerald-600 to-green-400",
    iconBg: "bg-emerald-600",
  },
  {
    icon: Icons.video,
    title: "Live & Recorded Lectures",
    description: "Join professors in real-time or replay lectures on demand. Every class is available whenever you need it.",
    accent: "from-[#4B2E83] to-purple-500",
    iconBg: "bg-[#4B2E83]",
  },
  {
    icon: Icons.headphones,
    title: "Dedicated Online Support",
    description: "Virtual advising, online tutoring, IT help desk, and career services -- all built for the online learner.",
    accent: "from-[#C9A227] to-yellow-400",
    iconBg: "bg-[#C9A227]",
  },
  {
    icon: Icons.sparkles,
    title: "AI-Guided Learning",
    description: "An AI concierge that knows your journey, suggests next steps, and answers your questions 24/7.",
    accent: "from-sky-500 to-blue-400",
    iconBg: "bg-sky-600",
  },
  {
    icon: Icons.briefcase,
    title: "Career-Connected Curriculum",
    description: "Every program connects directly to career outcomes. Graduate with the skills employers are looking for.",
    accent: "from-[#4B2E83] to-purple-500",
    iconBg: "bg-[#4B2E83]",
  },
]

const studentStories = [
  {
    name: "Tamara J.",
    major: "Business Administration, Online",
    year: "Class of 2025",
    quote: "As a working mom, I never thought I could finish my degree. Miles Online made it possible without missing a moment with my kids.",
    image: "/images/20240201-dscf7379.jpg",
  },
  {
    name: "Marcus T.",
    major: "Criminal Justice, Online",
    year: "Class of 2024",
    quote: "I could study after my shifts and still get the same quality education. The professors are just as engaged online.",
    image: "/images/20240201-dscf7396.jpg",
  },
  {
    name: "Destiny R.",
    major: "Communications, Online",
    year: "Class of 2026",
    quote: "Living out of state, I still feel connected to the Miles community. The virtual study groups and events are incredible.",
    image: "/images/20240203-dscf2616.jpg",
  },
]

function FeaturedReasonCard() {
  const FeaturedIcon = reasons[0].icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-4 sm:mb-6"
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1450] to-[#1a0a2e] border-0 p-6 sm:p-10 lg:p-14">
        <div className="absolute inset-0 noise-overlay opacity-50" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9A227]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#4B2E83]/20 rounded-full blur-[80px]" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#C9A227] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#C9A227]/20">
            <FeaturedIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1a0a2e]" />
          </div>
          <div className="flex-1">
            <h3 className="font-black text-white text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3">{reasons[0].title}</h3>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">{reasons[0].description}</p>
          </div>
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[#C9A227] font-black text-2xl">30+</span>
              <span className="text-white/50 text-xs font-medium">Programs</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[#C9A227] font-black text-2xl">24/7</span>
              <span className="text-white/50 text-xs font-medium">Access</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function WhyMilesSection() {
  return (
    <section id="why-miles" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4B2E83]/5 rounded-full blur-[120px] hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px] hidden sm:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4B2E83]/[0.02] rounded-full blur-[150px] hidden lg:block" />

      <div className="px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
            <span className="text-[#C9A227] font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs">
              Why Miles Online
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-foreground mb-4 sm:mb-6">
            YOUR DEGREE,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-yellow-400 to-[#C9A227] animate-shimmer">
              YOUR WAY
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A fully online learning experience built for working professionals, busy parents, and lifelong learners.
          </p>
        </motion.div>

        {/* Featured reason - full width hero card */}
        <FeaturedReasonCard />

        {/* Remaining reasons - asymmetric bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {reasons.slice(1).map((reason, i) => {
            const IconComp = reason.icon
            const isWide = i === 1 // "97% Receive Financial Aid" spans 2 cols
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={isWide ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="relative p-5 sm:p-7 h-full bg-card border-border hover:border-[#C9A227]/30 transition-all duration-500 group overflow-hidden">
                  {/* Accent gradient line at top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Hover glow */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${reason.accent} rounded-full blur-[60px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${reason.iconBg} flex items-center justify-center flex-shrink-0 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="font-black text-foreground mb-2 text-base sm:text-lg">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C9A227]/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Student Stories Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4B2E83]/10 border border-[#4B2E83]/20 mb-6"
          >
            <Icons.heart className="w-3 h-3 text-[#4B2E83]" />
            <span className="text-[#4B2E83] font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs">
              Student Stories
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            REAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-500">
              JOURNEYS
            </span>
          </h2>
        </motion.div>

        {/* Stories grid */}
        <div className="-mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex gap-4 overflow-x-auto snap-x-mandatory scrollbar-hide pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible">
            {studentStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-[80vw] sm:w-auto snap-start"
              >
                <Card className="overflow-hidden bg-card border-border group hover:border-[#C9A227]/30 transition-all duration-500 h-full hover:shadow-xl hover:shadow-[#C9A227]/5">
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={`${story.name}, ${story.major}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-[#1a0a2e]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-black text-sm sm:text-base">{story.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-[#C9A227]/20 text-[#C9A227] text-[10px] sm:text-xs font-bold">
                          {story.year}
                        </span>
                        <span className="text-white/50 text-[10px] sm:text-xs">
                          {story.major}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex gap-3">
                      <div className="text-[#C9A227]/40 text-3xl sm:text-4xl font-serif leading-none flex-shrink-0 -mt-1">
                        &ldquo;
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed italic">
                        {story.quote}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
