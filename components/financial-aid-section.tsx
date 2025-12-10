"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function FinancialAidSection() {
  const handleDownloadForm = () => {
    // Create a text file with the application form information
    const formContent = `ALABAMA STUDENT GRANT PROGRAM
2025-2026 STUDENT APPLICATION

GENERAL INFORMATION
The Alabama Student Grant Program is a state student assistance program established August 4, 1978 by the Legislature of the State of Alabama and designed to provide financial assistance to residents of the State of Alabama for undergraduate nonsectarian, secular education at independent, nonprofit, or other legislatively identified postsecondary educational institutions of higher learning located within the State of Alabama.

STUDENT ELIGIBILITY REQUIREMENTS
To be eligible for an Alabama Student Grant Program award the student must:
(1) Have obtained a certificate of graduation from a secondary school or the recognized equivalence of such graduation
(2) Be classified as an undergraduate student
(3) Be an Alabama resident as defined in Alabama Student Grant Program Act 90
(4) Be a citizen of the United States or in the process of becoming a citizen of the United States
(5) Be enrolled as a full-time or half-time student in an eligible program in an approved institution
(6) Be making satisfactory academic progress
(7) Not be enrolled and not intend to enroll in a course of study leading to an undergraduate degree in theology, divinity, or other field of preparation for a religious vocation

APPLICATION DEADLINES FOR 2025-2026:
- Fall Term 2025: September 15, 2025
- Winter Quarter: January 15, 2026
- Spring Semester: February 15, 2026
- Spring Quarter: April 15, 2026

IMPORTANT REQUIREMENTS:
- Two (2) proofs of Alabama residency are required
- Social Security Number required for application processing

WARNING: ANY PERSON WHO KNOWINGLY MAKES A FALSE STATEMENT OR A MISREPRESENTATION FOR THE PURPOSE OF WRONGFULLY OBTAINING A GRANT HEREUNDER SHALL BE GUILTY OF A MISDEMEANOR AND, UPON CONVICTION THEREOF, BE PUNISHED AS BY LAW PROVIDED FOR A MISDEMEANOR.

APPLICATION FORM:

1. Social Security Number: _______________________
2. Name: _______________________
3. Birth Date: _______________________
4. Business Phone: _______________________
5. Home Phone: _______________________
6. Mailing Address: _______________________
7. College or University attending or planning to attend in 2025-2026: _______________________
8. Field of Study for 2025-2026: _______________________
9. Student Number (if known): _______________________
10. Are you enrolled or accepted for enrollment as at least a half-time student in a program of at least 6 months duration? Yes [ ] No [ ]
11. Will you be enrolled in a course of study leading to a degree in theology, divinity, or other field of preparation for a religious vocation? Yes [ ] No [ ]
12. Are you a high school graduate, or have you obtained the recognized equivalence? Yes [ ] No [ ]
13. Are you a citizen of the U.S. or in the process of becoming a citizen of the U.S.? Yes [ ] No [ ]
14. Have you been a resident of the State of Alabama for the last 12 months? Yes [ ] No [ ]
15. Have you previously received a bachelor's degree or its equivalence? Yes [ ] No [ ]

SECTION I: PROOF OF RESIDENCY
This Section must be completed by first-time applicants. Provide two (2) of the five (5) proof requirements listed below:

1. Residence – Student
   I hereby affirm that I have had my habitation and permanent residence in the State of Alabama for the twelve (12) months immediately preceding the date of this application.
   Address: _______________________
   Number and Street: _______________________
   City: _____________ State: _____ Zip Code: _______

2. Voter Registration – Student
   I hereby certify that I am a registered voter in _____________ County, _____ State

3. Residence – Parent
   I hereby certify that this address is my legal residence:
   Number and Street: _______________________
   City: _____________ State: _____ Zip Code: _______
   Parent's or Guardian's Signature: _______________________

4. Voter Registration – Parent
   I hereby certify that I am a registered voter in _____________ County, _____ State
   Parent's or Guardian's Signature: _______________________

5. Driver's License: Attached is a photocopy of the student's or parent's valid Alabama driver's license. Yes [ ] No [ ]

SECTION II: CERTIFICATION
I have read and understand the student eligibility requirements of this grant from the Alabama Student Grant Program. I certify that I am eligible under the conditions stated and affirm that the proceeds of this grant, as authorized by Act 90 of the Second Special Session of the Alabama Legislature 1978, will be used solely for nonsectarian, secular educational expenses related to attendance at an independent, nonprofit, or other legislatively identified postsecondary educational institution in Alabama.

I CERTIFY THAT THE INFORMATION CONTAINED IN THIS APPLICATION, INCLUDING ATTACHMENTS, IS CURRENT AND COMPLETE. I AGREE THAT THE INSTITUTION AND THE ALABAMA COMMISSION ON HIGHER EDUCATION HAVE MY PERMISSION TO VERIFY IT.

Signature of Student: _______________________ Date: _______________________

INSTITUTIONAL DATE STAMP: _______________________

---

For assistance with this application, contact:
Miles College Financial Aid Office
Or your admissions recruiter:
Baily Callier, Admissions Recruiter Specialist
Phone: 334-294-7984
Email: bcallier@miles.edu`

    const blob = new Blob([formContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Alabama_Student_Grant_Application_2025-2026.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const scholarshipResources = [
    {
      name: "Federal Student Aid",
      url: "https://www.ed.gov/",
      description: "Official U.S. Department of Education resource for federal grants, loans, and work-study programs",
      icon: "graduationCap",
    },
    {
      name: "Fastweb",
      url: "https://www.fastweb.com/",
      description: "Free scholarship search database with over 1.5 million scholarships worth $3.4 billion",
      icon: "search",
    },
    {
      name: "Scholarships.com",
      url: "https://www.scholarships.com/",
      description: "Comprehensive scholarship search engine with personalized matching",
      icon: "search",
    },
    {
      name: "College Board Scholarship Search",
      url: "https://bigfuture.collegeboard.org/scholarship-search",
      description: "Search over 2,200 programs worth nearly $6 billion in aid",
      icon: "book",
    },
    {
      name: "Cappex",
      url: "https://www.cappex.com/",
      description: "Free college and scholarship search platform",
      icon: "dollarSign",
    },
    {
      name: "Sallie Mae Scholarship Search",
      url: "https://www.salliemae.com/college-planning/scholarships/",
      description: "Free scholarship database and college planning resources",
      icon: "award",
    },
  ]

  return (
    <section
      id="financial-aid"
      className="py-20 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6 border border-primary/20">
            <Icons.dollarSign className="w-5 h-5 text-primary" />
            <Badge variant="default" className="text-sm font-bold">
              Financial Assistance
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent">
              Financial Aid
            </span>
            {" & "}
            <span className="bg-gradient-to-r from-secondary via-secondary/90 to-primary bg-clip-text text-transparent">
              Grant Opportunities
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover comprehensive funding resources to make your Miles College education more affordable and accessible
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="bg-gradient-to-br from-secondary/10 via-background to-primary/5 border-2 border-secondary/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <CardHeader className="relative z-10 pb-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-xl flex-shrink-0">
                  <Icons.graduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3 font-bold">
                    State Financial Aid
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl font-black text-balance">
                    Alabama Student Grant Program
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg mt-2 leading-relaxed">
                    State assistance program for Alabama residents attending Miles College
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-xl text-primary flex items-center gap-2">
                    <Icons.check className="w-5 h-5" />
                    Eligibility Requirements
                  </h3>
                  <ul className="space-y-3 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>High school graduate or equivalent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Classified as undergraduate student</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Alabama resident for 12 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>U.S. citizen or in process of becoming one</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Enrolled full-time or half-time in eligible program</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>Making satisfactory academic progress</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-xl text-primary flex items-center gap-2">
                    <Icons.calendar className="w-5 h-5" />
                    Application Deadlines 2025-2026
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30">
                      <div className="font-bold text-secondary mb-1">Fall Term 2025</div>
                      <div className="text-sm text-muted-foreground">Deadline: September 15, 2025</div>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="font-bold mb-1">Winter Quarter</div>
                      <div className="text-sm text-muted-foreground">Deadline: January 15, 2026</div>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="font-bold mb-1">Spring Semester</div>
                      <div className="text-sm text-muted-foreground">Deadline: February 15, 2026</div>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="font-bold mb-1">Spring Quarter</div>
                      <div className="text-sm text-muted-foreground">Deadline: April 15, 2026</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <Icons.alertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <h4 className="font-bold text-amber-900 dark:text-amber-100">Important Requirements</h4>
                    <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1 leading-relaxed">
                      <li>• Two (2) proofs of Alabama residency required</li>
                      <li>• Application must be received by institution's Financial Aid Office by deadline</li>
                      <li>• Social Security Number required for application processing</li>
                      <li>• Not available for theology, divinity, or religious vocation programs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="flex-1 h-14 text-base font-bold shadow-lg" asChild>
                  <a
                    href="https://www.ache.edu/wp-content/Grants/ALA-STUDENT-GRANT-PROG-FORM-2025-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.fileText className="w-5 h-5 mr-2" />
                    Download Application Form
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 h-14 text-base font-bold border-2 bg-transparent"
                  asChild
                >
                  <a href="https://www.miles.edu/financial-aid" target="_blank" rel="noopener noreferrer">
                    <Icons.info className="w-5 h-5 mr-2" />
                    Learn More
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center leading-relaxed pt-2 border-t">
                The Alabama Student Grant Program is a state student assistance program established by the Legislature
                of the State of Alabama to provide financial assistance to residents for undergraduate nonsectarian,
                secular education at independent institutions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-2 border-primary/20 shadow-xl overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl flex-shrink-0">
                  <Icons.search className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <Badge variant="default" className="mb-3 font-bold">
                    Additional Resources
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl font-black text-balance">
                    Scholarship & Grant Resources
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg mt-2 leading-relaxed">
                    Explore these trusted resources to find more scholarships and grants for college
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {scholarshipResources.map((resource, index) => {
                  const IconComponent = Icons[resource.icon as keyof typeof Icons]
                  return (
                    <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 border-2 cursor-pointer">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                {resource.name}
                                <Icons.externalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  )
                })}
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border-2 border-blue-200 dark:border-blue-800 mt-6">
                <div className="flex items-start gap-3">
                  <Icons.info className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                      Pro Tips for Scholarship Success
                    </h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 leading-relaxed">
                      <li>• Start searching early - many scholarships have deadlines months before the school year</li>
                      <li>• Apply to multiple scholarships to increase your chances</li>
                      <li>• Watch out for scams - never pay to apply for scholarships</li>
                      <li>• Complete your FAFSA (Free Application for Federal Student Aid) at studentaid.gov</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
