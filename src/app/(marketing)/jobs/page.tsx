import BorderedCtaSection from "@/components/sections/shared/bordered-cta-section";
import InterviewStagesSection from "@/components/sections/jobs/interview/interview-stages-section";
import JobsHeroSection from "@/components/sections/jobs/hero/jobs-hero-section";
import OpeningsSection from "@/components/sections/jobs/openings/openings-section";
import { emailHref, siteConfig } from "@/lib/site";

export const metadata = {
  title: `Open Positions at ${siteConfig.name}`,
  description:
    "Remote engineering, data and analysis roles at Insiders. Three interview stages: primary, tech and team fit.",
  alternates: { canonical: "/jobs" },
};

export default function JobsPage() {
  return (
    <>
      <JobsHeroSection />
      <InterviewStagesSection />
      <OpeningsSection />
      <BorderedCtaSection
        title="Contact Us To Proceed To The Next Stage"
        action={{ label: "Next Step", href: emailHref }}
      />
    </>
  );
}
