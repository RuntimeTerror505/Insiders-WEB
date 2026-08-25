"use client";

import { useEffect, useRef } from "react";

import TestimonialCard from "./testimonial-card";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialsRow({
  testimonials,
  label,
  staggered = false,
}: {
  testimonials: Testimonial[];
  label: string;
  /** Другий ряд у макеті зсунуто рівно на пів кроку картки. */
  staggered?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!staggered) return;

    const scroller = ref.current;
    const track = scroller?.firstElementChild;
    if (!scroller || !track) return;

    const [first, second] = Array.from(track.children) as HTMLElement[];
    if (!first || !second) return;

    // Крок = ширина картки + проміжок. Стартуємо з половини — так само,
    // як у Figma, де другий ряд починається на 306px лівіше за перший.
    scroller.scrollLeft = (second.offsetLeft - first.offsetLeft) / 2;
  }, [staggered]);

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      tabIndex={0}
      className="focus-visible:outline-ring w-full overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline-2 focus-visible:-outline-offset-2 [&::-webkit-scrollbar]:hidden"
    >
      {/* Відступи на треку, а не на скролері: інакше праве поле губиться */}
      <ul className="flex w-max list-none gap-6 px-[max(1rem,calc((100vw-1200px)/2))]">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="flex">
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </div>
  );
}
