import type { CSSProperties } from "react";
import Image from "next/image";

import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";

type Office = {
  name: string;
  x: string;
  y: string;
  still?: boolean;
};

const offices: Office[] = [
  { name: "Canada", x: "13.67%", y: "18.1%" },
  { name: "USA", x: "18.52%", y: "33.48%" },
  { name: "Great Britain", x: "51.72%", y: "25.57%" },
  { name: "Poland", x: "58.88%", y: "34.39%" },
  { name: "Ukraine", x: "64.11%", y: "32.13%", still: true },
  { name: "Israel", x: "54.66%", y: "49.77%" },
  { name: "UAE", x: "59%", y: "52.94%" },
  { name: "Australia", x: "85.7%", y: "80.09%" },
];

export default function RemoteCompanySection() {
  return (
    <section className="bg-black py-16 text-white">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
              We Are a 100% Remote Company
            </h2>
            <p className="mx-auto max-w-[660px] text-xl leading-8 text-white/70">
              Talent doesn&apos;t have borders. No matter where your market is,
              we&apos;ve got the coverage
            </p>
          </div>

          <div className="relative w-full">
            <Image
              src="/about/world-map.avif"
              alt=""
              width={1200}
              height={675}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="h-auto w-full"
            />

            <ul className="absolute inset-0 list-none">
              {offices.map(({ name, x, y, still }, index) => (
                <li
                  key={name}
                  style={{ left: x, top: y }}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                >
                  <span
                    aria-hidden
                    style={
                      still
                        ? undefined
                        : ({ animationDelay: `${index * 0.3}s` } as CSSProperties)
                    }
                    className={cn(
                      "grid size-[clamp(14px,2.3vw,27px)] place-items-center rounded-full border-2 border-white bg-white/35",
                      !still && "animate-marker-blink motion-reduce:animate-none"
                    )}
                  >
                    <span className="block size-[55%] rounded-full bg-white" />
                  </span>
                  <span className="absolute top-full mt-1 text-[clamp(0.5rem,0.85vw,0.75rem)] leading-none whitespace-nowrap">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
