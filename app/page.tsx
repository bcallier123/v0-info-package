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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AcademicsSection />
      <CampusLifeSection />
      <CostsSection />
      <ScholarshipsSection />
      <FinancialAidSection />
      <AthleticsSection />
      <ShareSection />
      <ApplySection />
      <Footer />
    </main>
  )
}
