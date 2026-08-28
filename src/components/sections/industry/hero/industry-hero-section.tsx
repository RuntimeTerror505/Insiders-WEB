import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";

export default function IndustryHeroSection({
  title,
  intro,
  image,
}: {
  title: string;
  intro: ReactNode;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="overflow-x-clip pt-10 pb-20">
      <Container>
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-[clamp(2.5rem,4.45vw,3.75rem)] leading-[1.1] font-bold text-balance">
              {title}
            </h1>

            <p className="text-muted-foreground max-w-[520px] text-lg leading-8">
              {intro}
            </p>

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
        </div>
      </Container>
    </section>
  );
}
