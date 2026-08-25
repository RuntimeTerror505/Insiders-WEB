import { Accordion } from "@base-ui/react/accordion";

import { ChevronDownIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { faq } from "@/data/faq";

export default function FaqSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
            Frequently Asked Questions
          </h2>

          <Accordion.Root
            defaultValue={[faq[0].id]}
            className="flex flex-col gap-8"
          >
            {faq.map(({ id, question, answer }) => (
              <Accordion.Item key={id} value={id} className="flex flex-col">
                <Accordion.Header>
                  <Accordion.Trigger className="group focus-visible:outline-ring hover:text-primary flex w-full items-center justify-between gap-6 rounded-md text-left text-xl leading-8 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4">
                    {question}
                    <ChevronDownIcon className="size-6 shrink-0 transition-transform duration-200 ease-out group-data-panel-open:rotate-180" />
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
