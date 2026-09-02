import { Accordion } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";

import { ChevronDownIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { faq, type FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FaqSection({
  items = faq,
  divided = false,
}: {
  items?: FaqItem[];
  divided?: boolean;
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
            Frequently Asked Questions
          </h2>

          <Accordion.Root
            defaultValue={divided ? [] : [items[0].id]}
            className={cn(
              "flex flex-col",
              divided ? "border-t" : "gap-8"
            )}
          >
            {items.map(({ id, question, answer }) => (
              <Accordion.Item
                key={id}
                value={id}
                className={cn("flex flex-col", divided && "border-b py-8")}
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group focus-visible:outline-ring hover:text-primary flex w-full items-center justify-between gap-3 rounded-md text-left text-2xl leading-8 font-bold capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-4">
                    {question}
                    {divided ? (
                      <Plus className="size-6 shrink-0 transition-transform duration-200 ease-out group-data-panel-open:rotate-45" />
                    ) : (
                      <ChevronDownIcon className="size-8 shrink-0 transition-transform duration-200 ease-out group-data-panel-open:rotate-180" />
                    )}
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                  <p className="max-w-[1000px] pt-4 text-base leading-6">
                    {answer}
                  </p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </section>
  );
}
