import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

export type HeroMockup = {
  phone: { src: string; alt: string };
  avatars: string[];
  stat: { value: string; label: string };
};

const barWidths = [
  ["44px", "100%"],
  ["100%", "44px"],
  ["32px", "100%"],
];

const donutArcs: { src: string; box: CSSProperties; arc: CSSProperties }[] = [
  {
    src: "/industries/e-commerce/hero/donut-2.svg",
    box: { left: 9.12, top: 9.12, width: 133.76, height: 133.76 },
    arc: { top: "0.99%", right: 0, bottom: "50%", left: "50%" },
  },
  {
    src: "/industries/e-commerce/hero/donut-3.svg",
    box: { left: 14.52, top: 14.52, width: 122.951, height: 122.951 },
    arc: { top: "50%", right: 0, bottom: "24.25%", left: "50%" },
  },
  {
    src: "/industries/e-commerce/hero/donut-4.svg",
    box: { left: 3.04, top: 3.04, width: 145.92, height: 145.92 },
    arc: { top: "50%", right: "8.18%", bottom: 0, left: "40.46%" },
  },
  {
    src: "/industries/e-commerce/hero/donut-5.svg",
    box: { left: 9.12, top: 9.12, width: 133.76, height: 133.76 },
    arc: { top: "50%", right: "50%", bottom: "1.2%", left: "12.26%" },
  },
  {
    src: "/industries/e-commerce/hero/donut-6.svg",
    box: { left: 0, top: 0, width: 152, height: 152 },
    arc: { top: 0, right: "41.32%", bottom: "18.49%", left: 0 },
  },
  {
    src: "/industries/e-commerce/hero/donut-1.svg",
    box: { left: 30.4, top: 30.4, width: 91.2, height: 91.2 },
    arc: { top: "-7.41%", right: "-9.26%", bottom: "-11.11%", left: "-9.26%" },
  },
  {
    src: "/industries/e-commerce/hero/donut-7.svg",
    box: { left: 35.47, top: 35.47, width: 81.067, height: 81.067 },
    arc: { inset: 0 },
  },
];

function FloatingCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute hidden rounded-lg border bg-white p-6 drop-shadow-[0_0_6px_rgb(128_128_128_/_0.2)] lg:block ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export default function IndustryHeroMockup({
  phone,
  avatars,
  stat,
}: HeroMockup) {
  return (
    <div className="relative mx-auto h-[630px] w-full max-w-[588px]">
      <span
        aria-hidden
        className="absolute top-1/2 right-0 h-[630px] w-[588px] max-w-full -translate-y-1/2 rounded-full blur-[300px]"
        style={{
          backgroundImage:
            "linear-gradient(106.4deg, rgb(246 81 222 / 0.36) 28.12%, rgb(255 209 248 / 0.36) 134.1%)",
        }}
      />

      <div className="absolute top-0 left-1/2 h-[629px] w-[292px] -translate-x-1/2 overflow-hidden rounded-[27px] border shadow-[0_0_99px_rgb(128_128_128_/_0.2)]">
        <Image
          src={phone.src}
          alt={phone.alt}
          fill
          priority
          sizes="292px"
          className="object-cover"
        />
      </div>

      <FloatingCard className="top-[58px] left-0">
        <ul className="flex list-none flex-col gap-4">
          {avatars.map((src, index) => (
            <li key={src} className="flex w-[152px] items-center gap-3">
              <Image
                src={src}
                alt=""
                width={96}
                height={96}
                sizes="48px"
                className="size-12 shrink-0 rounded-full object-cover"
              />
              <span aria-hidden className="flex min-w-0 flex-1 flex-col gap-1">
                <span
                  className="h-3 rounded-full bg-[#bababe]"
                  style={{ width: barWidths[index % barWidths.length][0] }}
                />
                <span
                  className="h-3 rounded-full bg-[#dbdce2]"
                  style={{ width: barWidths[index % barWidths.length][1] }}
                />
              </span>
            </li>
          ))}
        </ul>
      </FloatingCard>

      <FloatingCard className="top-[358px] left-[386px]">
        <div aria-hidden className="relative size-[152px]">
          {donutArcs.map(({ src, box, arc }) => (
            <span key={src} className="absolute" style={box}>
              <span className="absolute" style={arc}>
                <Image
                  src={src}
                  alt=""
                  width={152}
                  height={152}
                  unoptimized
                  className="block size-full max-w-none"
                />
              </span>
            </span>
          ))}

          <p className="absolute top-[62px] left-0 w-full text-center text-base leading-none font-semibold">
            {stat.value}
          </p>
          <p className="text-muted-foreground absolute top-[83px] left-0 w-full text-center text-[11px] leading-none font-light opacity-70">
            {stat.label}
          </p>
        </div>
      </FloatingCard>
    </div>
  );
}
