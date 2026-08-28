import { Accordion } from "@base-ui/react/accordion";
import { Minus, Plus } from "lucide-react";

import Container from "@/components/layout/container";
import { jobs } from "@/data/jobs";
import { emailHref, siteConfig, telegramHref } from "@/lib/site";

/**
 * Пункти списку в макеті починаються з дефіса, а не з крапки, тому маркер
 * малюємо самі — списку лишаємо семантику, а не стилі браузера.
 */
function DashedList({ items }: { items: string[] }) {
  return (
    <ul className="text-muted-foreground flex list-none flex-col text-base leading-8">
      {items.map((item) => (
        <li key={item} className="flex gap-1.5">
          <span aria-hidden>&ndash;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PanelBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xl leading-7 font-semibold">{title}</h4>
      <DashedList items={items} />
    </div>
  );
}

export default function OpeningsSection() {
  return (
    <section className="py-16">
      <Container>
        {/* Перша вакансія в макеті розгорнута. */}
        <Accordion.Root
          defaultValue={[jobs[0].slug]}
          className="mx-auto flex max-w-[1200px] flex-col"
        >
          {jobs.map(({ slug, title, responsibilities, requirements, offer }) => (
            <Accordion.Item
              key={slug}
              value={slug}
              className="flex flex-col border-b"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group focus-visible:outline-ring hover:text-primary flex w-full items-center gap-6 rounded-md py-3 text-left text-2xl leading-8 font-bold capitalize transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2">
                  <span className="flex-1">{title}</span>
                  <Plus
                    aria-hidden
                    className="size-8 shrink-0 group-data-panel-open:hidden"
                  />
                  <Minus
                    aria-hidden
                    className="hidden size-8 shrink-0 group-data-panel-open:block"
                  />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                <div className="flex max-w-[996px] flex-col gap-4 pt-4 pb-3">
                  <PanelBlock
                    title="Responsibilities:"
                    items={responsibilities}
                  />
                  <PanelBlock title="Requirements:" items={requirements} />
                  <PanelBlock title="We Offer:" items={offer} />

                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl leading-7 font-semibold">
                      Contact Info:
                    </h4>
                    <p className="text-muted-foreground text-base leading-8">
                      Email:{" "}
                      <a
                        href={emailHref}
                        className="hover:text-primary focus-visible:outline-ring font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {siteConfig.contacts.email}
                      </a>
                      <br />
                      Telegram:{" "}
                      <a
                        href={telegramHref}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary focus-visible:outline-ring font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {siteConfig.contacts.telegram}
                      </a>
                    </p>
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  );
}
