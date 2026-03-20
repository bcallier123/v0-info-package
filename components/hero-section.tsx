"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

const journeyStages = [
  "Discovery",
  "Application",
  "Acceptance",
  "Enrollment",
  "Success",
  "Career",
]

export function HeroSection() {
  const [activeWord, setActiveWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % journeyStages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/img-0036.jpeg"
          alt="Miles College campus with students"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Layered gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e]/95 via-[#4B2E83]/70 to-[#1a0a2e]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0415] via-transparent to-[#4B2E83]/30" />
      </div>

      {/* Animated ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#C9A227]/10 blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#4B2E83]/20 blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#C9A227]/5 blur-[80px]"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Glowing journey path line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none hidden lg:block">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-[#C9A227]/40 to-transparent"
          style={{ height: "100%" }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent z-20" />

      {/* Main content */}
      <div className="relative z-10 min-h-[100svh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <span className="px-4 py-2 text-xs font-bold bg-[#C9A227] text-[#1a0a2e] uppercase tracking-widest rounded-full">
                  AI-Powered Journey
                </span>
                <span className="px-4 py-2 text-xs font-bold bg-white/10 text-white/90 border border-white/20 uppercase tracking-widest rounded-full backdrop-blur-sm">
                  HBCU Since 1898
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <p className="text-[#C9A227] font-bold text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                  Miles College Journey Experience
                </p>
                <h1 className="font-black leading-[0.9] tracking-tight">
                  <span className="block text-white text-4xl md:text-5xl lg:text-7xl mb-2">
                    STEP INTO
                  </span>
                  <span className="block text-white text-4xl md:text-5xl lg:text-7xl mb-2">
                    YOUR MILES
                  </span>
                  <span className="block relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-yellow-300 to-[#C9A227] text-4xl md:text-5xl lg:text-7xl">
                      JOURNEY
                    </span>
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-yellow-400 to-[#C9A227] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-8"
              >
                From your first spark of interest to a thriving career, we guide you
                through every milestone. Your personalized, AI-powered path to{" "}
                <span className="text-[#C9A227] font-semibold">becoming a Golden Bear.</span>
              </motion.p>

              {/* Animated journey stage indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8"
              >
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
                  Your Journey Stage
                </p>
                <div className="flex flex-wrap gap-2">
                  {journeyStages.map((stage, i) => (
                    <motion.span
                      key={stage}
                      className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-500 ${
                        i === activeWord
                          ? "bg-[#C9A227] text-[#1a0a2e] shadow-lg shadow-[#C9A227]/30"
                          : "bg-white/5 text-white/40 border border-white/10"
                      }`}
                      animate={i === activeWord ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {stage}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="group text-lg px-10 py-7 font-black bg-[#C9A227] hover:bg-yellow-400 text-[#1a0a2e] shadow-xl hover:shadow-2xl hover:shadow-[#C9A227]/20 transition-all duration-300"
                  asChild
                >
                  <Link href="/journey/onboarding">
                    <span className="flex items-center gap-3">
                      Start Your Journey
                      <Icons.arrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 font-bold border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
                  asChild
                >
                  <Link href="/journey/explore">Explore Miles</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 font-bold border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227]/10 hover:border-[#C9A227]/50"
                  asChild
                >
                  <Link href="/journey/careers">See Your Future</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right: Journey preview card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-[#C9A227]/30 via-[#4B2E83]/20 to-[#C9A227]/10 rounded-2xl blur-2xl"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
                  {/* Glass card header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-yellow-500 flex items-center justify-center">
                      <Icons.sparkles className="w-6 h-6 text-[#1a0a2e]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Your Journey Preview</p>
                      <p className="text-white/50 text-xs">Personalized for you</p>
                    </div>
                  </div>

                  {/* Mini journey roadmap */}
                  <div className="flex flex-col gap-1">
                    {[
                      { label: "Discover Miles", status: "complete", icon: Icons.search },
                      { label: "Submit Application", status: "active", icon: Icons.fileText },
                      { label: "Financial Aid", status: "locked", icon: Icons.dollarSign },
                      { label: "Get Accepted", status: "locked", icon: Icons.award },
                      { label: "Orientation", status: "locked", icon: Icons.users },
                      { label: "Begin Classes", status: "locked", icon: Icons.bookOpen },
                      { label: "Career Launch", status: "locked", icon: Icons.briefcase },
                    ].map((step, i) => {
                      const StepIcon = step.icon
                      return (
                        <motion.div
                          key={step.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="flex items-center gap-3 py-2.5"
                        >
                          <div className="relative flex flex-col items-center">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                step.status === "complete"
                                  ? "bg-green-500/20 border border-green-500/40"
                                  : step.status === "active"
                                    ? "bg-[#C9A227]/20 border-2 border-[#C9A227] shadow-lg shadow-[#C9A227]/20"
                                    : "bg-white/5 border border-white/10"
                              }`}
                            >
                              {step.status === "complete" ? (
                                <Icons.check className="w-4 h-4 text-green-400" />
                              ) : (
                                <StepIcon
                                  className={`w-4 h-4 ${
                                    step.status === "active" ? "text-[#C9A227]" : "text-white/30"
                                  }`}
                                />
                              )}
                            </div>
                            {i < 6 && (
                              <div
                                className={`w-px h-4 ${
                                  step.status === "complete"
                                    ? "bg-green-500/40"
                                    : step.status === "active"
                                      ? "bg-[#C9A227]/30"
                                      : "bg-white/10"
                                }`}
                              />
                            )}
                          </div>
                          <span
                            className={`text-sm font-medium ${
                              step.status === "complete"
                                ? "text-green-400"
                                : step.status === "active"
                                  ? "text-[#C9A227] font-bold"
                                  : "text-white/30"
                            }`}
                          >
                            {step.label}
                          </span>
                          {step.status === "active" && (
                            <motion.span
                              className="ml-auto text-xs font-bold text-[#C9A227] bg-[#C9A227]/10 px-2 py-0.5 rounded-full"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Current
                            </motion.span>
                          )}
                          {step.status === "complete" && (
                            <span className="ml-auto text-xs text-green-400/60">Done</span>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/50">Journey Progress</span>
                      <span className="text-xs font-bold text-[#C9A227]">14%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#C9A227] to-yellow-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "14%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#why-miles"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-[#C9A227] transition-colors"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Your Path</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icons.chevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
