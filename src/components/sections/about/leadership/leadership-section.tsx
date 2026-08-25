import Image from "next/image";

import Container from "@/components/layout/container";
import { leadership } from "@/data/team";

export default function LeadershipSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
            Leadership Team
          </h2>

          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map(({ id, name, role, linkedin, photo }) => (
              <li key={id} className="flex flex-col items-center gap-4 p-6">
                {photo ? (
                  <Image
                    src={photo}
                    alt={name}
                    width={280}
                    height={280}
                    sizes="140px"
                    className="size-35 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="from-brand-500 to-brand-gradient-start size-35 rounded-full bg-linear-to-br"
                  />
                )}

                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-base leading-6 font-bold">{name}</p>
                  <p className="text-muted-foreground text-base leading-6">
                    {role}
                  </p>
                </div>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-primary focus-visible:outline-ring rounded-md text-base leading-6 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Linkedin
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
