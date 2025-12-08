import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="about" className="relative text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/img-0036.jpg"
          alt="Miles College Graduate"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Cinematic film grain overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-primary/95 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-transparent to-secondary/20" />

      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-yellow-400 to-secondary" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/50 rounded-full blur-[200px]" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] float" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left content column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-wrap gap-3 animate-fade-in-up">
                <Badge className="px-5 py-2.5 text-sm font-black bg-secondary text-primary border-0 shadow-xl uppercase tracking-wider">
                  HBCU Excellence
                </Badge>
                <Badge className="px-5 py-2.5 text-sm font-black bg-white/10 text-white border border-white/30 backdrop-blur-sm uppercase tracking-wider">
                  Est. 1898
                </Badge>
                <Badge className="px-5 py-2.5 text-sm font-black bg-white/10 text-white border border-white/30 backdrop-blur-sm uppercase tracking-wider">
                  NCAA Division II
                </Badge>
              </div>

              <div className="space-y-4 animate-fade-in-up delay-100">
                <p className="text-secondary font-black text-lg md:text-xl tracking-[0.4em] uppercase">
                  Birmingham&apos;s Premier HBCU
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
                  <span className="block text-white">YOUR</span>
                  <span className="block text-white">LEGACY</span>
                  <span className="block relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-300 to-secondary">
                      STARTS HERE
                    </span>
                    {/* Underline accent */}
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-secondary via-yellow-400 to-transparent rounded-full" />
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up delay-200">
                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed max-w-2xl">
                  The <span className="text-secondary font-black">ONLY</span> 4-year HBCU in Birmingham. Join a legacy
                  of excellence with <span className="text-secondary font-black">30+</span> degree programs and a{" "}
                  <span className="text-secondary font-black">17:1</span> student-faculty ratio.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-300">
                <Button
                  size="lg"
                  className="group relative text-lg md:text-xl px-10 py-7 font-black bg-secondary hover:bg-yellow-400 text-primary shadow-2xl hover:shadow-secondary/50 transition-all duration-300 rounded-none overflow-hidden"
                  asChild
                >
                  <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center gap-3">
                      APPLY NOW
                      <Icons.arrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group text-lg md:text-xl px-10 py-7 font-black bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-none"
                  asChild
                >
                  <a href="#academics">
                    EXPLORE PROGRAMS
                    <Icons.chevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="animate-fade-in-up delay-400 pt-4">
                <Link
                  href="/chat"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-primary font-black text-base rounded-full shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                >
                  <Icons.messageCircle className="w-5 h-5" />
                  CHAT WITH MILES AI ENROLLMENT COACH
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20 animate-fade-in-up delay-400">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-black text-secondary">30+</p>
                  <p className="text-sm text-white/70 font-semibold uppercase tracking-wider mt-1">Programs</p>
                </div>
                <div className="w-px h-16 bg-white/30 hidden sm:block" />
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-black text-secondary">17:1</p>
                  <p className="text-sm text-white/70 font-semibold uppercase tracking-wider mt-1">Student Ratio</p>
                </div>
                <div className="w-px h-16 bg-white/30 hidden sm:block" />
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-black text-secondary">126+</p>
                  <p className="text-sm text-white/70 font-semibold uppercase tracking-wider mt-1">Years Legacy</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block animate-fade-in-right delay-300">
              <div className="relative">
                {/* Glow effect behind card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-lg blur-2xl" />

                <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 p-8 lg:p-10">
                  {/* Quote mark */}
                  <div className="absolute -top-6 -left-2 text-secondary/80 text-9xl font-serif leading-none">"</div>

                  <div className="relative">
                    {/* Testimonial header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-yellow-500 flex items-center justify-center">
                        <Icons.graduationCap className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-black text-white text-lg">Student Success Story</p>
                        <p className="text-secondary font-semibold">Class of 2024</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-white/95 text-lg lg:text-xl leading-relaxed mb-6 border-l-0 pl-0">
                      "Miles College transformed my life. The personalized attention, incredible faculty, and tight-knit
                      community gave me the foundation to achieve my dreams."
                    </blockquote>

                    {/* Rating */}
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icons.star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                        ))}
                      </div>
                      <span className="text-white/60 text-sm font-semibold">Golden Bear Alumni</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up delay-500">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-secondary transition-colors group"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Discover More</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
