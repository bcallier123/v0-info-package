import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export function AcademicsSection() {
  const divisions = [
    {
      title: "Business & Accounting",
      accreditation: "AACSB Accredited",
      majors: ["Accounting", "Business Administration", "Management"],
      careers: ["Accountant", "Financial Analyst", "Marketing Manager", "Business Consultant", "Operations Manager"],
    },
    {
      title: "Education",
      accreditation: "CAEP Accredited",
      majors: [
        "Biology/Biology Education",
        "Biology/General Sci. Education",
        "Chemistry/Chemistry Education",
        "Child Development",
        "Early Childhood Education",
        "Elementary Education",
        "English/Language Arts Education",
        "History/Social Sci. Education",
        "Mathematics/Mathematics Education",
        "Music/Music Education",
      ],
      careers: ["Teacher (K-12)", "Education Administrator", "Child Development Specialist", "Curriculum Developer"],
    },
    {
      title: "Humanities & Communication",
      majors: ["Communications", "English", "Music", "Interdisciplinary Studies"],
      concentrations: ["Digital Media", "Graphic Design", "Digital Journalism", "Public Relations"],
      careers: [
        "Journalist",
        "Public Relations Specialist",
        "Content Creator",
        "Music Educator",
        "Digital Media Producer",
      ],
    },
    {
      title: "Natural Sciences & Mathematics",
      majors: [
        "Actuarial Science",
        "Biology",
        "Chemistry",
        "Computer and Information Sciences (CIS)",
        "Environmental Science",
        "Management Information Systems (MIS)",
        "Mathematics",
        "Sports Management and Entertainment",
      ],
      careers: [
        "Software Developer",
        "Data Scientist",
        "Research Scientist",
        "IT Manager",
        "Environmental Consultant",
        "Sports Manager",
      ],
    },
    {
      title: "Social & Behavioral Sciences",
      accreditation: "CSWE Accredited",
      majors: ["Criminal Justice", "History", "Political Science", "Psychology", "Social Work"],
      careers: [
        "Social Worker",
        "Criminal Justice Professional",
        "Policy Analyst",
        "Psychologist",
        "Community Organizer",
        "Pre-Law",
      ],
    },
  ]

  const minors = [
    "Accounting",
    "Artificial Intelligence (AI)",
    "Biology",
    "Business Administration",
    "Communications",
    "Computer Science",
    "Criminal Justice",
    "English",
    "History",
    "Music",
    "Political Science",
    "Psychology",
  ]

  return (
    <section id="academics" className="py-24 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4">Academic Programs</p>
          <div className="inline-flex items-center gap-3 bg-secondary/10 px-6 py-3 rounded-lg mb-6 border border-secondary/20">
            <Icons.graduationCap className="w-5 h-5 text-secondary" />
            <span className="text-sm font-bold text-secondary">30+ Exceptional Majors</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-primary">Explore Your Path</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-secondary/50" />
            <Icons.bookOpen className="w-5 h-5 text-secondary" />
            <div className="h-px w-16 bg-secondary/50" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Choose from five distinguished academic divisions, each offering unique opportunities for growth and success
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 max-w-5xl mx-auto">
          {divisions.map((division, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 rounded-xl px-6 bg-card hover:border-secondary/40 transition-colors shadow-sm hover:shadow-md"
            >
              <AccordionTrigger className="text-xl font-serif font-bold hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Icons.bookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <span>{division.title}</span>
                  {division.accreditation && (
                    <Badge variant="outline" className="text-xs font-semibold border-secondary/40 text-secondary">
                      {division.accreditation}
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-8 space-y-6">
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Icons.graduationCap className="w-5 h-5 text-primary" />
                    <h4 className="font-serif font-bold text-lg text-primary">Majors</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {division.majors.map((major, i) => (
                      <Badge key={i} variant="secondary" className="text-sm py-1.5 px-3 font-medium">
                        {major}
                      </Badge>
                    ))}
                  </div>
                </div>

                {division.concentrations && (
                  <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Icons.bookOpen className="w-5 h-5 text-secondary" />
                      <h4 className="font-serif font-bold text-lg text-secondary">Concentrations</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {division.concentrations.map((conc, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-sm py-1.5 px-3 border-secondary/30 font-medium"
                        >
                          {conc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Icons.briefcase className="w-5 h-5 text-primary" />
                    <h4 className="font-serif font-bold text-lg text-primary">Career Paths</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {division.careers.join(" • ")}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Card className="mt-16 max-w-5xl mx-auto border-2 shadow-md hover:shadow-lg transition-shadow rounded-xl">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center border-2 border-secondary/20">
                <Icons.bookOpen className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <CardTitle className="text-2xl font-serif">Minors Available</CardTitle>
                <CardDescription className="text-base">Enhance your major with a complementary minor</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {minors.map((minor, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-sm py-2 px-4 hover:bg-secondary/10 hover:border-secondary/50 transition-colors font-medium"
                >
                  {minor}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
