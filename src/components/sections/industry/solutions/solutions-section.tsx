import Image from "next/image";

import Container from "@/components/layout/container";
import IconTile, { type TileIcon } from "@/components/ui/icon-tile";

export type Solution = {
  id: string;
  title: string;
  description: string;
  icon: TileIcon;
};

function SolutionItem({ title, description, icon }: Solution) {
  return (
    <li className="flex flex-col gap-6">
      <IconTile icon={icon} />
      <h3 className="text-xl leading-7 font-bold">{title}</h3>
      <p className="text-base leading-8">{description}</p>
    </li>
  );
}

export default function SolutionsSection({
  title,
  items,
  image,
}: {
  title: string;
  items: Solution[];
  image?: { src: string; alt: string };
}) {
  const left = items.slice(0, Math.ceil(items.length / 2));
  const right = items.slice(Math.ceil(items.length / 2));

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <h2 className="mx-auto max-w-[996px] text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold text-balance capitalize">
            {title}
          </h2>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_384px_1fr]">
            <ul className="flex list-none flex-col gap-6">
              {left.map((item) => (
                <SolutionItem key={item.id} {...item} />
              ))}
            </ul>

            {image && (
              <div className="relative mx-auto aspect-[384/791] w-[384px] max-w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="384px"
                  className="object-contain"
                />
              </div>
            )}

            <ul className="flex list-none flex-col gap-6">
              {right.map((item) => (
                <SolutionItem key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
