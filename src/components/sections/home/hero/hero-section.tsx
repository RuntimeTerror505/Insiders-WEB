import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import HeroRings from "./hero-rings";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const gradientText =
  "bg-linear-to-b from-brand-gradient-start to-brand-gradient-end bg-clip-text text-transparent";

/** Стек із макета — іконки експортовані з Figma у брендових кольорах. */
const techStack = [
  { label: "Flutter", src: "/icons/flutter.svg" },
  { label: "ChatGPT", src: "/icons/chatgpt.svg" },
  { label: "Python", src: "/icons/python.svg" },
  { label: "AI", src: "/icons/ai-brain.svg" },
] as const;

export default function HeroSection() {
  return (
    <section className="pt-10 pb-20">
      <Container>
        <div className="mx-auto flex max-w-[1052px] flex-col items-center justify-center gap-10">
          <h1 className="text-center text-[clamp(2rem,6.2vw,5.5rem)] leading-[1.2] font-bold text-balance capitalize">
            We Ship Like a 50-Person Agency{" "}
            <span className={cn(gradientText, "from-[14.4%]")}>With</span>{" "}
            <span className={cn("block", gradientText, "from-[29.85%]")}>
              a Team of Three
            </span>
          </h1>

          <Button
            render={<Link href={emailHref} />}
            nativeButton={false}
            variant="brand"
            size="xl"
            className="shadow-button text-primary-foreground/85 h-[52px]"
          >
            Book a Call
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
        {/* animation section */}
        <div className="relative mx-auto mt-10 aspect-square w-full max-w-[560px]">
          <HeroRings />
          {/*
           * Мокапи з макета лежать по центру кілець і виступають за їхні
           * межі: у Figma кільця ~720 завширшки, а фрейм із телефонами —
           * 1024, тобто 142% від контейнера.
           */}
          <Image
            src="/hero-phones.webp"
            alt="Екрани застосунків Chill Bill, Truth or Dare та Pixy"
            width={1024}
            height={768}
            priority
            sizes="(min-width: 640px) 800px, 100vw"
            className="pointer-events-none absolute top-1/2 left-1/2 w-[142%] max-w-none -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="mx-auto mt-20 flex max-w-[1200px] flex-col items-start justify-between gap-12 xl:flex-row xl:gap-8">
          <div className="flex w-full flex-col gap-6 xl:w-[687px]">
            <div className="border-foreground flex w-full items-center border-b-2 pb-1">
              <h2 className="max-w-[633px] text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
                AI Does the Volume. Senior Engineers Own the Outcome.
              </h2>
            </div>
            <p className="text-base leading-6 capitalize">
              Every project runs with{" "}
              <strong className="font-bold">Claude in the loop</strong> —
              scaffolding, migrations, test suites, documentation — while two or
              three senior engineers with 7+ years of experience own the
              architecture, review every line that ships, and answer for the
              result. You get the throughput of a large agency without the
              handoffs, the layers of management, or the headcount on your
              invoice.
            </p>
          </div>

          <ul className="grid list-none grid-cols-2 justify-items-center gap-8 sm:grid-cols-4">
            {techStack.map((tech) => (
              <li
                key={tech.label}
                className="flex w-[90px] flex-col items-center justify-center gap-4"
              >
                <Image
                  src={tech.src}
                  alt=""
                  width={64}
                  height={64}
                  unoptimized
                  className="size-16"
                />
                <span className="text-center text-xl leading-6 font-semibold capitalize">
                  {tech.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
