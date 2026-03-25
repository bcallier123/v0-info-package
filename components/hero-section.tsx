"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

const words = ["FUTURE", "LEGACY", "JOURNEY", "STORY", "DREAMS"]

const floatingElements = [
  { text: "Since 1898", delay: 0 },
  { text: "Birmingham, AL", delay: 0.2 },
  { text: "HBCU Excellence", delay: 0.4 },
  { text: "Golden Bears", delay: 0.6 },
]

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
      {/* Layered Background System */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0d0620] to-[#0a0415]" />
        
        {/* Campus image with parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
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
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0415] via-transparent to-[#0a0415]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0415]/80 via-transparent to-[#0a0415]/80" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201, 162, 39, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 162, 39, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%)",
            x: mousePosition.x * 3,
            y: mousePosition.y * 3,
          }}
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(75, 46, 131, 0.2) 0%, transparent 70%)",
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201, 162, 39, 0.08) 0%, transparent 70%)",
          }}
          animate={{ 
            x: [-30, 30, -30],
            y: [-20, 20, -20],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating context pills */}
      <motion.div 
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{ opacity }}
      >
        {floatingElements.map((element, i) => (
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
        className="relative z-10 min-h-[100svh] flex flex-col justify-center"
        style={{ y: textY, opacity }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl">
            {/* Top accent */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-[#C9A227] to-transparent" />
              <span className="text-[#C9A227] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
                Miles College
              </span>
            </motion.div>

            {/* Giant Typography Block */}
            <div className="relative mb-8 sm:mb-12">
              {/* "BUILD YOUR" - static text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h1 className="font-black tracking-tighter leading-[0.85]">
                  <span className="block text-white/90 text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[120px]">
                    BUILD YOUR
                  </span>
                </h1>
              </motion.div>

              {/* Rotating Word - the hero element */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative h-[14vw] sm:h-[12vw] md:h-[10vw] lg:h-[140px] overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ y: 100, opacity: 0, rotateX: -45 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -100, opacity: 0, rotateX: 45 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute inset-0 font-black tracking-tighter text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[140px] leading-none"
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-xl mb-10 sm:mb-12"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
                Step into an AI-powered journey from discovery to career. 
                <span className="text-white/90 font-medium"> Where tradition meets innovation</span>, 
                and every Golden Bear finds their path to greatness.
              </p>
            </motion.div>

            {/* Interactive Journey Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-10 sm:mb-12"
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {["Discover", "Apply", "Enroll", "Succeed", "Launch"].map((stage, i) => (
                  <motion.div
                    key={stage}
                    className="flex items-center gap-2 sm:gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={`text-xs sm:text-sm font-semibold transition-colors ${
                      i === 0 ? "text-[#C9A227]" : "text-white/40"
                    }`}>
                      {stage}
                    </span>
                    {i < 4 && (
                      <div className={`w-6 sm:w-8 h-px ${
                        i === 0 ? "bg-[#C9A227]" : "bg-white/20"
                      }`} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 font-black bg-[#C9A227] hover:bg-[#d4af37] text-[#0a0415] border-0 rounded-full transition-all duration-500"
                asChild
              >
                <Link href="/journey/onboarding">
                  <span className="relative z-10 flex items-center gap-3">
                    Begin Your Journey
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Icons.arrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="group text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 font-bold bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <Link href="/journey/explore">
                  <span className="flex items-center gap-3">
                    <Icons.play className="w-4 h-4" />
                    Explore Campus
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-16 sm:mt-20 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                {[
                  { value: "97%", label: "Receive Aid" },
                  { value: "30+", label: "Majors" },
                  { value: "126", label: "Years of Excellence" },
                  { value: "#1", label: "HBCU Experience" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + i * 0.1 }}
                    className="text-center sm:text-left"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Side decorative elements */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A227]/20 to-transparent hidden lg:block" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <a
          href="#why-miles"
          className="flex flex-col items-center gap-3 text-white/30 hover:text-[#C9A227] transition-colors group"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-current rounded-full"
            />
          </motion.div>
        </a>
      </motion.div>

      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#C9A227] to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#C9A227] to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#C9A227] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-[#C9A227] to-transparent" />
      </div>
    </section>
  )
}
