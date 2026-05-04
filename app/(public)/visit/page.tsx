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

      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4B2E83]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Registration Form */}
            <Card className="relative p-6 md:p-8 bg-card border-border overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A227] to-yellow-400" />
              <h2 className="text-xl font-black mb-6 text-foreground">Register for a Virtual Info Session</h2>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground font-bold text-sm mb-1.5 block">First Name</Label>
                    <Input id="firstName" placeholder="First name" className="h-11" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground font-bold text-sm mb-1.5 block">Last Name</Label>
                    <Input id="lastName" placeholder="Last name" className="h-11" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground font-bold text-sm mb-1.5 block">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="h-11" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground font-bold text-sm mb-1.5 block">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(205) 555-0123" className="h-11" />
                </div>
                <div>
                  <Label htmlFor="interest" className="text-foreground font-bold text-sm mb-1.5 block">Program of Interest</Label>
                  <Input id="interest" placeholder="e.g. Business Administration" className="h-11" />
                </div>
                <Button className="bg-[#C9A227] text-[#0a0415] font-black hover:bg-yellow-400 mt-2 h-12 rounded-full shadow-lg shadow-[#C9A227]/20">
                  Register for Info Session <Icons.arrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">Virtual info sessions are held weekly via Zoom. You will receive a link via email after registration.</p>
              </form>
            </Card>

            {/* Info + What to Expect */}
            <div className="flex flex-col gap-6">
              <Card className="relative p-6 bg-card border-border overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4B2E83] to-purple-400" />
                <h3 className="text-lg font-black mb-5 text-foreground">Upcoming Sessions</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { date: "Every Tuesday", time: "6:00 PM CT", type: "General Info Session" },
                    { date: "Every Thursday", time: "12:00 PM CT", type: "Lunchtime Q&A" },
                    { date: "1st Saturday/month", time: "10:00 AM CT", type: "Weekend Deep Dive" },
                  ].map((session) => (
                    <div key={session.type} className="flex items-center gap-4 p-4 bg-muted rounded-xl group hover:bg-[#C9A227]/5 transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#C9A227]/10 flex flex-col items-center justify-center flex-shrink-0 rounded-xl group-hover:bg-[#C9A227]/20 transition-colors duration-300">
                        <Icons.monitor className="w-5 h-5 text-[#C9A227]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-black text-foreground">{session.type}</p>
                        <p className="text-xs text-muted-foreground">{session.date} at {session.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-[#C9A227]/5 border-[#C9A227]/15">
                <h3 className="text-lg font-black text-foreground mb-4">What You Will Learn</h3>
                <ul className="flex flex-col gap-3">
                  {infoSessionTopics.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#C9A227]/10 flex items-center justify-center shrink-0 rounded-lg mt-0.5">
                        <Icons.check className="w-3 h-3 text-[#C9A227]" />
                      </div>
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
      <section className="py-16 lg:py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#C9A227]/3 rounded-full blur-[120px]" />
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-[#4B2E83]/10 text-[#4B2E83] border-[#4B2E83]/30 font-bold text-[10px] uppercase tracking-wider mb-4">
              Personalized Help
            </Badge>
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance">
              Prefer a One-on-One Conversation?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Connect directly with an online admissions advisor who can answer your specific questions.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Icons.video, title: "Video Consultation", description: "Schedule a 30-minute video call with an admissions counselor to discuss your goals and options.", action: "Schedule Call", color: "[#4B2E83]" },
              { icon: Icons.phone, title: "Phone Consultation", description: "Speak directly with our online admissions team. No appointment necessary during business hours.", action: "(205) 929-1657", href: "tel:2059291657", color: "[#C9A227]" },
              { icon: Icons.sparkles, title: "Chat with Miles AI", description: "Get instant answers about programs, admissions, financial aid, and student life -- 24/7.", action: "Start Chat", href: "/chat", color: "[#4B2E83]" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="relative p-6 bg-card border-border text-center group hover:border-[#C9A227]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A227] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`w-14 h-14 bg-${item.color}/10 flex items-center justify-center mx-auto mb-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 text-${item.color}`} />
                  </div>
                  <h3 className="font-black text-foreground text-sm mb-2 group-hover:text-[#C9A227] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
                  <Button variant="outline" size="sm" className="font-bold rounded-full hover:border-[#C9A227]/40" asChild={!!item.href}>
                    {item.href ? (
                      item.href.startsWith("tel:") ? <a href={item.href}>{item.action}</a> : <Link href={item.href}>{item.action}</Link>
                    ) : (
                      <span>{item.action}</span>
                    )}
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
