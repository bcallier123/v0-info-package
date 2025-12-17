import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function AthleticsSection() {
  const sports = {
    men: ["Football", "Basketball", "Baseball", "Golf", "Track & Field", "Cross Country"],
    women: ["Basketball", "Softball", "Volleyball", "Track & Field", "Cross Country"],
  }

  const championships = [
    { sport: "Women's Basketball", count: 2 },
    { sport: "Men's Basketball", count: 3 },
    { sport: "Football", count: 5 },
    { sport: "Men's Golf", count: 2 },
    { sport: "Women's Softball", count: 3 },
  ]

  return (
    <section
      id="athletics"
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] relative overflow-hidden"
    >
      {/* Decorative elements - hidden on mobile for performance */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-secondary/20 px-4 sm:px-8 py-2.5 sm:py-4 mb-4 sm:mb-8 border border-secondary/40">
            <Icons.trophy className="w-4 h-4 sm:w-6 sm:h-6 text-secondary" />
            <span className="text-xs sm:text-base font-black text-secondary uppercase tracking-wide">
              Golden Bears Athletics
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-8 text-white tracking-tight">
            CHAMPIONSHIP <span className="text-secondary">TRADITION</span>
          </h2>
          <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Competing at the highest level in NCAA Division II and the SIAC Conference
          </p>
        </div>

        <div className="mb-10 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            <img
              src="/images/dscf4009.jpg"
              alt="Miles College women's basketball team huddle"
              loading="lazy"
              className="w-[280px] md:w-full h-64 sm:h-80 lg:h-96 object-cover shadow-2xl md:hover:-translate-y-2 transition-all duration-500 border-4 border-white/10 hover:border-secondary/50 flex-shrink-0 snap-start"
            />
            <img
              src="/images/dscf0659.jpg"
              alt="Miles College Golden Bears flag at football game"
              loading="lazy"
              className="w-[280px] md:w-full h-64 sm:h-80 lg:h-96 object-cover shadow-2xl md:hover:-translate-y-2 transition-all duration-500 border-4 border-white/10 hover:border-secondary/50 flex-shrink-0 snap-start"
            />
            <img
              src="/images/20240203-dscf2616.jpg"
              alt="Miles College softball pitcher in action"
              loading="lazy"
              className="w-[280px] md:w-full h-64 sm:h-80 lg:h-96 object-cover shadow-2xl md:hover:-translate-y-2 transition-all duration-500 border-4 border-white/10 hover:border-secondary/50 flex-shrink-0 snap-start"
            />
            <img
              src="/images/dsc03771.jpg"
              alt="Miles College fans celebrating at game day"
              loading="lazy"
              className="w-[280px] md:w-full h-64 sm:h-80 lg:h-96 object-cover shadow-2xl md:hover:-translate-y-2 transition-all duration-500 md:col-span-2 lg:col-span-3 border-4 border-white/10 hover:border-secondary/50 flex-shrink-0 snap-start"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-xl">
                  <Icons.trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-3xl font-black text-white uppercase tracking-wide">
                    15 SIAC Championships
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">Excellence across multiple sports</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {championships.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 sm:p-4 bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <span className="font-bold text-sm sm:text-lg text-white">{item.sport}</span>
                    <Badge className="font-black text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary text-white border-0">
                      {item.count} titles
                    </Badge>
                  </div>
                ))}
                <div className="pt-3 sm:pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 sm:gap-3 text-secondary font-black p-3 sm:p-4 bg-secondary/20">
                    <Icons.trophy className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-sm sm:text-lg uppercase">National Championship (Men's Golf)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl">
                  <Icons.users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-3xl font-black text-white uppercase tracking-wide">
                    Athletic Programs
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">11 varsity sports programs</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-5 bg-primary/20 border border-primary/30">
                <h4 className="font-black mb-2 sm:mb-3 text-white flex items-center gap-2 uppercase tracking-wide">
                  <span className="text-sm sm:text-lg">Men's Sports</span>
                  <Badge className="text-[10px] sm:text-xs bg-white/20 text-white border-0">
                    {sports.men.length} programs
                  </Badge>
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {sports.men.map((sport, i) => (
                    <Badge
                      key={i}
                      className="font-bold text-xs sm:text-sm px-2.5 sm:px-4 py-1 sm:py-2 bg-primary text-white border-0"
                    >
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-secondary/20 border border-secondary/30">
                <h4 className="font-black mb-2 sm:mb-3 text-white flex items-center gap-2 uppercase tracking-wide">
                  <span className="text-sm sm:text-lg">Women's Sports</span>
                  <Badge className="text-[10px] sm:text-xs bg-white/20 text-white border-0">
                    {sports.women.length} programs
                  </Badge>
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {sports.women.map((sport, i) => (
                    <Badge
                      key={i}
                      className="font-bold text-xs sm:text-sm px-2.5 sm:px-4 py-1 sm:py-2 bg-secondary text-white border-0"
                    >
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <Badge className="text-xs sm:text-sm font-black px-4 sm:px-6 py-2 sm:py-3 bg-white/10 text-white border border-white/20">
                  Cheerleaders & Auxiliaries
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-10 sm:mt-16">
          <Card className="border-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 backdrop-blur-sm">
            <CardContent className="p-5 sm:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 flex items-center gap-2 sm:gap-3 justify-center md:justify-start text-white uppercase tracking-wide">
                    <Icons.users className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                    Meet Our Coaching Staff
                  </h3>
                  <p className="text-white/80 text-sm sm:text-lg">
                    Learn more about the dedicated professionals leading our championship programs
                  </p>
                </div>
                <a
                  href="https://milesgoldenbears.com/staff-directory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white hover:bg-secondary/90 px-6 sm:px-10 py-4 sm:py-5 font-black text-sm sm:text-lg shadow-xl hover:shadow-2xl transition-all whitespace-nowrap uppercase tracking-wide touch-target-lg w-full md:w-auto justify-center"
                >
                  View Staff Directory
                  <Icons.externalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <Card className="border-0 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                  <Icons.trophy className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 text-white uppercase tracking-wide">
                  Interested in Playing for the Golden Bears?
                </h3>
                <p className="text-white/80 text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Contact our athletic department to learn about recruitment opportunities and scholarship programs
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-black px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide touch-target-lg"
                  >
                    <a href="https://milesgoldenbears.com" target="_blank" rel="noopener noreferrer">
                      Athletic Recruitment
                      <Icons.externalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-black px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:-translate-y-1 transition-all uppercase tracking-wide bg-transparent touch-target-lg"
                  >
                    <a href="mailto:athletics@miles.edu">Email Athletics</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  )
}
