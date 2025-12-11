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
      className="py-32 bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-secondary/20 px-8 py-4 mb-8 border border-secondary/40">
            <Icons.trophy className="w-6 h-6 text-secondary" />
            <span className="text-base font-black text-secondary uppercase tracking-wide">Golden Bears Athletics</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
            CHAMPIONSHIP <span className="text-secondary">TRADITION</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Competing at the highest level in NCAA Division II and the SIAC Conference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-7xl mx-auto">
          <img
            src="/images/dscf4009.jpg"
            alt="Miles College women's basketball team huddle"
            className="w-full h-96 object-cover shadow-2xl hover:-translate-y-2 transition-all duration-500 border-4 border-white/10 hover:border-secondary/50"
          />
          <img
            src="/images/dscf0659.jpg"
            alt="Miles College Golden Bears flag at football game"
            className="w-full h-96 object-cover shadow-2xl hover:-translate-y-2 transition-all duration-500 border-4 border-white/10 hover:border-secondary/50"
          />
          <img
            src="/images/20240203-dscf2616.jpg"
            alt="Miles College softball pitcher in action"
            className="w-full h-96 object-cover shadow-2xl hover:-translate-y-2 transition-all duration-500 border-4 border-white/10 hover:border-secondary/50"
          />
          <img
            src="/images/dscf3763.jpg"
            alt="Miles College esports team"
            className="w-full h-96 object-cover shadow-2xl hover:-translate-y-2 transition-all duration-500 md:col-span-2 lg:col-span-3 border-4 border-white/10 hover:border-secondary/50"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-xl">
                  <Icons.trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-black text-white uppercase tracking-wide">
                    15 SIAC Championships
                  </CardTitle>
                  <p className="text-sm text-white/70 mt-1">Excellence across multiple sports</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {championships.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <span className="font-bold text-lg text-white">{item.sport}</span>
                    <Badge className="font-black text-sm px-4 py-2 bg-secondary text-white border-0">
                      {item.count} titles
                    </Badge>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3 text-secondary font-black p-4 bg-secondary/20">
                    <Icons.trophy className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg uppercase">National Championship (Men's Golf)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl">
                  <Icons.users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-black text-white uppercase tracking-wide">
                    Athletic Programs
                  </CardTitle>
                  <p className="text-sm text-white/70 mt-1">11 varsity sports programs</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-5 bg-primary/20 border border-primary/30">
                <h4 className="font-black mb-3 text-white flex items-center gap-2 uppercase tracking-wide">
                  <span className="text-lg">Men's Sports</span>
                  <Badge className="text-xs bg-white/20 text-white border-0">{sports.men.length} programs</Badge>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sports.men.map((sport, i) => (
                    <Badge key={i} className="font-bold text-sm px-4 py-2 bg-primary text-white border-0">
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-5 bg-secondary/20 border border-secondary/30">
                <h4 className="font-black mb-3 text-white flex items-center gap-2 uppercase tracking-wide">
                  <span className="text-lg">Women's Sports</span>
                  <Badge className="text-xs bg-white/20 text-white border-0">{sports.women.length} programs</Badge>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sports.women.map((sport, i) => (
                    <Badge key={i} className="font-bold text-sm px-4 py-2 bg-secondary text-white border-0">
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <Badge className="text-sm font-black px-6 py-3 bg-white/10 text-white border border-white/20">
                  Cheerleaders & Auxiliaries
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <Card className="border-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 backdrop-blur-sm">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black mb-2 flex items-center gap-3 justify-center md:justify-start text-white uppercase tracking-wide">
                    <Icons.users className="w-8 h-8 text-secondary" />
                    Meet Our Coaching Staff
                  </h3>
                  <p className="text-white/80 text-lg">
                    Learn more about the dedicated professionals leading our championship programs
                  </p>
                </div>
                <a
                  href="https://milesgoldenbears.com/staff-directory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white hover:bg-secondary/90 px-10 py-5 font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 whitespace-nowrap uppercase tracking-wide"
                >
                  View Staff Directory
                  <Icons.externalLink className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-0 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Icons.trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-4 text-white uppercase tracking-wide">
                  Interested in Playing for the Golden Bears?
                </h3>
                <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                  Contact our athletic department to learn about recruitment opportunities and scholarship programs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-black px-10 py-6 text-lg shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide"
                  >
                    <a href="https://milesgoldenbears.com" target="_blank" rel="noopener noreferrer">
                      Athletic Recruitment
                      <Icons.externalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-black px-10 py-6 text-lg shadow-lg hover:-translate-y-1 transition-all uppercase tracking-wide bg-transparent"
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
