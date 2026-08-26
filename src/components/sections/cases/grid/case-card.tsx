import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/data/cases";

export default function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { slug, name, category, industry, description, cover, logo } = caseStudy;

  return (
    <Link
      href={`/cases/${slug}`}
      className="group focus-visible:outline-ring flex h-full flex-col gap-6 no-underline focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <div className="relative aspect-[580/330] rounded-lg">
        {cover && (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4 border-b pb-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-12 shrink-0 place-items-center rounded-full border p-2">
              {logo ? (
                <Image
                  src={logo}
                  alt=""
                  width={96}
                  height={96}
                  sizes="32px"
                  className="size-full object-contain"
                />
              ) : (
                <span
                  aria-hidden
                  className="text-muted-foreground text-sm font-bold"
                >
                  {name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </span>
            <p className="group-hover:text-primary truncate text-2xl leading-10 transition-colors">
              {name}
            </p>
          </div>

          <span className="shrink-0 rounded-md bg-[#deecfb] px-3 py-1 text-sm leading-6 font-medium tracking-[0.5px] text-[#2b5cca] uppercase">
            {industry}
          </span>
        </div>

        <h3 className="text-2xl leading-8 font-bold uppercase">{category}</h3>

        <p className="text-base leading-6">{description}</p>
      </div>
    </Link>
  );
}
