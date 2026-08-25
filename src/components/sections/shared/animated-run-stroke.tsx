import type { ReactNode } from "react";
import Image from "next/image";

import type { Partner } from "@/data/partners";
import { cn } from "@/lib/utils";

export default function AnimatedRunStroke({
  title,
  items,
  itemClassName = "h-12",
}: {
  title: ReactNode;
  items: Partner[];
  itemClassName?: string;
}) {
  const strip = (duplicate: boolean) => (
    <ul
      aria-hidden={duplicate || undefined}
      className="flex min-w-[100vw] shrink-0 list-none items-center justify-around gap-10 pr-10"
    >
      {items.map((item) => (
        <li
          key={item.name}
          className={cn("flex shrink-0 items-center", itemClassName)}
        >
          {item.logo ? (
            <Image
              src={item.logo.src}
              alt={item.name}
              width={item.logo.width}
              height={item.logo.height}
              className="h-full w-auto object-contain"
            />
          ) : (
            <span className="text-muted-foreground text-2xl font-bold whitespace-nowrap">
              {item.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="flex flex-col gap-10 py-16">
      <h2 className="px-4 text-center text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] font-bold">
        {title}
      </h2>

      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused] motion-reduce:animate-none">
          {strip(false)}
          {strip(true)}
        </div>
      </div>
    </section>
  );
}
