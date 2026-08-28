import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";

export default function CasesHeroSection() {
  return (
    <section className="overflow-x-clip pt-10 pb-20">
      <Container>
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-[clamp(2.5rem,6.1vw,5.5rem)] leading-[1.1] font-bold capitalize">
              Insiders
              <span className="text-primary block">Cases</span>
            </h1>

            <p className="text-muted-foreground max-w-[520px] text-lg leading-8">
              Talent doesn&apos;t have borders. No matter where your market
              is, we&apos;ve got the coverage
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

          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <span
              aria-hidden
              className="from-brand-500 to-brand-gradient-start absolute inset-[8%] rounded-full bg-linear-to-br"
            />
            <Image
              src="/cases/hero-hand.avif"
              alt="Екрани застосунків, зроблених командою Insiders"
              width={1024}
              height={768}
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="absolute top-1/2 left-35 sm:left-50 w-[112%] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
