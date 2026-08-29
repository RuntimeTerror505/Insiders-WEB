import type { ReactNode } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import Container from "@/components/layout/container";

/**
 * Фото ліворуч, текст із чек-листом праворуч — секція «IT Consulting»
 * з референсу.
 */
export default function ConsultingSection({
  title,
  description,
  items,
  image,
}: {
  title: string;
  description: string;
  items: ReactNode[];
  image?: { src: string; alt: string };
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="bg-muted relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            {image && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 588px, 100vw"
                className="object-cover"
              />
            )}
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-[clamp(2rem,4.45vw,3.5rem)] leading-[1.15] font-bold">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-7">
              {description}
            </p>

            <ul className="flex list-none flex-col gap-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    className="text-primary mt-0.5 size-5 shrink-0"
                    strokeWidth={3}
                  />
                  <span className="text-base leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
