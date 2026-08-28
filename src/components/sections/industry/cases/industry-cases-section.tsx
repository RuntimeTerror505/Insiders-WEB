import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import CaseCard from "@/components/sections/cases/grid/case-card";
import { Button } from "@/components/ui/button";
import { cases } from "@/data/cases";

export default function IndustryCasesSection({ slugs }: { slugs: string[] }) {
  const shown = slugs
    .map((slug) => cases.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

  if (shown.length === 0) return null;

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
            Our Cases
          </h2>

          <ul className="grid w-full list-none gap-x-10 gap-y-16 lg:grid-cols-2">
            {shown.map((caseStudy) => (
              <li key={caseStudy.slug} className="min-w-0">
                <CaseCard caseStudy={caseStudy} />
              </li>
            ))}
          </ul>

          <Button
            render={<Link href="/cases" />}
            nativeButton={false}
            variant="brand"
            size="2xl"
          >
            More Cases
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
