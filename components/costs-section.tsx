import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export function CostsSection() {
  const housingOptions = [
    {
      name: "Off-Campus",
      cost: "$14,064",
      description: "Live independently while attending classes",
      features: [
        "Tuition (12-18 hours): $11,764",
        "Comprehensive Fee: $1,500",
        "Books & Materials: $400",
        "Technology Fee: $260",
        "Health Insurance: $140",
      ],
    },
    {
      name: "Murchison Hall",
      cost: "$21,880",
      description: "Traditional residence hall experience",
      features: [
        "All base costs included",
        "Residence Fee: $3,500/year",
        "Meal Plan: $4,066/year",
        "Dorm Usage Fee: $250/year",
      ],
    },
    {
      name: "Bass Hall / Stewart-Reddick",
      cost: "$22,980",
      description: "Modern amenities and community living",
      features: [
        "All base costs included",
        "Residence Fee: $4,600/year",
        "Meal Plan: $4,066/year",
        "Dorm Usage Fee: $250/year",
      ],
    },
    {
      name: "Snorton Hall",
      cost: "$23,180",
      description: "Premium housing with enhanced facilities",
      features: [
        "All base costs included",
        "Residence Fee: $4,800/year",
        "Meal Plan: $4,066/year",
        "Dorm Usage Fee: $250/year",
      ],
    },
  ]

  return (
    <section
      id="costs"
      className="py-20 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full mb-6 border border-secondary/20">
            <Icons.dollarSign className="w-5 h-5 text-secondary" />
            <Badge variant="secondary" className="text-sm font-bold">
              2025-2026 School Year
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            Tuition & Costs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Transparent pricing with multiple housing options to fit your needs
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground border-0 shadow-2xl hover:shadow-3xl transition-shadow">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
                <Icons.dollarSign className="w-10 h-10" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-black mb-2">$11,764</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-base md:text-lg font-semibold">
                Full-Time Tuition per Academic Year (2025-2026)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm md:text-base text-primary-foreground/95 font-medium">
                  12-18 credit hours | Additional hours: $490 each
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {housingOptions.map((option, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-card/50 group"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icons.home className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold">{option.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">{option.cost}</div>
                <div className="text-sm text-muted-foreground mb-4 font-semibold">per academic year</div>
                <div className="pt-4 border-t-2 border-border">
                  <ul className="space-y-2.5">
                    {option.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-muted/80 to-muted/50 border-2 shadow-xl">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icons.book className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl md:text-3xl">Mandatory Fees Breakdown</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">All fees per semester unless noted</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-sm md:text-base">
            <div className="p-5 rounded-xl bg-card border border-primary/10">
              <div className="font-bold mb-3 text-primary text-lg">Base Costs (All Students):</div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Tuition (12-18 hrs):</span>
                  <span className="font-semibold text-foreground">$5,882/sem</span>
                </li>
                <li className="flex justify-between">
                  <span>Comprehensive Fee:</span>
                  <span className="font-semibold text-foreground">$750/sem</span>
                </li>
                <li className="flex justify-between">
                  <span>Book Fee:</span>
                  <span className="font-semibold text-foreground">$200/sem</span>
                </li>
                <li className="flex justify-between">
                  <span>Technology Fee:</span>
                  <span className="font-semibold text-foreground">$130/sem</span>
                </li>
                <li className="flex justify-between">
                  <span>Health Insurance:</span>
                  <span className="font-semibold text-foreground">$70/sem</span>
                </li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-card border border-secondary/10">
              <div className="font-bold mb-3 text-secondary text-lg">Additional Fees:</div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Science Lab Fee:</span>
                  <span className="font-semibold text-foreground">$60/class</span>
                </li>
                <li className="flex justify-between">
                  <span>Music Lab Fee:</span>
                  <span className="font-semibold text-foreground">$100/class</span>
                </li>
                <li className="flex justify-between">
                  <span>Online Course Fee:</span>
                  <span className="font-semibold text-foreground">$60/class</span>
                </li>
                <li className="flex justify-between">
                  <span>Late Registration:</span>
                  <span className="font-semibold text-foreground">$100/sem</span>
                </li>
                <li className="flex justify-between">
                  <span>Dorm Usage Fee:</span>
                  <span className="font-semibold text-foreground">$125/sem</span>
                </li>
                <li className="flex justify-between">
                  <span>Audit Fee:</span>
                  <span className="font-semibold text-foreground">$470/sem</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
