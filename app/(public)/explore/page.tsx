import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const values = [
  { title: "Flexibility", description: "100% online coursework with asynchronous options so you can learn on your own schedule -- mornings, evenings, or weekends.", icon: Icons.clock, accent: "from-[#C9A227] to-yellow-400", iconBg: "bg-[#C9A227]" },
  { title: "Excellence", description: "The same SACSCOC-accredited curriculum, expert faculty, and academic rigor as our traditional programs.", icon: Icons.award, accent: "from-[#4B2E83] to-purple-500", iconBg: "bg-[#4B2E83]" },
  { title: "Community", description: "A connected virtual community where online students are known, valued, and supported by faculty and peers.", icon: Icons.users, accent: "from-[#C9A227] to-yellow-400", iconBg: "bg-[#C9A227]" },
  { title: "Access", description: "24/7 access to your LMS, digital library, tutoring, advising, and career services -- from anywhere.", icon: Icons.laptop, accent: "from-[#4B2E83] to-purple-500", iconBg: "bg-[#4B2E83]" },
]

const facts = [
  "Founded in 1898 -- now delivering HBCU excellence online",
  "Accredited by SACSCOC since 1969",
  "30+ degree programs available 100% online",
  "17:1 student-to-faculty ratio for personalized attention",
  "97% of students receive some form of financial aid",
  "Flexible scheduling for working professionals and parents",
  "Same faculty teach online and on-campus courses",
  "Virtual student organizations, events, and career services",
]

export default function ExplorePage() {
  return (
    <main>
      <PageHeader
        title="Why Miles College Online"
        subtitle="Discover why Miles College Online is the right choice for your accredited degree -- with the flexibility, support, and HBCU tradition you deserve."
        breadcrumbs={[{ label: "Explore" }]}
      />

      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4B2E83]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          {/* Intro card */}
          <Card className="relative p-6 md:p-10 mb-16 bg-card border-border overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A227] via-yellow-400 to-[#C9A227]" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#C9A227]/5 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black mb-5 text-foreground">Why Miles College Online?</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Miles College Online brings the full power of Birmingham&apos;s premier HBCU to your laptop. Our fully online
                programs combine the same accredited curriculum and expert faculty with the flexibility that working
                professionals, parents, and lifelong learners need to succeed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 30 degree programs available 100% online, dedicated virtual support services, and a thriving
                online student community, Miles College Online is where your next chapter begins -- on your terms.
              </p>
            </div>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <div className="mb-8">
              <Badge className="bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
                Our Values
              </Badge>
              <h2 className="text-2xl font-black text-foreground">What Sets Us Apart</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {values.map((v) => {
                const IconComp = v.icon
                return (
                  <Card key={v.title} className="relative p-6 bg-card border-border group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${v.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${v.iconBg}/10 flex items-center justify-center flex-shrink-0 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className={`w-6 h-6 ${v.iconBg === "bg-[#C9A227]" ? "text-[#C9A227]" : "text-[#4B2E83]"}`} />
                      </div>
                      <div>
                        <h3 className="font-black text-foreground mb-1 group-hover:text-[#C9A227] transition-colors duration-300">{v.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Quick Facts */}
          <div className="mb-16">
            <div className="mb-8">
              <Badge className="bg-[#4B2E83]/10 text-[#4B2E83] border-[#4B2E83]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
                Quick Facts
              </Badge>
              <h2 className="text-2xl font-black text-foreground">Miles at a Glance</h2>
            </div>
            <Card className="p-6 md:p-8 bg-card border-border">
              <ul className="grid md:grid-cols-2 gap-4">
                {facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C9A227]/10 flex items-center justify-center shrink-0 rounded-lg mt-0.5">
                      <Icons.check className="w-3 h-3 text-[#C9A227]" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* CTA Card */}
          <Card className="relative p-6 md:p-10 bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#2d1b4e] border-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9A227]/8 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#4B2E83]/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-black mb-3 text-white">Ready to Start Your Online Degree?</h3>
              <p className="text-white/50 mb-6 leading-relaxed">Apply today and join the Miles College online learning community.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#C9A227] text-[#0a0415] font-black hover:bg-yellow-400 rounded-full h-12 px-8 shadow-lg shadow-[#C9A227]/20" asChild>
                  <Link href="/apply">Apply Now <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button variant="outline" className="font-bold border-white/20 text-white hover:bg-white/5 rounded-full h-12 px-8" asChild>
                  <Link href="/programs">Explore Online Programs</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
