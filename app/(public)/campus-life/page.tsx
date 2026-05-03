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
  { icon: Icons.users, title: "Discussion Forums", description: "Active course discussion boards and a general student lounge for connecting beyond coursework." },
  { icon: Icons.video, title: "Live Virtual Events", description: "Weekly events including guest lectures, study sessions, career workshops, and social mixers." },
  { icon: Icons.headphones, title: "Student Support Chat", description: "Peer support channels where current students help each other navigate the online experience." },
  { icon: Icons.sparkles, title: "Miles AI Assistant", description: "24/7 AI-powered support for questions about courses, deadlines, campus resources, and more." },
]

export default function VirtualStudentLifePage() {
  return (
    <main>
      <PageHeader
        title="Virtual Student Life"
        subtitle="Being online does not mean being alone. Join a thriving virtual community of Golden Bears from across the country."
        breadcrumbs={[{ label: "Virtual Student Life" }]}
      />

      {/* Community Overview */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase mb-4">
              Your Online Community
            </Badge>
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance">
              Stay Connected, Stay Engaged
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our virtual student life is designed to make sure every online learner feels like a true part of the Miles College family.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-6 bg-card border-border text-center">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center mx-auto mb-4 rounded-lg">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-black text-foreground text-sm mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Virtual Organizations */}
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-6 text-foreground">Virtual Student Organizations</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {virtualOrganizations.map((org) => (
              <Card key={org.name} className="p-5 bg-card border-border">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-black text-foreground">{org.name}</h3>
                  <Badge variant="outline" className="text-xs capitalize font-medium shrink-0 ml-2">{org.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{org.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Events */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-6 text-foreground">Virtual Events & Activities</h2>
          <div className="flex flex-col gap-4">
            {virtualEvents.map((event) => (
              <Card key={event.title} className="p-5 bg-card border-border">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-16 h-16 bg-secondary/10 flex flex-col items-center justify-center flex-shrink-0 rounded-lg">
                    <Icons.monitor className="w-5 h-5 text-secondary mb-1" />
                    <span className="text-[10px] font-bold text-secondary text-center leading-tight">Virtual</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Icons.clock className="w-3 h-3" /> {event.time}</span>
                    </div>
                  </div>
                  <Badge className="self-start bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase">{event.category}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance mb-4">
            Ready to Join the Golden Bear Community?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            Start your online journey today and become part of a community that supports you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              <Link href="/apply">Apply Now <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/chat">Ask Miles AI</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
