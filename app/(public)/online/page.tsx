import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { getOnlinePrograms } from "@/lib/data/programs"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "How Online Learning Works | Miles College Online",
  description:
    "Discover how Miles College Online delivers accredited degrees with interactive LMS, live lectures, and full student support -- all 100% online.",
}

const howItWorks = [
  { icon: "laptop" as const, title: "Interactive LMS", description: "Access coursework, lectures, and assignments through our Canvas learning management system -- available 24/7 from any device.", accent: "from-[#C9A227] to-yellow-400" },
  { icon: "video" as const, title: "Live & Recorded Lectures", description: "Attend live virtual sessions with your professors or watch recorded lectures on your own schedule.", accent: "from-[#4B2E83] to-purple-500" },
  { icon: "users" as const, title: "Collaborative Learning", description: "Engage with classmates through discussion boards, group projects, and virtual study sessions.", accent: "from-[#C9A227] to-yellow-400" },
  { icon: "calendar" as const, title: "Flexible Scheduling", description: "Asynchronous coursework lets you learn on your schedule -- perfect for working professionals and busy parents.", accent: "from-[#4B2E83] to-purple-500" },
]

const supportServices = [
  { icon: "headphones" as const, title: "Virtual Advising", description: "Meet one-on-one with your academic advisor via video call to plan your degree path and stay on track." },
  { icon: "bookOpen" as const, title: "Online Tutoring", description: "Free peer tutoring and writing center support available through virtual appointments and live chat." },
  { icon: "book" as const, title: "Digital Library Access", description: "Full access to the C.A. Kirkland Library digital collection, databases, e-books, and research tools." },
  { icon: "briefcase" as const, title: "Career Services", description: "Virtual career coaching, resume reviews, interview prep, and access to the Miles job board." },
  { icon: "dollarSign" as const, title: "Financial Aid", description: "Online students qualify for the same financial aid, grants, and scholarships as on-campus students." },
  { icon: "shield" as const, title: "Technical Support", description: "Dedicated IT help desk for online students -- available by phone, email, and live chat during extended hours." },
]

const techRequirements = [
  "Reliable broadband internet connection (minimum 10 Mbps download)",
  "Computer with webcam, microphone, and speakers (Windows 10+ or macOS 12+)",
  "Updated web browser (Chrome, Firefox, Safari, or Edge)",
  "Microsoft Office 365 (provided free to all Miles students)",
  "Quiet space for live sessions and proctored exams",
]

const virtualLifeItems = [
  { title: "Online Student Government", description: "Represent the online student body and advocate for virtual student needs." },
  { title: "Virtual Study Groups", description: "Weekly scheduled study sessions organized by major and course level." },
  { title: "Online Networking Events", description: "Connect with alumni, industry professionals, and fellow students at virtual mixers." },
  { title: "Digital Homecoming", description: "Participate in homecoming celebrations through live-streamed events and virtual activities." },
]

export default function OnlineLearningPage() {
  const onlinePrograms = getOnlinePrograms()

  return (
    <main>
      <PageHeader
        title="How Online Learning Works"
        subtitle="Everything you need to know about earning your Miles College degree online -- from technology and tools to support and student life."
        breadcrumbs={[{ label: "How Online Works" }]}
      />

      {/* Hero Image Section */}
      <section className="relative">
        <div className="relative h-64 md:h-80 lg:h-[28rem] overflow-hidden">
          <Image
            src="/images/online-learning-hero.jpg"
            alt="Student studying online from home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0415] via-[#0a0415]/60 to-[#0a0415]/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-white text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-balance max-w-3xl">
                Your Degree, Your Schedule, Your Future
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button asChild size="lg" className="bg-[#C9A227] text-[#0a0415] hover:bg-yellow-400 font-black rounded-full h-14 px-10 shadow-xl shadow-[#C9A227]/20">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold rounded-full h-14 px-10">
                  <Link href="/visit">Request Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Online Learning Works */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <Badge className="bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
              Learning Without Limits
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our online programs combine cutting-edge technology with the personalized instruction Miles College is known for.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map((item) => {
              const Icon = Icons[item.icon]
              return (
                <Card key={item.title} className="relative p-6 bg-card border-border text-center group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="w-14 h-14 bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4 rounded-xl group-hover:bg-[#C9A227]/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#C9A227]" />
                  </div>
                  <h3 className="font-black text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Available Online Programs */}
      <section className="py-16 lg:py-24 bg-muted relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4B2E83]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <Badge className="bg-[#4B2E83]/10 text-[#4B2E83] border-[#4B2E83]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
              Available Online Programs
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose from {onlinePrograms.length} accredited degree programs -- all delivered 100% online with expert faculty and flexible scheduling.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {onlinePrograms.map((program) => (
              <Card key={program.slug} className="relative p-6 bg-card border-border flex flex-col group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden hover:shadow-lg hover:shadow-[#C9A227]/5">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A227] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-black text-foreground group-hover:text-[#C9A227] transition-colors duration-300">{program.name}</h3>
                    <span className="text-xs text-muted-foreground">{program.degreeType}</span>
                  </div>
                  <Badge className="bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 text-[10px] font-bold shrink-0">
                    Online
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{program.description}</p>
                <Link
                  href={`/programs/${program.slug}`}
                  className="mt-4 text-sm font-bold text-[#C9A227] hover:text-[#C9A227]/80 transition-colors flex items-center gap-1"
                >
                  Learn More <Icons.arrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="font-bold rounded-full h-12 px-8 hover:border-[#C9A227]/40">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Student Support Services */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <Badge className="bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Support
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
              Full Support, Fully Virtual
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every online student receives full access to dedicated support services designed for the virtual learning experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportServices.map((service) => {
              const Icon = Icons[service.icon]
              return (
                <Card key={service.title} className="relative p-6 bg-card border-border group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4B2E83] to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#4B2E83]/10 flex items-center justify-center shrink-0 rounded-xl group-hover:bg-[#4B2E83]/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#4B2E83]" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground mb-1 group-hover:text-[#4B2E83] transition-colors duration-300">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Requirements */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
            <div className="lg:w-1/3">
              <Badge className="bg-[#4B2E83]/10 text-[#4B2E83] border-[#4B2E83]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
                Tech Requirements
              </Badge>
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance">
                What You Need to Get Started
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Make sure your setup meets these requirements for the best online learning experience.
              </p>
            </div>
            <Card className="lg:w-2/3 p-6 md:p-8 bg-card border-border">
              <ul className="flex flex-col gap-4">
                {techRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-[#C9A227]/10 flex items-center justify-center shrink-0 rounded-lg mt-0.5">
                      <Icons.check className="w-3.5 h-3.5 text-[#C9A227]" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-[#C9A227]/5 border border-[#C9A227]/15 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground font-black">Need help?</strong> Our IT help desk can assist with setup and troubleshooting. Contact us at{" "}
                  <span className="text-[#C9A227] font-bold">onlinehelp@miles.edu</span> or call{" "}
                  <span className="text-[#C9A227] font-bold">(205) 929-1000</span>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Student Life */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          <div className="text-center mb-14">
            <Badge className="bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Community
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
              Virtual Student Life
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Being online doesn&apos;t mean being alone. Join a thriving virtual community of Golden Bears.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {virtualLifeItems.map((item) => (
              <Card key={item.title} className="relative p-6 bg-card border-border group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A227] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-black text-foreground mb-2 group-hover:text-[#C9A227] transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonial */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#C9A227]/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#4B2E83]/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl relative z-10 text-center">
          <div className="w-12 h-12 bg-[#C9A227]/10 rounded-xl flex items-center justify-center mx-auto mb-8">
            <Icons.sparkles className="w-6 h-6 text-[#C9A227]" />
          </div>
          <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 border-0 p-0 m-0 font-normal not-italic">
            &ldquo;As a working mom, I never thought I could finish my degree. Miles College Online made it possible. The professors are just as engaged as they would be in person, and I never felt like I was missing out on the Miles experience.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-black text-[#C9A227] text-sm uppercase tracking-wider">Tamara J., Class of 2025</p>
            <p className="text-white/40 text-sm mt-1">B.B.A. Business Administration, Online</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance mb-4">
            Ready to Start Your Online Journey?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            Take the next step toward earning your degree on your terms. Our online admissions team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#1a0a2e] text-white hover:bg-[#2d1b4e] font-black rounded-full h-14 px-10 shadow-xl">
              <Link href="/apply">Apply for Online Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold rounded-full h-14 px-10 hover:border-[#C9A227]/40">
              <Link href="/visit">Chat with an Online Advisor</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Questions? Email{" "}
            <span className="text-[#C9A227] font-bold">online@miles.edu</span> or call{" "}
            <span className="text-[#C9A227] font-bold">(205) 929-1000</span>
          </p>
        </div>
      </section>
    </main>
  )
}
