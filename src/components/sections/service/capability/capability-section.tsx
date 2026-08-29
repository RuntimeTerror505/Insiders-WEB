import type { ComponentProps, ComponentType } from "react";
import Link from "next/link";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Capability = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<ComponentProps<"svg">>;
};

function CapabilityCard({ title, description, icon: Icon }: Capability) {
  return (
    <li className="flex flex-col gap-4 rounded-xl border p-6">
      <Icon aria-hidden className="text-primary size-8" />
      <h3 className="text-xl leading-7 font-bold">{title}</h3>
      <p className="text-muted-foreground text-base leading-6">{description}</p>
    </li>
  );
}

/**
 * Блок напрямку: ліворуч назва, лід і кнопка, праворуч колонка карток
 * у рамці. У варіанті `layout="row"` заголовок і кнопка стають одним
 * рядком угорі, а картки — сіткою під ними (так у референсі зверстано
 * «AI & Machine Learning»).
 */
export default function CapabilitySection({
  title,
  description,
  action,
  items,
  layout = "split",
}: {
  title: string;
  description?: string;
  action?: { label: string; href: string };
  items: Capability[];
  layout?: "split" | "row";
}) {
  const button = action && (
    <Button
      render={<Link href={action.href} />}
      nativeButton={false}
      variant="brand"
      size="2xl"
      className="shrink-0"
    >
      {action.label}
    </Button>
  );

  if (layout === "row") {
    return (
      <section className="py-16">
        <Container>
          <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
                {title}
              </h2>
              {button}
            </div>

            <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <CapabilityCard key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div
          className={cn(
            "mx-auto grid max-w-[1200px] gap-10",
            "lg:grid-cols-2 lg:items-start lg:gap-16"
          )}
        >
          <div className="flex flex-col items-start gap-6 lg:sticky lg:top-28">
            <h2 className="text-[clamp(2rem,4.45vw,3.5rem)] leading-[1.15] font-bold">
              {title}
            </h2>
            {description && (
              <p className="text-muted-foreground max-w-[520px] text-lg leading-7">
                {description}
              </p>
            )}
            {button}
          </div>

          <ul className="flex list-none flex-col gap-6">
            {items.map((item) => (
              <CapabilityCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
