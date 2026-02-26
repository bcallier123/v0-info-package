import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { PathwaySelector } from "@/components/pathway-selector"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { programs } from "@/lib/data/programs"
import { deadlines } from "@/lib/data/deadlines"

const quickLinks = [
  { title: "Programs", description: "30+ degree programs", href: "/programs", icon: Icons.bookOpen },
  { title: "Costs", description: "Tuition & fees breakdown", href: "/costs", icon: Icons.dollarSign },
  { title: "Financial Aid", description: "Scholarships & grants", href: "/financial-aid", icon: Icons.award },
  { title: "Apply", description: "Free online application", href: "/apply", icon: Icons.fileText },
  { title: "Visit", description: "Schedule a campus tour", href: "/visit", icon: Icons.mapPin },
  { title: "AI Advisor", description: "Chat with our AI assistant", href: "/chat", icon: Icons.sparkles },
]

export default function HomePage() {
  const featuredPrograms = programs.slice(0, 3)
  const upcomingDeadlines = deadlines
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3)

  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />

      {/* Quick Links Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4">
              EXPLORE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              QUICK <span className="text-secondary">LINKS</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link) => {
              const IconComp = link.icon
              return (
                <Link key={link.href} href={link.href} className="group block">
                  <Card className="p-6 text-center h-full border border-border hover:border-secondary/50 bg-card text-card-foreground transition-all duration-300 hover:shadow-lg">
                    <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all">
                      <IconComp className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-black text-sm uppercase tracking-wide mb-1 text-foreground group-hover:text-secondary transition-colors">{link.title}</h3>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <PathwaySelector />

      {/* Featured Programs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4">
              ACADEMICS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              FEATURED <span className="text-secondary">PROGRAMS</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredPrograms.map((program) => (
              <Link key={program.slug} href={`/programs/${program.slug}`} className="group block">
                <Card className="p-6 h-full border border-border hover:border-secondary/50 bg-card text-card-foreground transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Icons.graduationCap className="w-5 h-5 text-secondary" />
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">{program.degreeType}</span>
                  </div>
                  <h3 className="text-lg font-black mb-2 group-hover:text-secondary transition-colors text-foreground">{program.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{program.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {program.careerOutcomes.slice(0, 2).map((outcome) => (
                      <span key={outcome} className="text-xs bg-muted px-2 py-1 font-medium text-muted-foreground">{outcome}</span>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="font-bold" asChild>
              <Link href="/programs">View All Programs <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Deadlines */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1a0a2e] via-primary to-[#2d1b4e] text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4">
              IMPORTANT DATES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              UPCOMING <span className="text-secondary">DEADLINES</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {upcomingDeadlines.map((deadline) => (
              <Card key={deadline.id} className="p-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                <div className="flex items-center gap-2 mb-3">
                  <Icons.calendar className="w-5 h-5 text-secondary" />
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    deadline.priority === "high" ? "text-secondary" : "text-primary-foreground/60"
                  }`}>
                    {deadline.priority === "high" ? "Priority" : "Important"}
                  </span>
                </div>
                <h3 className="text-lg font-black mb-1 text-primary-foreground">{deadline.title}</h3>
                <p className="text-secondary font-bold text-sm mb-2">{deadline.date}</p>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{deadline.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400" asChild>
              <Link href="/deadlines">View All Deadlines <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-secondary text-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            READY TO BEGIN YOUR LEGACY?
          </h2>
          <p className="text-lg text-primary/80 max-w-xl mx-auto mb-8">
            Join the Golden Bear family. Your free application takes just 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground font-black text-lg px-10 py-6 hover:bg-primary/90" asChild>
              <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                Apply Now - Free
                <Icons.arrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-bold text-lg px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link href="/visit">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
