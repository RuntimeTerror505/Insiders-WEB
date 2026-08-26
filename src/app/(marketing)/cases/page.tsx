import CasesGridSection from "@/components/sections/cases/grid/cases-grid-section";
import CasesHeroSection from "@/components/sections/cases/hero/cases-hero-section";
import FaqSection from "@/components/sections/shared/faq-section";
import StartBuildingCtaSection from "@/components/sections/shared/start-building-cta-section";
import { casesFaq } from "@/data/faq";

export default function CasesPage() {
  return (
    <>
      <CasesHeroSection />
      <CasesGridSection />
      <StartBuildingCtaSection />
      <FaqSection items={casesFaq} />
    </>
  );
}
