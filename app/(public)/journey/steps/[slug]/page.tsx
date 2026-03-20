"use client"

import { use } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { notFound } from "next/navigation"

interface StepData {
  title: string
  headline: string
  whyMatters: string
  estimatedTime: string
  documentsNeeded: string[]
  checklist: { label: string; done: boolean; detail?: string }[]
  supportResources: { name: string; description: string; href: string }[]
  faqs: { question: string; answer: string }[]
  nextStep: { label: string; href: string }
}

const stepsData: Record<string, StepData> = {
  application: {
    title: "Application Submission",
    headline: "Your story begins with your application",
    whyMatters: "Submitting your application is the first official step toward becoming a Golden Bear. It tells us who you are, what you have accomplished, and where you want to go. The Miles College application is free, straightforward, and designed to highlight your potential.",
    estimatedTime: "15-20 minutes",
    documentsNeeded: ["Personal information", "Academic history", "Emergency contacts", "Optional: essay or personal statement"],
    checklist: [
      { label: "Create your account", done: true, detail: "Set up your Miles College applicant account" },
      { label: "Complete personal information", done: true, detail: "Name, address, contact details" },
      { label: "Enter academic history", done: false, detail: "High school, GPA, courses taken" },
      { label: "Add extracurricular activities", done: false, detail: "Clubs, sports, volunteer work, achievements" },
      { label: "Write personal statement (optional)", done: false, detail: "Tell us what drives you" },
      { label: "Review and submit", done: false, detail: "Double-check everything and submit" },
    ],
    supportResources: [
      { name: "Admissions Office", description: "Call (205) 929-1657 for personalized help", href: "tel:205-929-1657" },
      { name: "Ask Miles AI", description: "Chat with our AI assistant for instant answers", href: "/chat" },
      { name: "Email Support", description: "admissions@miles.edu", href: "mailto:admissions@miles.edu" },
    ],
    faqs: [
      { question: "Is the application really free?", answer: "Yes! Miles College does not charge an application fee. We want every student to have the opportunity to apply." },
      { question: "Can I save and come back later?", answer: "Absolutely. Your application progress is saved automatically. You can log back in and continue where you left off." },
      { question: "When will I hear back?", answer: "Most students receive a decision within 2-4 weeks of submitting a complete application with all required documents." },
    ],
    nextStep: { label: "Submit Documents", href: "/journey/steps/documents" },
  },
  documents: {
    title: "Document Submission",
    headline: "Give us the complete picture of your achievements",
    whyMatters: "Your documents help us understand your full academic story. Transcripts show your coursework and performance, while test scores and recommendation letters give us additional context about your abilities and character.",
    estimatedTime: "Varies by document",
    documentsNeeded: ["Official high school transcript", "ACT or SAT scores (optional for some programs)", "Letters of recommendation", "Immunization records"],
    checklist: [
      { label: "Request official transcript from your school", done: false, detail: "Ask your guidance counselor to send it directly" },
      { label: "Submit ACT/SAT scores", done: false, detail: "Send official scores to Miles College (code: 1468)" },
      { label: "Request recommendation letters", done: false, detail: "Ask teachers, counselors, or mentors" },
      { label: "Upload immunization records", done: false, detail: "Required for campus enrollment" },
    ],
    supportResources: [
      { name: "Transcript Help", description: "Need help requesting transcripts? We can guide you.", href: "/chat" },
      { name: "Testing Centers", description: "Find ACT/SAT testing locations near you", href: "/faq" },
      { name: "Admissions Office", description: "Call us for document submission questions", href: "tel:205-929-1657" },
    ],
    faqs: [
      { question: "Can I submit unofficial transcripts first?", answer: "Yes, you can submit unofficial copies to speed up review. Official copies must be received before enrollment." },
      { question: "Are test scores required?", answer: "Miles College has test-optional policies for many programs. Check with admissions for your specific program." },
    ],
    nextStep: { label: "Financial Aid", href: "/journey/steps/financial-aid" },
  },
  "financial-aid": {
    title: "Financial Aid",
    headline: "Making your education affordable is our priority",
    whyMatters: "97% of Miles College students receive financial aid. Completing your FAFSA and applying for scholarships is how you unlock thousands of dollars in support. Do not leave money on the table -- we are here to help you maximize your aid package.",
    estimatedTime: "30-45 minutes for FAFSA",
    documentsNeeded: ["Social Security number", "Federal tax returns (yours and parents if applicable)", "W-2 forms", "Bank statements", "FAFSA ID (FSA ID)"],
    checklist: [
      { label: "Create your FSA ID at studentaid.gov", done: false, detail: "Both you and a parent need one" },
      { label: "Complete FAFSA application", done: false, detail: "Miles College school code: 001468" },
      { label: "Apply for Miles College scholarships", done: false, detail: "Academic, athletic, and need-based awards" },
      { label: "Review financial aid award letter", done: false, detail: "Understand your complete aid package" },
      { label: "Accept financial aid offer", done: false, detail: "Accept, decline, or adjust your awards" },
    ],
    supportResources: [
      { name: "Financial Aid Office", description: "Personalized help with FAFSA and scholarships", href: "tel:205-929-1657" },
      { name: "FAFSA Guide", description: "Step-by-step guide to completing FAFSA", href: "/financial-aid" },
      { name: "Scholarship Portal", description: "Browse and apply for all available scholarships", href: "/scholarships" },
    ],
    faqs: [
      { question: "When should I submit my FAFSA?", answer: "As early as possible! The FAFSA opens October 1st each year. Earlier submissions often receive larger aid packages." },
      { question: "What if my family's financial situation has changed?", answer: "Contact our Financial Aid office for a special circumstances review. We understand life changes and can adjust accordingly." },
    ],
    nextStep: { label: "View Dashboard", href: "/journey/dashboard" },
  },
  orientation: {
    title: "Orientation Registration",
    headline: "Get ready for your first days as a Golden Bear",
    whyMatters: "Orientation is where your Miles College story truly comes alive. You will meet your classmates, connect with professors, explore campus, learn about resources, and register for your first classes. It is the bridge between acceptance and your first day.",
    estimatedTime: "1-2 day event",
    documentsNeeded: ["Accepted student ID", "Health forms", "Housing preference confirmation", "Photo ID"],
    checklist: [
      { label: "Register for orientation session", done: false, detail: "Choose your preferred date" },
      { label: "Complete health forms", done: false, detail: "Medical history and immunization records" },
      { label: "Submit housing application", done: false, detail: "Select your preferred residence hall" },
      { label: "Set up student email", done: false, detail: "Your official @miles.edu email" },
      { label: "Attend orientation", done: false, detail: "Meet classmates and register for classes" },
    ],
    supportResources: [
      { name: "Student Affairs", description: "Questions about orientation and campus life", href: "tel:205-929-1657" },
      { name: "Housing Office", description: "Help with residence hall selection", href: "/housing-dining" },
      { name: "Ask Miles AI", description: "Instant answers about orientation", href: "/chat" },
    ],
    faqs: [
      { question: "Is orientation mandatory?", answer: "Yes, orientation is required for all new students. It is essential for course registration and connecting with your resources." },
      { question: "Can parents attend?", answer: "Absolutely! We have a dedicated parent and family track during orientation so they can learn about supporting your success." },
    ],
    nextStep: { label: "Enroll in Classes", href: "/journey/steps/enrollment" },
  },
  enrollment: {
    title: "Class Registration",
    headline: "Build your first semester schedule",
    whyMatters: "Registering for classes is one of the most exciting steps. With guidance from your academic advisor, you will build a schedule that aligns with your major, interests, and goals. This is where your academic journey truly begins.",
    estimatedTime: "1-2 hours with advisor",
    documentsNeeded: ["Placement test results (if applicable)", "Advisor meeting confirmation", "Student ID"],
    checklist: [
      { label: "Complete placement tests", done: false, detail: "Math and English placement assessments" },
      { label: "Meet with academic advisor", done: false, detail: "Discuss your major and course plan" },
      { label: "Register for classes", done: false, detail: "Use the student portal to enroll" },
      { label: "Purchase textbooks", done: false, detail: "Check the campus bookstore or online options" },
      { label: "Get your student ID", done: false, detail: "Visit the ID office on campus" },
    ],
    supportResources: [
      { name: "Academic Advising", description: "Schedule a meeting with your advisor", href: "/chat" },
      { name: "Registrar", description: "Help with registration issues", href: "tel:205-929-1657" },
      { name: "Bookstore", description: "Find and order your textbooks", href: "/faq" },
    ],
    faqs: [
      { question: "How many classes should I take?", answer: "Most first-year students take 12-15 credit hours (4-5 classes) per semester. Your advisor will help you find the right balance." },
      { question: "Can I change my schedule later?", answer: "Yes, there is an add/drop period during the first week of classes where you can adjust your schedule." },
    ],
    nextStep: { label: "Student Success", href: "/journey/success" },
  },
}

export default function StepDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const step = stepsData[slug]

  if (!step) notFound()

  const completedTasks = step.checklist.filter((t) => t.done).length
  const progressPercent = Math.round((completedTasks / step.checklist.length) * 100)

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415]">
      {/* Header */}
      <section className="relative overflow-hidden pt-8 pb-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#C9A227]/10 rounded-full blur-[120px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link href="/journey/dashboard" className="text-white/40 hover:text-white text-sm font-medium flex items-center gap-2 mb-6 transition-colors">
            <Icons.chevronRight className="w-4 h-4 rotate-180" />
            Back to Dashboard
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="bg-[#C9A227]/20 text-[#C9A227] border-[#C9A227]/30 font-bold mb-4">
              Journey Step
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-3">{step.title}</h1>
            <p className="text-white/60 text-lg max-w-2xl">{step.headline}</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 pb-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Why this matters */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="p-6 bg-white/5 border-white/10">
                <h2 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                  <Icons.heart className="w-5 h-5 text-[#C9A227]" />
                  Why This Matters
                </h2>
                <p className="text-white/70 leading-relaxed">{step.whyMatters}</p>
              </Card>
            </motion.div>

            {/* Progress + Checklist */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="p-6 bg-white/5 border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Icons.check className="w-5 h-5 text-[#C9A227]" />
                    Step-by-Step Checklist
                  </h2>
                  <span className="text-[#C9A227] font-bold">{progressPercent}%</span>
                </div>
                <Progress value={progressPercent} className="h-2 mb-6" />

                <ul className="flex flex-col gap-3">
                  {step.checklist.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        item.done ? "bg-emerald-500/20" : "bg-white/5 border border-white/20"
                      }`}>
                        {item.done ? (
                          <Icons.check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <span className="text-xs text-white/30 font-bold">{i + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${item.done ? "text-white/40 line-through" : "text-white"}`}>
                          {item.label}
                        </p>
                        {item.detail && (
                          <p className="text-xs text-white/30 mt-0.5">{item.detail}</p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* FAQs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="p-6 bg-white/5 border-white/10">
                <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                  <Icons.info className="w-5 h-5 text-[#C9A227]" />
                  Common Questions
                </h2>
                <div className="flex flex-col gap-4">
                  {step.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <h3 className="text-sm font-bold text-white mb-1">{faq.question}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Meta info */}
            <Card className="p-5 bg-white/5 border-white/10">
              <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-3">Details</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Icons.calendar className="w-4 h-4 text-[#C9A227]" />
                  <div>
                    <p className="text-xs text-white/40">Estimated Time</p>
                    <p className="text-sm text-white font-medium">{step.estimatedTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icons.fileText className="w-4 h-4 text-[#C9A227]" />
                  <div>
                    <p className="text-xs text-white/40">Documents Needed</p>
                    <p className="text-sm text-white font-medium">{step.documentsNeeded.length} items</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Documents Needed */}
            <Card className="p-5 bg-white/5 border-white/10">
              <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-3">What You Need</h3>
              <ul className="flex flex-col gap-2">
                {step.documentsNeeded.map((doc) => (
                  <li key={doc} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                    {doc}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Support Resources */}
            <Card className="p-5 bg-white/5 border-white/10">
              <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-3">Get Help</h3>
              <div className="flex flex-col gap-3">
                {step.supportResources.map((resource) => (
                  <a key={resource.name} href={resource.href} className="group flex flex-col p-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors">
                    <span className="text-sm font-bold text-white group-hover:text-[#C9A227] transition-colors">{resource.name}</span>
                    <span className="text-xs text-white/40">{resource.description}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* AI helper */}
            <Card className="p-5 bg-gradient-to-br from-[#4B2E83]/30 to-[#1a0a2e] border-[#4B2E83]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/20 flex items-center justify-center">
                  <Icons.sparkles className="w-5 h-5 text-[#C9A227]" />
                </div>
                <p className="text-white font-bold text-sm">Need Help?</p>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Ask Miles AI anything about this step. Available 24/7 for guidance.
              </p>
              <Button size="sm" className="w-full bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400" asChild>
                <Link href="/chat">
                  Chat with Miles AI
                  <Icons.arrowRight className="w-3 h-3 ml-2" />
                </Link>
              </Button>
            </Card>

            {/* Next Step CTA */}
            <Button className="w-full bg-[#C9A227] text-[#1a0a2e] font-bold hover:bg-yellow-400 py-6" asChild>
              <Link href={step.nextStep.href}>
                Next: {step.nextStep.label}
                <Icons.arrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
