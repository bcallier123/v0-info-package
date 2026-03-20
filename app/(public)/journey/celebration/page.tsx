"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Link from "next/link"

function Confetti() {
  const [particles, setParticles] = useState<{ id: number; x: number; delay: number; color: string; size: number }[]>([])

  useEffect(() => {
    const colors = ["#C9A227", "#FFD700", "#4B2E83", "#FFFFFF", "#F5E6A3"]
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: "110vh",
            rotate: [0, 360, 720],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default function CelebrationPage() {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415] flex items-center justify-center relative overflow-hidden">
      {showConfetti && <Confetti />}

      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#C9A227]/15 blur-[150px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#4B2E83]/25 blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#C9A227]/8 blur-[100px]"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-16">
        {/* Animated crest/badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mx-auto mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A227] via-yellow-400 to-[#C9A227] shadow-2xl shadow-[#C9A227]/40"
              animate={{ boxShadow: ["0 0 30px rgba(201,162,39,0.3)", "0 0 60px rgba(201,162,39,0.6)", "0 0 30px rgba(201,162,39,0.3)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
              <Icons.graduationCap className="w-16 h-16 text-[#1a0a2e]" />
            </div>
            <motion.div
              className="absolute -inset-3 rounded-3xl border-2 border-[#C9A227]/30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Congratulations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#C9A227] font-black uppercase tracking-[0.4em] text-sm mb-4">
            Congratulations
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[0.9]">
            WELCOME TO THE{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-yellow-300 to-[#C9A227]">
              MILES FAMILY
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10"
        >
          You have been accepted to Miles College! You are officially one step closer to
          becoming a Golden Bear. Your legacy begins now.
        </motion.p>

        {/* Action cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {[
            {
              icon: Icons.check,
              title: "Accept Your Offer",
              description: "Confirm your spot in the Golden Bear family",
              action: "Accept Now",
              href: "/journey/dashboard",
              primary: true,
            },
            {
              icon: Icons.arrowRight,
              title: "Continue Your Journey",
              description: "See your next steps in the dashboard",
              action: "My Dashboard",
              href: "/journey/dashboard",
              primary: false,
            },
            {
              icon: Icons.users,
              title: "Share Your Success",
              description: "Let friends and family celebrate with you",
              action: "Share",
              href: "#",
              primary: false,
            },
          ].map((card, i) => {
            const CardIcon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <Card className={`p-6 text-center border-2 transition-all duration-300 ${
                  card.primary
                    ? "bg-[#C9A227]/10 border-[#C9A227]/40 hover:border-[#C9A227]"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}>
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                    card.primary ? "bg-[#C9A227]/20" : "bg-white/10"
                  }`}>
                    <CardIcon className={`w-6 h-6 ${card.primary ? "text-[#C9A227]" : "text-white/50"}`} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{card.title}</h3>
                  <p className="text-xs text-white/40 mb-4">{card.description}</p>
                  <Button
                    size="sm"
                    className={card.primary
                      ? "bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400 w-full"
                      : "bg-white/10 text-white font-medium hover:bg-white/20 w-full"
                    }
                    asChild
                  >
                    <Link href={card.href}>{card.action}</Link>
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Welcome video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Card className="bg-white/5 border-white/10 p-8 max-w-xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#4B2E83]/30 flex items-center justify-center flex-shrink-0">
                <Icons.presentation className="w-8 h-8 text-[#C9A227]" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold mb-1">Welcome Video from Our President</h3>
                <p className="text-white/40 text-sm">A personal message to celebrate your acceptance.</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Inspirational quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-12"
        >
          <p className="text-white/30 text-sm italic">
            &ldquo;You are one step closer to becoming a Bear. We will guide you through every milestone.&rdquo;
          </p>
        </motion.div>
      </div>
    </main>
  )
}
