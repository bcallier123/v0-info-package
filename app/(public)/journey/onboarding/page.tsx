"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"

const steps = [
  {
    id: "student-type",
    question: "What kind of student are you?",
    subtitle: "This helps us personalize your Miles journey.",
    options: [
      { value: "freshman", label: "First-Year Freshman", description: "Graduating high school and starting college" },
      { value: "transfer", label: "Transfer Student", description: "Moving from another college or university" },
      { value: "adult", label: "Adult Learner", description: "Returning to education or starting fresh" },
      { value: "dual", label: "Dual Enrollment", description: "Earning college credits while in high school" },
      { value: "international", label: "International Student", description: "Studying from outside the U.S." },
      { value: "online", label: "Online Student", description: "Completing your degree 100% online" },
    ],
  },
  {
    id: "major",
    question: "What interests you most?",
    subtitle: "Select an area of study that excites you.",
    options: [
      { value: "business", label: "Business & Entrepreneurship", description: "Accounting, Management, Marketing" },
      { value: "stem", label: "STEM & Sciences", description: "Biology, Chemistry, Mathematics, Computer Science" },
      { value: "humanities", label: "Humanities & Social Sciences", description: "English, History, Political Science" },
      { value: "education", label: "Education", description: "Elementary, Secondary, Special Education" },
      { value: "communications", label: "Communications & Media", description: "Journalism, Broadcasting, Public Relations" },
      { value: "undecided", label: "Still Exploring", description: "That is perfectly fine -- we will help you discover" },
    ],
  },
  {
    id: "career",
    question: "Where do you see yourself after Miles?",
    subtitle: "Dream big. We will help you get there.",
    options: [
      { value: "corporate", label: "Corporate & Business", description: "Fortune 500, startups, entrepreneurship" },
      { value: "healthcare", label: "Healthcare & Medicine", description: "Doctor, nurse, researcher, public health" },
      { value: "law", label: "Law & Public Policy", description: "Attorney, government, advocacy" },
      { value: "education-career", label: "Education & Academia", description: "Teacher, professor, administrator" },
      { value: "tech", label: "Technology & Innovation", description: "Software, data science, cybersecurity" },
      { value: "creative", label: "Creative & Media", description: "Journalism, entertainment, design" },
    ],
  },
  {
    id: "housing",
    question: "Where would you like to live?",
    subtitle: "Help us plan your campus experience.",
    options: [
      { value: "on-campus", label: "On Campus", description: "Full residential experience in our halls" },
      { value: "off-campus", label: "Off Campus / Commuter", description: "Living at home or nearby" },
      { value: "online", label: "Online (100% Virtual)", description: "Studying remotely -- no campus housing needed" },
      { value: "not-sure", label: "Not Sure Yet", description: "I'd like to learn more about options" },
    ],
  },
  {
    id: "support",
    question: "What support matters most to you?",
    subtitle: "Select all that apply. We will connect you with the right resources.",
    multiSelect: true,
    options: [
      { value: "financial", label: "Financial Aid & Scholarships", description: "Help affording college" },
      { value: "academic", label: "Academic Tutoring", description: "Extra academic support and study help" },
      { value: "career-prep", label: "Career Preparation", description: "Internships, resume building, networking" },
      { value: "mental-health", label: "Wellness & Counseling", description: "Mental health and personal support" },
      { value: "mentorship", label: "Mentorship", description: "Guidance from faculty and alumni" },
      { value: "disability", label: "Accessibility Services", description: "Accommodations and support" },
    ],
  },
  {
    id: "interests",
    question: "What excites you outside the classroom?",
    subtitle: "We have something for everyone.",
    multiSelect: true,
    options: [
      { value: "athletics", label: "Sports & Athletics", description: "NCAA Division II Golden Bears" },
      { value: "music", label: "Band & Music", description: "Purple Marching Machine and ensembles" },
      { value: "greek", label: "Greek Life", description: "Fraternities and sororities" },
      { value: "service", label: "Community Service", description: "Volunteering and outreach" },
      { value: "leadership", label: "Student Government", description: "SGA and leadership roles" },
      { value: "faith", label: "Faith & Spiritual Life", description: "Chapel, ministry, and fellowship" },
    ],
  },
]

interface Answers {
  [key: string]: string | string[]
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [completed, setCompleted] = useState(false)
  const { user, completeOnboarding } = useAuth()

  const step = steps[currentStep]
  const isMulti = (step as { multiSelect?: boolean }).multiSelect
  const progress = ((currentStep + 1) / (steps.length + 1)) * 100

  const handleSelect = (value: string) => {
    if (isMulti) {
      const current = (answers[step.id] as string[]) || []
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      setAnswers({ ...answers, [step.id]: updated })
    } else {
      setAnswers({ ...answers, [step.id]: value })
    }
  }

  const isSelected = (value: string) => {
    const answer = answers[step.id]
    if (Array.isArray(answer)) return answer.includes(value)
    return answer === value
  }

  const canProceed = () => {
    const answer = answers[step.id]
    if (isMulti) return Array.isArray(answer) && answer.length > 0
    return !!answer
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Save onboarding answers to user profile
      if (user) {
        completeOnboarding(answers)
      }
      setCompleted(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const getPersonalizedMessage = () => {
    const studentType = answers["student-type"] as string
    const major = answers["major"] as string
    const messages: Record<string, string> = {
      freshman: "Welcome, future Golden Bear! Your freshman journey at Miles College is going to be transformative.",
      transfer: "Welcome to your new home! Transferring to Miles means joining a community that values your experience.",
      adult: "It takes courage to pursue your education. Miles College is proud to walk this journey with you.",
      dual: "Getting a head start shows incredible ambition. Miles College is the perfect place to begin.",
      international: "Welcome from across the globe! Miles College is thrilled to have you join our diverse community.",
      online: "Welcome to Miles College Online! You will receive the same world-class education and Golden Bear experience from wherever you are.",
    }
    return messages[studentType] || "Welcome to Miles College! Your journey begins now."
  }

  if (completed) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#C9A227]/15 blur-[100px]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#4B2E83]/20 blur-[120px]"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#C9A227] to-yellow-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#C9A227]/30"
          >
            <Icons.sparkles className="w-12 h-12 text-[#1a0a2e]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            {user ? `WELCOME, ${user.firstName.toUpperCase()}` : "WELCOME"} TO THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-yellow-400">
              MILES FAMILY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/70 text-lg leading-relaxed mb-8"
          >
            {getPersonalizedMessage()}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 mb-8 text-left">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Icons.sparkles className="w-5 h-5 text-[#C9A227]" />
                Your Personalized Next Steps
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Complete your free application",
                  "Submit your transcripts and documents",
                  "Complete the FAFSA for financial aid",
                  "Explore scholarship opportunities",
                  "Connect with your admissions counselor",
                ].map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-[#C9A227]">{i + 1}</span>
                    </div>
                    <span className="text-white/80 text-sm">{step}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="text-lg px-10 py-7 font-black bg-[#C9A227] hover:bg-yellow-400 text-[#1a0a2e] shadow-xl"
              asChild
            >
              <Link href="/journey/dashboard">
                Go to My Dashboard
                <Icons.arrowRight className="w-5 h-5 ml-3" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 font-bold border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/apply">Apply Now - Free</Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415] flex flex-col relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#C9A227]/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#4B2E83]/15 blur-[130px]"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Top bar with progress */}
      <div className="relative z-20 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between mb-4">
          <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
            <Icons.chevronRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <span className="text-white/40 text-sm">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <div className="max-w-3xl mx-auto h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C9A227] to-yellow-400 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl w-full"
          >
            <div className="text-center mb-10">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {step.question}
              </motion.h1>
              <motion.p
                className="text-white/50 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {step.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {step.options.map((option, i) => (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  onClick={() => handleSelect(option.value)}
                  className={`text-left p-5 rounded-xl border-2 transition-all duration-300 group ${
                    isSelected(option.value)
                      ? "border-[#C9A227] bg-[#C9A227]/10 shadow-lg shadow-[#C9A227]/10"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                        isSelected(option.value)
                          ? "border-[#C9A227] bg-[#C9A227]"
                          : "border-white/30"
                      }`}
                    >
                      {isSelected(option.value) && (
                        <Icons.check className="w-3 h-3 text-[#1a0a2e]" />
                      )}
                    </div>
                    <div>
                      <p className={`font-bold text-sm ${
                        isSelected(option.value) ? "text-[#C9A227]" : "text-white"
                      }`}>
                        {option.label}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">{option.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between mt-10"
            >
              <Button
                variant="ghost"
                className="text-white/50 hover:text-white hover:bg-white/10"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                <Icons.chevronRight className="w-4 h-4 rotate-180 mr-2" />
                Back
              </Button>
              <Button
                className="bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400 shadow-lg px-8 py-6 disabled:opacity-30"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                {currentStep === steps.length - 1 ? "Complete" : "Continue"}
                <Icons.arrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
