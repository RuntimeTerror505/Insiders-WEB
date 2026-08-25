"use client";

import { useMemo, useState } from "react";

import Container from "@/components/layout/container";
import CaseCard from "./case-card";
import { cases } from "@/data/cases";
import { cn } from "@/lib/utils";

const ALL = "All Cases";

export default function CasesGridSection() {
  const [active, setActive] = useState(ALL);

  const filters = useMemo(
    () => [ALL, ...new Set(cases.map((item) => item.industry))],
    []
  );

  const visible = useMemo(
    () =>
      active === ALL ? cases : cases.filter((item) => item.industry === active),
    [active]
  );

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.2] font-bold capitalize">
            We Put The
            <span className="block">
              <span className="text-primary">Senior</span> In Projects
            </span>
          </h2>

          <div className="flex flex-col gap-4 border-b pb-4">
            <ul className="flex list-none flex-wrap items-center gap-x-8 gap-y-3">
              {filters.map((filter) => (
                <li key={filter}>
                  <button
                    type="button"
                    onClick={() => setActive(filter)}
                    aria-pressed={filter === active}
                    className={cn(
                      "focus-visible:outline-ring rounded-md text-base leading-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4",
                      filter === active
                        ? "text-foreground font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid list-none gap-6 lg:grid-cols-2">
            {visible.map((caseStudy) => (
              <li key={caseStudy.slug}>
                <CaseCard caseStudy={caseStudy} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
