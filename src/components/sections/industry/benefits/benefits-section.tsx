import type { ComponentProps, ComponentType } from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<ComponentProps<"svg">>;
};

export default function BenefitsSection({
  title,
  accent,
  action,
  items,
}: {
  title: string;
  accent: string;
  action: string;
  items: Benefit[];
}) {
  const columns = [
    items.slice(0, Math.ceil(items.length / 2)),
    items.slice(Math.ceil(items.length / 2)),
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <h2 className="max-w-[620px] text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
              {title}
              <span className="text-primary block">{accent}</span>
            </h2>

            <Button
              render={<Link href={emailHref} />}
              nativeButton={false}
              variant="brand"
              size="2xl"
              className="h-auto min-h-13 shrink-0 py-3 text-center whitespace-normal sm:whitespace-nowrap"
            >
              {action}
              <ArrowRightIcon className="size-6" />
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {columns.map((column, index) => (
              <ul
                key={index}
                className="bg-surface flex list-none flex-col gap-8 rounded-xl border p-8 shadow-[0_2px_8px_rgb(51_1_46_/_0.05)]"
              >
                {column.map(({ id, title: itemTitle, description, icon: Icon }) => (
                  <li key={id} className="flex items-start gap-5">
                    <span
                      aria-hidden
                      className="from-brand-500 to-brand-gradient-start grid size-12 shrink-0 place-items-center rounded-lg bg-linear-to-br text-white"
                    >
                      <Icon className="size-6" />
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl leading-7 font-bold">{itemTitle}</h3>
                      <p className="text-muted-foreground text-base leading-6">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
