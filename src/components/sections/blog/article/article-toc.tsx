import Link from "next/link";

import type { TocGroup } from "@/data/blog-articles";

/**
 * Зміст статті з макета (нода 377:2403): назви розділів 16/24 semibold
 * чорним, підпункти — марковані крапками, 14/20 у --muted-foreground.
 * Пункти без id — це рівні змісту, яким у тексті ще немає відповідного
 * розділу, тому вони не посилання.
 */
export default function ArticleToc({ groups }: { groups: TocGroup[] }) {
  return (
    <nav aria-label="Table of contents" className="flex flex-col gap-1">
      {groups.map(({ title, id, items }) => (
        <div key={title} className="flex flex-col gap-1">
          {id ? (
            <Link
              href={`#${id}`}
              className="hover:text-primary focus-visible:outline-ring rounded-md text-base leading-6 font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {title}
            </Link>
          ) : (
            <span className="text-base leading-6 font-semibold">{title}</span>
          )}

          {items && (
            <ul className="text-muted-foreground flex list-disc flex-col pl-5 text-sm leading-5">
              {items.map(({ label, id: itemId }) => (
                <li key={label} className="py-1">
                  {itemId ? (
                    <Link
                      href={`#${itemId}`}
                      className="hover:text-primary focus-visible:outline-ring rounded-md no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {label}
                    </Link>
                  ) : (
                    label
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}
