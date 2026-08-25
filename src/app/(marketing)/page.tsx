import CasesSection from "@/components/sections/home/cases/cases-section";
import ContactSection from "@/components/sections/home/contact/contact-section";
import HeroSection from "@/components/sections/home/hero/hero-section";
import MissionSection from "@/components/sections/home/mission/mission-section";
import TestimonialsSection from "@/components/sections/home/testimonials/testimonials-section";
import AnimatedRunStroke from "@/components/sections/shared/animated-run-stroke";
import BlogSection from "@/components/sections/home/blog/blog-section";
import CardGridSection from "@/components/sections/shared/card-grid-section";
import GradientCtaSection from "@/components/sections/shared/gradient-cta-section";
import { brands } from "@/data/brands";
import { industries } from "@/data/industries";
import { partners } from "@/data/partners";
import { services } from "@/data/services";
import { headerCta } from "@/lib/navigation";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />

      <TestimonialsSection />
      <AnimatedRunStroke
        title="Brands Trust Us"
        items={brands}
        itemClassName="h-16 sm:h-28"
      />
      <CasesSection />
      <GradientCtaSection
        title="Get an AI-Built Technical Plan for Your Idea"
        description="Scope, architecture, cost range and timeline — drafted by our AI pipeline, reviewed and signed off by a senior engineer."
        action={{ label: "Get My AI Plan", href: headerCta.href }}
        cardClassName="min-h-[565px]"
      />
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
        itemClassName="h-9 sm:h-12"
      />
      <CardGridSection
        title="Industries We Serve"
        subtitle="We are committed to developing innovative and powerful mobile solutions to serve:"
        cards={industries}
        cardClassName="gap-10"
        minCardHeight={390}
      />
      <BlogSection />
    </>
  );
}
