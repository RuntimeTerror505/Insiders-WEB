import CasesCtaSection from "@/components/sections/cases/cta/cases-cta-section";
import CasesGridSection from "@/components/sections/cases/grid/cases-grid-section";
import CasesHeroSection from "@/components/sections/cases/hero/cases-hero-section";
import FaqSection from "@/components/sections/shared/faq-section";

export default function CasesPage() {
  return (
    <>
      <CasesHeroSection />
      <CasesGridSection />
      <CasesCtaSection />
      <FaqSection divided />
    </>
  );
}
