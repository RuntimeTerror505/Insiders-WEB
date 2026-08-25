import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";

export default function JobsCtaSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="from-mission-end via-brand-500 mx-auto max-w-[1100px] rounded-xl bg-linear-to-r to-[#2d5be5] p-px">
          <div className="bg-background flex flex-col items-center gap-8 rounded-xl px-8 py-12 lg:flex-row lg:justify-between lg:gap-10">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] font-medium text-balance capitalize">
              Contact Us to Proceed to the Next Stage
            </h2>

            <Button
              render={<Link href={emailHref} />}
              nativeButton={false}
              variant="brand"
              size="xl"
              className="shadow-button h-13 shrink-0"
            >
              Next Step
              <ArrowRightIcon className="size-6" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
