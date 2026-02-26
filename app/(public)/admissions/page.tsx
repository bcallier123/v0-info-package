import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const requirements = [
  {
    type: "First-Year Freshman",
    items: [
      "Completed application (free, online)",
      "Official high school transcript",
      "ACT or SAT scores (recommended)",
      "Minimum 2.0 GPA",
    ],
  },
  {
    type: "Transfer Student",
    items: [
      "Completed application",
      "Official transcripts from ALL previous institutions",
      "Minimum 2.0 cumulative GPA",
      "Good standing at previous institution",
    ],
  },
  {
    type: "International Student",
    items: [
      "Completed application with international documentation",
      "Official academic records with certified English translation",
      "TOEFL (minimum 61 iBT) or IELTS (minimum 6.0)",
      "Proof of financial support for I-20 processing",
    ],
  },
]

export default function AdmissionsPage() {
  return (
    <main>
      <PageHeader
        title="Admissions"
        subtitle="Your journey to Miles College begins here. Learn about our admissions requirements and start your free application."
        breadcrumbs={[{ label: "Admissions" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-6 md:p-8 mb-10 bg-secondary/10 border-secondary/30">
            <h2 className="text-2xl font-black mb-4 text-foreground">How to Apply</h2>
            <ol className="flex flex-col gap-4 mb-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary text-primary font-black text-sm flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <p className="font-bold text-foreground">Submit Your Application</p>
                  <p className="text-sm text-muted-foreground">Complete your free application online at myexperience.miles.edu.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary text-primary font-black text-sm flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-foreground">Send Required Documents</p>
                  <p className="text-sm text-muted-foreground">Request official transcripts and test scores be sent to Miles College.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary text-primary font-black text-sm flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-foreground">Complete Your FAFSA</p>
                  <p className="text-sm text-muted-foreground">File at studentaid.gov using school code 001028.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary text-primary font-black text-sm flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <p className="font-bold text-foreground">Receive Your Decision</p>
                  <p className="text-sm text-muted-foreground">Admissions decisions are typically made within 2-4 weeks of receiving all materials.</p>
                </div>
              </li>
            </ol>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400" asChild>
                <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                  Start Application <Icons.arrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="font-bold" asChild>
                <Link href="/deadlines">View Deadlines</Link>
              </Button>
            </div>
          </Card>

          <h2 className="text-2xl font-black mb-6 text-foreground">Admission Requirements</h2>
          <div className="flex flex-col gap-6">
            {requirements.map((req) => (
              <Card key={req.type} className="p-6 bg-card border-border">
                <h3 className="text-lg font-black mb-4 text-foreground">{req.type}</h3>
                <ul className="flex flex-col gap-3">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icons.check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
