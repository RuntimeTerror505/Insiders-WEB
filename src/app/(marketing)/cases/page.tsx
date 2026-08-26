import CasesCtaSection from "@/components/sections/cases/cta/cases-cta-section";
import CasesGridSection from "@/components/sections/cases/grid/cases-grid-section";
import CasesHeroSection from "@/components/sections/cases/hero/cases-hero-section";
import FaqSection from "@/components/sections/shared/faq-section";
import { casesFaq } from "@/data/faq";

export default function CasesPage() {
  return (
    <>
      <CasesHeroSection />
      <CasesGridSection />
      <CasesCtaSection />
      <FaqSection items={casesFaq} />
    </>
  );
}
