import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export function ScholarshipsSection() {
  const scholarships = [
    {
      icon: Icons.award,
      name: "Presidential Scholarship",
      amount: "Full Ride",
      amountDetail: "Tuition + Room/Board + Books",
      requirements: "GPA: 3.7+ • ACT: 24+ • SAT: 1190+",
      eligibility: "High School Graduates Only",
      description:
        "A prestigious and highly competitive award recognizing academic excellence and leadership. Limited scholarships available based on comprehensive review of GPA, academic performance, leadership qualities, and overall achievements.",
      renewal: "15 credit hours/semester • 3.5 GPA • 20 tutoring hours/semester",
      color: "bg-secondary text-secondary-foreground",
      highlight: true,
    },
    {
      icon: Icons.graduationCap,
      name: "Dean's Scholarship",
      amount: "$20,000",
      amountDetail: "$5,000/year • $2,500/semester",
      requirements: "GPA: 3.2+ • ACT: 20+ • SAT: 1050+",
      renewal: "15 credit hours/semester • 3.3 GPA • 10 tutoring hours/semester",
      color: "bg-primary text-primary-foreground",
    },
    {
      icon: Icons.users,
      name: "Bridge Scholarship",
      amount: "$10,000",
      amountDetail: "$2,500/year • $1,250/semester",
      requirements: "GPA: 2.75+ • Test Score Required (No Minimum)",
      renewal: "15 credit hours/semester • 2.5 GPA",
      color: "bg-accent text-accent-foreground",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1.5">
            Financial Support
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Scholarship Opportunities
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-muted-foreground max-w-2xl mx-auto text-pretty mb-4">
            Over $2.5 million in scholarships awarded annually
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {scholarships.map((scholarship, index) => (
            <Card
              key={index}
              className={`hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                scholarship.highlight
                  ? "ring-4 ring-secondary shadow-2xl scale-105 md:scale-110"
                  : "hover:ring-2 hover:ring-primary/50"
              } bg-card/80 backdrop-blur-sm`}
            >
              <CardHeader className={`${scholarship.color} rounded-t-lg relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full" />

                <scholarship.icon className="w-12 h-12 mb-4 relative z-10" />
                <CardTitle className="text-2xl font-black relative z-10">{scholarship.name}</CardTitle>
                {scholarship.highlight && (
                  <Badge variant="outline" className="mt-3 border-2 border-current font-bold">
                    Most Prestigious
                  </Badge>
                )}
                {scholarship.eligibility && (
                  <Badge variant="outline" className="mt-2 border-current text-xs font-semibold">
                    {scholarship.eligibility}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="text-center py-4 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-black mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {scholarship.amount}
                  </div>
                  {scholarship.amountDetail && (
                    <div className="text-sm font-bold text-muted-foreground">{scholarship.amountDetail}</div>
                  )}
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2 text-primary">Requirements</div>
                  <CardDescription className="text-sm font-semibold leading-relaxed">
                    {scholarship.requirements}
                  </CardDescription>
                </div>

                {scholarship.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed pt-4 border-t-2 border-dashed">
                    {scholarship.description}
                  </p>
                )}

                {scholarship.renewal && (
                  <div className="pt-4 border-t-2 border-dashed">
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">
                      Renewal Requirements
                    </div>
                    <p className="text-sm font-medium text-muted-foreground leading-relaxed">{scholarship.renewal}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground shadow-2xl border-4 border-secondary/20 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            </div>

            <CardHeader className="text-center relative z-10 pb-6">
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.trendingUp className="w-10 h-10" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-black mb-2">
                97% of Students Receive Financial Aid
              </CardTitle>
              <p className="text-lg font-semibold text-primary-foreground/90">
                Complete your FAFSA today to unlock scholarships, grants, and work-study programs
              </p>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <div className="bg-secondary text-secondary-foreground rounded-xl p-6 text-center shadow-lg">
                <div className="font-bold text-lg mb-2 uppercase tracking-wide">Miles College FAFSA Code</div>
                <div className="text-5xl font-black tracking-wider">001028</div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="font-bold mb-2 text-sm uppercase tracking-wide">Academic Merit</div>
                  <div className="text-3xl font-black text-secondary">Up to $8,000</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="font-bold mb-2 text-sm uppercase tracking-wide">Athletic</div>
                  <div className="text-3xl font-black text-secondary">Varies</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="font-bold mb-2 text-sm uppercase tracking-wide">Need-Based</div>
                  <div className="text-3xl font-black text-secondary">Up to Full</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
