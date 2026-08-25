import JobsCtaSection from "@/components/sections/jobs/cta/jobs-cta-section";
import JobsHeroSection from "@/components/sections/jobs/hero/jobs-hero-section";
import OpeningsSection from "@/components/sections/jobs/openings/openings-section";

export default function JobsPage() {
  return (
    <>
      <JobsHeroSection />
      <OpeningsSection />
      <JobsCtaSection />
    </>
  );
}
