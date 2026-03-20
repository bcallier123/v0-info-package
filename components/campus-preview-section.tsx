"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

const campusCards = [
  {
    title: "Student Life",
    description: "40+ student organizations, Greek life, and vibrant campus culture.",
    image: "/images/tailgate-students.jpg",
    href: "/journey/explore",
  },
  {
    title: "Athletics & Spirit",
    description: "Golden Bears athletics and the legendary Purple Marching Machine.",
    image: "/images/purple-marching-machine.jpeg",
    href: "/journey/explore",
  },
  {
    title: "Academic Excellence",
    description: "30+ degree programs with personalized mentorship and real-world preparation.",
    image: "/images/library-group.jpg",
    href: "/programs",
  },
  {
    title: "Graduation & Beyond",
    description: "Career placement, alumni networks, and lifelong Miles College connections.",
    image: "/images/graduation-ceremony.jpg",
    href: "/journey/careers",
  },
]

export function CampusPreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A227] font-black uppercase tracking-[0.3em] text-sm mb-4">
            Digital Campus
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            EXPERIENCE THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-500">
              CAMPUS
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Step into a digital preview of the Golden Bear experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {campusCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={card.href} className="group block">
                <Card className="overflow-hidden border-border hover:border-[#C9A227]/30 transition-all duration-300 bg-card">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/90 via-[#1a0a2e]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-black text-white mb-1 group-hover:text-[#C9A227] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-white/70 text-sm">{card.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icons.arrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* AI Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#4B2E83] to-[#2d1b4e] rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9A227]/10 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0">
                <Icons.sparkles className="w-8 h-8 text-[#C9A227]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-black text-white mb-2">Ask Miles AI Assistant</h3>
                <p className="text-white/70 leading-relaxed">
                  Your 24/7 personal guide. Ask anything about admissions, financial aid, campus life,
                  or your journey -- Miles AI is here to help.
                </p>
              </div>
              <Button
                className="bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400 shadow-lg whitespace-nowrap"
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
