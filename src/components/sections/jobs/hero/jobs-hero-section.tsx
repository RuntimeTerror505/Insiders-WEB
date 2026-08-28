import Container from "@/components/layout/container";
import HeroRings from "@/components/sections/home/hero/hero-rings";
import { siteConfig } from "@/lib/site";

export default function JobsHeroSection() {
  return (
    <section className="relative overflow-x-clip pt-10 pb-8">
      {/*
       * У макеті (нода 326:1737) кільця стоять праворуч угорі: бокс 1440×720
       * зсунутий на 616px вправо і на 126px вгору, тобто більша частина
       * пучка йде за правий край екрана.
       */}
      <HeroRings className="pointer-events-none absolute -top-32 left-[58%] aspect-square h-auto w-[62%] max-w-none opacity-90" />

      <Container className="relative">
        <h1 className="mx-auto max-w-[1200px] text-center text-[clamp(2.5rem,6.1vw,5.5rem)] leading-[1.2] font-bold text-balance capitalize">
          Open Position At
          <span className="text-primary block">{siteConfig.name}</span>
        </h1>
      </Container>
    </section>
  );
}
