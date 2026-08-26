import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { industryPages } from "@/data/industry-pages";

export const metadata = {
  title: "Industries",
  description:
    "E-commerce, healthcare, fintech and retail products built by senior engineers with AI in the loop.",
};

export default function IndustriesPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col gap-5 text-center">
            <h1 className="text-[clamp(2rem,4.45vw,4rem)] leading-[1.2] font-bold">
              Industries We Serve
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[660px] text-xl leading-8">
              We are committed to developing innovative and powerful solutions
              to serve:
            </p>
          </div>

          <ul className="grid list-none gap-6 sm:grid-cols-2">
            {industryPages.map(({ slug, name, summary, icon: Icon }) => (
              <li key={slug}>
                <Link
                  href={`/industries/${slug}`}
                  className="bg-surface group focus-visible:outline-ring flex h-full flex-col gap-6 rounded-xl border p-8 no-underline shadow-[0_2px_8px_rgb(51_1_46_/_0.05)] transition-shadow hover:shadow-[0_12px_40px_-12px_rgb(51_1_46_/_0.18)] focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <span
                    aria-hidden
                    className="from-brand-500 to-brand-gradient-start grid size-12 place-items-center rounded-lg bg-linear-to-br text-white"
                  >
                    <Icon className="size-6" />
                  </span>

                  <h2 className="group-hover:text-primary text-2xl leading-8 font-bold transition-colors">
                    {name.replace(" Development", "")}
                  </h2>

                  <p className="text-muted-foreground text-base leading-6">
                    {summary}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 text-base leading-6 font-bold">
                    Read More
                    <ArrowRightIcon className="size-5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
