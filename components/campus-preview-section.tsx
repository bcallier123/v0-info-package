"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

const campusCards = [
  {
    title: "Online Programs",
    description: "30+ accredited degree programs available 100% online with flexible scheduling.",
    image: "/images/online-learning-hero.jpg",
    href: "/programs",
    icon: Icons.graduationCap,
    stat: "30+",
    statLabel: "Programs",
  },
  {
    title: "How It Works",
    description: "Canvas LMS, live lectures, recorded sessions, and collaborative learning tools.",
    image: "/images/library-group.jpg",
    href: "/online",
    icon: Icons.monitor,
    stat: "24/7",
    statLabel: "Access",
  },
  {
    title: "Virtual Student Life",
    description: "Study groups, virtual events, online organizations, and a connected community.",
    image: "/images/tailgate-students.jpg",
    href: "/campus-life",
    icon: Icons.users,
    stat: "40+",
    statLabel: "Organizations",
  },
  {
    title: "Student Resources",
    description: "Virtual advising, online tutoring, digital library, and dedicated tech support.",
    image: "/images/20240203-dscf2616.jpg",
    href: "/housing-dining",
    icon: Icons.headphones,
    stat: "100%",
    statLabel: "Support",
  },
  {
    title: "Career Outcomes",
    description: "Virtual career coaching, interview prep, job boards, and alumni networking.",
    image: "/images/graduation-ceremony.jpg",
    href: "/journey/careers",
    icon: Icons.briefcase,
    stat: "95%",
    statLabel: "Placement",
  },
]

export function CampusPreviewSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C9A227]/5 rounded-full blur-[150px] hidden sm:block" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#4B2E83]/5 rounded-full blur-[120px] hidden sm:block" />
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 162, 39, 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 mb-5 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
            <span className="text-[#C9A227] font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs">
              Online Platform
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4 sm:mb-5">
            EVERYTHING YOU{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-yellow-400 to-[#C9A227] animate-shimmer">
              NEED
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A227]/40" />
            <div className="w-2 h-2 rounded-full bg-[#C9A227]/30" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A227]/40" />
          </div>

          <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            Your complete online learning experience -- all in one place.
          </p>
        </motion.div>

        {/* Featured card -- first card gets hero treatment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6 max-w-5xl mx-auto"
        >
          <Link href={campusCards[0].href} className="group block">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-[#1a0a2e] via-[#2d1450] to-[#1a0a2e] relative">
              <div className="absolute inset-0 noise-overlay opacity-50" />
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9A227]/8 rounded-full blur-[100px]" />

              <div className="grid md:grid-cols-2 relative z-10">
                <div className="relative h-56 sm:h-64 md:h-auto md:min-h-[320px] overflow-hidden">
                  <Image
                    src={campusCards[0].image}
                    alt={campusCards[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a0a2e]/60 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/80 to-transparent md:hidden" />
                </div>

                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit bg-[#C9A227]/15 text-[#C9A227] border-[#C9A227]/25 font-bold text-[10px] uppercase tracking-wider mb-4">
                    Featured
                  </Badge>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-300">
                    {campusCards[0].title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                    {campusCards[0].description}
                  </p>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex flex-col">
                      <span className="text-[#C9A227] font-black text-3xl">{campusCards[0].stat}</span>
                      <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{campusCards[0].statLabel}</span>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="flex flex-col">
                      <span className="text-[#C9A227] font-black text-3xl">97%</span>
                      <span className="text-white/40 text-xs font-medium uppercase tracking-wider">Receive Aid</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#C9A227] font-bold text-sm group-hover:gap-3 transition-all duration-300">
                    Explore Programs
                    <Icons.arrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Remaining cards - asymmetric bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {campusCards.slice(1).map((card, i) => {
            const CardIcon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={card.href} className="group block h-full">
                  <Card className="overflow-hidden border-border hover:border-[#C9A227]/30 transition-all duration-500 bg-card h-full relative group-hover:shadow-lg group-hover:shadow-[#C9A227]/5">
                    {/* Gold accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative h-36 sm:h-44 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/90 via-[#1a0a2e]/40 to-transparent" />

                      {/* Stat badge overlay */}
                      <div className="absolute top-3 left-3">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1a0a2e]/70 backdrop-blur-sm border border-white/10">
                          <span className="text-[#C9A227] font-black text-xs">{card.stat}</span>
                          <span className="text-white/50 text-[10px] font-medium">{card.statLabel}</span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#C9A227]/20 backdrop-blur-sm flex items-center justify-center border border-[#C9A227]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        <CardIcon className="w-4 h-4 text-[#C9A227]" />
                      </div>

                      {/* Bottom content */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-sm sm:text-base font-black text-white group-hover:text-[#C9A227] transition-colors duration-300">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4">
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">{card.description}</p>
                      <div className="flex items-center gap-1 text-[#C9A227] font-bold text-xs mt-3 group-hover:gap-2 transition-all duration-300">
                        Learn more
                        <Icons.arrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* AI Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl">
            {/* Full background treatment */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B2E83] via-[#2d1450] to-[#1a0a2e]" />
            <div className="absolute inset-0 noise-overlay opacity-50" />
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201, 162, 39, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201, 162, 39, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9A227]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#4B2E83]/20 rounded-full blur-[80px]" />

            <div className="relative z-10 p-6 sm:p-10 lg:p-14">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                {/* Icon with glow */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#C9A227]/20 rounded-2xl blur-xl scale-150" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#C9A227] to-yellow-500 flex items-center justify-center shadow-lg shadow-[#C9A227]/20">
                    <Icons.sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#1a0a2e]" />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Badge className="bg-[#C9A227]/15 text-[#C9A227] border-[#C9A227]/25 font-bold text-[10px] uppercase tracking-wider">
                      AI-Powered
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3">
                    Ask Miles AI Assistant
                  </h3>
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xl">
                    Your 24/7 personal guide for online programs, admissions, financial aid, and student support.
                    Get instant, personalized answers to every question.
                  </p>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  <Button
                    className="bg-[#C9A227] text-[#1a0a2e] font-black hover:bg-yellow-400 shadow-xl shadow-[#C9A227]/20 whitespace-nowrap w-full lg:w-auto h-12 sm:h-14 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-[1.02] px-8"
                    size="lg"
                    asChild
                  >
                    <Link href="/chat">
                      Chat with Miles
                      <Icons.arrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
