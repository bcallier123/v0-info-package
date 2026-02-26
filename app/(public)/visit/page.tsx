import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export default function VisitPage() {
  return (
    <main>
      <PageHeader
        title="Visit Campus"
        subtitle="Experience Miles College in person. Schedule a campus tour and see what it means to be a Golden Bear."
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
    </main>
  )
}
