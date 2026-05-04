"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function StatsSection() {
  const stats = [
    {
      icon: Icons.laptop,
      value: "100%",
      label: "Fully Online",
      color: "text-[#C9A227]",
      glow: "bg-[#C9A227]/10",
    },
    {
      icon: Icons.clock,
      value: "24/7",
      label: "LMS Access",
      color: "text-[#C9A227]",
      glow: "bg-[#4B2E83]/10",
    },
    {
      icon: Icons.graduationCap,
      value: "30+",
      label: "Degree Programs",
      color: "text-[#C9A227]",
      glow: "bg-[#C9A227]/10",
    },
    {
      icon: Icons.award,
      value: "97%",
      label: "Receive Financial Aid",
      color: "text-[#C9A227]",
      glow: "bg-[#4B2E83]/10",
    },
  ]

  const highlights = [
    { icon: Icons.wifi, text: "Learn from anywhere with a reliable internet connection" },
    { icon: Icons.video, text: "Live & recorded lectures on your schedule" },
    { icon: Icons.headphones, text: "Dedicated online student support & advising" },
  ]

  return (
    <section
      id="stats"
      className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C9A227]/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#4B2E83]/8 rounded-full blur-[120px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 162, 39, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 162, 39, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

      <div className="px-5 sm:px-6 max-w-7xl mx-auto relative z-10">
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
              By the Numbers
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            ONLINE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-yellow-400 to-[#C9A227]">
              EXCELLENCE
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#C9A227]/50" />
            <div className="w-2 h-2 rounded-full bg-[#C9A227]/40" />
            <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#C9A227]/50" />
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative p-5 sm:p-8 lg:p-10 text-center bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-[#C9A227]/30 transition-all duration-500 group overflow-hidden">
                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A227] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 ${stat.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-[#C9A227]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C9A227]/20 group-hover:scale-110 transition-all duration-500">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[#C9A227]" />
                    </div>
                    <div className="text-3xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-white/50 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Highlights */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-5">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 sm:p-5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl hover:border-[#C9A227]/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C9A227]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A227]" />
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white/80">{highlight.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4B2E83]/30 to-transparent" />
    </section>
  )
}
