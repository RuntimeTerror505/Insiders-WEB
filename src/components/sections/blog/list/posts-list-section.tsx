import Image from "next/image";
import Link from "next/link";

import { ChevronDownIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import PostMeta from "@/components/sections/blog/post-meta";
import { gridPosts, postCategories } from "@/data/posts";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

function buildHref(category?: string, page?: number) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page && page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

/**
 * Номери сторінок як у макеті (нода 357:2230): перші й останні три плюс
 * вікно навколо поточної, розриви між ними згортаються в «...».
 */
function pageItems(current: number, count: number): (number | "gap")[] {
  const shown = new Set<number>();
  for (const n of [
    1,
    2,
    3,
    current - 1,
    current,
    current + 1,
    count - 2,
    count - 1,
    count,
  ]) {
    if (n >= 1 && n <= count) shown.add(n);
  }

  const sorted = [...shown].sort((a, b) => a - b);
  return sorted.flatMap((n, i) =>
    i > 0 && n - sorted[i - 1] > 1 ? ["gap" as const, n] : [n]
  );
}

function PageLink({
  page,
  category,
  active,
}: {
  page: number;
  category?: string;
  active: boolean;
}) {
  return (
    <Link
      href={buildHref(category, page)}
      aria-current={active ? "page" : undefined}
      className={cn(
        "focus-visible:outline-ring grid w-6 place-items-center rounded-[4px] p-0.5 text-base leading-5 no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        active
          ? "bg-foreground text-background font-medium"
          : "hover:text-foreground text-[#97989d]"
      )}
    >
      {page}
    </Link>
  );
}

/** Шеврон із того ж набору Remix, що й решта сайта — просто повернутий. */
function PageArrow({
  href,
  label,
  direction,
}: {
  href?: string;
  label: string;
  direction: "prev" | "next";
}) {
  const icon = (
    <ChevronDownIcon
      className={cn("size-6", direction === "prev" ? "rotate-90" : "-rotate-90")}
    />
  );

  if (!href) {
    return (
      <span aria-hidden className="text-border p-1">
        {icon}
      </span>
    );
  }

  return (
    <Link
      href={href}
      rel={direction}
      aria-label={label}
      className="hover:text-primary focus-visible:outline-ring rounded-md p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {icon}
    </Link>
  );
}

export default function PostsListSection({
  category,
  page,
}: {
  category?: string;
  page: number;
}) {
  const filtered = category
    ? gridPosts.filter((post) => post.category === category)
    : gridPosts;

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(Math.max(page, 1), pageCount);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <section className="pb-24">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <nav aria-label="Categories" className="border-b pb-4">
            <ul className="flex list-none flex-wrap items-center gap-x-6 gap-y-3">
              {postCategories.map((item) => {
                const active = item === category;

                return (
                  <li key={item}>
                    <Link
                      href={buildHref(active ? undefined : item)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "focus-visible:outline-ring rounded-md text-base leading-6 no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4",
                        active
                          ? "font-medium underline underline-offset-4"
                          : "hover:text-primary"
                      )}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {visible.length === 0 ? (
            <p className="text-muted-foreground py-10 text-center text-lg">
              No articles in this category yet.
            </p>
          ) : (
            <ul className="grid list-none gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map(
                ({
                  slug,
                  category: postCategory,
                  title,
                  image,
                  date,
                  readingTime,
                }) => (
                  <li
                    key={slug}
                    className="group relative flex min-w-0 flex-col gap-4"
                  >
                    <div className="bg-muted relative aspect-[384/276] overflow-hidden rounded-xl">
                      {image && (
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>

                    <p className="text-xl leading-7">{postCategory}</p>

                    <h2 className="text-xl leading-7 font-bold uppercase">
                      <Link
                        href={`/blog/${slug}`}
                        className="group-hover:text-primary focus-visible:outline-ring rounded-md transition-colors after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4"
                      >
                        <span className="line-clamp-3">{title}</span>
                      </Link>
                    </h2>

                    <PostMeta date={date} readingTime={readingTime} />
                  </li>
                )
              )}
            </ul>
          )}

          {pageCount > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-6 flex items-center justify-center gap-3"
            >
              <PageArrow
                direction="prev"
                label="Previous page"
                href={current > 1 ? buildHref(category, current - 1) : undefined}
              />

              <ul className="flex list-none items-center">
                {pageItems(current, pageCount).map((item, index) => (
                  <li key={item === "gap" ? `gap-${index}` : item}>
                    {item === "gap" ? (
                      <span
                        aria-hidden
                        className="grid w-6 place-items-center p-0.5 text-base leading-5 text-[#97989d]"
                      >
                        &hellip;
                      </span>
                    ) : (
                      <PageLink
                        page={item}
                        category={category}
                        active={item === current}
                      />
                    )}
                  </li>
                ))}
              </ul>

              <PageArrow
                direction="next"
                label="Next page"
                href={
                  current < pageCount
                    ? buildHref(category, current + 1)
                    : undefined
                }
              />
            </nav>
          )}
        </div>
      </Container>
    </section>
  );
}
