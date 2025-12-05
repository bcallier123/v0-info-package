import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export function CampusLifeSection() {
  const highlights = [
    {
      icon: Icons.music,
      title: "Purple Marching Machine",
      description: "ESPN Band of the Year 2024",
      badge: "Award Winning",
    },
    {
      icon: Icons.users,
      title: "80+ Clubs & Organizations",
      description: "Student Government, NAACP, Divine Nine, and more",
      badge: "Active Community",
    },
    {
      icon: Icons.trophy,
      title: "Competitive Athletics",
      description: "15 SIAC Championships across multiple sports",
      badge: "NCAA Division II",
    },
    {
      icon: Icons.heart,
      title: "Vibrant Campus Life",
      description: "Fraternities, sororities, and student activities",
      badge: "Engaged Students",
    },
  ]

  const organizations = [
    "Student Government Association",
    "NAACP",
    "Divine Nine (NPHC)",
    "Black Collegiate Gaming Association",
    "McNair Scholars",
    "TRIO Student Support Services",
    "UNCF Pre-Alumni Council",
    "Circle K International",
    "Miles College Ambassadors",
    "First Year Enrichment",
  ]

  return (
    <section
      id="campus-life"
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6 border border-primary/20">
            <Icons.heart className="w-5 h-5 text-primary" />
            <Badge variant="secondary" className="text-sm font-bold">
              Vibrant Community
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            Campus Life
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Experience a vibrant community where tradition meets innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {highlights.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group"
              >
                <CardHeader className="pb-3">
                  <div className="w-14 md:w-16 h-14 md:h-16 mx-auto mb-3 md:mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-7 md:w-8 h-7 md:h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mx-auto mb-2 font-bold text-xs">
                    {item.badge}
                  </Badge>
                  <CardTitle className="text-base md:text-lg font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs md:text-sm text-muted-foreground text-balance leading-relaxed font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mb-12 md:mb-16 max-w-6xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden bg-gradient-to-br from-card to-card/80">
            <CardHeader className="bg-gradient-to-r from-primary via-primary/95 to-secondary text-white p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-xl">
                  <Icons.home className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="text-center md:text-left">
                  <CardTitle className="text-2xl md:text-3xl font-black mb-2">On-Campus Housing Tour</CardTitle>
                  <p className="text-base md:text-lg text-white/95 font-medium">
                    Take a virtual tour of our modern residence halls
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 md:p-8 flex items-center justify-center">
                <div
                  className="relative w-full max-w-md mx-auto shadow-2xl rounded-2xl overflow-hidden border-4 border-white/50"
                  style={{ paddingTop: "177.7778%" }}
                >
                  <iframe
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.canva.com/design/DAG3NBXooPI/XX0cfA2l5DfZhzsRQ97uiA/watch?embed&autoplay=1&loop=1"
                    allowFullScreen
                    allow="fullscreen; autoplay"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icons.check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base mb-1 text-primary">Modern Amenities</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        Fully furnished rooms with high-speed WiFi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icons.check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base mb-1 text-primary">Safe & Secure</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        24/7 security and resident support staff
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icons.check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base mb-1 text-primary">Community Living</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        Study lounges and vibrant social spaces
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <img
              src="/images/library-group.jpg"
              alt="Miles College students and leaders in library"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            />
            <img
              src="/images/homecoming-court.jpg"
              alt="Miles College Homecoming Court"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            />
            <img
              src="/images/campus-event.jpg"
              alt="Students at campus event"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 sm:col-span-2 md:col-span-1 border-2 border-transparent hover:border-primary/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 bg-gradient-to-br from-card to-card/80">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icons.users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl">Student Organizations</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Join 80+ active clubs and organizations</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {organizations.map((org, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex-shrink-0" />
                    <span className="text-sm md:text-base font-semibold">{org}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 md:space-y-6">
            <img
              src="/images/design-mode/IMG_0302.jpg"
              alt="Miles College students at tailgate"
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            />
            <img
              src="/images/graduation-ceremony.jpg"
              alt="Miles College graduation ceremony"
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
