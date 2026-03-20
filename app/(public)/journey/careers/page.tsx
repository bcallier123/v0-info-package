"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import Link from "next/link"

interface CareerPath {
  id: string
  major: string
  description: string
  careers: { title: string; salary: string; growth: string }[]
  skills: string[]
  internships: string[]
  alumniOutcome: string
  roadmap: string[]
}

const careerPaths: CareerPath[] = [
  {
    id: "business",
    major: "Business Administration",
    description: "Build leadership skills and business acumen to thrive in the corporate world and beyond.",
    careers: [
      { title: "Financial Analyst", salary: "$65K - $95K", growth: "+9%" },
      { title: "Marketing Manager", salary: "$75K - $120K", growth: "+10%" },
      { title: "Management Consultant", salary: "$80K - $140K", growth: "+14%" },
      { title: "Entrepreneur", salary: "Unlimited", growth: "Growing" },
    ],
    skills: ["Leadership", "Financial Analysis", "Strategic Planning", "Marketing", "Data Analytics", "Communication"],
    internships: ["Fortune 500 partnerships", "Local business incubators", "Summer corporate programs", "Non-profit management"],
    alumniOutcome: "85% of business graduates are employed or in graduate school within 6 months of graduation.",
    roadmap: ["Declare major (Year 1)", "Core business courses (Year 2)", "Specialization + internship (Year 3)", "Capstone project + career launch (Year 4)"],
  },
  {
    id: "biology",
    major: "Biology / Pre-Med",
    description: "Prepare for medical school, research careers, or healthcare leadership with a rigorous science foundation.",
    careers: [
      { title: "Physician", salary: "$200K - $400K+", growth: "+3%" },
      { title: "Biomedical Researcher", salary: "$65K - $100K", growth: "+17%" },
      { title: "Pharmacist", salary: "$120K - $150K", growth: "+2%" },
      { title: "Public Health Specialist", salary: "$55K - $85K", growth: "+12%" },
    ],
    skills: ["Lab Techniques", "Research Methods", "Critical Thinking", "Data Analysis", "Patient Care", "Scientific Writing"],
    internships: ["Hospital clinical rotations", "Research lab assistantships", "Public health internships", "Biotech company co-ops"],
    alumniOutcome: "70% of pre-med graduates gain acceptance to medical or graduate health programs.",
    roadmap: ["Foundation sciences (Year 1)", "Organic Chemistry + Lab (Year 2)", "MCAT prep + research (Year 3)", "Applications + senior thesis (Year 4)"],
  },
  {
    id: "communications",
    major: "Communications & Media",
    description: "Master storytelling, media production, and public relations in the digital age.",
    careers: [
      { title: "Broadcast Journalist", salary: "$45K - $80K", growth: "+6%" },
      { title: "Public Relations Manager", salary: "$65K - $120K", growth: "+11%" },
      { title: "Digital Content Creator", salary: "$50K - $90K", growth: "+16%" },
      { title: "Corporate Communications", salary: "$60K - $100K", growth: "+8%" },
    ],
    skills: ["Writing & Editing", "Video Production", "Social Media Strategy", "Public Speaking", "Brand Management", "Digital Marketing"],
    internships: ["TV/radio station placements", "PR agency internships", "Digital media companies", "Corporate communications"],
    alumniOutcome: "90% of communications graduates work in media, PR, or corporate communications within one year.",
    roadmap: ["Intro to Media (Year 1)", "Broadcast + Digital skills (Year 2)", "Industry internship (Year 3)", "Portfolio + senior project (Year 4)"],
  },
  {
    id: "education",
    major: "Education",
    description: "Become a transformative educator who inspires the next generation of leaders.",
    careers: [
      { title: "Elementary Teacher", salary: "$45K - $70K", growth: "+4%" },
      { title: "School Administrator", salary: "$75K - $120K", growth: "+8%" },
      { title: "Curriculum Designer", salary: "$55K - $85K", growth: "+11%" },
      { title: "School Counselor", salary: "$50K - $80K", growth: "+10%" },
    ],
    skills: ["Classroom Management", "Curriculum Development", "Student Assessment", "Educational Technology", "Inclusive Teaching", "Mentorship"],
    internships: ["Student teaching placements", "After-school program leadership", "Educational nonprofit work", "Tutoring and mentoring"],
    alumniOutcome: "95% of education graduates pass their certification exams and secure teaching positions.",
    roadmap: ["Education foundations (Year 1)", "Methods + fieldwork (Year 2)", "Student teaching (Year 3)", "Certification + job placement (Year 4)"],
  },
  {
    id: "cs",
    major: "Computer Science",
    description: "Build the technology of tomorrow with programming, data, and computational thinking.",
    careers: [
      { title: "Software Developer", salary: "$75K - $130K", growth: "+25%" },
      { title: "Data Scientist", salary: "$85K - $140K", growth: "+36%" },
      { title: "Cybersecurity Analyst", salary: "$80K - $120K", growth: "+35%" },
      { title: "IT Manager", salary: "$90K - $150K", growth: "+15%" },
    ],
    skills: ["Programming (Python, Java)", "Data Structures", "Machine Learning", "Database Management", "Cybersecurity", "Cloud Computing"],
    internships: ["Tech company internships", "Research lab positions", "Hackathon competitions", "Government IT programs"],
    alumniOutcome: "100% job placement rate for CS graduates with internship experience.",
    roadmap: ["Programming fundamentals (Year 1)", "Data structures + algorithms (Year 2)", "Specialization + internship (Year 3)", "Capstone + job search (Year 4)"],
  },
]

export default function CareerPathwaysPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const activePath = careerPaths.find((p) => p.id === selectedPath)

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415]">
      {/* Header */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-[#4B2E83]/15 rounded-full blur-[100px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link href="/journey/dashboard" className="text-white/40 hover:text-white text-sm font-medium flex items-center gap-2 mb-6 transition-colors">
            <Icons.chevronRight className="w-4 h-4 rotate-180" />
            Back to Dashboard
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <p className="text-[#C9A227] font-black uppercase tracking-[0.3em] text-sm mb-4">
              Career Pathways
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              SEE YOUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-400">
                FUTURE
              </span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Select a major to explore career paths, salary ranges, skills, and the
              roadmap from freshman year to profession.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 pb-16 relative z-10">
        {/* Major selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {careerPaths.map((path, i) => (
            <motion.button
              key={path.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
              className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                selectedPath === path.id
                  ? "bg-[#C9A227] text-[#1a0a2e] shadow-lg shadow-[#C9A227]/30"
                  : "bg-white/5 text-white/60 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {path.major}
            </motion.button>
          ))}
        </div>

        {/* Career path details */}
        <AnimatePresence mode="wait">
          {activePath && (
            <motion.div
              key={activePath.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <Card className="bg-white/5 border-white/10 overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-white/10">
                  <h2 className="text-2xl font-black text-white mb-2">{activePath.major}</h2>
                  <p className="text-white/60 leading-relaxed">{activePath.description}</p>
                  <p className="text-sm text-emerald-400 mt-3 font-medium">{activePath.alumniOutcome}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-white/10">
                  {/* Careers */}
                  <div className="p-8">
                    <h3 className="text-sm font-black text-white/50 uppercase tracking-wider mb-4">Career Paths</h3>
                    <div className="flex flex-col gap-3">
                      {activePath.careers.map((career) => (
                        <div key={career.title} className="flex items-center justify-between p-3 rounded-lg bg-white/3">
                          <div>
                            <p className="text-sm font-bold text-white">{career.title}</p>
                            <p className="text-xs text-[#C9A227]">{career.salary}</p>
                          </div>
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                            {career.growth}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills + Internships */}
                  <div className="p-8">
                    <h3 className="text-sm font-black text-white/50 uppercase tracking-wider mb-4">Skills You Gain</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {activePath.skills.map((skill) => (
                        <Badge key={skill} className="bg-[#4B2E83]/30 text-white/70 border-[#4B2E83]/40 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-sm font-black text-white/50 uppercase tracking-wider mb-4">Internship Opportunities</h3>
                    <ul className="flex flex-col gap-2">
                      {activePath.internships.map((intern) => (
                        <li key={intern} className="flex items-center gap-2 text-sm text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                          {intern}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Roadmap */}
                <div className="p-8 border-t border-white/10 bg-white/3">
                  <h3 className="text-sm font-black text-white/50 uppercase tracking-wider mb-4">Your 4-Year Roadmap</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activePath.roadmap.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="relative"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227] to-yellow-500 flex items-center justify-center mb-3 shadow-lg">
                            <span className="text-sm font-black text-[#1a0a2e]">{i + 1}</span>
                          </div>
                          <p className="text-xs text-white/70 leading-relaxed">{step}</p>
                        </div>
                        {i < activePath.roadmap.length - 1 && (
                          <div className="hidden md:block absolute top-5 left-[calc(50%+1.5rem)] right-[-1.5rem] h-px bg-[#C9A227]/30" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button className="bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400 px-8 py-6" asChild>
                  <Link href="/journey/onboarding">
                    Start Your Journey
                    <Icons.arrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 font-bold" asChild>
                  <Link href="/programs">Explore All Programs</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedPath && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white/30 text-lg mt-8"
          >
            Select a major above to explore career opportunities.
          </motion.p>
        )}
      </div>
    </main>
  )
}
