import { Accordion } from "@base-ui/react/accordion";
import Link from "next/link";
import { Plus } from "lucide-react";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { jobs } from "@/data/jobs";

export default function OpeningsSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-[1100px]">
          <Accordion.Root className="flex flex-col">
            {jobs.map(({ slug, title, description, requirements }) => (
              <Accordion.Item
                key={slug}
                value={slug}
                className="flex flex-col border-b"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group focus-visible:outline-ring hover:text-primary flex w-full items-center gap-6 rounded-md py-6 text-left text-2xl leading-8 font-bold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2">
                    <Plus className="text-primary size-6 shrink-0 transition-transform duration-200 ease-out group-data-panel-open:rotate-45" />
                    {title}
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                  <div className="flex flex-col items-start gap-4 pb-8 pl-12">
                    <p className="max-w-[820px] text-base leading-6">
                      {description}
                    </p>

                    <ul className="flex list-none flex-col gap-2">
                      {requirements.map((item) => (
                        <li key={item} className="flex gap-2 text-base leading-6">
                          <span aria-hidden className="text-muted-foreground">
                            &bull;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/jobs/${slug}`}
                      className="hover:text-primary focus-visible:outline-ring inline-flex items-center gap-2 text-base leading-6 font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      Read More
                      <ArrowRightIcon className="size-5" />
                    </Link>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </section>
  );
}
