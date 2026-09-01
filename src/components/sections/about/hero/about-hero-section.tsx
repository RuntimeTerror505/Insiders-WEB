import type { CSSProperties } from "react";
import Image from "next/image";

import Container from "@/components/layout/container";
import HeroRings from "@/components/sections/home/hero/hero-rings";
import { cn } from "@/lib/utils";

type CollagePiece = {
  src: string;
  alt: string;
  /**
   * Частка від колажу 1052×569: позиція і ширина — з координат макета
   * (нода 276:528), висота — за пропорцією самого файла. Скруглення й
   * тінь запечені в avif, тож коробка мусить збігатися з ним точно,
   * інакше object-cover зрізає тінь із одного боку.
   */
  box: CSSProperties;
  sizes: string;
  /** Фон-градієнт: не інтерактивний і не масштабується */
  decor?: boolean;
  priority?: boolean;
};

/**
 * Колаж із макета — п'ять окремих шматків, а не одна картинка: кожен
 * має власний ховер. Порядок у масиві = порядок малювання, від дальнього
 * до ближнього, як у Figma.
 */
const collage: CollagePiece[] = [
  {
    src: "/about/hero-collage/gradient-background.avif",
    alt: "",
    box: { left: "17.51%", top: "0%", width: "71.98%", height: "87.58%" },
    sizes: "(min-width: 1100px) 757px, 72vw",
    decor: true,
  },
  {
    src: "/about/hero-collage/right-bottom-picture.avif",
    alt: "Код на екрані під час розробки",
    box: { left: "69.65%", top: "67.38%", width: "20.49%", height: "33.15%" },
    sizes: "(min-width: 1100px) 216px, 21vw",
  },
  {
    src: "/about/hero-collage/main-people-picture.avif",
    alt: "Команда Insiders за роботою на дивані",
    box: { left: "52.79%", top: "6.71%", width: "47.21%", height: "59.64%" },
    sizes: "(min-width: 1100px) 497px, 47vw",
    priority: true,
  },
  {
    src: "/about/hero-collage/prject-screen.avif",
    alt: "Інтерфейс проєкту Sxipher, зробленого командою Insiders",
    box: { left: "9.34%", top: "27.34%", width: "58.5%", height: "68.24%" },
    sizes: "(min-width: 1100px) 615px, 59vw",
    priority: true,
  },
  {
    src: "/about/hero-collage/left-people-picture.avif",
    alt: "Розробники Insiders обговорюють задачу за ноутбуком",
    box: { left: "0%", top: "6.47%", width: "18.42%", height: "44.52%" },
    sizes: "(min-width: 1100px) 194px, 19vw",
  },
];

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

            <div className="relative aspect-[1052/569] w-full">
              {collage.map(
                ({ src, alt, box, sizes, decor, priority }) => (
                  <div
                    key={src}
                    aria-hidden={decor || undefined}
                    style={box}
                    className={cn(
                      "absolute",
                      decor
                        ? "pointer-events-none"
                        : "transition-transform duration-300 ease-out hover:z-10 hover:scale-105"
                    )}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes={sizes}
                      priority={priority}
                      className="object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
