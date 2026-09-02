import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import IndustryHeroMockup, {
  type HeroMockup,
} from "@/components/sections/industry/hero/industry-hero-mockup";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";

export default function IndustryHeroSection({
  title,
  intro,
  introHighlight,
  image,
  mockup,
}: {
  title: string;
  intro: string;
  introHighlight?: string;
  image?: { src: string; alt: string };
  mockup?: HeroMockup;
}) {
  const at = introHighlight ? intro.indexOf(introHighlight) : -1;
  const before = at === -1 ? intro : intro.slice(0, at);
  const highlight = at === -1 ? "" : introHighlight;
  const after = at === -1 ? "" : intro.slice(at + (introHighlight?.length ?? 0));

  return (
    <section className="overflow-x-clip pt-10 pb-30">
      <Container>
        <div className="mx-auto grid max-w-[1200px] items-center gap-6 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-[clamp(2.5rem,4.45vw,4rem)] leading-[1.2] font-bold capitalize">
                {title}
              </h1>

              <p className="text-muted-foreground text-2xl leading-8">
                {before}
                {highlight && (
                  <strong className="font-semibold">{highlight}</strong>
                )}
                {after}
              </p>
            </div>

            <Button
              render={<Link href={emailHref} />}
              nativeButton={false}
              variant="brand"
              size="2xl"
            >
              Hire Experts
              <ArrowRightIcon className="size-6" />
            </Button>
          </div>

          {mockup ? (
            <IndustryHeroMockup {...mockup} />
          ) : (
            <div className="bg-muted/40 relative mx-auto aspect-[588/500] w-full max-w-[588px] overflow-hidden rounded-xl">
              {image && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 588px, 100vw"
                  className="object-contain"
                />
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
