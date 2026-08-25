import Image from "next/image";

import Container from "@/components/layout/container";
import { clients } from "@/data/clients";

export default function TrustedSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
              Trusted by Great Companies
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[810px] text-xl leading-8">
              Insiders&apos; success is a reflection of our clients&apos; success
            </p>
          </div>

          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map(({ name, logo }) => (
              <li
                key={name}
                className="bg-surface relative flex h-39 items-center justify-center rounded-xl border p-6"
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 384px, 100vw"
                    className="object-contain p-8 grayscale"
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
