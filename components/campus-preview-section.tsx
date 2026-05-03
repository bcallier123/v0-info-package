"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

const campusCards = [
  {
    title: "Online Programs",
    description: "30+ accredited degree programs available 100% online with flexible scheduling.",
    image: "/images/online-learning-hero.jpg",
    href: "/programs",
  },
  {
    title: "How It Works",
    description: "Canvas LMS, live lectures, recorded sessions, and collaborative learning tools.",
    image: "/images/library-group.jpg",
    href: "/online",
  },
  {
    title: "Virtual Student Life",
    description: "Study groups, virtual events, online organizations, and a connected community.",
    image: "/images/tailgate-students.jpg",
    href: "/campus-life",
  },
  {
    title: "Student Resources",
    description: "Virtual advising, online tutoring, digital library, and dedicated tech support.",
    image: "/images/20240203-dscf2616.jpg",
    href: "/housing-dining",
  },
  {
    title: "Career Outcomes",
    description: "Virtual career coaching, interview prep, job boards, and alumni networking.",
    image: "/images/graduation-ceremony.jpg",
    href: "/journey/careers",
  },
]

export function CampusPreviewSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px] hidden sm:block" />

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
            Online Platform
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-3 sm:mb-4">
            EVERYTHING YOU{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-500">
              NEED
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto">
            Your complete online learning experience -- all in one place.
          </p>
        </motion.div>

        {/* Campus cards - horizontal scroll on mobile */}
        <div className="-mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex gap-3 overflow-x-auto snap-x-mandatory scrollbar-hide pb-4 sm:pb-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible max-w-5xl sm:mx-auto">
            {campusCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-shrink-0 w-[72vw] sm:w-auto snap-start"
              >
                <Link href={card.href} className="group block">
                  <Card className="overflow-hidden border-border hover:border-[#C9A227]/30 transition-all duration-300 bg-card h-full">
                    <div className="relative h-44 sm:h-56 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/90 via-[#1a0a2e]/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                        <h3 className="text-base sm:text-xl font-black text-white mb-0.5 sm:mb-1 group-hover:text-[#C9A227] transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-white/70 text-xs sm:text-sm line-clamp-2">{card.description}</p>
                      </div>
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icons.arrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#4B2E83] to-[#2d1b4e] rounded-2xl p-5 sm:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#C9A227]/10 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0">
                <Icons.sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#C9A227]" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-xl font-black text-white mb-1 sm:mb-2">Ask Miles AI Assistant</h3>
                <p className="text-white/70 text-xs sm:text-base leading-relaxed">
                  Your 24/7 personal guide for online programs, admissions, financial aid, and student support.
                </p>
              </div>
              <Button
                className="bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400 shadow-lg whitespace-nowrap w-full sm:w-auto h-11 sm:h-auto text-sm sm:text-base rounded-full sm:rounded-md"
                size="lg"
                asChild
              >
                <Link href="/chat">
                  Chat with Miles
                  <Icons.arrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
