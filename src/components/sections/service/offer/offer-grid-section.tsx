import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Offer = {
  id: string;
  title: string;
  /** Абзац із виділеними числами — тому ReactNode, а не рядок */
  description: ReactNode;
  /** Є тільки у двох верхніх, широких картках */
  image?: { src: string; alt: string };
};

/**
 * Чорні картки послуг із референсу: два широких блоки з ілюстрацією зверху
 * і три вужчі з зіркою. Ілюстрації беруться з props — без них лишається
 * порожня підкладка потрібної пропорції.
 */
function OfferCard({ title, description, image, wide }: Offer & { wide: boolean }) {
  // Ілюстрація опційна: поки її немає, текст займає всю ширину картки,
  // а не тулиться в колонку поруч із порожнім місцем.
  const withImage = wide && Boolean(image);

  return (
    <li
      className={cn(
        "flex flex-col gap-6 rounded-xl bg-black p-8 text-white",
        withImage ? "lg:flex-row lg:items-center lg:gap-8" : "gap-8"
      )}
    >
      <div className={cn("flex flex-col gap-4", withImage && "lg:flex-1")}>
        {!wide && (
          <Star aria-hidden className="text-rating size-8 shrink-0 fill-current" />
        )}
        <h3 className="text-2xl leading-8 font-bold">{title}</h3>
        <p className="text-base leading-6 text-white/80">{description}</p>
      </div>

      {withImage && image && (
        <div className="relative aspect-[4/3] w-full shrink-0 self-stretch overflow-hidden rounded-lg lg:w-[45%]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 360px, 100vw"
            className="object-contain"
          />
        </div>
      )}
    </li>
  );
}

export default function OfferGridSection({
  offers,
  promise,
  action,
}: {
  offers: Offer[];
  /** «Plan · Build · Scale» — рядок під сіткою */
  promise: string;
  action: { label: string; href: string };
}) {
  const [first, second, ...rest] = offers;

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-16">
          <ul className="grid list-none gap-6 lg:grid-cols-2">
            <OfferCard {...first} wide />
            <OfferCard {...second} wide />
          </ul>

          <ul className="grid list-none gap-6 md:grid-cols-3">
            {rest.map((offer) => (
              <OfferCard key={offer.id} {...offer} wide={false} />
            ))}
          </ul>

          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-[clamp(2rem,4.45vw,3.5rem)] leading-[1.2] font-bold">
              {promise}
            </h2>

            <Button
              render={<Link href={action.href} />}
              nativeButton={false}
              variant="brand"
              size="2xl"
              className="shrink-0"
            >
              {action.label}
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
