import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AcademicsSection } from "@/components/academics-section"
import { DgxSparkSection } from "@/components/dgx-spark-section"
import { CampusLifeSection } from "@/components/campus-life-section"
import { CostsSection } from "@/components/costs-section"
import { ScholarshipsSection } from "@/components/scholarships-section"
import { FinancialAidSection } from "@/components/financial-aid-section"
import { AthleticsSection } from "@/components/athletics-section"
import { ApplySection } from "@/components/apply-section"
import { ShareSection } from "@/components/share-section"
import { PresentationView } from "@/components/presentation-view"

export default function PresentationPage() {
  const slides = [
    <HeroSection key="hero" />,
    <StatsSection key="stats" />,
    <AcademicsSection key="academics" />,
    <DgxSparkSection key="dgx-spark" />,
    <CampusLifeSection key="campus-life" />,
    <CostsSection key="costs" />,
    <ScholarshipsSection key="scholarships" />,
    <FinancialAidSection key="financial-aid" />,
    <AthleticsSection key="athletics" />,
    <ApplySection key="apply" />,
    <ShareSection key="share" />,
  ]

  return <PresentationView slides={slides} />
}
