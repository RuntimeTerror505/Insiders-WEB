import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { headerCta } from "@/lib/navigation";

/**
 * Градієнтний банер із макета (Frame 58, 1200×565): заклик отримати
 * технічний план. Градієнт і сітка крапок — утиліти bg-cta-* у globals.css,
 * зерно поверх них — текстура з макета в soft-light.
 */
export default function AiPlanSection() {
  return (
    <section className="py-16">
      <Container>
        {/* 1200×565 у макеті — висоту тримаємо мінімумом, щоб на вужчих екранах текст не тіснився */}
        <div className="bg-cta-gradient relative isolate mx-auto flex min-h-[565px] max-w-[1200px] flex-col items-center justify-center gap-8 overflow-hidden rounded-xl px-6 py-16 text-center text-white">
          <span
            aria-hidden
            className="bg-cta-dots absolute inset-0 -z-10 opacity-15"
          />
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-[url('/textures/noise.webp')] bg-[length:256px_256px] opacity-40 mix-blend-soft-light"
          />

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-bold text-balance capitalize">
              Get an AI-Built Technical Plan for Your Idea
            </h2>
            <p className="max-w-[806px] text-xl leading-7 text-[#eaeff4]">
              Scope, architecture, cost range and timeline — drafted by our AI
              pipeline, reviewed and signed off by a senior engineer.
            </p>
          </div>

          <Button
            render={<Link href={headerCta.href} />}
            nativeButton={false}
            size="xl"
            className="shadow-button h-13 bg-white text-black hover:bg-white/90"
          >
            Get My AI Plan
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
