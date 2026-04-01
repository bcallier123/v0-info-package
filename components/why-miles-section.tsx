"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Image from "next/image"

const reasons = [
  {
    icon: Icons.sparkles,
    title: "AI-Guided Support",
    description: "A personal AI concierge that knows your journey, suggests next steps, and answers your questions 24/7.",
  },
  {
    icon: Icons.users,
    title: "17:1 Personal Attention",
    description: "Small class sizes mean professors know your name and invest in your individual success.",
  },
  {
    icon: Icons.award,
    title: "97% Scholarship Rate",
    description: "Nearly every student receives financial support. We invest in your future because you are worth it.",
  },
  {
    icon: Icons.briefcase,
    title: "Career-Connected Learning",
    description: "From freshman year through alumni networks, every step connects directly to career success.",
  },
  {
    icon: Icons.heart,
    title: "A Community of Belonging",
    description: "Join a tight-knit family where every student is valued, celebrated, and empowered to lead.",
  },
  {
    icon: Icons.trophy,
    title: "Championship Tradition",
    description: "NCAA Division II athletics, the legendary Purple Marching Machine, and 125+ years of excellence.",
  },
]

const studentStories = [
  {
    name: "Aisha M.",
    major: "Biology, Pre-Med",
    year: "Class of 2025",
    quote: "Miles didn't just prepare me for medical school -- it showed me I belong there.",
    image: "/images/20240201-dscf7379.jpg",
  },
  {
    name: "Marcus T.",
    major: "Business Administration",
    year: "Class of 2024",
    quote: "The journey from application to graduation felt guided every step of the way.",
    image: "/images/20240201-dscf7396.jpg",
  },
  {
    name: "Destiny R.",
    major: "Communications",
    year: "Class of 2026",
    quote: "I transferred to Miles and immediately felt at home. The support system here is unlike anything.",
    image: "/images/20240203-dscf2616.jpg",
  },
]

export function WhyMilesSection() {
  return (
    <section id="why-miles" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background depth - desktop only */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4B2E83]/5 rounded-full blur-[120px] hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px] hidden sm:block" />

      <div className="px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-[#C9A227] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-sm mb-3 sm:mb-4">
            Why Miles College
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-foreground mb-3 sm:mb-4">
            MORE THAN A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-500">
              COLLEGE
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A complete digital campus experience that wraps around you from your first click to your full career pathway.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-16 sm:mb-24">
          {reasons.map((reason, i) => {
            const IconComp = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="p-4 sm:p-6 h-full bg-card border-border hover:border-[#C9A227]/30 transition-all duration-300 group">
                  <div className="flex items-start gap-3 sm:block">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#4B2E83]/10 flex items-center justify-center flex-shrink-0 sm:mb-4 group-hover:bg-[#C9A227]/10 transition-colors">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-[#4B2E83] group-hover:text-[#C9A227] transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-black text-foreground mb-1 sm:mb-2 text-base sm:text-lg">{reason.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Student Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-[#C9A227] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-sm mb-3 sm:mb-4">
            Student Stories
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            REAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-500">
              JOURNEYS
            </span>
          </h2>
        </motion.div>

        {/* Stories - horizontal scroll on mobile, grid on desktop */}
        <div className="-mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex gap-4 overflow-x-auto snap-x-mandatory scrollbar-hide pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible">
            {studentStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-[75vw] sm:w-auto snap-start"
              >
                <Card className="overflow-hidden bg-card border-border group hover:border-[#C9A227]/30 transition-all duration-300 h-full">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={`${story.name}, ${story.major}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <p className="text-white font-bold text-xs sm:text-sm">{story.name}</p>
                      <p className="text-[#C9A227] text-[10px] sm:text-xs font-medium">
                        {story.major} | {story.year}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="text-[#C9A227]/60 text-2xl sm:text-4xl font-serif leading-none mb-1 sm:mb-2">
                      &ldquo;
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed italic">
                      {story.quote}
                    </p>
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
