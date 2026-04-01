"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

const words = ["FUTURE", "LEGACY", "JOURNEY", "STORY", "DREAMS"]

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const textY = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#0a0415]"
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0d0620] to-[#0a0415]" />
        <motion.div
          className="absolute inset-0"
          style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        >
          <Image
            src="/images/img-0036.jpeg"
            alt="Miles College campus"
            fill
            className="object-cover object-center opacity-30 scale-110"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0415] via-transparent to-[#0a0415]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0415]/80 via-transparent to-[#0a0415]/80" />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] sm:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201, 162, 39, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 162, 39, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Ambient orbs - desktop only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <motion.div
          className="absolute top-[20%] right-[10%] w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%)",
            x: mousePosition.x * 3,
            y: mousePosition.y * 3,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(75, 46, 131, 0.2) 0%, transparent 70%)",
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating context pills - large screens only */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden xl:block"
        style={{ opacity }}
      >
        {[
          { text: "Since 1898", delay: 0 },
          { text: "Birmingham, AL", delay: 0.2 },
          { text: "HBCU Excellence", delay: 0.4 },
          { text: "Golden Bears", delay: 0.6 },
        ].map((element, i) => (
          <motion.div
            key={element.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + element.delay, duration: 0.8 }}
            className={`absolute text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-sm border ${
              i % 2 === 0
                ? "bg-[#C9A227]/10 border-[#C9A227]/20 text-[#C9A227]"
                : "bg-white/5 border-white/10 text-white/60"
            }`}
            style={{
              top: `${20 + i * 18}%`,
              right: i % 2 === 0 ? "8%" : "12%",
            }}
          >
            {element.text}
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-[100svh] flex flex-col justify-end pb-8 sm:justify-center sm:pb-0"
        style={{ y: textY, opacity }}
      >
        <div className="px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
          {/* Top accent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-8 sm:w-16 lg:w-24 h-px bg-gradient-to-r from-[#C9A227] to-transparent" />
            <span className="text-[#C9A227] text-[10px] sm:text-xs lg:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              Miles College
            </span>
          </motion.div>

          {/* Typography Block */}
          <div className="mb-6 sm:mb-10 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="font-black tracking-tighter leading-[0.85]">
                <span className="block text-white/90 text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[120px]">
                  BUILD YOUR
                </span>
              </h1>
            </motion.div>

            {/* Rotating word */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative h-[15vw] sm:h-[12vw] md:h-[10vw] lg:h-[140px] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 80, opacity: 0, rotateX: -45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -80, opacity: 0, rotateX: 45 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 font-black tracking-tighter text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[140px] leading-none"
                  style={{
                    background: "linear-gradient(135deg, #C9A227 0%, #FFD700 50%, #C9A227 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm sm:text-base lg:text-xl text-white/60 leading-relaxed max-w-md sm:max-w-lg lg:max-w-xl mb-8 sm:mb-10"
          >
            Step into an AI-powered journey from discovery to career.{" "}
            <span className="text-white/90 font-medium">
              Where tradition meets innovation
            </span>
            , and every Golden Bear finds their path.
          </motion.p>

          {/* Journey stages - horizontal scroll on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8 sm:mb-10 -mx-5 px-5 sm:mx-0 sm:px-0"
          >
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-2 sm:pb-0 sm:flex-wrap">
              {["Discover", "Apply", "Enroll", "Succeed", "Launch"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <span
                    className={`text-[11px] sm:text-xs lg:text-sm font-semibold whitespace-nowrap ${
                      i === 0 ? "text-[#C9A227]" : "text-white/40"
                    }`}
                  >
                    {stage}
                  </span>
                  {i < 4 && (
                    <div
                      className={`w-4 sm:w-6 lg:w-8 h-px ${
                        i === 0 ? "bg-[#C9A227]" : "bg-white/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16"
          >
            <Button
              size="lg"
              className="group text-sm sm:text-base lg:text-lg h-12 sm:h-14 lg:h-16 px-6 sm:px-10 lg:px-12 font-black bg-[#C9A227] hover:bg-[#d4af37] text-[#0a0415] rounded-full transition-all duration-500"
              asChild
            >
              <Link href="/journey/onboarding">
                <span className="flex items-center gap-2 sm:gap-3">
                  Begin Your Journey
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Icons.arrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base lg:text-lg h-12 sm:h-14 lg:h-16 px-6 sm:px-10 lg:px-12 font-bold bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link href="/journey/explore">
                <span className="flex items-center gap-2 sm:gap-3">
                  <Icons.play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Explore Campus
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-6 sm:pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              {[
                { value: "97%", label: "Receive Aid" },
                { value: "30+", label: "Majors" },
                { value: "126", label: "Years" },
                { value: "#1", label: "HBCU" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[9px] sm:text-xs lg:text-sm text-white/40 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Side decorative lines - desktop only */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A227]/20 to-transparent hidden lg:block" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 lg:h-48 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Scroll indicator - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 hidden sm:block"
      >
        <button
          onClick={() =>
            document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-3 text-white/30 hover:text-[#C9A227] transition-colors group cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-current rounded-full"
            />
          </motion.div>
        </button>
      </motion.div>

      {/* Corner accents - desktop only */}
      <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 pointer-events-none hidden sm:block">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#C9A227] to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#C9A227] to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 pointer-events-none hidden sm:block">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#C9A227] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-[#C9A227] to-transparent" />
      </div>
    </section>
  )
}
