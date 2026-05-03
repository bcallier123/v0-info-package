import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"

const academicSupport = [
  { title: "Virtual Academic Advising", description: "Schedule one-on-one video appointments with your academic advisor to plan your degree path and stay on track.", contact: "advising@miles.edu", icon: Icons.users },
  { title: "Online Tutoring Center", description: "Free peer tutoring and writing center support available through virtual appointments, drop-in sessions, and live chat.", contact: "tutoring@miles.edu", icon: Icons.bookOpen },
  { title: "Digital Library Access", description: "Full access to the C.A. Kirkland Library digital collection including databases, e-books, journals, and research tools.", contact: "library@miles.edu", icon: Icons.book },
  { title: "Virtual Career Services", description: "Career coaching, resume reviews, interview prep, mock interviews, and access to the Miles College job board -- all virtual.", contact: "careers@miles.edu", icon: Icons.briefcase },
]

const techSupport = [
  { title: "LMS Help Desk", description: "Get help navigating Canvas, submitting assignments, accessing grades, and troubleshooting technical issues.", hours: "Mon-Fri 8AM-10PM, Sat 9AM-5PM CT" },
  { title: "Microsoft 365 Support", description: "All Miles students receive free access to Microsoft 365 including Word, Excel, PowerPoint, and Teams.", hours: "Self-service + email support" },
  { title: "Proctoring Support", description: "Assistance setting up remote proctoring software for exams, webcam checks, and environment requirements.", hours: "Mon-Fri 8AM-6PM CT" },
  { title: "Device & Connectivity Help", description: "Guidance on minimum tech requirements, recommended hardware, and troubleshooting internet connectivity issues.", hours: "Mon-Fri 8AM-6PM CT" },
]

const wellnessResources = [
  { title: "Virtual Counseling", description: "Confidential telehealth counseling sessions with licensed professionals at no additional cost." },
  { title: "Wellness Workshops", description: "Weekly virtual workshops on stress management, mindfulness, time management, and work-life balance." },
  { title: "Accessibility Services", description: "Accommodations and assistive technology support for students with disabilities in the online environment." },
  { title: "Financial Wellness", description: "Virtual financial literacy workshops, emergency aid resources, and budgeting guidance for online students." },
]

export default function StudentResourcesPage() {
  return (
    <main>
      <PageHeader
        title="Student Resources"
        subtitle="Everything you need to succeed as an online learner -- from academic support to tech help to wellness services."
        breadcrumbs={[{ label: "Student Resources" }]}
      />

      {/* Academic Support */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase">Academic Support</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {academicSupport.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                      <a href={`mailto:${item.contact}`} className="text-xs text-primary font-bold hover:text-primary/80 transition-colors">
                        {item.contact}
                      </a>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/30 font-bold text-xs uppercase">Technical Support</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {techSupport.map((item) => (
              <Card key={item.title} className="p-6 bg-card border-border">
                <h3 className="font-black text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-2">
                  <Icons.clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground font-medium">{item.hours}</span>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 rounded-lg">
                <Icons.headphones className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-black text-foreground mb-1">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground">Contact the Online Student IT Help Desk directly for urgent technical issues.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-bold text-foreground">(205) 929-1000</span>
                <span className="text-primary font-semibold">onlinehelp@miles.edu</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Wellness Resources */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase">Wellness & Support</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {wellnessResources.map((item) => (
              <Card key={item.title} className="p-6 bg-card border-border">
                <h3 className="font-black text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground text-balance mb-4">
            Questions About Online Student Support?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            Our online student services team is here to ensure you have everything you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              <Link href="/chat">Ask Miles AI <Icons.arrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/online">How Online Learning Works</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
