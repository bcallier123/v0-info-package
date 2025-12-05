import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function StatsSection() {
  const stats = [
    {
      icon: Icons.award,
      value: "97%",
      label: "Students Awarded Scholarships",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Icons.users,
      value: "17:1",
      label: "Student-Teacher Ratio",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Icons.graduationCap,
      value: "30+",
      label: "Degree Programs",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Icons.calendar,
      value: "1898",
      label: "Founded",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  const highlights = [
    {
      icon: Icons.mapPin,
      text: "6 minutes from downtown Birmingham",
    },
    {
      icon: Icons.globe,
      text: "Online programs available",
    },
    {
      icon: Icons.users,
      text: "1,500+ students",
    },
  ]

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4">By The Numbers</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Academic Excellence</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-secondary/50" />
            <Icons.bookOpen className="w-5 h-5 text-secondary" />
            <div className="h-px w-12 bg-secondary/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="p-8 lg:p-10 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-secondary/40 bg-card group rounded-xl"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-current/10`}
                >
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-5xl lg:text-6xl font-serif font-bold mb-3 text-primary">{stat.value}</div>
                <div className="text-sm font-semibold text-muted-foreground text-balance leading-tight uppercase tracking-wide">
                  {stat.label}
                </div>
              </Card>
            )
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-xl bg-card border-2 border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors duration-300 border border-primary/20">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <p className="text-base font-semibold text-foreground leading-tight">{highlight.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
