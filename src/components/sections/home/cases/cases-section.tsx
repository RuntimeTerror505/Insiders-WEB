import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/container";
import CaseRow from "./case-row";
import { Button } from "@/components/ui/button";
import { featuredCases } from "@/data/cases";

export default function CasesSection() {
  return (
    <section className="py-16 lg:py-16">
      <Container>
        {/* У макеті заголовок, ряди й кнопка стоять однією колонкою з кроком 40 */}
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
            Our Cases
          </h2>

          <ul className="flex w-full list-none flex-col gap-10">
            {featuredCases.map((caseStudy, index) => (
              <li key={caseStudy.slug}>
                {/* парні — текст ліворуч, непарні — фото ліворуч */}
                <CaseRow caseStudy={caseStudy} reversed={index % 2 === 1} />
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
            <ArrowRight className="size-6" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
