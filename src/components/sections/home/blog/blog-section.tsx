import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/container";
import { posts } from "@/data/posts";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogSection() {
  return (
    <section className="pb-16">
      <Container>
        {/* Фрейм із макета: 1200×624, вертикальний auto-layout з gap 40 */}
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold">
              Read Our Blog
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[780px] text-xl leading-8">
              Here we collect the 5+ years of expertise of the Insiders team to
              provide you with cutting-edge articles about mobile app
              development
            </p>
          </div>

          {/* 3 колонки по 384 з проміжком 24 = рівно 1200 */}
          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group focus-visible:outline-ring flex flex-col gap-3 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {/* 384×270 у макеті */}
                  <div className="bg-muted relative aspect-[64/45] overflow-hidden rounded-lg">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <span className="text-muted-foreground text-base leading-6">
                    {post.category}
                  </span>

                  <h3 className="group-hover:text-primary text-lg leading-8 font-bold uppercase transition-colors">
                    {post.title}
                  </h3>

                  <span className="text-muted-foreground flex items-center gap-3 text-base leading-6">
                    <time dateTime={post.date}>
                      {dateFormatter.format(new Date(post.date))}
                    </time>
                    <span aria-hidden className="bg-border h-4 w-px" />
                    {post.readingTime}
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
