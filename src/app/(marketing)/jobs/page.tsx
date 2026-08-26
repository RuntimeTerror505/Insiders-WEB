import BorderedCtaSection from "@/components/sections/shared/bordered-cta-section";
import JobsHeroSection from "@/components/sections/jobs/hero/jobs-hero-section";
import OpeningsSection from "@/components/sections/jobs/openings/openings-section";
import { emailHref } from "@/lib/site";

export default function JobsPage() {
  return (
    <>
      <JobsHeroSection />
      <OpeningsSection />
      <BorderedCtaSection
        title="Contact Us to Proceed to the Next Stage"
        action={{ label: "Next Step", href: emailHref }}
      />
    </>
  );
}
