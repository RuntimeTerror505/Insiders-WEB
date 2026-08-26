import type { ComponentProps, ComponentType } from "react";
import Image from "next/image";

import Container from "@/components/layout/container";

export type Solution = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<ComponentProps<"svg">>;
};

function SolutionItem({ title, description, icon: Icon }: Solution) {
  return (
    <li className="flex flex-col gap-4">
      <span
        aria-hidden
        className="from-brand-500 to-brand-gradient-start grid size-12 place-items-center rounded-lg bg-linear-to-br text-white"
      >
        <Icon className="size-6" />
      </span>
      <h3 className="text-xl leading-7 font-bold">{title}</h3>
      <p className="text-muted-foreground text-base leading-6">{description}</p>
    </li>
  );
}

export default function SolutionsSection({
  title,
  items,
  image,
}: {
  title: string;
  items: Solution[];
  image?: { src: string; alt: string };
}) {
  const left = items.slice(0, Math.ceil(items.length / 2));
  const right = items.slice(Math.ceil(items.length / 2));

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <h2 className="mx-auto max-w-[810px] text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold text-balance">
            {title}
          </h2>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_300px_1fr]">
            <ul className="flex list-none flex-col gap-12">
              {left.map((item) => (
                <SolutionItem key={item.id} {...item} />
              ))}
            </ul>

            <div className="bg-muted/40 relative mx-auto aspect-[300/600] w-[300px] max-w-full overflow-hidden rounded-3xl">
              {image && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="300px"
                  className="object-contain"
                />
              )}
            </div>

            <ul className="flex list-none flex-col gap-12">
              {right.map((item) => (
                <SolutionItem key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
