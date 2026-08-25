import type { ComponentProps, ComponentType, CSSProperties } from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import TiltCard from "@/components/sections/shared/tilt-card";
import { cn } from "@/lib/utils";

export type CardGridItem = {
  id: string;
  title: string;
  icon: ComponentType<ComponentProps<"svg">>;
  /** Тіло картки: або абзац, або список пунктів */
  description?: string;
  items?: string[];
  /** З ним у картці зʼявляється «Read More», притиснутий до низу */
  href?: string;
};

/**
 * Сітка 3×2 з карток «плитка з іконкою + назва + тіло». Спільна для
 * «Our Mobile App Development Services» і «Industries We Serve» —
 * секції відрізняються шапкою та вмістом карток.
 */
export default function CardGridSection({
  eyebrow,
  title,
  subtitle,
  cards,
  className,
  cardClassName,
  minCardHeight,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: CardGridItem[];
  className?: string;
  /** Щільність картки різна між секціями: у «Industries» вона вища й просторіша */
  cardClassName?: string;
  /** Фіксована мінімальна висота картки в px — інлайном, бо це разове значення з макета */
  minCardHeight?: number;
}) {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        {/* Фрейм із макета: 1200 завширшки, вертикальний auto-layout з gap 40 */}
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col gap-5 text-center">
            {eyebrow && (
              <p className="text-primary text-sm leading-6 font-bold tracking-[1.12px] uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground mx-auto max-w-[660px] text-xl leading-8">
                {subtitle}
              </p>
            )}
          </div>

          {/* 3 колонки по 384 з проміжком 24 = рівно 1200 */}
          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(({ id, title: cardTitle, description, items, href, icon: Icon }) => (
                <li key={id}>
                  <TiltCard
                    className={cn(
                      "group relative h-full rounded-xl p-px",
                      minCardHeight && "lg:min-h-(--min-card-height)"
                    )}
                    style={
                      minCardHeight
                        ? ({
                            "--min-card-height": `${minCardHeight}px`,
                          } as CSSProperties)
                        : undefined
                    }
                  >
                    <span
                      aria-hidden
                      className="card-frame group-hover:card-frame-glow group-hover:animate-card-glow absolute inset-0 rounded-xl"
                    />
                    <span
                      aria-hidden
                      className="card-frame-glow group-hover:animate-card-glow absolute inset-0 rounded-xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-70 motion-reduce:hidden"
                    />

                    <div
                      className={cn(
                        "bg-surface relative flex h-full flex-col gap-6 rounded-[calc(var(--radius-xl)-1px)] p-6 shadow-[0_2px_8px_rgb(51_1_46_/_0.05)]",
                        cardClassName
                      )}
                    >
                      <div className="flex min-h-14 items-center gap-5">
                        <span
                          aria-hidden
                          className="from-brand-500 to-brand-gradient-start grid size-12 shrink-0 place-items-center rounded-lg bg-linear-to-br text-white"
                        >
                          <Icon className="size-6" />
                        </span>
                        <h3 className="text-xl leading-7 font-bold capitalize">
                          {cardTitle}
                        </h3>
                      </div>

                      {description && (
                        <p className="text-base leading-6">{description}</p>
                      )}

                      {items && (
                        <ul className="flex list-none flex-col gap-2">
                          {items.map((item) => (
                            <li key={item} className="flex gap-2 text-base leading-6">
                              <span aria-hidden className="text-muted-foreground">
                                &bull;
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {href && (
                        <Link
                          href={href}
                          className="hover:text-primary focus-visible:outline-ring mt-auto inline-flex w-fit items-center gap-2 text-base leading-6 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                        >
                          Read More
                          <ArrowRightIcon className="size-5" />
                        </Link>
                      )}
                    </div>
                  </TiltCard>
                </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
