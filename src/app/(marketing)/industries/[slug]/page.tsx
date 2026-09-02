import { notFound } from "next/navigation";

import BenefitsSection from "@/components/sections/industry/benefits/benefits-section";
import FeaturesSection from "@/components/sections/industry/features/features-section";
import IndustryCasesSection from "@/components/sections/industry/cases/industry-cases-section";
import IndustryHeroSection from "@/components/sections/industry/hero/industry-hero-section";
import ProcessSection from "@/components/sections/industry/process/process-section";
import SolutionsSection from "@/components/sections/industry/solutions/solutions-section";
import AnimatedRunStroke from "@/components/sections/shared/animated-run-stroke";
import CardGridSection from "@/components/sections/shared/card-grid-section";
import FaqSection from "@/components/sections/shared/faq-section";
import StartBuildingCtaSection from "@/components/sections/shared/start-building-cta-section";
import { findIndustryPage, industryPages } from "@/data/industry-pages";
import { partners } from "@/data/partners";

export function generateStaticParams() {
  return industryPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = findIndustryPage(slug);

  if (!industry) return {};

  return { title: industry.title, description: industry.intro };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = findIndustryPage(slug);

  if (!industry) notFound();

  return (
    <>
      <IndustryHeroSection
        title={industry.title}
        intro={industry.intro}
        introHighlight={industry.introHighlight}
        image={industry.heroImage}
        mockup={industry.heroMockup}
      />
      <CardGridSection
        title={industry.types.title}
        subtitle={industry.types.subtitle}
        cards={industry.types.cards}
      />
      <SolutionsSection
        title={industry.solutions.title}
        items={industry.solutions.items}
        image={industry.solutions.image}
      />
      <StartBuildingCtaSection />
      <FeaturesSection title={industry.features.title} items={industry.features.items} />
      <BenefitsSection
        title={industry.benefits.title}
        accent={industry.benefits.accent}
        action={industry.benefits.action}
        items={industry.benefits.items}
      />
      <AnimatedRunStroke
        title={
          <>
            Strategic Partners
            <br />
            (For Our Clients&apos; Growth)
          </>
        }
        items={partners}
        itemClassName="h-9 sm:h-[38px]"
      />
      <ProcessSection
        title={`${industry.name.replace(" Development", "")} App Development Process`}
      />
      <IndustryCasesSection slugs={industry.caseSlugs} />
      <FaqSection items={industry.faq} />
    </>
  );
}
