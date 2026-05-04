import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const virtualOrganizations = [
  { name: "Online Student Government", description: "Represent the online student body and advocate for virtual student needs and platform improvements.", category: "leadership" },
  { name: "Virtual Honor Society", description: "Recognition for online students maintaining a 3.5+ GPA. Participate in virtual induction ceremonies and networking.", category: "academic" },
  { name: "Online Business Club", description: "Connect with fellow business majors through virtual case competitions, guest speakers, and networking events.", category: "academic" },
  { name: "Digital Writers Workshop", description: "Share your writing, get peer feedback, and participate in virtual open mic nights and publishing opportunities.", category: "creative" },
  { name: "Miles Online Book Club", description: "Monthly virtual book discussions spanning literature, current events, and professional development titles.", category: "social" },
  { name: "Virtual Mentorship Program", description: "Get paired with a Miles alum in your field for monthly virtual mentorship sessions and career guidance.", category: "career" },
]

const virtualEvents = [
  { title: "Weekly Virtual Study Sessions", time: "Mon-Thu, 7-9 PM CT", description: "Drop-in study rooms organized by major. Collaborate with classmates and get peer support.", category: "academic" },
  { title: "Online Orientation", time: "Before each semester", description: "Meet your professors, navigate the LMS, and connect with your online cohort.", category: "onboarding" },
  { title: "Virtual Career Fair", time: "Each semester", description: "Meet recruiters and hiring managers from top companies -- all from your laptop.", category: "career" },
  { title: "Digital Homecoming", time: "October annually", description: "Live-streamed celebrations, virtual watch parties, trivia, and Golden Bear spirit from anywhere.", category: "social" },
  { title: "Monthly Networking Mixer", time: "Last Friday of each month", description: "Connect with alumni, industry professionals, and fellow online students in a relaxed virtual setting.", category: "social" },
  { title: "Wellness Wednesdays", time: "Every Wednesday, 12 PM CT", description: "Virtual mindfulness, stress management, and wellness workshops for online learners.", category: "wellness" },
]

const communityFeatures = [
  { icon: Icons.users, title: "Discussion Forums", description: "Active course discussion boards and a general student lounge for connecting beyond coursework.", accent: "from-[#C9A227] to-yellow-400" },
  { icon: Icons.video, title: "Live Virtual Events", description: "Weekly events including guest lectures, study sessions, career workshops, and social mixers.", accent: "from-[#4B2E83] to-purple-500" },
  { icon: Icons.headphones, title: "Student Support Chat", description: "Peer support channels where current students help each other navigate the online experience.", accent: "from-[#C9A227] to-yellow-400" },
  { icon: Icons.sparkles, title: "Miles AI Assistant", description: "24/7 AI-powered support for questions about courses, deadlines, campus resources, and more.", accent: "from-[#4B2E83] to-purple-500" },
]

const categoryColors: Record<string, string> = {
  leadership: "bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30",
  academic: "bg-[#4B2E83]/10 text-[#4B2E83] border-[#4B2E83]/30",
  creative: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
  social: "bg-sky-500/10 text-sky-600 border-sky-500/30",
  career: "bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30",
  onboarding: "bg-[#4B2E83]/10 text-[#4B2E83] border-[#4B2E83]/30",
  wellness: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
}

export default function VirtualStudentLifePage() {
  return (
    <main>
      <PageHeader
        title="Virtual Student Life"
        subtitle="Being online does not mean being alone. Join a thriving virtual community of Golden Bears from across the country."
        breadcrumbs={[{ label: "Virtual Student Life" }]}
      />

      {/* Community Overview */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <Badge className="bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Your Online Community
            </Badge>
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance">
              Stay Connected, Stay Engaged
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our virtual student life is designed to make sure every online learner feels like a true part of the Miles College family.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {communityFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="relative p-6 bg-card border-border text-center group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="w-14 h-14 bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4 rounded-xl group-hover:bg-[#C9A227]/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#C9A227]" />
                  </div>
                  <h3 className="font-black text-foreground text-sm mb-2 group-hover:text-[#C9A227] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Virtual Organizations */}
      <section className="py-16 lg:py-24 bg-muted relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4B2E83]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          <div className="mb-10">
            <Badge className="bg-[#4B2E83]/10 text-[#4B2E83] border-[#4B2E83]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Organizations
            </Badge>
            <h2 className="text-2xl font-black text-foreground">Virtual Student Organizations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {virtualOrganizations.map((org) => (
              <Card key={org.name} className="relative p-6 bg-card border-border group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A227] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-black text-foreground group-hover:text-[#C9A227] transition-colors duration-300">{org.name}</h3>
                  <Badge className={`text-[10px] capitalize font-bold shrink-0 ml-2 ${categoryColors[org.category]}`}>{org.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{org.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Events */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          <div className="mb-10">
            <Badge className="bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Events
            </Badge>
            <h2 className="text-2xl font-black text-foreground">Virtual Events & Activities</h2>
          </div>
          <div className="flex flex-col gap-4">
            {virtualEvents.map((event) => (
              <Card key={event.title} className="relative p-5 sm:p-6 bg-card border-border group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C9A227] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col md:flex-row md:items-center gap-4 pl-1">
                  <div className="w-14 h-14 bg-[#C9A227]/10 flex flex-col items-center justify-center flex-shrink-0 rounded-xl group-hover:bg-[#C9A227]/20 transition-colors duration-300">
                    <Icons.monitor className="w-5 h-5 text-[#C9A227] mb-0.5" />
                    <span className="text-[9px] font-bold text-[#C9A227] text-center leading-tight uppercase">Live</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-foreground group-hover:text-[#C9A227] transition-colors duration-300">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{event.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Icons.clock className="w-3 h-3 text-[#C9A227]" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                  </div>
                  <Badge className={`self-start text-[10px] font-bold uppercase ${categoryColors[event.category]}`}>{event.category}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance mb-4">
            Ready to Join the Golden Bear Community?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            Start your online journey today and become part of a community that supports you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#1a0a2e] text-white hover:bg-[#2d1b4e] font-black rounded-full h-14 px-10 shadow-xl">
              <Link href="/apply">Apply Now <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold rounded-full h-14 px-10 hover:border-[#C9A227]/40">
              <Link href="/chat">Ask Miles AI</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
