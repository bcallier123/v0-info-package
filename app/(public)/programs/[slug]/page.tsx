import { notFound } from "next/navigation"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { getProgramBySlug, programs } from "@/lib/data/programs"

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = getProgramBySlug(slug)
  if (!program) notFound()

  return (
    <main>
      <PageHeader
        title={program.name}
        subtitle={program.description}
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: program.name },
        ]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-8">
              <Card className="p-6 bg-card text-card-foreground border border-border">
                <h2 className="text-xl font-black mb-4 text-foreground">Program Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold">{program.degreeType}</Badge>
                  <Badge variant="outline" className="font-medium">{program.department}</Badge>
                </div>
              </Card>

              <Card className="p-6 bg-card text-card-foreground border border-border">
                <h2 className="text-xl font-black mb-4 text-foreground">Program Highlights</h2>
                <ul className="flex flex-col gap-3">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <Icons.check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="flex flex-col gap-6">
              <Card className="p-6 bg-card text-card-foreground border border-secondary/30">
                <h3 className="text-lg font-black mb-4 text-foreground">Career Outcomes</h3>
                <ul className="flex flex-col gap-2">
                  {program.careerOutcomes.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <Icons.briefcase className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 bg-secondary text-primary border-0">
                <h3 className="text-lg font-black mb-2">Ready to Apply?</h3>
                <p className="text-primary/80 text-sm mb-4">Start your free application today.</p>
                <Button className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90" asChild>
                  <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                    Apply Now <Icons.arrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full mt-3 font-bold border-primary text-primary hover:bg-primary/10" asChild>
                  <Link href="/chat">Ask AI Advisor</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
