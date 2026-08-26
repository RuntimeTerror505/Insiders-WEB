"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/layout/container";
import { processSteps as steps } from "@/data/process-steps";
import { cn } from "@/lib/utils";

export default function ProcessSection({ title }: { title: string }) {
  const [active, setActive] = useState(steps[0]?.id);

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
            {title}
          </h2>

          <div className="grid gap-6 lg:grid-cols-[384fr_792fr]">
            <ul className="flex list-none flex-col gap-4">
              {steps.map(({ id, title: stepTitle, icon: Icon }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setActive(id)}
                    aria-pressed={id === active}
                    className={cn(
                      "focus-visible:outline-ring flex w-full items-center gap-4 rounded-xl border p-5 text-left text-lg leading-7 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                      id === active
                        ? "border-primary text-primary"
                        : "hover:border-primary/40"
                    )}
                  >
                    <span
                      aria-hidden
                      className="from-brand-500 to-brand-gradient-start grid size-10 shrink-0 place-items-center rounded-lg bg-linear-to-br text-white"
                    >
                      <Icon className="size-5" />
                    </span>
                    {stepTitle}
                  </button>
                </li>
              ))}
            </ul>

            <div className="bg-surface rounded-2xl border p-8 shadow-[0_2px_8px_rgb(51_1_46_/_0.05)]">
              {steps.map(({ id, title: stepTitle, description, image }) => (
                <div key={id} hidden={id !== active} className="flex flex-col gap-6">
                  <h3 className="text-2xl leading-8 font-bold">{stepTitle}</h3>
                  <p className="text-muted-foreground max-w-[680px] text-base leading-6">
                    {description}
                  </p>

                  <div className="bg-muted/40 relative aspect-[688/340] overflow-hidden rounded-xl">
                    {image && (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 688px, 100vw"
                        className="object-contain"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
