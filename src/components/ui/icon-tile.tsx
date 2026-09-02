import type { ComponentProps, ComponentType } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export type TileIcon = ComponentType<ComponentProps<"svg">> | string;

const sizes = {
  md: { tile: "size-14 rounded-lg", glyph: "size-8" },
  sm: { tile: "size-10 rounded-lg", glyph: "size-6" },
} as const;

export default function IconTile({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: TileIcon;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const { tile, glyph } = sizes[size];

  return (
    <span
      aria-hidden
      className={cn(
        "bg-icon-tile grid shrink-0 place-items-center overflow-hidden text-white",
        tile,
        className
      )}
    >
      {typeof Icon === "string" ? (
        <Image
          src={Icon}
          alt=""
          width={32}
          height={32}
          unoptimized
          className={glyph}
        />
      ) : (
        <Icon className={glyph} />
      )}
    </span>
  );
}
