import Image from "next/image";

import Container from "@/components/layout/container";

type Shot = { src: string; alt: string; width: number; height: number };

const topRow: Shot[] = [
  {
    src: "/about/gallery/1.webp",
    alt: "Команда Insiders на воркшопі",
    width: 828,
    height: 549,
  },
  {
    src: "/about/gallery/2.webp",
    alt: "Робочий процес в офісі",
    width: 682,
    height: 549,
  },
  {
    src: "/about/gallery/3.webp",
    alt: "Обговорення продукту біля дошки",
    width: 828,
    height: 549,
  },
];

const bottomRow: Shot[] = [
  {
    src: "/about/gallery/4.webp",
    alt: "Команда на корпоративній зустрічі",
    width: 682,
    height: 549,
  },
  {
    src: "/about/gallery/5.webp",
    alt: "Спільне фото команди Insiders",
    width: 972,
    height: 549,
  },
  {
    src: "/about/gallery/6.webp",
    alt: "Робочі будні розробників",
    width: 682,
    height: 549,
  },
];

function Row({ shots, className }: { shots: Shot[]; className: string }) {
  return (
    <ul className={`grid list-none gap-4 lg:h-[274px] ${className}`}>
      {shots.map((shot) => (
        <li key={shot.src} className="h-full">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="(min-width: 1280px) 33vw, 100vw"
            className="aspect-[3/2] h-full w-full rounded-xl object-cover lg:aspect-auto"
          />
        </li>
      ))}
    </ul>
  );
}

export default function GallerySection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
          <Row
            shots={topRow}
            className="lg:grid-cols-[413.5fr_341fr_413.5fr]"
          />
          <Row shots={bottomRow} className="lg:grid-cols-[341fr_486fr_341fr]" />
        </div>
      </Container>
    </section>
  );
}
