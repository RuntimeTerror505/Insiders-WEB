import Container from "@/components/layout/container";
import HeroRings from "@/components/sections/home/hero/hero-rings";
import { siteConfig } from "@/lib/site";

const stages = [
  {
    id: "primary",
    title: "Primary",
    description: "We assess a candidate's suitability for the position at hand.",
  },
  {
    id: "tech",
    title: "Tech",
    description:
      "We assess tech proficiency, including strengths and weaknesses.",
  },
  {
    id: "talent",
    title: "Talent",
    description:
      "We assess a candidate's compatibility with the existing team.",
  },
];

export default function JobsHeroSection() {
  return (
    <section className="relative overflow-x-clip pt-10 pb-16">
      <HeroRings className="pointer-events-none absolute top-1/2 left-1/2 aspect-square h-auto w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <Container>
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-16">
          <h1 className="text-center text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.1] font-bold capitalize">
            Open Positions At
            <span className="text-primary block">{siteConfig.name}</span>
          </h1>

          <div className="from-brand-800 to-brand-500 flex flex-col gap-10 rounded-lg bg-linear-to-b px-8 py-12 text-white">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] font-medium capitalize">
                Be Ready With 3 Staged Interview
              </h2>
              <p className="mx-auto max-w-[1010px] text-base leading-6 text-white/80">
                We evaluate technical skills, problem-solving abilities, and
                cultural fit to ensure that we hire the most qualified and
                compatible individuals for our team.
              </p>
            </div>

            <ul className="grid list-none gap-8 text-center sm:grid-cols-3">
              {stages.map(({ id, title, description }) => (
                <li key={id} className="flex flex-col gap-2">
                  <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] font-bold">
                    {title}
                  </h3>
                  <p className="mx-auto max-w-[336px] text-base leading-6 text-white/80">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
