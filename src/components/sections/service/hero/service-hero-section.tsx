import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export type HeroQuote = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  logo?: string;
};

/**
 * Картка-відгук з правої колонки героя. У референсі їх дві, зсунуті одна
 * відносно одної, з підсвіченим ореолом позаду.
 */
function QuoteCard({ name, role, quote, avatar, logo }: HeroQuote) {
  return (
    <figure className="bg-background flex flex-col gap-4 rounded-xl p-5 shadow-[0_12px_40px_-12px_rgb(51_1_46_/_0.18)]">
      <div className="flex items-center gap-3">
        <span className="bg-muted relative size-11 shrink-0 overflow-hidden rounded-lg">
          {avatar && (
            <Image src={avatar} alt="" fill sizes="44px" className="object-cover" />
          )}
        </span>

        <figcaption className="flex flex-1 flex-col">
          <span className="text-base leading-6 font-bold">{name}</span>
          <span className="text-muted-foreground text-sm leading-5">{role}</span>
        </figcaption>

        {logo && (
          <Image
            src={logo}
            alt=""
            width={160}
            height={48}
            className="h-6 w-auto object-contain"
          />
        )}
      </div>

      <blockquote className="text-base leading-6">{quote}</blockquote>
    </figure>
  );
}

export default function ServiceHeroSection({
  title,
  accent,
  lead,
  action,
  quotes,
}: {
  title: string;
  /** Останній рядок заголовка — брендовим кольором */
  accent: string;
  lead: string[];
  action: { label: string; href: string };
  quotes: HeroQuote[];
}) {
  return (
    <section className="overflow-x-clip pt-10 pb-20">
      <Container>
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.1] font-bold">
              {title}
              <span className="text-primary block">{accent}</span>
            </h1>

            <div className="text-muted-foreground flex max-w-[600px] flex-col gap-4 text-lg leading-7">
              {lead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Button
              render={<Link href={action.href} />}
              nativeButton={false}
              variant="brand"
              size="2xl"
            >
              {action.label}
              <ArrowRightIcon />
            </Button>
          </div>

          {/* Друга картка в референсі зсунута праворуч і трохи вниз. */}
          <div className="relative isolate flex flex-col gap-6">
            <span
              aria-hidden
              className="bg-primary/15 absolute inset-8 -z-10 rounded-full blur-3xl"
            />
            {quotes.map((quote, index) => (
              <div key={quote.name} className={index % 2 ? "lg:ml-12" : "lg:mr-12"}>
                <QuoteCard {...quote} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
