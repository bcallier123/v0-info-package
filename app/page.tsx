import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AcademicsSection } from "@/components/academics-section"
import { CampusLifeSection } from "@/components/campus-life-section"
import { CostsSection } from "@/components/costs-section"
import { ScholarshipsSection } from "@/components/scholarships-section"
import { AthleticsSection } from "@/components/athletics-section"
import { ShareSection } from "@/components/share-section"
import { FinancialAidSection } from "@/components/financial-aid-section"
import { ApplySection } from "@/components/apply-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReadyToApplyBanner } from "@/components/ready-to-apply-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ReadyToApplyBanner />
      <HeroSection />
      <StatsSection />
      {/* Why Miles? Foundation */}
      <AcademicsSection />
      {/* What can I study? */}
      <CampusLifeSection />
      {/* What's student life like? */}
      <AthleticsSection />
      {/* Can I play sports? */}
      {/* Financial considerations - crucial decision point */}
      <CostsSection />
      {/* How much will it cost? */}
      <FinancialAidSection />
      {/* How can I afford it? */}
      <ScholarshipsSection />
      {/* What financial support is available? */}
      {/* Clear path to action */}
      <ApplySection />
      {/* How do I apply? */}
      <ShareSection />
      {/* Share with others */}
      <Footer />
    </main>
  )
}
