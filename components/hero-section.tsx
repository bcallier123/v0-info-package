import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="relative text-white overflow-hidden min-h-[100svh]">
      <div className="absolute inset-0 bg-black">
        <Image
          src="/images/img-0036.jpeg"
          alt="Miles College proud graduate in cap and gown"
          fill
          className="object-cover object-center opacity-100"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-primary/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-primary/20" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-yellow-400 to-secondary" />

      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="relative z-10 min-h-[100svh] flex items-center pt-24 pb-0">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up">
                <Badge className="px-5 py-2.5 text-xs font-black bg-secondary text-primary border-0 shadow-lg uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    HBCU
                  </span>
                </Badge>
                <Badge className="px-5 py-2.5 text-xs font-black bg-white/20 text-white border border-white/30 backdrop-blur-sm uppercase tracking-wider">
                  EST. 1898
                </Badge>
                <Badge className="px-5 py-2.5 text-xs font-black bg-white/20 text-white border border-secondary/40 backdrop-blur-sm uppercase tracking-wider">
                  NCAA DIV II
                </Badge>
              </div>

              {/* Main heading */}
              <div className="space-y-4 animate-fade-in-up delay-100">
                <p className="text-secondary font-black text-base md:text-xl tracking-[0.3em] uppercase">
                  Birmingham&apos;s Premier HBCU
                </p>
                <h1 className="font-black leading-[0.9] tracking-tight">
                  <span className="block text-white text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                    YOUR
                  </span>
                  <span className="block text-white text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                    LEGACY
                  </span>
                  <span className="block relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-300 to-secondary text-5xl md:text-6xl lg:text-7xl">
                      STARTS HERE
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-secondary via-yellow-400 to-secondary rounded-full" />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div className="animate-fade-in-up delay-200">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                  Birmingham&apos;s <span className="text-secondary font-bold">only 4-year HBCU</span>.{" "}
                  Over <span className="text-secondary font-bold">30 degree programs</span> with a personalized{" "}
                  <span className="text-secondary font-bold">17:1 student-faculty ratio</span>.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-in-up delay-300">
                <Button
                  size="lg"
                  className="group w-auto text-xl px-10 py-6 font-black bg-secondary hover:bg-yellow-400 text-primary shadow-xl hover:shadow-2xl transition-all duration-300 rounded-none border-2 border-secondary hover:border-yellow-400"
                  asChild
                >
                  <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center justify-center gap-3">
                      APPLY NOW - FREE
                      <Icons.arrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="pt-8 border-t border-white/20 animate-fade-in-up delay-400">
                <div className="flex gap-8 lg:gap-12">
                  <div className="text-left">
                    <p className="text-4xl md:text-5xl font-black text-secondary leading-none">30+</p>
                    <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider mt-1">
                      Programs
                    </p>
                  </div>
                  <div className="w-px h-16 bg-white/30 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-4xl md:text-5xl font-black text-secondary leading-none">17:1</p>
                    <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider mt-1">
                      Ratio
                    </p>
                  </div>
                  <div className="w-px h-16 bg-white/30 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-4xl md:text-5xl font-black text-secondary leading-none">126+</p>
                    <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider mt-1">
                      Years
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop testimonial card - unchanged */}
            <div className="lg:col-span-5 hidden lg:block animate-fade-in-right delay-300">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 via-yellow-400/20 to-primary/40 rounded-xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/20 p-8 lg:p-10 hover:border-secondary/40 transition-all duration-300">
                  <div className="absolute -top-6 -left-2 text-secondary/80 text-8xl font-serif leading-none">
                    &ldquo;
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary via-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                        <Icons.graduationCap className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="font-black text-white text-lg">Student Success</p>
                        <p className="text-secondary font-bold text-sm">Class of 2024</p>
                      </div>
                    </div>
                    <blockquote className="text-white/90 text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                      &ldquo;Miles College transformed my life. The personalized attention and tight-knit community gave
                      me the foundation to achieve my dreams.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icons.star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                        ))}
                      </div>
                      <span className="text-white/60 text-xs font-bold uppercase tracking-wider">
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up delay-500 flex">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-secondary transition-colors group"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Discover More</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1 group-hover:border-secondary transition-colors">
            <div className="w-1 h-1 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
