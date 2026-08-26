import BlogHeroSection from "@/components/sections/blog/hero/blog-hero-section";
import FeaturedPostsSection from "@/components/sections/blog/featured/featured-posts-section";
import PostsListSection from "@/components/sections/blog/list/posts-list-section";
import { postCategories } from "@/data/posts";

export default async function BlogPage({
  searchParams,
}: PageProps<"/blog">) {
  const { category, page } = await searchParams;

  const selected = postCategories.find((item) => item === category);
  const current = Number(Array.isArray(page) ? page[0] : page) || 1;

  return (
    <>
      <BlogHeroSection />
      <FeaturedPostsSection />
      <PostsListSection category={selected} page={current} />
    </>
  );
}
