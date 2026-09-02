import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import IconTile, { type TileIcon } from "@/components/ui/icon-tile";
import { Button } from "@/components/ui/button";
import { emailHref } from "@/lib/site";

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: TileIcon;
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
          <div className="flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
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
                className="bg-surface flex list-none flex-col gap-6 rounded-xl border p-6"
              >
                {column.map(({ id, title: itemTitle, description, icon: Icon }) => (
                  <li key={id} className="flex items-start gap-4">
                    <IconTile icon={Icon} />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl leading-7 font-bold">{itemTitle}</h3>
                      <p className="text-muted-foreground text-base leading-8">
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
