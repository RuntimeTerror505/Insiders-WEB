import type { ComponentProps, ComponentType } from "react";
import Image from "next/image";
import { Cpu, Layers, Users } from "lucide-react";

import Container from "@/components/layout/container";

type Highlight = {
  id: string;
  icon: ComponentType<ComponentProps<"svg">>;
  text: string;
};

const highlights: Highlight[] = [
  {
    id: "reputation",
    icon: Layers,
    text: "Word of our work quickly spread, and we soon found ourselves with a growing client base and a reputation as one of the hottest up-and-coming mobile app development companies.",
  },
  {
    id: "ai-in-the-loop",
    icon: Cpu,
    text: "Then the economics of building software changed, and we rebuilt how we work around it. Today a project runs with two or three senior engineers and Claude in the loop, and it ships what used to take a floor full of developers — faster, and with one person accountable for every decision.",
  },
  {
    id: "reviews",
    icon: Users,
    text: "Our hard work and dedication have earned us hundreds of positive reviews and made us a go-to partner for companies seeking to take their mobile strategy to the next level.",
  },
];

export default function HowItStartedSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
              How It Started
            </h2>

            <p className="text-base leading-6">
              Coming from a native Android and iOS development, we were one of{" "}
              <strong className="font-bold">
                the first teams who started developing cross-platform mobile apps
                on Flutter.
              </strong>{" "}
              Beginning as a small team of developers, we poured our hearts and
              souls into our projects, delivering top-notch quality and
              innovation with every release.
            </p>

            <ul className="flex list-none flex-col gap-6">
              {highlights.map(({ id, icon: Icon, text }) => (
                <li key={id} className="flex items-start gap-6">
                  <span
                    aria-hidden
                    className="from-brand-500 to-brand-gradient-start grid size-14 shrink-0 place-items-center rounded-lg bg-linear-to-br text-white"
                  >
                    <Icon className="size-7" />
                  </span>
                  <p className="text-base leading-6">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <Image
            src="/about/how-it-started.webp"
            alt="Команда Insiders за роботою в офісі"
            width={588}
            height={528}
            sizes="(min-width: 1024px) 588px, 100vw"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
