import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function StatsSection() {
  const stats = [
    {
      icon: Icons.award,
      value: "97%",
      label: "Students Awarded Scholarships",
      color: "text-secondary",
      bgColor: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Icons.users,
      value: "17:1",
      label: "Student-Teacher Ratio",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
    },
    {
      icon: Icons.graduationCap,
      value: "30+",
      label: "Degree Programs",
      color: "text-secondary",
      bgColor: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Icons.calendar,
      value: "1898",
      label: "Founded",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
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
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-secondary/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-secondary font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-4 sm:mb-6">
            BY THE NUMBERS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            ACADEMIC <span className="text-secondary">EXCELLENCE</span>
          </h2>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-secondary" />
            <Icons.bookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-secondary" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="relative p-4 sm:p-6 lg:p-10 text-center bg-white/5 backdrop-blur-sm border-0 hover:bg-white/10 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-primary/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  >
                    <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${stat.color}`} />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-2 sm:mb-4 text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-white/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 lg:gap-5 p-4 sm:p-5 lg:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-secondary" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-bold text-white">{highlight.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  )
}
