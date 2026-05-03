import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import Link from "next/link"

const infoSessionTopics = [
  "Overview of online degree programs",
  "How the Canvas LMS works",
  "Financial aid for online students",
  "Meet current online students and faculty",
  "Live Q&A with admissions counselors",
]

export default function VirtualInfoPage() {
  return (
    <main>
      <PageHeader
        title="Virtual Info Sessions"
        subtitle="Learn everything about Miles College Online from the comfort of your home. Register for a live info session or request a one-on-one consultation."
        breadcrumbs={[{ label: "Info Sessions" }]}
      />

      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Registration Form */}
            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl font-black mb-6 text-foreground">Register for a Virtual Info Session</h2>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground font-bold text-sm mb-1.5 block">First Name</Label>
                    <Input id="firstName" placeholder="First name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground font-bold text-sm mb-1.5 block">Last Name</Label>
                    <Input id="lastName" placeholder="Last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground font-bold text-sm mb-1.5 block">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground font-bold text-sm mb-1.5 block">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(205) 555-0123" />
                </div>
                <div>
                  <Label htmlFor="interest" className="text-foreground font-bold text-sm mb-1.5 block">Program of Interest</Label>
                  <Input id="interest" placeholder="e.g. Business Administration" />
                </div>
                <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400 mt-2">
                  Register for Info Session <Icons.arrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground">Virtual info sessions are held weekly via Zoom. You will receive a link via email after registration.</p>
              </form>
            </Card>

            {/* Info + What to Expect */}
            <div className="flex flex-col gap-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-black mb-4 text-foreground">Upcoming Sessions</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { date: "Every Tuesday", time: "6:00 PM CT", type: "General Info Session" },
                    { date: "Every Thursday", time: "12:00 PM CT", type: "Lunchtime Q&A" },
                    { date: "1st Saturday/month", time: "10:00 AM CT", type: "Weekend Deep Dive" },
                  ].map((session) => (
                    <div key={session.type} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                      <div className="w-12 h-12 bg-secondary/10 flex flex-col items-center justify-center flex-shrink-0 rounded-lg">
                        <Icons.monitor className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-black text-foreground">{session.type}</p>
                        <p className="text-xs text-muted-foreground">{session.date} at {session.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-secondary/10 border-secondary/30">
                <h3 className="text-lg font-black text-foreground mb-3">What You Will Learn</h3>
                <ul className="flex flex-col gap-2">
                  {infoSessionTopics.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Icons.check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* One-on-One Options */}
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs uppercase mb-4">
              Personalized Help
            </Badge>
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance">
              Prefer a One-on-One Conversation?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Connect directly with an online admissions advisor who can answer your specific questions.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border text-center">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg">
                <Icons.video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-black text-foreground text-sm mb-2">Video Consultation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Schedule a 30-minute video call with an admissions counselor to discuss your goals and options.
              </p>
              <Button variant="outline" size="sm" className="font-bold">
                Schedule Call
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center mx-auto mb-4 rounded-lg">
                <Icons.phone className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-black text-foreground text-sm mb-2">Phone Consultation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Speak directly with our online admissions team. No appointment necessary during business hours.
              </p>
              <Button variant="outline" size="sm" className="font-bold" asChild>
                <a href="tel:2059291657">(205) 929-1657</a>
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg">
                <Icons.sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-black text-foreground text-sm mb-2">Chat with Miles AI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Get instant answers about programs, admissions, financial aid, and student life -- 24/7.
              </p>
              <Button variant="outline" size="sm" className="font-bold" asChild>
                <Link href="/chat">Start Chat</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
