import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/container";
import { featuredPosts } from "@/data/posts";
import { formatPostDate } from "@/lib/dates";

export default function FeaturedPostsSection() {
  if (featuredPosts.length === 0) return null;

  return (
    <section className="pb-16">
      <Container>
        <ul className="mx-auto flex max-w-[1200px] list-none flex-col gap-16">
          {featuredPosts.map(
            ({ slug, title, excerpt, image, date, author }) => (
              <li key={slug}>
                <article className="grid items-start gap-8 lg:grid-cols-[470fr_690fr] lg:gap-10">
                  <Link
                    href={`/blog/${slug}`}
                    className="focus-visible:outline-ring group block focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <div className="bg-muted relative aspect-[470/280] overflow-hidden rounded-lg">
                      {image && (
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 470px, 100vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
                  </Link>

                  <div className="flex flex-col gap-6">
                    <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] font-bold">
                      <Link
                        href={`/blog/${slug}`}
                        className="hover:text-primary focus-visible:outline-ring rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                      >
                        {title}
                      </Link>
                    </h2>

                    {excerpt && (
                      <p className="text-muted-foreground text-base leading-6">
                        {excerpt}
                      </p>
                    )}

                    <div className="text-muted-foreground flex items-center gap-3 text-base leading-6">
                      {author?.avatar && (
                        <Image
                          src={author.avatar}
                          alt=""
                          width={64}
                          height={64}
                          sizes="32px"
                          className="size-8 shrink-0 rounded-full object-cover"
                        />
                      )}
                      {author && (
                        <span className="text-foreground font-bold">
                          {author.name}
                        </span>
                      )}
                      <span aria-hidden>—</span>
                      <time dateTime={date}>{formatPostDate(date)}</time>
                    </div>
                  </div>
                </article>
              </li>
            )
          )}
        </ul>
      </Container>
    </section>
  );
}
