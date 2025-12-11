import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

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
    <section id="academics" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234B0082' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-6">ACADEMIC PROGRAMS</p>
          <div className="inline-flex items-center gap-3 bg-secondary/10 px-8 py-4 mb-8 border-2 border-secondary/30">
            <Icons.graduationCap className="w-6 h-6 text-secondary" />
            <span className="text-base font-black text-secondary uppercase tracking-wide">30+ Exceptional Majors</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary tracking-tight">
            EXPLORE YOUR <span className="text-secondary">PATH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from five distinguished academic divisions, each offering unique opportunities for growth and success
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 max-w-5xl mx-auto">
          {divisions.map((division, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-200 px-6 bg-white hover:border-primary/40 transition-all shadow-sm hover:shadow-xl"
            >
              <AccordionTrigger className="text-xl font-black hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <Icons.bookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="uppercase tracking-wide">{division.title}</span>
                  {division.accreditation && (
                    <Badge className="text-xs font-black bg-secondary text-white border-0">
                      {division.accreditation}
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-8 space-y-6">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 border-l-4 border-primary">
                  <div className="flex items-center gap-2 mb-4">
                    <Icons.graduationCap className="w-5 h-5 text-primary" />
                    <h4 className="font-black text-lg text-primary uppercase tracking-wide">Majors</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {division.majors.map((major, i) => (
                      <Badge key={i} className="text-sm py-2 px-4 font-bold bg-primary text-white">
                        {major}
                      </Badge>
                    ))}
                  </div>
                </div>

                {division.concentrations && (
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 border-l-4 border-secondary">
                    <div className="flex items-center gap-2 mb-4">
                      <Icons.bookOpen className="w-5 h-5 text-secondary" />
                      <h4 className="font-black text-lg text-secondary uppercase tracking-wide">Concentrations</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {division.concentrations.map((conc, i) => (
                        <Badge key={i} className="text-sm py-2 px-4 font-bold bg-secondary text-white">
                          {conc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 border-l-4 border-gray-400">
                  <div className="flex items-center gap-2 mb-4">
                    <Icons.briefcase className="w-5 h-5 text-gray-700" />
                    <h4 className="font-black text-lg text-gray-700 uppercase tracking-wide">Career Paths</h4>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed font-semibold">
                    {division.careers.join(" • ")}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Card className="mt-20 max-w-5xl mx-auto border-2 border-secondary/30 shadow-2xl bg-gradient-to-br from-secondary/5 to-white">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-xl">
                <Icons.bookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-black uppercase tracking-wide">Minors Available</CardTitle>
                <CardDescription className="text-base mt-1">
                  Enhance your major with a complementary minor
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {minors.map((minor, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-sm py-2.5 px-5 hover:bg-secondary hover:text-white hover:border-secondary transition-all font-bold border-2"
                >
                  {minor}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 shadow-2xl bg-gradient-to-br from-primary/5 to-white">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black mb-2 text-primary uppercase tracking-wide">
                    Ready to Begin Your Academic Journey?
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Connect with our admissions team to explore your program options
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-black px-8 py-6 text-base shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide"
                  >
                    <a href="#apply">Apply Now</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-black px-8 py-6 text-base shadow-lg hover:-translate-y-1 transition-all uppercase tracking-wide bg-transparent"
                  >
                    <a href="tel:205-929-1657">Contact Admissions</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
