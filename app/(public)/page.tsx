import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { WhyMilesSection } from "@/components/why-miles-section"
import { JourneyPreviewSection } from "@/components/journey-preview-section"
import { CampusPreviewSection } from "@/components/campus-preview-section"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <WhyMilesSection />
      <JourneyPreviewSection />
      <CampusPreviewSection />

      {/* Final CTA */}
      <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227] via-yellow-500 to-[#C9A227]" />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(26, 10, 46, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 10, 46, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-[#1a0a2e]/10 rounded-full blur-[100px]" />

        <div className="px-5 sm:px-6 lg:px-12 max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a0a2e]/10 border border-[#1a0a2e]/15 mb-6 sm:mb-8">
            <Icons.laptop className="w-3 h-3 text-[#1a0a2e]/70" />
            <span className="text-[#1a0a2e]/80 font-bold uppercase tracking-[0.15em] text-[10px] sm:text-xs">
              Start Today
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a0a2e] mb-4 sm:mb-6 text-balance">
            READY TO EARN YOUR DEGREE ONLINE?
          </h2>
          <p className="text-sm sm:text-lg text-[#1a0a2e]/60 max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Your future starts here. Apply today and join the Miles College online learning community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="text-sm sm:text-lg h-12 sm:h-16 px-8 sm:px-14 font-black bg-[#1a0a2e] text-white hover:bg-[#2d1b4e] shadow-2xl shadow-[#1a0a2e]/30 rounded-full transition-all duration-300 hover:scale-[1.02]"
              asChild
            >
              <Link href="/apply">
                Apply Now
                <Icons.arrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-lg h-12 sm:h-16 px-8 sm:px-14 font-bold border-2 border-[#1a0a2e]/20 text-[#1a0a2e] hover:bg-[#1a0a2e]/10 hover:border-[#1a0a2e]/40 rounded-full transition-all duration-300"
              asChild
            >
              <Link href="/programs">Explore Online Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
