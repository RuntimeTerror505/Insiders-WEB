import type { ComponentProps, ComponentType } from "react";
import { Heart, Lightbulb, Users } from "lucide-react";

import Container from "@/components/layout/container";

type Stat = {
  id: string;
  icon: ComponentType<ComponentProps<"svg">>;
  title: string;
  description: string;
};

const stats: Stat[] = [
  {
    id: "ratings",
    icon: Heart,
    title: "5-star ratings",
    description:
      "We enjoy the highest rating with verified unbiased reviews at clutch.com",
  },
  {
    id: "users",
    icon: Lightbulb,
    title: "30m+ Users",
    description: "Reach a wider audience from iOS and Android to web and desktop",
  },
  {
    id: "experts",
    icon: Users,
    title: "80+ Experts",
    description:
      "All our engineers work full time and have on average 7+ years of experience",
  },
];

export default function AboutNowSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
              About Us Now
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[810px] text-xl leading-8">
              We partner with ambitious brands to ship transformative apps —
              small senior teams, AI in the loop, agency-scale output
            </p>
          </div>

          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(({ id, icon: Icon, title, description }) => (
              <li
                key={id}
                className="flex flex-col items-center gap-4 px-6 text-center"
              >
                <span
                  aria-hidden
                  className="from-brand-500 to-brand-gradient-start grid size-20 place-items-center rounded-full bg-linear-to-br text-white"
                >
                  <Icon className="size-10" />
                </span>
                <h3 className="text-2xl leading-10 font-bold">{title}</h3>
                <p className="text-base leading-6">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
