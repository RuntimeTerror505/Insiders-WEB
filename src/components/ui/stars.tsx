import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Пʼять зірок із заливкою за балом. Спільний для кейсів і відгуків,
 * щоб оцінки скрізь виглядали однаково.
 */
export default function Stars({
  score,
  className,
  starClassName,
}: {
  score: number;
  className?: string;
  starClassName?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${score} з 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-4",
            i < Math.round(score)
              ? "fill-foreground text-foreground"
              : "text-muted-foreground/40",
            starClassName
          )}
        />
      ))}
    </div>
  );
}
