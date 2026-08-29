"use client";

import { useState } from "react";

import TechIcon, { type TechName } from "@/components/icons/tech";
import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";

export type TechGroup = { id: string; label: string; items: TechName[] };

/**
 * Таби зі стеком: перемикач-пігулка вгорі, під ним ряд лого. Клієнтський
 * компонент лише через локальний стан активного табу.
 */
export default function TechStackSection({
  title,
  groups,
}: {
  title: string;
  groups: TechGroup[];
}) {
  const [active, setActive] = useState(groups[0].id);
  const current = groups.find((group) => group.id === active) ?? groups[0];

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
          <h2 className="text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
            {title}
          </h2>

          <div
            role="tablist"
            aria-label={title}
            className="flex flex-wrap justify-center gap-2 rounded-full border p-2"
          >
            {groups.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={id === active}
                aria-controls={`stack-${id}`}
                onClick={() => setActive(id)}
                className={cn(
                  "focus-visible:outline-ring rounded-full px-6 py-2 text-base leading-6 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                  id === active
                    ? "bg-primary text-primary-foreground"
                    : "hover:text-primary border"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <ul
            id={`stack-${current.id}`}
            role="tabpanel"
            className="flex list-none flex-wrap items-start justify-center gap-x-16 gap-y-10"
          >
            {current.items.map((name) => (
              <li key={name} className="flex w-24 flex-col items-center gap-3">
                <TechIcon name={name} className="size-12" />
                <span className="text-center text-base leading-6 font-semibold">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
