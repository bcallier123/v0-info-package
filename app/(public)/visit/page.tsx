import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import Link from "next/link"

export default function VisitPage() {
  return (
    <main>
      <PageHeader
        title="Visit Miles"
        subtitle="Experience Miles College in person or virtually. Schedule a campus tour or explore our online info sessions."
        breadcrumbs={[{ label: "Visit" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl font-black mb-6 text-foreground">Schedule Your Visit</h2>
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
                  <Label htmlFor="date" className="text-foreground font-bold text-sm mb-1.5 block">Preferred Visit Date</Label>
                  <Input id="date" type="date" />
                </div>
                <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400 mt-2">
                  Request Tour <Icons.arrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground">Tours available Monday-Friday, 9 AM - 4 PM. We will confirm your visit via email.</p>
              </form>
            </Card>

            <div className="flex flex-col gap-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-black mb-4 text-foreground">Campus Location</h3>
                <div className="aspect-video bg-muted mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <Icons.mapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground font-semibold">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">Coming soon</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <p className="font-bold text-foreground">Miles College</p>
                  <p>5500 Myron Massey Blvd</p>
                  <p>Fairfield, AL 35064</p>
                  <p className="text-secondary font-bold">6 minutes from downtown Birmingham</p>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/10 border-secondary/30">
                <h3 className="text-lg font-black text-foreground mb-3">What to Expect</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "Campus walking tour (45-60 min)",
                    "Meet with admissions counselor",
                    "Visit residence halls and dining",
                    "Explore academic buildings and labs",
                    "Q&A with current students",
                  ].map((item) => (
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

      {/* Virtual Visit Section */}
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs uppercase mb-4">
              Virtual Option
            </Badge>
            <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance">
              Can&apos;t Visit in Person?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Explore Miles College from anywhere. Our virtual options give you the full campus experience -- no travel required.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border text-center">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg">
                <Icons.video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-black text-foreground text-sm mb-2">Virtual Campus Tour</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Take a guided video tour of our campus, residence halls, classrooms, and student spaces.
              </p>
              <Button variant="outline" size="sm" className="font-bold">
                Watch Tour
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center mx-auto mb-4 rounded-lg">
                <Icons.monitor className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-black text-foreground text-sm mb-2">Online Info Session</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Join a live session with admissions counselors to learn about programs, aid, and student life.
              </p>
              <Button variant="outline" size="sm" className="font-bold">
                Register
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg">
                <Icons.headphones className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-black text-foreground text-sm mb-2">Chat with an Advisor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Have questions about online programs? Connect one-on-one with an online admissions advisor.
              </p>
              <Button variant="outline" size="sm" className="font-bold" asChild>
                <Link href="/chat">Start Chat</Link>
              </Button>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Interested in our fully online programs?{" "}
              <Link href="/online" className="text-primary font-bold hover:text-primary/80 transition-colors">
                Learn more about online learning at Miles
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
