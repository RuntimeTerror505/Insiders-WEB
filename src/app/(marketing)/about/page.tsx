import AboutHeroSection from "@/components/sections/about/hero/about-hero-section";
import AboutNowSection from "@/components/sections/about/now/about-now-section";
import EntrepreneursSection from "@/components/sections/about/entrepreneurs/entrepreneurs-section";
import GallerySection from "@/components/sections/about/gallery/gallery-section";
import HowItStartedSection from "@/components/sections/about/how-it-started/how-it-started-section";
import LeadershipSection from "@/components/sections/about/leadership/leadership-section";
import RemoteCompanySection from "@/components/sections/about/remote/remote-company-section";
import ServicesCtaSection from "@/components/sections/about/services-cta/services-cta-section";
import TrustedSection from "@/components/sections/about/trusted/trusted-section";
import FaqSection from "@/components/sections/shared/faq-section";
import GradientCtaSection from "@/components/sections/shared/gradient-cta-section";
import { emailHref } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <HowItStartedSection />
      <RemoteCompanySection />
      <AboutNowSection />
      <ServicesCtaSection />
      <GallerySection />
      <EntrepreneursSection />
      <LeadershipSection />
      <TrustedSection />
      <GradientCtaSection
        title="We get measurable results and stellar execution. Have a vision or a challenge?"
        action={{ label: "Request Estimate", href: emailHref }}
      />
      <FaqSection />
    </>
  );
}
