import Image from "next/image";

import { QuoteIcon } from "@/components/icons/ui";
import Stars from "@/components/ui/stars";
import type { Testimonial } from "@/data/testimonials";

/**
 * Картка відгуку з макета: 588×310, лапки + зірки зверху,
 * цитата обрізана на шести рядках, автор притиснутий донизу.
 */
export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const { author } = testimonial;

  return (
    <figure className="bg-surface flex h-full min-h-[310px] w-[min(588px,82vw)] shrink-0 flex-col gap-8 overflow-hidden rounded-[12px] border p-4">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between">
          <QuoteIcon className="size-8" />
          <Stars
            score={testimonial.score}
            className="gap-1"
            starClassName="size-6 fill-rating text-rating"
          />
        </div>
        {/* 554×144 у макеті — рівно шість рядків по 24px */}
        <blockquote className="line-clamp-6 text-base leading-6">
          {testimonial.quote}
        </blockquote>
      </div>

      <figcaption className="flex items-start gap-4">
        <Image
          src={author.avatar}
          alt=""
          width={52}
          height={52}
          className="size-[52px] shrink-0 rounded-[8px] border object-cover"
        />
        <div className="flex flex-col justify-center gap-1">
          <span className="text-base leading-6 font-semibold capitalize">
            {author.name}
          </span>
          <span className="text-muted-foreground text-base leading-6 font-medium capitalize">
            {author.role}, {author.company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
