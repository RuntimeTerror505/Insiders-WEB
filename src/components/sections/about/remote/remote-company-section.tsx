import Image from "next/image";

import Container from "@/components/layout/container";

export default function RemoteCompanySection() {
  return (
    <section className="bg-black py-16 text-white">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
              We Are a 100% Remote Company
            </h2>
            <p className="mx-auto max-w-[660px] text-xl leading-8 text-white/70">
              Talent doesn&apos;t have borders. No matter where your market is,
              we&apos;ve got the coverage
            </p>
          </div>

          <Image
            src="/about/world-map.avif"
            alt="Карта світу з командами в Канаді, США, Великій Британії, Польщі, Україні, Ізраїлі, ОАЕ та Австралії"
            width={1200}
            height={675}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
