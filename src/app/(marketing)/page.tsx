import AiPlanSection from "@/components/sections/home/ai-plan/ai-plan-section";
import CasesSection from "@/components/sections/home/cases/cases-section";
import ContactSection from "@/components/sections/home/contact/contact-section";
import HeroSection from "@/components/sections/home/hero/hero-section";
import MissionSection from "@/components/sections/home/mission/mission-section";
import TestimonialsSection from "@/components/sections/home/testimonials/testimonials-section";
import AnimatedRunStroke from "@/components/sections/shared/animated-run-stroke";
import BlogSection from "@/components/sections/home/blog/blog-section";
import CardGridSection from "@/components/sections/shared/card-grid-section";
import { brands } from "@/data/brands";
import { industries } from "@/data/industries";
import { partners } from "@/data/partners";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />

      <TestimonialsSection />
      <AnimatedRunStroke title="Brands Trust Us" items={brands} />
      <CasesSection />
      <AiPlanSection />
      <CardGridSection
        eyebrow="Grow faster with fantastic changes"
        title="Our Mobile App Development Services"
        cards={services}
      />
      <ContactSection />
      <AnimatedRunStroke
        title={
          <>
            Strategic Partners
            <br />
            (For Our Clients&apos; Growth)
          </>
        }
        items={partners}
      />
      <CardGridSection
        title="Industries We Serve"
        subtitle="We are committed to developing innovative and powerful mobile solutions to serve:"
        cards={industries}
        className="pt-0"
        cardClassName="gap-10"
        minCardHeight={390}
      />
      <BlogSection />
    </>
  );
}
