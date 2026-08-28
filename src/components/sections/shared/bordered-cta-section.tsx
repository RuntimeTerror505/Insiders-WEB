import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import HeroRings from "@/components/sections/home/hero/hero-rings";
import { Button } from "@/components/ui/button";

/**
 * Секція з макета (нода 331:1863): рамка 2px брендового кольору, заголовок
 * 40/48 semibold ліворуч і кнопка праворуч. Кільця виходять з-за лівого краю
 * і заходять під картку — у Figma це окрема нода 325:1175.
 */
export default function BorderedCtaSection({
  title,
  action,
}: {
  title: string;
  action: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-x-clip py-16">
      <HeroRings className="pointer-events-none absolute top-1/2 left-0 aspect-square h-auto w-[46%] max-w-none -translate-x-2/3 -translate-y-1/2 opacity-30" />

      <Container className="relative">
        <div className="border-primary bg-background/60 mx-auto flex max-w-[996px] flex-col items-start gap-10 rounded-xl border-2 p-8 backdrop-blur-[2px] sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <h2 className="flex-1 text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.2] font-semibold text-balance capitalize">
            {title}
          </h2>

          <Button
            render={<Link href={action.href} />}
            nativeButton={false}
            variant="brand"
            size="2xl"
            className="shrink-0"
          >
            {action.label}
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
