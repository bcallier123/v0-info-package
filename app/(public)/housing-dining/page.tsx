import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"

const academicSupport = [
  { title: "Virtual Academic Advising", description: "Schedule one-on-one video appointments with your academic advisor to plan your degree path and stay on track.", contact: "advising@miles.edu", icon: Icons.users },
  { title: "Online Tutoring Center", description: "Free peer tutoring and writing center support available through virtual appointments, drop-in sessions, and live chat.", contact: "tutoring@miles.edu", icon: Icons.bookOpen },
  { title: "Digital Library Access", description: "Full access to the C.A. Kirkland Library digital collection including databases, e-books, journals, and research tools.", contact: "library@miles.edu", icon: Icons.book },
  { title: "Virtual Career Services", description: "Career coaching, resume reviews, interview prep, mock interviews, and access to the Miles College job board -- all virtual.", contact: "careers@miles.edu", icon: Icons.briefcase },
]

const techSupport = [
  { title: "LMS Help Desk", description: "Get help navigating Canvas, submitting assignments, accessing grades, and troubleshooting technical issues.", hours: "Mon-Fri 8AM-10PM, Sat 9AM-5PM CT" },
  { title: "Microsoft 365 Support", description: "All Miles students receive free access to Microsoft 365 including Word, Excel, PowerPoint, and Teams.", hours: "Self-service + email support" },
  { title: "Proctoring Support", description: "Assistance setting up remote proctoring software for exams, webcam checks, and environment requirements.", hours: "Mon-Fri 8AM-6PM CT" },
  { title: "Device & Connectivity Help", description: "Guidance on minimum tech requirements, recommended hardware, and troubleshooting internet connectivity issues.", hours: "Mon-Fri 8AM-6PM CT" },
]

const wellnessResources = [
  { title: "Virtual Counseling", description: "Confidential telehealth counseling sessions with licensed professionals at no additional cost." },
  { title: "Wellness Workshops", description: "Weekly virtual workshops on stress management, mindfulness, time management, and work-life balance." },
  { title: "Accessibility Services", description: "Accommodations and assistive technology support for students with disabilities in the online environment." },
  { title: "Financial Wellness", description: "Virtual financial literacy workshops, emergency aid resources, and budgeting guidance for online students." },
]

export default function StudentResourcesPage() {
  return (
    <main>
      <PageHeader
        title="Student Resources"
        subtitle="Everything you need to succeed as an online learner -- from academic support to tech help to wellness services."
        breadcrumbs={[{ label: "Student Resources" }]}
      />

      {/* Academic Support */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          <div className="mb-10">
            <Badge className="bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Academic Support
            </Badge>
            <h2 className="text-2xl font-black text-foreground">Your Academic Team, Online</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {academicSupport.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="relative p-6 bg-card border-border group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A227] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 rounded-xl group-hover:bg-[#C9A227]/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#C9A227]" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground mb-1 group-hover:text-[#C9A227] transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                      <a href={`mailto:${item.contact}`} className="text-xs text-[#C9A227] font-bold hover:text-[#C9A227]/80 transition-colors">
                        {item.contact}
                      </a>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16 lg:py-24 bg-muted relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4B2E83]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          <div className="mb-10">
            <Badge className="bg-[#4B2E83]/10 text-[#4B2E83] border-[#4B2E83]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Technical Support
            </Badge>
            <h2 className="text-2xl font-black text-foreground">Tech Help When You Need It</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {techSupport.map((item) => (
              <Card key={item.title} className="relative p-6 bg-card border-border group hover:border-[#4B2E83]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4B2E83] to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-black text-foreground mb-1 group-hover:text-[#4B2E83] transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-2">
                  <Icons.clock className="w-3 h-3 text-[#4B2E83]" />
                  <span className="text-xs text-muted-foreground font-medium">{item.hours}</span>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-6 bg-[#4B2E83]/5 border-[#4B2E83]/15">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-[#4B2E83]/10 flex items-center justify-center shrink-0 rounded-xl">
                <Icons.headphones className="w-6 h-6 text-[#4B2E83]" />
              </div>
              <div className="flex-1">
                <h3 className="font-black text-foreground mb-1">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground">Contact the Online Student IT Help Desk directly for urgent technical issues.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-black text-foreground">(205) 929-1000</span>
                <span className="text-[#4B2E83] font-bold">onlinehelp@miles.edu</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Wellness Resources */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          <div className="mb-10">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Wellness & Support
            </Badge>
            <h2 className="text-2xl font-black text-foreground">Your Wellbeing Matters</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {wellnessResources.map((item) => (
              <Card key={item.title} className="relative p-6 bg-card border-border group hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-black text-foreground mb-1 group-hover:text-emerald-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance mb-4">
            Questions About Online Student Support?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            Our online student services team is here to ensure you have everything you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#1a0a2e] text-white hover:bg-[#2d1b4e] font-black rounded-full h-14 px-10 shadow-xl">
              <Link href="/chat">Ask Miles AI <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold rounded-full h-14 px-10 hover:border-[#C9A227]/40">
              <Link href="/online">How Online Learning Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
