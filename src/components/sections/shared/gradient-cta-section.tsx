import type { ReactNode } from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function GradientCtaSection({
  title,
  description,
  action,
  cardClassName,
}: {
  title: ReactNode;
  description?: ReactNode;
  action: { label: string; href: string };
  cardClassName?: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <div
          className={cn(
            "bg-cta-gradient relative isolate mx-auto flex min-h-[424px] max-w-[1200px] flex-col items-center justify-center gap-8 overflow-hidden rounded-xl px-6 py-16 text-center text-white",
            cardClassName
          )}
        >
          <span
            aria-hidden
            className="bg-cta-dots absolute inset-0 -z-10 opacity-15"
          />
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-[url('/textures/noise.webp')] bg-[length:256px_256px] opacity-40 mix-blend-soft-light"
          />

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold text-balance capitalize">
              {title}
            </h2>
            {description && (
              <p className="max-w-[806px] text-xl leading-7 text-[#eaeff4]">
                {description}
              </p>
            )}
          </div>

          <Button
            render={<Link href={action.href} />}
            nativeButton={false}
            variant="brandSecondary"
            size="2xl"
          >
            {action.label}
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
