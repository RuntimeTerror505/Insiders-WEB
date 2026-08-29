import { notFound } from "next/navigation";

import TestimonialsSection from "@/components/sections/home/testimonials/testimonials-section";
import CapabilitySection from "@/components/sections/service/capability/capability-section";
import ConsultingSection from "@/components/sections/service/consulting/consulting-section";
import OfferGridSection from "@/components/sections/service/offer/offer-grid-section";
import ServiceHeroSection from "@/components/sections/service/hero/service-hero-section";
import SpotlightSection from "@/components/sections/service/spotlight/spotlight-section";
import TechStackSection from "@/components/sections/service/stack/tech-stack-section";
import FaqSection from "@/components/sections/shared/faq-section";
import GradientCtaSection from "@/components/sections/shared/gradient-cta-section";
import StartBuildingCtaSection from "@/components/sections/shared/start-building-cta-section";
import { findServicePage, servicePages } from "@/data/service-pages";
import { headerCta } from "@/lib/navigation";
import { emailHref } from "@/lib/site";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = findServicePage(slug);

  if (!service) return {};

  return {
    title: `${service.title} ${service.accent}`,
    description: service.lead[0],
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = findServicePage(slug);

  if (!service) notFound();

  // У референсі два перших напрямки розділені градієнтним CTA, а третій
  // («AI & Machine Learning») іде після нього рядком.
  const [first, second, third] = service.capabilities;

  return (
    <>
      <ServiceHeroSection
        title={service.title}
        accent={service.accent}
        lead={service.lead}
        action={{ label: service.heroAction, href: headerCta.href }}
        quotes={service.quotes}
      />

      <OfferGridSection
        offers={service.offers}
        promise={service.promise}
        action={{ label: service.promiseAction, href: emailHref }}
      />

      <TestimonialsSection />

      <CapabilitySection
        title={first.title}
        description={first.description}
        action={
          first.action ? { label: first.action, href: headerCta.href } : undefined
        }
        items={first.items}
      />

      <GradientCtaSection
        title={service.midCta.title}
        description={service.midCta.description}
        action={{ label: service.midCta.action, href: headerCta.href }}
      />

      <CapabilitySection
        title={second.title}
        description={second.description}
        action={
          second.action
            ? { label: second.action, href: headerCta.href }
            : undefined
        }
        items={second.items}
      />

      <CapabilitySection
        title={third.title}
        action={
          third.action ? { label: third.action, href: emailHref } : undefined
        }
        items={third.items}
        layout={third.layout}
      />

      <SpotlightSection
        title={service.spotlight.title}
        description={service.spotlight.description}
        action={{ label: service.spotlight.action, href: emailHref }}
        image={service.spotlight.image}
      />

      <ConsultingSection
        title={service.consulting.title}
        description={service.consulting.description}
        items={service.consulting.items}
        image={service.consulting.image}
      />

      <TechStackSection
        title={service.stack.title}
        groups={service.stack.groups}
      />

      <StartBuildingCtaSection />

      <FaqSection items={service.faq} divided />
    </>
  );
}
