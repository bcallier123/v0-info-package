import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="about" className="relative text-white overflow-hidden min-h-[100svh]">
      <div className="absolute inset-0 bg-black">
        <Image
          src="/images/img-0036.jpeg"
          alt="Miles College proud graduate in cap and gown"
          fill
          className="object-cover object-center opacity-100"
          priority
          quality={100}
        />
        {/* Film grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-primary/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-secondary/20" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-secondary via-yellow-400 to-secondary shadow-lg shadow-secondary/50" />

      <div
        className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-secondary/15 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[180px] animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] lg:w-[900px] h-[400px] sm:h-[600px] lg:h-[900px] bg-primary/30 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[220px]" />

      <div className="relative z-10 min-h-[100svh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            {/* Left content column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-8">
              <div className="flex flex-wrap gap-2 sm:gap-3 animate-fade-in-up">
                <Badge className="px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-black bg-secondary text-primary border-0 shadow-2xl shadow-secondary/50 uppercase tracking-wider hover:scale-105 transition-transform">
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse" />
                    HBCU EXCELLENCE
                  </span>
                </Badge>
                <Badge className="px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-black bg-white/15 text-white border-2 border-white/40 backdrop-blur-md uppercase tracking-wider">
                  EST. 1898
                </Badge>
                <Badge className="hidden sm:flex px-6 py-3 text-sm font-black bg-white/15 text-white border-2 border-secondary/50 backdrop-blur-md uppercase tracking-wider">
                  NCAA DIVISION II
                </Badge>
              </div>

              <div className="space-y-3 sm:space-y-6 animate-fade-in-up delay-100">
                <p className="text-secondary font-black text-sm sm:text-lg md:text-2xl tracking-[0.2em] sm:tracking-[0.5em] uppercase drop-shadow-lg">
                  Birmingham&apos;s Premier HBCU
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-black leading-[0.85] tracking-tighter">
                  <span className="block text-white drop-shadow-2xl">YOUR</span>
                  <span className="block text-white drop-shadow-2xl">LEGACY</span>
                  <span className="block relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-300 to-secondary animate-shimmer">
                      STARTS HERE
                    </span>
                    {/* Enhanced underline with glow */}
                    <span className="absolute -bottom-1 sm:-bottom-3 left-0 w-full h-1.5 sm:h-3 bg-gradient-to-r from-secondary via-yellow-400 to-secondary rounded-full shadow-lg shadow-secondary/60" />
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up delay-200">
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Birmingham&apos;s <span className="text-secondary font-bold">only 4-year HBCU</span>, established in
                  1898. We offer over <span className="text-secondary font-bold">30 degree programs</span> with a
                  personalized <span className="text-secondary font-bold">17:1 student-faculty ratio</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-in-up delay-300">
                <Button
                  size="lg"
                  className="group relative w-full sm:w-auto text-lg sm:text-xl md:text-2xl px-8 sm:px-12 py-6 sm:py-8 font-black bg-secondary hover:bg-yellow-400 text-primary shadow-2xl shadow-secondary/50 hover:shadow-secondary/70 transition-all duration-300 rounded-none overflow-hidden border-2 border-secondary hover:border-yellow-400 hover:scale-105 touch-target-lg"
                  asChild
                >
                  <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      APPLY NOW
                      <Icons.arrowRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-10 lg:gap-12 pt-6 sm:pt-10 border-t-2 border-white/30 animate-fade-in-up delay-400">
                <div className="text-center group cursor-default">
                  <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary drop-shadow-lg group-hover:scale-110 transition-transform">
                    30+
                  </p>
                  <p className="text-[10px] sm:text-sm md:text-base text-white/80 font-bold uppercase tracking-wider mt-1 sm:mt-2">
                    Degree Programs
                  </p>
                </div>
                <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                <div className="text-center group cursor-default">
                  <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary drop-shadow-lg group-hover:scale-110 transition-transform">
                    17:1
                  </p>
                  <p className="text-[10px] sm:text-sm md:text-base text-white/80 font-bold uppercase tracking-wider mt-1 sm:mt-2">
                    Student Ratio
                  </p>
                </div>
                <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                <div className="text-center group cursor-default">
                  <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary drop-shadow-lg group-hover:scale-110 transition-transform">
                    126+
                  </p>
                  <p className="text-[10px] sm:text-sm md:text-base text-white/80 font-bold uppercase tracking-wider mt-1 sm:mt-2">
                    Years of Legacy
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial card - hidden on mobile and tablet */}
            <div className="lg:col-span-5 hidden lg:block animate-fade-in-right delay-300">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-secondary/50 via-yellow-400/30 to-primary/50 rounded-2xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black/50 backdrop-blur-2xl border-2 border-white/30 p-10 lg:p-12 hover:border-secondary/50 transition-all duration-300">
                  <div className="absolute -top-8 -left-4 text-secondary/90 text-[10rem] font-serif leading-none drop-shadow-2xl">
                    "
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary via-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl shadow-secondary/50 group-hover:scale-110 transition-transform">
                        <Icons.graduationCap className="w-10 h-10 text-primary" />
                      </div>
                      <div>
                        <p className="font-black text-white text-xl">Student Success Story</p>
                        <p className="text-secondary font-bold text-lg">Class of 2024</p>
                      </div>
                    </div>
                    <blockquote className="text-white/95 text-xl lg:text-2xl leading-relaxed mb-8 border-l-0 pl-0 font-medium">
                      "Miles College transformed my life. The personalized attention, incredible faculty, and tight-knit
                      community gave me the foundation to achieve my dreams."
                    </blockquote>
                    <div className="flex items-center gap-5">
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Icons.star key={i} className="w-6 h-6 text-secondary fill-secondary drop-shadow-lg" />
                        ))}
                      </div>
                      <span className="text-white/70 text-sm font-bold uppercase tracking-wider">
                        Golden Bear Alumni
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up delay-500">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 sm:gap-3 text-white/70 hover:text-secondary transition-colors group touch-target"
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] group-hover:tracking-[0.5em] transition-all">
            Discover More
          </span>
          <div className="w-5 sm:w-7 h-8 sm:h-12 rounded-full border-2 sm:border-3 border-current flex items-start justify-center p-1.5 sm:p-2 group-hover:border-secondary transition-colors">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-current rounded-full animate-bounce shadow-lg shadow-secondary/50" />
          </div>
        </a>
      </div>
    </section>
  )
}
