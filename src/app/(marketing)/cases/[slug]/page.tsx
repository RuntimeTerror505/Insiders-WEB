import Container from "@/components/layout/container";

export default async function CaseStudyPage({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;

  return (
    <Container className="py-24">
      <h1 className="text-3xl font-semibold tracking-tight">{slug}</h1>
    </Container>
  );
}
