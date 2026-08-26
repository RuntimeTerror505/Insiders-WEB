import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";

export default function FeaturesSection({
  title,
  items,
  href,
}: {
  title: string;
  items: string[];
  href: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="mx-auto max-w-[810px] text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold text-balance">
            {title}
          </h2>

          <ul className="grid list-none gap-6 lg:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="min-w-0">
                <Link
                  href={href}
                  className="bg-surface hover:border-primary hover:text-primary focus-visible:outline-ring flex items-center justify-between gap-6 rounded-xl border p-6 text-xl leading-7 font-bold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 sm:p-8 sm:text-2xl sm:leading-8"
                >
                  <span className="min-w-0 break-words">{item}</span>
                  <ArrowRightIcon className="size-6 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
