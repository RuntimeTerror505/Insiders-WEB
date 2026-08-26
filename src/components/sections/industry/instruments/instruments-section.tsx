import Image from "next/image";

import Container from "@/components/layout/container";

export type Instrument = { name: string; logo?: string };

export default function InstrumentsSection({
  title,
  items,
}: {
  title: string;
  items: Instrument[];
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
            {title}
          </h2>

          <ul className="flex list-none flex-wrap items-center justify-center gap-x-16 gap-y-10">
            {items.map(({ name, logo }) => (
              <li key={name} className="flex h-16 items-center">
                {logo ? (
                  <Image
                    src={logo}
                    alt={name}
                    width={192}
                    height={128}
                    sizes="96px"
                    className="h-full w-auto object-contain"
                  />
                ) : (
                  <span className="text-muted-foreground text-2xl font-bold">
                    {name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
