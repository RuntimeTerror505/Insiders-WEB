import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function Logo({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Insiders — на головну"
      className={cn(
        "flex h-full shrink-0 items-center rounded-md transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        className
      )}
    >
      {/* Пропорція 275/233 — як у макеті; у хедері висота = 48px. */}
      <Image
        src="/logo-insiders.png"
        alt="Insiders"
        width={275}
        height={233}
        loading="eager"
        fetchPriority="high"
        className={cn("h-10 w-auto lg:h-12", imageClassName)}
      />
    </Link>
  );
}
