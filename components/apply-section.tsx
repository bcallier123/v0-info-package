import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

export function ApplySection() {
  return (
    <section
      id="apply"
      className="py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <Icons.graduationCap className="w-5 h-5" />
            <span className="text-sm font-bold">Start Your Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance">Ready to Apply?</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto text-pretty font-semibold">
            Your path to becoming a Golden Bear starts here—just 3 easy steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur overflow-hidden">
            <CardHeader className="text-center pb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Badge className="mx-auto mb-4 bg-primary text-primary-foreground font-bold text-base px-6 py-2 shadow-lg">
                Simple 3-Step Process
              </Badge>
              <CardTitle className="text-4xl md:text-5xl font-black text-balance">Become a Golden Bear</CardTitle>
              <CardDescription className="text-lg mt-3 font-semibold">
                Follow this easy path to enrollment at Miles College
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Step 1 - Apply */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 hover:border-primary/50 transition-all group shadow-lg hover:shadow-xl">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <span className="text-4xl font-black">1</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center">
                        <Icons.fileText className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-3xl mb-3 text-primary">Apply Online</h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-4 font-medium">
                        Complete your free application online. It takes just 15 minutes and there's no application fee.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button size="lg" className="font-bold shadow-lg" asChild>
                          <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                            <Icons.graduationCap className="w-5 h-5 mr-2" />
                            Start Application
                          </a>
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold px-4 py-3 bg-white/80 rounded-lg border border-primary/20">
                          <Icons.check className="w-4 h-4 text-primary" />
                          No Fee Required
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Connecting arrow */}
                  <div className="hidden md:flex justify-center my-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
                  </div>
                </div>

                {/* Step 2 - Submit Documents */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 hover:border-secondary/50 transition-all group shadow-lg hover:shadow-xl">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <span className="text-4xl font-black">2</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-accent/80 flex items-center justify-center">
                        <Icons.book className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-3xl mb-3 text-secondary">Submit Your Documents</h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-4 font-medium">
                        Send us your transcripts and complete your FAFSA to unlock financial aid opportunities.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/80 border border-secondary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icons.book className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-sm">Transcripts</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            High school or college transcripts sent to Admissions
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/80 border border-secondary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icons.dollarSign className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-sm">FAFSA</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            File at{" "}
                            <a
                              href="https://studentaid.gov"
                              className="text-secondary font-bold hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              studentaid.gov
                            </a>{" "}
                            <br />
                            Code: <span className="font-black text-secondary">001028</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Connecting arrow */}
                  <div className="hidden md:flex justify-center my-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-secondary via-accent to-primary rounded-full" />
                  </div>
                </div>

                {/* Step 3 - Enroll */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 hover:border-accent/50 transition-all group shadow-lg hover:shadow-xl">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-accent text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <span className="text-4xl font-black">3</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-primary/80 flex items-center justify-center">
                        <Icons.graduationCap className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-3xl mb-3 text-accent">Complete Enrollment</h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-4 font-medium">
                        Once accepted, attend orientation, pay enrollment fees, register for classes, and start your Golden Bear journey!
                      </p>
                      
                      <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Icons.alertCircle className="w-5 h-5 text-amber-600" />
                          <span className="font-black text-lg text-amber-900">Required Enrollment Fees</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-white/80 border border-amber-200">
                            <Icons.dollarSign className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-sm text-amber-900">Orientation Fee</div>
                              <div className="text-xs text-amber-700 mt-1">Required for all new students</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-white/80 border border-amber-200">
                            <Icons.home className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-sm text-amber-900">Housing Deposit</div>
                              <div className="text-xs text-amber-700 mt-1">If staying on campus</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-white/80 border border-accent/20">
                          <Icons.check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-bold">Attend Orientation</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-white/80 border border-accent/20">
                          <Icons.check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-bold">Register for Classes</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-white/80 border border-accent/20">
                          <Icons.check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-bold">Move In & Start!</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Deadlines */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icons.info className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-2xl mb-4 text-primary">Important Dates</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        <div>
                          <span className="font-bold text-base block">Fall Semester Priority</span>
                          <span className="text-sm text-muted-foreground">Apply by July 1st</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                        <div>
                          <span className="font-bold text-base block">Spring Semester</span>
                          <span className="text-sm text-muted-foreground">Apply by November 1st</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 md:col-span-2">
                        <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        <div>
                          <span className="font-bold text-base block">FAFSA Priority Deadline</span>
                          <span className="text-sm text-muted-foreground">
                            Submit by March 1st for maximum financial aid
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-xl">
                <Icons.globe className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold">Apply Online Now</CardTitle>
              <CardDescription className="text-base mt-2">Quick and easy application process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button
                size="lg"
                className="w-full text-xl py-7 font-bold shadow-lg hover:shadow-xl transition-all"
                variant="default"
                asChild
              >
                <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                  <Icons.graduationCap className="w-6 h-6 mr-3" />
                  Start Your Application
                </a>
              </Button>
              <div className="text-center">
                <p className="text-sm text-muted-foreground font-medium">
                  or scan the QR code on our enrollment materials
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-secondary via-secondary/95 to-accent text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <CardHeader className="text-center pb-4 relative z-10">
              <Badge className="mx-auto mb-3 bg-white/20 text-white border-white/30 font-bold">
                Your Personal Recruiter
              </Badge>
              <CardTitle className="text-3xl md:text-4xl font-black">Baily Callier</CardTitle>
              <CardDescription className="text-white/90 text-lg font-semibold mt-2">
                Admissions Recruiter Specialist
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+13342947984"
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
                  aria-label="Call Baily Callier at 334-294-7984"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icons.phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white/80 mb-1">Call or Text</div>
                    <div className="text-lg font-black">(334) 294-7984</div>
                  </div>
                </a>

                <a
                  href="mailto:bcallier@miles.edu"
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icons.mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white/80 mb-1">Email</div>
                    <div className="text-base font-bold break-all">bcallier@miles.edu</div>
                  </div>
                </a>
              </div>
              <div className="mt-6 text-center">
                <p className="text-white/90 font-semibold text-base">
                  Ready to answer all your questions about Miles College!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl md:text-4xl font-bold">General Contact</CardTitle>
              <CardDescription className="text-base md:text-lg mt-2">
                Additional ways to reach Miles College
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icons.phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Phone</div>
                    <a href="tel:2059291657" className="text-sm text-muted-foreground hover:text-primary font-semibold">
                      (205) 929-1657
                    </a>
                    <div className="text-xs text-muted-foreground mt-1">Main: (205) 929-1000</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/10 hover:border-secondary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icons.mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Email</div>
                    <a
                      href="mailto:admissions@miles.edu"
                      className="text-sm text-muted-foreground hover:text-primary font-semibold"
                    >
                      admissions@miles.edu
                    </a>
                    <div className="text-xs text-muted-foreground mt-1">
                      Financial Aid:{" "}
                      <a href="mailto:financialaid@miles.edu" className="hover:text-primary">
                        financialaid@miles.edu
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icons.globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Website</div>
                    <a
                      href="https://www.miles.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary font-semibold"
                    >
                      www.miles.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/10 hover:border-secondary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icons.mapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Location</div>
                    <div className="text-sm text-muted-foreground font-semibold">Fairfield, Alabama</div>
                    <div className="text-xs text-muted-foreground mt-1">6 minutes from downtown Birmingham</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t-2 text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/20 to-secondary/10 text-foreground px-6 py-4 rounded-xl font-bold text-lg border-2 border-secondary/20 shadow-lg">
                  <Icons.book className="w-6 h-6 text-secondary" />
                  <span>
                    Miles College Code: <span className="text-primary">001028</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 font-medium">
                  Use this code when completing your FAFSA
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
