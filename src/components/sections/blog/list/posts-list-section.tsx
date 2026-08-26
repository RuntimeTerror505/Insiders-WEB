import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { gridPosts, postCategories } from "@/data/posts";
import { formatPostDate } from "@/lib/dates";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

function buildHref(category?: string, page?: number) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page && page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
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
            <ul className="flex list-none flex-wrap items-center gap-x-8 gap-y-3">
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
                          ? "text-foreground font-bold"
                          : "text-muted-foreground hover:text-foreground"
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
            <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map(({ slug, title, image, date, readingTime }) => (
                <li key={slug} className="min-w-0">
                  <Link
                    href={`/blog/${slug}`}
                    className="bg-surface group focus-visible:outline-ring flex h-full flex-col overflow-hidden rounded-xl border no-underline shadow-[0_2px_8px_rgb(51_1_46_/_0.05)] transition-shadow hover:shadow-[0_12px_40px_-12px_rgb(51_1_46_/_0.18)] focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <div className="bg-muted relative aspect-[384/220] overflow-hidden">
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

                    <div className="flex flex-1 flex-col gap-6 p-6">
                      <h2 className="group-hover:text-primary text-xl leading-7 font-bold transition-colors">
                        {title}
                      </h2>

                      <p className="text-muted-foreground mt-auto flex items-center gap-3 text-base leading-6">
                        <time dateTime={date}>{formatPostDate(date)}</time>
                        <span aria-hidden>—</span>
                        {readingTime} read
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {pageCount > 1 && (
            <nav
              aria-label="Pagination"
              className="flex flex-col items-center gap-3"
            >
              <div className="flex items-center gap-4">
                {current > 1 && (
                  <Link
                    href={buildHref(category, current - 1)}
                    rel="prev"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-ring inline-flex h-12 items-center gap-2 rounded-lg border px-6 text-base leading-6 font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <ArrowRightIcon className="size-5 rotate-180" />
                    Previous
                  </Link>
                )}

                {current < pageCount && (
                  <Link
                    href={buildHref(category, current + 1)}
                    rel="next"
                    className="bg-primary text-primary-foreground hover:bg-brand-600 focus-visible:outline-ring shadow-button inline-flex h-12 items-center gap-2 rounded-lg px-6 text-base leading-6 font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Next
                    <ArrowRightIcon className="size-5" />
                  </Link>
                )}
              </div>

              <p className="text-muted-foreground text-base leading-6">
                {current} / {pageCount}
              </p>
            </nav>
          )}
        </div>
      </Container>
    </section>
  );
}
