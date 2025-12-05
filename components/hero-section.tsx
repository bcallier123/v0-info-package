import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="about" className="relative text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/img-0036.jpg"
          alt="Miles College Graduate"
          fill
          className="object-cover object-top scale-110 transition-transform duration-[20s] hover:scale-100"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-900/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-purple-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />

      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/40 rounded-full blur-[120px] animate-pulse delay-500" />
      <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-secondary/20 rounded-full blur-[60px] float" />

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 animate-fade-in-up">
              <Badge className="text-xs md:text-sm px-4 py-2 font-bold bg-secondary text-primary shadow-lg glow-gold">
                NCAA Division II
              </Badge>
              <Badge className="text-xs md:text-sm px-4 py-2 font-bold bg-secondary text-primary shadow-lg glow-gold delay-100">
                SIAC Conference
              </Badge>
              <Badge className="text-xs md:text-sm px-4 py-2 font-bold bg-secondary text-primary shadow-lg glow-gold delay-200">
                SACS Accredited
              </Badge>
            </div>

            <div className="space-y-4 animate-fade-in-up delay-200">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-xl border border-secondary/40 shadow-xl">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm md:text-base font-bold text-white tracking-widest uppercase">
                  Birmingham&apos;s Premier HBCU
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black text-balance leading-[0.9] tracking-tight">
                <span className="block text-white drop-shadow-2xl">Discover</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-300 to-secondary animate-pulse">
                  Your Future
                </span>
              </h1>
            </div>

            <div className="mt-10 space-y-6 animate-fade-in-up delay-300">
              <div className="flex items-center gap-6">
                <div className="h-1 w-20 bg-gradient-to-r from-secondary to-transparent rounded-full" />
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif italic drop-shadow-lg">
                  Where Excellence Meets <span className="text-secondary font-bold not-italic">Tradition</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icons.star className="w-5 h-5 text-secondary fill-secondary" />
                  <Icons.star className="w-5 h-5 text-secondary fill-secondary" />
                  <Icons.star className="w-5 h-5 text-secondary fill-secondary" />
                </div>
                <p className="text-xl md:text-2xl text-secondary font-black tracking-[0.3em] uppercase">Est. 1898</p>
                <div className="flex items-center gap-2">
                  <Icons.star className="w-5 h-5 text-secondary fill-secondary" />
                  <Icons.star className="w-5 h-5 text-secondary fill-secondary" />
                  <Icons.star className="w-5 h-5 text-secondary fill-secondary" />
                </div>
              </div>
            </div>

            <div className="mt-10 relative animate-fade-in-up delay-400">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-yellow-400 to-secondary rounded-2xl blur opacity-40 animate-pulse" />
              <div className="relative bg-black/50 backdrop-blur-xl p-8 rounded-2xl border-2 border-secondary/50 shadow-2xl">
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  The <span className="text-secondary font-black text-2xl">ONLY</span> 4-year HBCU in the Birmingham
                  metro area, offering <span className="text-secondary font-black text-2xl">30+</span> exceptional
                  degree programs with a <span className="text-secondary font-black text-2xl">17:1</span>{" "}
                  student-teacher ratio
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-12 animate-fade-in-up delay-500">
              <Button
                size="lg"
                className="text-lg md:text-xl px-12 py-8 font-black bg-gradient-to-r from-secondary via-yellow-400 to-secondary text-primary shadow-2xl hover:shadow-secondary/50 hover:scale-105 transition-all duration-300 rounded-full glow-gold pulse-glow"
                asChild
              >
                <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                  <Icons.arrowRight className="w-6 h-6 mr-3" />
                  APPLY NOW
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg md:text-xl px-12 py-8 font-black bg-white/10 backdrop-blur-xl border-3 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 rounded-full"
                asChild
              >
                <a href="#academics">
                  EXPLORE PROGRAMS
                  <Icons.chevronRight className="w-6 h-6 ml-3" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t-2 border-secondary/40 animate-fade-in-up delay-500">
              <div className="text-center group">
                <p className="text-5xl md:text-6xl font-black text-secondary drop-shadow-lg group-hover:scale-110 transition-transform">
                  30+
                </p>
                <p className="text-sm md:text-base text-white/90 font-bold uppercase tracking-widest mt-2">Programs</p>
              </div>
              <div className="text-center border-x-2 border-secondary/40 px-4 group">
                <p className="text-5xl md:text-6xl font-black text-secondary drop-shadow-lg group-hover:scale-110 transition-transform">
                  17:1
                </p>
                <p className="text-sm md:text-base text-white/90 font-bold uppercase tracking-widest mt-2">Ratio</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl md:text-6xl font-black text-secondary drop-shadow-lg group-hover:scale-110 transition-transform">
                  126+
                </p>
                <p className="text-sm md:text-base text-white/90 font-bold uppercase tracking-widest mt-2">Years</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative float">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-yellow-400 to-secondary rounded-3xl blur-xl opacity-50 animate-pulse" />
              <div className="relative bg-black/60 backdrop-blur-2xl rounded-3xl p-10 border-2 border-secondary/60 shadow-2xl max-w-md">
                <div className="absolute -top-6 -left-4 text-secondary text-8xl font-serif opacity-80">&ldquo;</div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center shadow-lg glow-gold">
                    <Icons.graduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-black text-white font-serif text-xl">Golden Bears Success</p>
                    <p className="text-base text-secondary font-semibold">Class of 2024</p>
                  </div>
                </div>
                <p className="text-white/95 text-xl leading-relaxed font-serif italic">
                  Miles College gave me the foundation to achieve my dreams. The support from faculty and the tight-knit
                  community made all the difference.
                </p>
                <div className="flex gap-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Icons.star key={i} className="w-6 h-6 text-secondary fill-secondary drop-shadow-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-52 bg-gradient-to-t from-background via-background/90 to-transparent" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#stats"
          className="flex flex-col items-center gap-3 text-secondary hover:text-white transition-colors group"
        >
          <span className="text-sm font-black uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
            Scroll
          </span>
          <div className="w-8 h-14 rounded-full border-2 border-secondary flex items-start justify-center p-2 group-hover:border-white transition-colors">
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce group-hover:bg-white transition-colors" />
          </div>
        </a>
      </div>
    </section>
  )
}
