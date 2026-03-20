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
      <section className="py-16 sm:py-20 lg:py-28 bg-[#C9A227] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227] via-yellow-500 to-[#C9A227]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-[#1a0a2e] mb-4 text-balance">
            READY TO BEGIN YOUR LEGACY?
          </h2>
          <p className="text-base sm:text-lg text-[#1a0a2e]/70 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Your journey starts with one step. Let us guide you from discovery to career success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-7 font-black bg-[#1a0a2e] text-white hover:bg-[#2d1b4e] shadow-xl"
              asChild
            >
              <Link href="/journey/onboarding">
                Start Your Journey
                <Icons.arrowRight className="w-5 h-5 ml-3" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-7 font-bold border-[#1a0a2e]/30 text-[#1a0a2e] hover:bg-[#1a0a2e]/10"
              asChild
            >
              <Link href="/visit">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
