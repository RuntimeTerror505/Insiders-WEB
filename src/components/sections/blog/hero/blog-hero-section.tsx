import Container from "@/components/layout/container";

export default function BlogHeroSection() {
  return (
    <section className="pt-16 pb-10">
      <Container>
        <div className="mx-auto max-w-[1200px] border-b pb-8">
          <h1 className="max-w-[900px] text-[clamp(2rem,4.45vw,4rem)] leading-[1.2] font-bold">
            Refreshing Articles for Businesses and Developers
          </h1>
        </div>
      </Container>
    </section>
  );
}
