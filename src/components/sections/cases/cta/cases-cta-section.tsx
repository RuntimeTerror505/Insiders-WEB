import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";

export default function CasesCtaSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto flex max-w-[810px] flex-col items-center gap-6 text-center">
          <h2 className="text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.2] font-bold capitalize">
            Start Building
            <span className="block">
              New{" "}
              <span className="relative inline-block">
                Stunning
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 -bottom-1 h-3 w-full"
                >
                  <defs>
                    <linearGradient id="cases-cta-underline" x1="0" x2="1">
                      <stop offset="0" stopColor="var(--color-brand-500)" />
                      <stop offset="1" stopColor="#2d5be5" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 9C40 3 160 3 198 7"
                    fill="none"
                    stroke="url(#cases-cta-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Apps
            </span>
          </h2>

          <p className="text-2xl leading-10">Let&apos;s Get to Work</p>

          <Button
            render={<Link href={emailHref} />}
            nativeButton={false}
            variant="brand"
            size="xl"
            className="shadow-button h-13"
          >
            Speak to Us
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
