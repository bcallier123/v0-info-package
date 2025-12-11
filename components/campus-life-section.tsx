import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

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
      className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative blurs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-8 py-4 mb-8 border-2 border-primary/30">
            <Icons.heart className="w-6 h-6 text-primary" />
            <span className="text-base font-black text-primary uppercase tracking-wide">Vibrant Community</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary tracking-tight">
            CAMPUS <span className="text-secondary">LIFE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience a vibrant community where tradition meets innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className="text-center border-2 border-gray-200 hover:border-primary/50 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <CardHeader className="pb-3">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <Badge className="mx-auto mb-3 font-black text-xs bg-secondary text-white border-0 uppercase tracking-wide">
                    {item.badge}
                  </Badge>
                  <CardTitle className="text-xl font-black uppercase tracking-wide">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mb-20 max-w-6xl mx-auto">
          <Card className="border-2 border-primary/30 shadow-2xl overflow-hidden bg-white">
            <CardHeader className="bg-gradient-to-r from-primary via-primary to-secondary text-white p-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-xl">
                  <Icons.home className="w-12 h-12" />
                </div>
                <div className="text-center md:text-left">
                  <CardTitle className="text-4xl md:text-5xl font-black mb-3 uppercase tracking-wide">
                    On-Campus Housing Tour
                  </CardTitle>
                  <p className="text-xl text-white/90 font-semibold">
                    Take a virtual tour of our modern residence halls
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-10 flex items-center justify-center">
                <div
                  className="relative w-full max-w-md mx-auto shadow-2xl overflow-hidden border-4 border-white"
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
              <div className="p-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 p-6 border-2 border-gray-200 hover:border-primary/30 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icons.check className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1 text-primary uppercase">Modern Amenities</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Fully furnished rooms with high-speed WiFi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 border-2 border-gray-200 hover:border-primary/30 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icons.check className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1 text-primary uppercase">Safe & Secure</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        24/7 security and resident support staff
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 border-2 border-gray-200 hover:border-primary/30 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icons.check className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1 text-primary uppercase">Community Living</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Study lounges and vibrant social spaces
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="/images/2023-10-11-20at-204.jpg"
              alt="Miles College student at computer lab"
              className="w-full h-80 object-cover shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-4 border-white"
            />
            <img
              src="/images/dscf7529.jpeg"
              alt="Miles College classroom learning"
              className="w-full h-80 object-cover shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-4 border-white"
            />
            <img
              src="/images/mbkl3897.jpg"
              alt="Miles College student in science lab"
              className="w-full h-80 object-cover shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 sm:col-span-2 md:col-span-1 border-4 border-white"
            />
          </div>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/20240201-dscf7396.jpg"
              alt="Miles College student retention event - dance performance"
              className="w-full h-96 object-cover shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-4 border-white"
            />
            <img
              src="/images/20240201-dscf7379.jpg"
              alt="Miles College student retention event - community celebration"
              className="w-full h-96 object-cover shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-4 border-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-gray-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 bg-white">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <Icons.users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-wide">Student Organizations</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Join 80+ active clubs and organizations</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {organizations.map((org, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 hover:bg-primary/5 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-br from-secondary to-secondary/70 flex-shrink-0" />
                    <span className="text-base font-bold">{org}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <img
              src="/images/dscf4133.jpg"
              alt="Miles College student on campus"
              className="w-full h-72 object-cover shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-4 border-white"
            />
            <img
              src="/images/dscf3763.jpg"
              alt="Miles College esports students"
              className="w-full h-72 object-cover shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-4 border-white"
            />
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="border-2 border-secondary/30 shadow-2xl bg-gradient-to-br from-secondary/5 to-white">
            <CardContent className="p-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Icons.calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-4 text-secondary uppercase tracking-wide">
                  Experience Campus Life Firsthand
                </h3>
                <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
                  Schedule a campus tour to see our vibrant community, meet current students, and explore our facilities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white font-black px-10 py-6 text-lg shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide"
                  >
                    <a href="https://www.miles.edu/admissions/visit/" target="_blank" rel="noopener noreferrer">
                      Schedule a Visit
                      <Icons.externalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black px-10 py-6 text-lg shadow-lg hover:-translate-y-1 transition-all uppercase tracking-wide bg-transparent"
                  >
                    <a href="tel:205-929-1657">Call Admissions</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
