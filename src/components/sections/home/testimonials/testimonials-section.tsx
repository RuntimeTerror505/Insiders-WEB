import HeroRings from "../hero/hero-rings";
import TestimonialsRow from "./testimonials-row";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [firstRow, secondRow] = [
    testimonials.slice(0, 3),
    testimonials.slice(3),
  ];

  return (
    <section className="flex flex-col gap-10 py-16 relative">
      {/* <HeroRings className="absolute left-0 top-0"/> */}
      <h2 className="px-4 text-center text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold capitalize">
        Clients Say We Deliver
      </h2>

      <div className="flex flex-col gap-10">
        <TestimonialsRow testimonials={firstRow} label="Відгуки клієнтів" />
        <TestimonialsRow
          testimonials={secondRow}
          label="Відгуки клієнтів, продовження"
          staggered
        />
      </div>
    </section>
  );
}
