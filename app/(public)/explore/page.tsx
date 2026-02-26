import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const values = [
  { title: "Faith", description: "Rooted in the Christian Methodist Episcopal tradition, Miles College nurtures spiritual growth alongside academic excellence.", icon: Icons.heart },
  { title: "Excellence", description: "We hold ourselves and our students to the highest standards of academic and personal achievement.", icon: Icons.award },
  { title: "Community", description: "A tight-knit campus community where every student is known, valued, and supported.", icon: Icons.users },
  { title: "Service", description: "We prepare leaders who serve their communities and make a positive impact on the world.", icon: Icons.globe },
]

const facts = [
  "Founded in 1898 by the Colored Methodist Episcopal Church",
  "Located in Fairfield, Alabama, just 6 minutes from downtown Birmingham",
  "Accredited by SACSCOC since 1969",
  "Home of the Golden Bears and the Purple Marching Machine",
  "17:1 student-to-faculty ratio for personalized attention",
  "97% of students receive some form of financial aid",
  "Over 30 degree programs across 4 academic divisions",
  "NCAA Division II athletics in the SIAC Conference",
]

export default function ExplorePage() {
  return (
    <main>
      <PageHeader
        title="Explore Miles College"
        subtitle="Discover why Miles College has been shaping leaders and changing lives for over 125 years."
        breadcrumbs={[{ label: "Explore" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-6 md:p-8 mb-12 bg-card border-border">
            <h2 className="text-2xl font-black mb-4 text-foreground">Why Miles College?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Miles College is Birmingham&apos;s only four-year HBCU, offering a transformative educational experience
              that combines academic rigor with personal attention. Our intimate campus community ensures that every
              student receives the mentorship, resources, and support they need to succeed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 30 degree programs, championship athletics, a world-renowned marching band, and a legacy
              of producing leaders in business, law, medicine, education, and public service, Miles College is where
              your legacy begins.
            </p>
          </Card>

          <h2 className="text-2xl font-black mb-6 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {values.map((v) => {
              const IconComp = v.icon
              return (
                <Card key={v.title} className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground mb-1">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <h2 className="text-2xl font-black mb-6 text-foreground">Quick Facts</h2>
          <Card className="p-6 bg-card border-border mb-12">
            <ul className="grid md:grid-cols-2 gap-3">
              {facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <Icons.check className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">{fact}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 md:p-8 bg-secondary text-primary border-0">
            <h3 className="text-xl font-black mb-2">Ready to Experience Miles College?</h3>
            <p className="text-primary/80 mb-4">Visit our campus and see why students choose to become Golden Bears.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-primary text-primary-foreground font-bold hover:bg-primary/90" asChild>
                <Link href="/visit">Schedule a Visit <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button variant="outline" className="font-bold border-primary text-primary hover:bg-primary/10" asChild>
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
