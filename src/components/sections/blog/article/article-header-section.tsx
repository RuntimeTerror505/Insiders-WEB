import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import PostMeta from "@/components/sections/blog/post-meta";
import { Button } from "@/components/ui/button";

/**
 * Шапка статті (нода 377:2398): кнопка назад, заголовок 64px і мета-рядок.
 * Проміжки з макета — 16px між усіма трьома.
 */
export default function ArticleHeaderSection({
  title,
  date,
  readingTime,
}: {
  title: string;
  date: string;
  readingTime: string;
}) {
  return (
    <section className="pt-10">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4">
          <Button
            render={<Link href="/blog" />}
            nativeButton={false}
            variant="brandGhost"
            size="ghost-md"
          >
            <ArrowRightIcon className="rotate-180" />
            Back to Blog
          </Button>

          <h1 className="max-w-[996px] text-[clamp(2rem,4.45vw,4rem)] leading-[1.2] font-bold capitalize">
            {title}
          </h1>

          <PostMeta date={date} readingTime={readingTime} />
        </div>
      </Container>
    </section>
  );
}
