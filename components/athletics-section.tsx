import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

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
      className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full mb-6 border border-secondary/20">
            <Icons.trophy className="w-5 h-5 text-secondary" />
            <Badge variant="secondary" className="text-sm font-bold px-4 py-2">
              Golden Bears Athletics
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            Championship Tradition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Competing at the highest level in NCAA Division II and the SIAC Conference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0301-ghL2erasRMEFDY3AgbV5owZMdi1Kmv.jpg"
            alt="Miles College women's basketball player going up for a shot during game"
            className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-primary/30"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1551%202-TDbJ86gXalbsAu1ywQ8eo7WR5L8CbR.jpg"
            alt="Miles College football player scoring touchdown"
            className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-primary/30"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1552%202-2XP43OvA5FhWfH6vHc1X5b9AvgLBQf.jpg"
            alt="Miles College football player running with the ball"
            className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-primary/30"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0305-pvoqf0L1LYnh5FumvJQP0XpUENR3JT.jpg"
            alt="Miles College men's golf team with championship trophy"
            className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 md:col-span-2 lg:col-span-3 border-2 border-transparent hover:border-primary/30"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:border-secondary/30 bg-gradient-to-br from-card to-card/80">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shadow-md">
                  <Icons.trophy className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">15 SIAC Championships</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Excellence across multiple sports</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {championships.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-secondary/5 transition-colors"
                  >
                    <span className="font-bold text-base">{item.sport}</span>
                    <Badge variant="secondary" className="font-bold text-sm px-3 py-1">
                      {item.count} titles
                    </Badge>
                  </div>
                ))}
                <div className="pt-4 border-t-2 border-secondary/20">
                  <div className="flex items-center gap-3 text-primary font-bold p-3 rounded-lg bg-primary/5">
                    <Icons.trophy className="w-6 h-6 flex-shrink-0" />
                    <span className="text-base">National Championship (Men's Golf)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 bg-gradient-to-br from-card to-card/80">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shadow-md">
                  <Icons.users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">Athletic Programs</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">11 varsity sports programs</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold mb-3 text-primary flex items-center gap-2">
                  <span className="text-lg">Men's Sports</span>
                  <Badge variant="outline" className="text-xs">
                    {sports.men.length} programs
                  </Badge>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sports.men.map((sport, i) => (
                    <Badge key={i} variant="outline" className="font-semibold text-sm px-3 py-1.5 border-primary/30">
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                <h4 className="font-bold mb-3 text-secondary flex items-center gap-2">
                  <span className="text-lg">Women's Sports</span>
                  <Badge variant="outline" className="text-xs border-secondary/30">
                    {sports.women.length} programs
                  </Badge>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sports.women.map((sport, i) => (
                    <Badge key={i} variant="outline" className="font-semibold text-sm px-3 py-1.5 border-secondary/30">
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <Badge variant="secondary" className="text-sm font-bold px-4 py-2">
                  Cheerleaders & Auxiliaries
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 hover:border-primary/30">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 justify-center md:justify-start">
                    <Icons.users className="w-7 h-7 text-primary" />
                    Meet Our Coaching Staff
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Learn more about the dedicated professionals leading our championship programs
                  </p>
                </div>
                <a
                  href="https://milesgoldenbears.com/staff-directory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
                >
                  View Staff Directory
                  <Icons.externalLink className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
