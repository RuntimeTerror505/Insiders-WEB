import Container from "@/components/layout/container";
import HeroRings from "@/components/sections/home/hero/hero-rings";
import { siteConfig } from "@/lib/site";

export default function JobsHeroSection() {
  return (
    <section className="relative overflow-x-clip pt-10 pb-8">
      <HeroRings className="pointer-events-none absolute -top-50 left-[58%] aspect-square h-auto w-[62%] max-w-none" />

      <Container className="relative">
        <h1 className="mx-auto max-w-[1200px] text-center text-[clamp(2.5rem,6.1vw,5.5rem)] leading-[1.2] font-bold text-balance capitalize">
          Open Position At
          <span className="text-primary block">{siteConfig.name}</span>
        </h1>
      </Container>
    </section>
  );
}
