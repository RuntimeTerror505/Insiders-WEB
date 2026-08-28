import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";

export default function ServicesCtaSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="border-primary mx-auto flex max-w-[996px] flex-col items-center gap-8 rounded-xl border px-8 py-12 lg:flex-row lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] font-medium capitalize">
              Services Tailored to Your Needs
            </h2>
            <p className="max-w-[604px] text-base leading-6">
              We develop amazing apps through tailored software development
              services. Every product we build is visually stunning, easy to
              use, and built for real business outcomes.
            </p>
          </div>

          <Button
            render={<Link href={emailHref} />}
            nativeButton={false}
            variant="brand"
            size="2xl"
            className="shrink-0"
          >
            Book a Call
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
