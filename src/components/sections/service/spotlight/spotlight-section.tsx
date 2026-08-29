import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

/**
 * Чорна картка на всю ширину контенту: текст ліворуч, зображення праворуч.
 * У референсі так подана секція «Product & UX/UI Design».
 */
export default function SpotlightSection({
  title,
  description,
  action,
  image,
}: {
  title: string;
  description: string;
  action: { label: string; href: string };
  image?: { src: string; alt: string };
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 rounded-xl bg-black p-8 text-white sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-[clamp(2rem,4.45vw,3.5rem)] leading-[1.15] font-bold">
              {title}
            </h2>
            <p className="max-w-[520px] text-lg leading-7 text-white/80">
              {description}
            </p>

            <Button
              render={<Link href={action.href} />}
              nativeButton={false}
              variant="brandSecondary"
              size="2xl"
            >
              {action.label}
            </Button>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            {image && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-contain"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
