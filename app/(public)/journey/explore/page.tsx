"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

const campusAreas = [
  {
    title: "Student Life",
    description: "40+ student organizations, Greek life, student government, and a vibrant campus culture that brings students together.",
    image: "/images/tailgate-students.jpg",
    highlights: ["40+ Organizations", "Greek Life", "Student Government", "Intramural Sports"],
  },
  {
    title: "Residence Life",
    description: "Modern residence halls with supportive staff, study lounges, community events, and a true home-away-from-home experience.",
    image: "/images/dsc00852.jpg",
    highlights: ["Furnished Rooms", "Meal Plans", "Study Lounges", "Community Events"],
  },
  {
    title: "Academic Excellence",
    description: "30+ degree programs across four academic divisions, with dedicated faculty and modern facilities for hands-on learning.",
    image: "/images/library-group.jpg",
    highlights: ["30+ Majors", "17:1 Ratio", "Research Labs", "Honors Program"],
  },
  {
    title: "Athletics & Spirit",
    description: "NCAA Division II Golden Bears, the legendary Purple Marching Machine, cheerleading, and a championship tradition.",
    image: "/images/purple-marching-machine.jpeg",
    highlights: ["NCAA DII Athletics", "Purple Marching Machine", "SIAC Conference", "Championship Tradition"],
  },
  {
    title: "Support Services",
    description: "Academic advising, tutoring, career services, counseling, health services, and dedicated staff who care about your success.",
    image: "/images/20231021-clb06660.jpg",
    highlights: ["Academic Advising", "Career Center", "Counseling", "Tutoring"],
  },
  {
    title: "Community & Faith",
    description: "Rooted in the CME tradition, Miles College offers chapel services, community outreach, and opportunities to serve.",
    image: "/images/homecoming-court.jpg",
    highlights: ["Chapel Services", "Service Learning", "Community Outreach", "Faith & Fellowship"],
  },
]

const dayInLife = [
  { time: "7:30 AM", activity: "Breakfast at the Dining Hall", description: "Start your day with a full meal plan." },
  { time: "9:00 AM", activity: "Biology 101 Lecture", description: "Small class, engaged professor, real discussions." },
  { time: "11:00 AM", activity: "Study at the Library", description: "Quiet study spaces and group collaboration rooms." },
  { time: "12:30 PM", activity: "Lunch with Friends", description: "The campus crossroads where community happens." },
  { time: "2:00 PM", activity: "Career Center Workshop", description: "Resume building, mock interviews, internship prep." },
  { time: "4:00 PM", activity: "Intramural Basketball", description: "Stay active with campus rec and team sports." },
  { time: "6:00 PM", activity: "SGA Meeting", description: "Student government shaping the campus experience." },
  { time: "8:00 PM", activity: "Study Group at the Dorm", description: "Collaborate with classmates in your residence hall." },
]

export default function ExploreCampusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415]">
      {/* Header */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[120px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link href="/" className="text-white/40 hover:text-white text-sm font-medium flex items-center gap-2 mb-6 transition-colors">
            <Icons.chevronRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <p className="text-[#C9A227] font-black uppercase tracking-[0.3em] text-sm mb-4">
              Digital Campus
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              EXPLORE THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-400">
                GOLDEN BEAR
              </span>{" "}
              EXPERIENCE
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Step into a digital preview of campus life at Miles College.
              Discover what makes this community extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campus Areas Grid */}
      <section className="container mx-auto px-6 lg:px-12 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {campusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden bg-white/5 border-white/10 hover:border-[#C9A227]/30 transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0415] via-[#0a0415]/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-lg font-black text-white group-hover:text-[#C9A227] transition-colors">
                    {area.title}
                  </h3>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{area.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.highlights.map((h) => (
                      <Badge key={h} className="bg-[#4B2E83]/30 text-white/60 border-[#4B2E83]/40 text-[10px]">
                        {h}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Day in the Life */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-black uppercase tracking-[0.3em] text-sm mb-4">
              A Day in the Life
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              YOUR TYPICAL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-400">
                DAY
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A227]/40 via-[#4B2E83]/30 to-transparent" />

            <div className="flex flex-col gap-6">
              {dayInLife.map((item, i) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative flex items-start gap-5 pl-2"
                >
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-[#C9A227]">{item.time.split(" ")[0]}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex-1 hover:border-[#C9A227]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-[#C9A227] font-bold">{item.time}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{item.activity}</h3>
                    <p className="text-xs text-white/40">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Ready to Experience It for Real?</h2>
          <p className="text-white/50 mb-8">Start your journey or schedule a campus visit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400 px-8 py-6 text-lg" asChild>
              <Link href="/journey/onboarding">
                Start Your Journey
                <Icons.arrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold" asChild>
              <Link href="/visit">Schedule a Visit</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
