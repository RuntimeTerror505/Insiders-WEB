import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/data/cases";

export default function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { slug, name, category, industry, description, image } = caseStudy;

  return (
    <Link
      href={`/cases/${slug}`}
      className="from-brand-50 focus-visible:outline-ring group flex h-full flex-col overflow-hidden rounded-2xl border bg-linear-to-br to-white no-underline transition-shadow hover:shadow-[0_12px_40px_-12px_rgb(51_1_46_/_0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 sm:flex-row lg:min-h-[420px]"
    >
      <div className="flex flex-1 flex-col gap-4 p-8">
        <span className="bg-secondary text-secondary-foreground w-fit rounded-md px-3 py-1 text-sm leading-6 font-bold tracking-[0.5px] uppercase">
          {industry}
        </span>

        <p className="text-lg leading-7">{name}</p>

        <h3 className="group-hover:text-primary text-2xl leading-8 font-bold transition-colors">
          {category}
        </h3>

        <p className="text-muted-foreground line-clamp-6 text-base leading-6">
          {description}
        </p>
      </div>

      {image && (
        <div className="relative h-64 shrink-0 sm:h-auto sm:w-[45%]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 270px, 100vw"
            className="object-contain object-bottom sm:object-right-bottom"
          />
        </div>
      )}
    </Link>
  );
}
