import { notFound } from "next/navigation";

import Container from "@/components/layout/container";
import ArticleBody from "@/components/sections/blog/article/article-body";
import ArticleCtaCard from "@/components/sections/blog/article/article-cta-card";
import ArticleHeaderSection from "@/components/sections/blog/article/article-header-section";
import ArticleToc from "@/components/sections/blog/article/article-toc";
import GradientCtaSection from "@/components/sections/shared/gradient-cta-section";
import { findArticle } from "@/data/blog-articles";
import { posts } from "@/data/posts";
import { headerCta } from "@/lib/navigation";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt?.[0],
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const article = findArticle(slug);

  return (
    <>
      <ArticleHeaderSection
        title={post.title}
        date={post.date}
        readingTime={post.readingTime}
      />

      <section className="pt-6 pb-16">
        <Container>
          {/* Дві колонки з макета: стаття 690, сайдбар 486, проміжок 24 */}
          <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[690fr_486fr]">
            <ArticleBody
              cover={post.image ? { src: post.image, alt: "" } : undefined}
              intro={article?.intro ?? post.excerpt ?? []}
              sections={article?.sections ?? []}
            />

            {article && (
              // Сайдбар їде разом зі сторінкою і прилипає під хедером
              <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
                <ArticleToc groups={article.toc} />
                <ArticleCtaCard
                  title={article.cta.title}
                  action={{ label: article.cta.action, href: headerCta.href }}
                />
              </aside>
            )}
          </div>
        </Container>
      </section>

      <GradientCtaSection
        title="Are you ready to increase your reach and drive business growth?"
        description="Scope, architecture, cost range and timeline — drafted by our AI pipeline, reviewed and signed off by a senior engineer."
        action={{ label: "Get My AI Plan", href: headerCta.href }}
      />
    </>
  );
}
