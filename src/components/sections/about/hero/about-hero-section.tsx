import Image from "next/image";

import Container from "@/components/layout/container";
import HeroRings from "@/components/sections/home/hero/hero-rings";

export default function AboutHeroSection() {
  return (
    <section className="overflow-x-clip pt-10 pb-20">
      <Container>
        <div className="mx-auto flex max-w-[1052px] flex-col items-center gap-10">
          <h1 className="text-center text-[clamp(2rem,4.45vw,4rem)] leading-[1.2] font-bold text-balance capitalize">
            <span className="text-primary">AI-Native</span> Custom Software
            &amp; App Development Team
          </h1>

          <div className="relative w-full">
            <HeroRings className="pointer-events-none absolute top-1/2 left-[16%] aspect-square h-auto w-[76%] max-w-none -translate-x-1/2 -translate-y-1/2" />
            <Image
              src="/about/hero-collage.webp"
              alt="Скриншоти проєктів Insiders і фото команди в роботі"
              width={1052}
              height={569}
              priority
              sizes="(min-width: 1100px) 1052px, 100vw"
              className="relative h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
