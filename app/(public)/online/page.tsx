import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { getOnlinePrograms } from "@/lib/data/programs"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Online Learning | Miles College",
  description:
    "Earn your Miles College degree 100% online. Flexible scheduling, dedicated support, and the same accredited education -- from anywhere.",
}

const howItWorks = [
  {
    icon: "laptop" as const,
    title: "Interactive LMS",
    description:
      "Access coursework, lectures, and assignments through our Canvas learning management system -- available 24/7 from any device.",
  },
  {
    icon: "video" as const,
    title: "Live & Recorded Lectures",
    description:
      "Attend live virtual sessions with your professors or watch recorded lectures on your own schedule.",
  },
  {
    icon: "users" as const,
    title: "Collaborative Learning",
    description:
      "Engage with classmates through discussion boards, group projects, and virtual study sessions.",
  },
  {
    icon: "calendar" as const,
    title: "Flexible Scheduling",
    description:
      "Asynchronous coursework lets you learn on your schedule -- perfect for working professionals and busy parents.",
  },
]

const supportServices = [
  {
    icon: "headphones" as const,
    title: "Virtual Advising",
    description:
      "Meet one-on-one with your academic advisor via video call to plan your degree path and stay on track.",
  },
  {
    icon: "bookOpen" as const,
    title: "Online Tutoring",
    description:
      "Free peer tutoring and writing center support available through virtual appointments and live chat.",
  },
  {
    icon: "book" as const,
    title: "Digital Library Access",
    description:
      "Full access to the C.A. Kirkland Library digital collection, databases, e-books, and research tools.",
  },
  {
    icon: "briefcase" as const,
    title: "Career Services",
    description:
      "Virtual career coaching, resume reviews, interview prep, and access to the Miles job board.",
  },
  {
    icon: "dollarSign" as const,
    title: "Financial Aid",
    description:
      "Online students qualify for the same financial aid, grants, and scholarships as on-campus students.",
  },
  {
    icon: "shield" as const,
    title: "Technical Support",
    description:
      "Dedicated IT help desk for online students -- available by phone, email, and live chat during extended hours.",
  },
]

const techRequirements = [
  "Reliable broadband internet connection (minimum 10 Mbps download)",
  "Computer with webcam, microphone, and speakers (Windows 10+ or macOS 12+)",
  "Updated web browser (Chrome, Firefox, Safari, or Edge)",
  "Microsoft Office 365 (provided free to all Miles students)",
  "Quiet space for live sessions and proctored exams",
]

const virtualLifeItems = [
  {
    title: "Online Student Government",
    description: "Represent the online student body and advocate for virtual student needs.",
  },
  {
    title: "Virtual Study Groups",
    description: "Weekly scheduled study sessions organized by major and course level.",
  },
  {
    title: "Online Networking Events",
    description: "Connect with alumni, industry professionals, and fellow students at virtual mixers.",
  },
  {
    title: "Digital Homecoming",
    description: "Participate in homecoming celebrations through live-streamed events and virtual activities.",
  },
]

export default function OnlineLearningPage() {
  const onlinePrograms = getOnlinePrograms()

  return (
    <main>
      <PageHeader
        title="Online Learning"
        subtitle="Earn your Miles College degree from anywhere. The same accredited education, expert faculty, and Golden Bear community -- delivered on your schedule."
        breadcrumbs={[{ label: "Online Learning" }]}
      />

      {/* Hero Image Section */}
      <section className="relative bg-primary">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src="/images/online-learning-hero.jpg"
            alt="Student studying online from home"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-primary-foreground text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight text-balance max-w-3xl">
                Your Degree, Your Schedule, Your Future
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold">
                  <Link href="/visit">Request Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Online Learning Works */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
              Learning Without Limits
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our online programs combine cutting-edge technology with the personalized instruction Miles College is known for.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => {
              const Icon = Icons[item.icon]
              return (
                <Card key={item.title} className="p-6 bg-card border-border text-center">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center mx-auto mb-4 rounded-lg">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-black text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Available Online Programs */}
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs uppercase mb-4">
              Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
              Available Online Programs
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose from {onlinePrograms.length} accredited degree programs -- all available 100% online with the same curriculum and faculty as our on-campus offerings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlinePrograms.map((program) => (
              <Card key={program.slug} className="p-6 bg-card border-border flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-black text-foreground text-sm">{program.name}</h3>
                    <span className="text-xs text-muted-foreground">{program.degreeType}</span>
                  </div>
                  <Badge className="bg-secondary/10 text-secondary border-secondary/30 text-xs font-bold shrink-0">
                    Online
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{program.description}</p>
                <Link
                  href={`/programs/${program.slug}`}
                  className="mt-4 text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  Learn More <Icons.arrowRight className="w-3 h-3" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="font-bold">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Student Support Services */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase mb-4">
              Support
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
              Full Support, Fully Virtual
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Online students receive the same dedicated support services as on-campus students -- just delivered digitally.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service) => {
              const Icon = Icons[service.icon]
              return (
                <Card key={service.title} className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground text-sm mb-1">{service.title}</h3>
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
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="lg:w-1/3">
              <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs uppercase mb-4">
                Tech Requirements
              </Badge>
              <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance">
                What You Need to Get Started
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Make sure your setup meets these requirements for the best online learning experience.
              </p>
            </div>
            <Card className="lg:w-2/3 p-6 bg-card border-border">
              <ul className="flex flex-col gap-4">
                {techRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/10 flex items-center justify-center shrink-0 rounded-full mt-0.5">
                      <Icons.check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Need help?</strong> Our IT help desk can assist with setup and troubleshooting. Contact us at{" "}
                  <span className="text-primary font-semibold">onlinehelp@miles.edu</span> or call{" "}
                  <span className="text-primary font-semibold">(205) 929-1000</span>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Student Life */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase mb-4">
              Community
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
              Virtual Student Life
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Being online doesn&apos;t mean being alone. Join a thriving virtual community of Golden Bears.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {virtualLifeItems.map((item) => (
              <Card key={item.title} className="p-6 bg-card border-border">
                <h3 className="font-black text-foreground text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonial */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#1a0a2e] via-primary to-[#2d1b4e] text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
          <Icons.sparkles className="w-8 h-8 text-secondary mx-auto mb-6" />
          <blockquote className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 border-0 p-0 m-0 font-normal not-italic">
            &ldquo;As a working mom, I never thought I could finish my degree. Miles College Online made it possible. The professors are just as engaged as they would be in person, and I never felt like I was missing out on the Miles experience.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-black text-secondary text-sm uppercase">Tamara J., Class of 2025</p>
            <p className="text-primary-foreground/60 text-sm">B.B.A. Business Administration, Online</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance mb-4">
            Ready to Start Your Online Journey?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            Take the next step toward earning your degree on your terms. Our online admissions team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              <Link href="/apply">Apply for Online Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/visit">Chat with an Online Advisor</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Questions? Email{" "}
            <span className="text-primary font-semibold">online@miles.edu</span> or call{" "}
            <span className="text-primary font-semibold">(205) 929-1000</span>
          </p>
        </div>
      </section>
    </main>
  )
}
