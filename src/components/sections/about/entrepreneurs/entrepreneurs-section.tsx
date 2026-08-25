import Image from "next/image";

import Container from "@/components/layout/container";

export default function EntrepreneursSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="max-w-[588px] text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
              We Are a Team of Entrepreneurs
            </h2>
            <p className="text-base leading-6">
              Each Insiders member is an entrepreneur at heart. We know and
              understand your challenges. We are dedicated to providing tailored
              support and guidance to meet your specific needs.
            </p>
            <p className="max-w-[572px] text-base leading-6">
              Having launched 30+ successful products we have all the needed
              expertise to start yours.
            </p>
          </div>

          <Image
            src="/about/entrepreneurs.webp"
            alt="Команда Insiders на робочій зустрічі"
            width={588}
            height={400}
            sizes="(min-width: 1024px) 588px, 100vw"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
