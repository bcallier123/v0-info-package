"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

const journeySteps = [
  {
    number: "01",
    title: "Discover Miles",
    description: "Explore programs, campus life, and what makes Miles College unique.",
    icon: Icons.search,
    color: "from-[#4B2E83] to-purple-600",
  },
  {
    number: "02",
    title: "Apply & Get Admitted",
    description: "Complete your free application and submit required documents.",
    icon: Icons.fileText,
    color: "from-[#C9A227] to-yellow-500",
  },
  {
    number: "03",
    title: "Secure Your Future",
    description: "Complete FAFSA, apply for scholarships, and accept your offer.",
    icon: Icons.dollarSign,
    color: "from-emerald-600 to-green-500",
  },
  {
    number: "04",
    title: "Begin Your Legacy",
    description: "Attend orientation, register for classes, and join the Golden Bear family.",
    icon: Icons.graduationCap,
    color: "from-[#4B2E83] to-purple-600",
  },
  {
    number: "05",
    title: "Thrive & Succeed",
    description: "Access advising, mentorship, career prep, and student success resources.",
    icon: Icons.trendingUp,
    color: "from-[#C9A227] to-yellow-500",
  },
  {
    number: "06",
    title: "Launch Your Career",
    description: "Graduate with purpose, join the alumni network, and build your career.",
    icon: Icons.briefcase,
    color: "from-[#4B2E83] to-purple-600",
  },
]

export function JourneyPreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415] relative overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#4B2E83]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[120px]" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A227] font-black uppercase tracking-[0.3em] text-sm mb-4">
            Your Personalized Path
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-white mb-4">
            THE MILES{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-400">
              JOURNEY
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Every step is guided. Every milestone is celebrated.
            From your first click to your career launch, we are with you.
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A227]/40 via-[#4B2E83]/30 to-transparent hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A227]/40 via-[#4B2E83]/30 to-transparent md:hidden" />

          <div className="flex flex-col gap-8">
            {journeySteps.map((step, i) => {
              const StepIcon = step.icon
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step content */}
                  <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#C9A227]/30 transition-all duration-300 group`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="text-xs font-bold text-[#C9A227]/60 uppercase tracking-widest">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                    >
                      <StepIcon className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="text-lg px-12 py-7 font-black bg-[#C9A227] hover:bg-yellow-400 text-[#1a0a2e] shadow-xl hover:shadow-2xl hover:shadow-[#C9A227]/20"
            asChild
          >
            <Link href="/journey/onboarding">
              Begin Your Journey
              <Icons.arrowRight className="w-5 h-5 ml-3" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4B2E83]/30 to-transparent" />
    </section>
  )
}
