import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/container";
import PostMeta from "@/components/sections/blog/post-meta";
import { featuredPost } from "@/data/posts";


export default function FeaturedPostSection() {
  if (!featuredPost) return null;

  const { slug, category, title, excerpt, image, date, readingTime } =
    featuredPost;

  return (
    <section className="pt-10 pb-16">
      <Container>
        <article className="group relative mx-auto grid max-w-[1200px] items-center gap-6 lg:grid-cols-2">
          <div className="bg-muted relative aspect-[588/460] overflow-hidden rounded-xl">
            {image && (
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 588px, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl leading-7">{category}</p>

            <h2 className="text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.25] font-bold uppercase">
              <Link
                href={`/blog/${slug}`}
                className="group-hover:text-primary focus-visible:outline-ring rounded-md transition-colors after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {title}
              </Link>
            </h2>

            {excerpt && (
              <div className="text-muted-foreground flex flex-col gap-6 text-base leading-6">
                {excerpt.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            <PostMeta date={date} readingTime={readingTime} />
          </div>
        </article>
      </Container>
    </section>
  );
}
