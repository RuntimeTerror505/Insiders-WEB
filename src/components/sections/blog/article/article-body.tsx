import type { ReactNode } from "react";
import Image from "next/image";

import type { ArticleSection } from "@/data/blog-articles";
import { cn } from "@/lib/utils";

function Paragraphs({ items }: { items: ReactNode[] }) {
  return (
    <div className="flex flex-col gap-3 text-base leading-6">
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

/**
 * Таблиця з макета (нода 382:2968): колонки 180/200/решта від 690, шапка
 * суцільним brand-500 з білим UPPERCASE, рядки розділені --border, а сама
 * рамка тіла — чорна з боків і знизу. Радіус 8 дає обгортка.
 */
function ArticleTable({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  const widths = ["w-[26%]", "w-[29%]", "w-[45%]"];

  return (
    <div className="overflow-x-auto rounded-[8px]">
      <table className="w-full min-w-[560px] border-collapse text-left text-base leading-6">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            {head.map((cell, index) => (
              <th
                key={cell}
                scope="col"
                className={cn("px-3 py-1 font-medium uppercase", widths[index])}
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cn(
                    "border-b px-3 py-2 align-top",
                    cellIndex === 0 && "border-l border-l-black font-semibold",
                    cellIndex === row.length - 1 && "border-r border-r-black",
                    rowIndex === rows.length - 1 && "border-b-black"
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Ліва колонка статті: обкладинка 690×496, лід, далі розділи. Проміжки
 * з макета — 24px між блоками і 12px між абзацами всередині.
 */
export default function ArticleBody({
  cover,
  intro,
  sections,
}: {
  cover?: { src: string; alt: string };
  intro: ReactNode[];
  sections: ArticleSection[];
}) {
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <div className="bg-muted relative aspect-[690/496] w-full overflow-hidden rounded-xl">
        {cover && (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority
            sizes="(min-width: 1024px) 690px, 100vw"
            className="object-cover"
          />
        )}
      </div>

      <Paragraphs items={intro} />

      {sections.map(({ id, title, body, table, after }) => (
        <section key={id} id={id} className="flex scroll-mt-28 flex-col gap-3">
          <h2 className="text-xl leading-7 font-bold">{title}</h2>
          <Paragraphs items={body} />
          {table && <ArticleTable {...table} />}
          {after && <Paragraphs items={after} />}
        </section>
      ))}
    </div>
  );
}
