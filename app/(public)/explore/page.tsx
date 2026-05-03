import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const values = [
  { title: "Flexibility", description: "100% online coursework with asynchronous options so you can learn on your own schedule -- mornings, evenings, or weekends.", icon: Icons.clock },
  { title: "Excellence", description: "The same SACSCOC-accredited curriculum, expert faculty, and academic rigor as our traditional programs.", icon: Icons.award },
  { title: "Community", description: "A connected virtual community where online students are known, valued, and supported by faculty and peers.", icon: Icons.users },
  { title: "Access", description: "24/7 access to your LMS, digital library, tutoring, advising, and career services -- from anywhere.", icon: Icons.laptop },
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
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-6 md:p-8 mb-12 bg-card border-border">
            <h2 className="text-2xl font-black mb-4 text-foreground">Why Miles College Online?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Miles College Online brings the full power of Birmingham&apos;s premier HBCU to your laptop. Our fully online
              programs combine the same accredited curriculum and expert faculty with the flexibility that working
              professionals, parents, and lifelong learners need to succeed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 30 degree programs available 100% online, dedicated virtual support services, and a thriving
              online student community, Miles College Online is where your next chapter begins -- on your terms.
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
            <h3 className="text-xl font-black mb-2">Ready to Start Your Online Degree?</h3>
            <p className="text-primary/80 mb-4">Apply today and join the Miles College online learning community.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-primary text-primary-foreground font-bold hover:bg-primary/90" asChild>
                <Link href="/apply">Apply Now <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button variant="outline" className="font-bold border-primary text-primary hover:bg-primary/10" asChild>
                <Link href="/programs">Explore Online Programs</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
