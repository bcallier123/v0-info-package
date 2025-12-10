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
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 text-sm px-6 py-2 font-semibold uppercase tracking-wider">
            Financial Support
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Scholarship Opportunities
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed font-medium mb-6">
            Over $2.5 million in scholarships awarded annually to deserving students
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-secondary rounded-full" />
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20 max-w-7xl mx-auto">
          {scholarships.map((scholarship, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ${
                scholarship.highlight
                  ? "ring-2 ring-secondary shadow-xl md:scale-[1.05] border-2 border-secondary/20"
                  : "hover:ring-2 hover:ring-primary/30 border-2 border-transparent"
              } bg-white`}
            >
              <CardHeader className={`${scholarship.color} rounded-t-lg relative overflow-hidden p-8`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />

                <scholarship.icon className="w-14 h-14 mb-6 relative z-10 drop-shadow-lg" />
                <CardTitle className="text-2xl lg:text-3xl font-black relative z-10 mb-3">{scholarship.name}</CardTitle>
                {scholarship.highlight && (
                  <Badge variant="outline" className="mt-2 border-2 border-current font-bold text-sm">
                    Most Prestigious
                  </Badge>
                )}
                {scholarship.eligibility && (
                  <Badge variant="outline" className="mt-2 border-current text-xs font-semibold">
                    {scholarship.eligibility}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="pt-8 space-y-6 p-8">
                <div className="text-center py-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-inner">
                  <div className="text-5xl font-black mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {scholarship.amount}
                  </div>
                  {scholarship.amountDetail && (
                    <div className="text-sm font-bold text-gray-600">{scholarship.amountDetail}</div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                  <div className="text-xs font-bold uppercase tracking-wider mb-3 text-primary">Requirements</div>
                  <CardDescription className="text-sm font-semibold leading-relaxed text-gray-700">
                    {scholarship.requirements}
                  </CardDescription>
                </div>

                {scholarship.description && (
                  <p className="text-sm text-gray-600 leading-relaxed pt-6 border-t-2 border-gray-100">
                    {scholarship.description}
                  </p>
                )}

                {scholarship.renewal && (
                  <div className="pt-6 border-t-2 border-gray-100">
                    <div className="text-xs font-bold uppercase tracking-wider mb-3 text-secondary">
                      Renewal Requirements
                    </div>
                    <p className="text-sm font-medium text-gray-600 leading-relaxed">{scholarship.renewal}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground shadow-2xl border-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>

            <CardHeader className="text-center relative z-10 pb-8 pt-12">
              <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icons.trendingUp className="w-12 h-12" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                97% of Students Receive Financial Aid
              </CardTitle>
              <p className="text-xl font-semibold text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed">
                Complete your FAFSA today to unlock scholarships, grants, and work-study programs
              </p>
            </CardHeader>

            <CardContent className="space-y-8 relative z-10 pb-12">
              <div className="bg-white text-gray-900 rounded-2xl p-8 text-center shadow-2xl max-w-md mx-auto">
                <div className="font-bold text-lg mb-3 uppercase tracking-wide text-gray-600">
                  Miles College FAFSA Code
                </div>
                <div className="text-6xl font-black tracking-wider text-primary">001028</div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-6 max-w-4xl mx-auto">
                <div className="text-center bg-white/15 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                  <div className="font-bold mb-3 text-sm uppercase tracking-wide">Academic Merit</div>
                  <div className="text-4xl font-black text-white">Up to $8,000</div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                  <div className="font-bold mb-3 text-sm uppercase tracking-wide">Athletic</div>
                  <div className="text-4xl font-black text-white">Varies</div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                  <div className="font-bold mb-3 text-sm uppercase tracking-wide">Need-Based</div>
                  <div className="text-4xl font-black text-white">Up to Full</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
