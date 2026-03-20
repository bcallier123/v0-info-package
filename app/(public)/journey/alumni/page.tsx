"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"

const alumniSections = [
  {
    title: "Graduation Readiness",
    description: "Track your path to walking the stage and receiving your diploma.",
    icon: Icons.graduationCap,
    items: ["Complete degree audit", "Apply for graduation", "Order cap and gown", "Submit graduation fee", "Attend commencement rehearsal"],
  },
  {
    title: "Alumni Network",
    description: "Join a global community of Miles College graduates making an impact.",
    icon: Icons.globe,
    items: ["Join the Alumni Association", "Connect on LinkedIn", "Attend alumni chapter events", "Access the alumni directory", "Participate in homecoming"],
  },
  {
    title: "Mentorship",
    description: "Give back or receive guidance through our mentorship programs.",
    icon: Icons.users,
    items: ["Become a student mentor", "Join the alumni mentorship program", "Attend career networking events", "Share your Miles story", "Support current students"],
  },
  {
    title: "Career Opportunities",
    description: "Access exclusive job postings, partnerships, and professional development.",
    icon: Icons.briefcase,
    items: ["Alumni job board access", "Company partnerships", "Graduate school preparation", "Professional certifications", "Continuing education"],
  },
  {
    title: "Giving Back",
    description: "Support the next generation of Golden Bears through donations and service.",
    icon: Icons.heart,
    items: ["Annual fund contribution", "Endowed scholarship support", "Campus improvement projects", "Volunteer for campus events", "Legacy giving programs"],
  },
  {
    title: "Professional Development",
    description: "Continue growing through lifelong learning and development resources.",
    icon: Icons.trendingUp,
    items: ["Online learning resources", "Conference discounts", "Professional workshops", "Leadership development", "Industry certifications"],
  },
]

const alumniSpotlight = [
  { name: "Dr. Robert Johnson", year: "Class of 1985", role: "Chief Medical Officer, UAB Hospital", quote: "Miles gave me the foundation for everything I achieved in medicine." },
  { name: "Angela Davis-Mitchell", year: "Class of 2002", role: "VP of Marketing, Google", quote: "The leadership skills I built at Miles are the reason I'm here today." },
  { name: "Marcus Williams", year: "Class of 2015", role: "Founder & CEO, TechBridge Solutions", quote: "My professors at Miles saw potential in me I didn't see in myself." },
]

export default function AlumniPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415]">
      {/* Header */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] bg-[#4B2E83]/15 rounded-full blur-[100px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link href="/journey/dashboard" className="text-white/40 hover:text-white text-sm font-medium flex items-center gap-2 mb-6 transition-colors">
            <Icons.chevronRight className="w-4 h-4 rotate-180" />
            Back to Dashboard
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <p className="text-[#C9A227] font-black uppercase tracking-[0.3em] text-sm mb-4">
              Beyond Graduation
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              YOUR JOURNEY{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-400">
                CONTINUES
              </span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Graduation is not the end -- it is the beginning of your legacy as a Miles College alumnus.
              The Golden Bear family is forever.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 pb-16 relative z-10">
        {/* Alumni Spotlight */}
        <div className="mb-16">
          <h2 className="text-xl font-black text-white mb-6 text-center">
            ALUMNI <span className="text-[#C9A227]">SPOTLIGHT</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {alumniSpotlight.map((alum, i) => (
              <motion.div
                key={alum.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 bg-white/5 border-white/10 hover:border-[#C9A227]/30 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A227] to-yellow-500 flex items-center justify-center">
                      <Icons.graduationCap className="w-6 h-6 text-[#1a0a2e]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{alum.name}</p>
                      <p className="text-[#C9A227] text-xs font-medium">{alum.year}</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mb-2">{alum.role}</p>
                  <p className="text-white/70 text-sm italic flex-1 leading-relaxed">&ldquo;{alum.quote}&rdquo;</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sections grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumniSections.map((section, i) => {
            const SectionIcon = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="p-6 bg-white/5 border-white/10 hover:border-[#C9A227]/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#4B2E83]/30 flex items-center justify-center mb-4">
                    <SectionIcon className="w-6 h-6 text-[#C9A227]" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{section.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{section.description}</p>
                  <ul className="flex flex-col gap-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-white/40">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-[#4B2E83]/30 via-[#1a0a2e] to-[#4B2E83]/30 border-[#4B2E83]/30 p-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-2">Once a Golden Bear, Always a Golden Bear</h2>
            <p className="text-white/50 mb-6">
              Your Miles College journey never truly ends. Stay connected, give back, and continue making your mark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400 px-8" asChild>
                <Link href="/journey/onboarding">Start Your Journey</Link>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
