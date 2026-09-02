"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/layout/container";
import IconTile from "@/components/ui/icon-tile";
import { processSteps as steps } from "@/data/process-steps";
import { cn } from "@/lib/utils";

export default function ProcessSection({ title }: { title: string }) {
  const [active, setActive] = useState(steps[0]?.id);

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
            {title}
          </h2>

          <div className="grid gap-6 lg:grid-cols-[384fr_792fr]">
            <ul className="flex list-none flex-col gap-3">
              {steps.map(({ id, title: stepTitle, icon: Icon }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setActive(id)}
                    aria-pressed={id === active}
                    className={cn(
                      "focus-visible:outline-ring flex min-h-[66px] w-full items-center gap-4 rounded-xl border bg-white px-4 py-3 text-left text-xl leading-7 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                      id === active
                        ? "border-primary text-primary"
                        : "text-muted-foreground hover:border-primary/40"
                    )}
                  >
                    <IconTile icon={Icon} size="sm" />
                    {stepTitle}
                  </button>
                </li>
              ))}
            </ul>

            <div className="bg-surface rounded-xl border p-6">
              {steps.map(({ id, title: stepTitle, description, image }) => (
                <div key={id} hidden={id !== active} className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl leading-8 font-semibold">{stepTitle}</h3>
                    <p className="text-base leading-6">{description}</p>
                  </div>

                  <div className="bg-muted/40 relative aspect-[744/445] overflow-hidden rounded-lg">
                    {image && (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 744px, 100vw"
                        className="object-cover"
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
