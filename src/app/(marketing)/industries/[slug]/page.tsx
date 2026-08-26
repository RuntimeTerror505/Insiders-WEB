import { notFound } from "next/navigation";

import BenefitsSection from "@/components/sections/industry/benefits/benefits-section";
import FeaturesSection from "@/components/sections/industry/features/features-section";
import IndustryCasesSection from "@/components/sections/industry/cases/industry-cases-section";
import IndustryHeroSection from "@/components/sections/industry/hero/industry-hero-section";
import InstrumentsSection from "@/components/sections/industry/instruments/instruments-section";
import ProcessSection from "@/components/sections/industry/process/process-section";
import SolutionsSection from "@/components/sections/industry/solutions/solutions-section";
import BorderedCtaSection from "@/components/sections/shared/bordered-cta-section";
import CardGridSection from "@/components/sections/shared/card-grid-section";
import FaqSection from "@/components/sections/shared/faq-section";
import StartBuildingCtaSection from "@/components/sections/shared/start-building-cta-section";
import { findIndustryPage, industryPages } from "@/data/industry-pages";
import { headerCta } from "@/lib/navigation";

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
        image={industry.heroImage}
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
      <FeaturesSection
        title={industry.features.title}
        items={industry.features.items}
        href={headerCta.href}
      />
      <BenefitsSection
        title={industry.benefits.title}
        accent={industry.benefits.accent}
        action={industry.benefits.action}
        items={industry.benefits.items}
      />
      <InstrumentsSection
        title={industry.instruments.title}
        items={industry.instruments.items}
      />
      <ProcessSection
        title={`${industry.name.replace(" Development", "")} App Development Process`}
      />
      <IndustryCasesSection slugs={industry.caseSlugs} />
      <FaqSection items={industry.faq} divided />
      <BorderedCtaSection
        title={industry.cta}
        action={{ label: "Get My AI Plan", href: headerCta.href }}
      />
    </>
  );
}
