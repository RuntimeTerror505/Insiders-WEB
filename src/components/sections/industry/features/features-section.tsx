import { Accordion } from "@base-ui/react/accordion";

import { ArrowDropRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";

export type Feature = {
  id: string;
  title: string;
  description: string;
};

export default function FeaturesSection({
  title,
  items,
}: {
  title: string;
  items: Feature[];
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="mx-auto max-w-[996px] text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold text-balance capitalize">
            {title}
          </h2>

          <Accordion.Root
            multiple={false}
            defaultValue={[items[0].id]}
            className="grid gap-6 lg:grid-cols-2"
          >
            {items.map(({ id, title: featureTitle, description }) => (
              <Accordion.Item
                key={id}
                value={id}
                className="bg-surface data-open:border-primary data-open:drop-shadow-[0_0_4px_rgb(229_53_203_/_0.25)] flex flex-col justify-center gap-4 rounded-xl border px-6 py-10 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group focus-visible:outline-ring data-panel-open:text-primary flex w-full items-center justify-between gap-4 text-left text-[clamp(1.5rem,2.4vw,2rem)] leading-10 font-bold capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-4">
                    <span className="min-w-0">{featureTitle}</span>
                    <ArrowDropRightIcon className="size-10 shrink-0 transition-transform duration-200 ease-out group-data-panel-open:rotate-90" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Panel className="text-muted-foreground h-[var(--accordion-panel-height)] overflow-hidden text-base leading-6 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                  <p>{description}</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </section>
  );
}
