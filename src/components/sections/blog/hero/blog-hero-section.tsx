import Container from "@/components/layout/container";

export default function BlogHeroSection() {
  return (
    // Знизу падінгу немає: відступ 40 до великого поста дає його pt-10
    <section className="pt-16">
      <Container>
        <div className="mx-auto max-w-[1200px] border-b pb-4">
          <h1 className="max-w-[996px] text-[clamp(2rem,4.45vw,4rem)] leading-[1.2] font-bold capitalize">
            Refreshing Articles for Businesses and Developers
          </h1>
        </div>
      </Container>
    </section>
  );
}
