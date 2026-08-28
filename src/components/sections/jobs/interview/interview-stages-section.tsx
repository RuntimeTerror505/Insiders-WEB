import Container from "@/components/layout/container";

/**
 * Три етапи співбесіди з макета (нода 326:1758). У Figma третій підписаний
 * «Talanet», а заголовок — «3 Saged Interview»: обидва слова з одруківками,
 * тут виправлені.
 */
const stages = [
  {
    id: "primary",
    title: "Primary",
    description: "We assess a candidate's suitability for the position at hand",
  },
  {
    id: "tech",
    title: "Tech",
    description:
      "We assess tech proficiency, including strengths and weaknesses",
  },
  {
    id: "talent",
    title: "Talent",
    description: "We assess a candidate's compatibility with the existing team.",
  },
];

export default function InterviewStagesSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-interview-gradient relative isolate mx-auto flex min-h-[444px] max-w-[1200px] flex-col items-center justify-center gap-10 overflow-hidden rounded-xl px-6 py-12 text-center text-white sm:px-12 lg:px-[102px]">
          {/*
           * Сітка з макета — квадрат 444×444 біля лівого краю. Праву межу
           * розмиваємо маскою: у Figma квадрат просто обрізаний, і на живій
           * сторінці цей стик видно.
           */}
          <span
            aria-hidden
            className="bg-dots-grid absolute inset-y-0 left-0 -z-10 w-[444px] opacity-12 [mask-image:linear-gradient(90deg,#000_55%,transparent)]"
          />
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-[url('/textures/noise.webp')] bg-[length:256px_256px] opacity-40 mix-blend-soft-light"
          />

          <div className="flex max-w-[996px] flex-col gap-2">
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.25] font-medium text-balance capitalize">
              Be Ready With 3 Staged Interview
            </h2>
            <p className="text-lg leading-7 text-[#eaeff4] sm:text-xl">
              We evaluate technical skills, problem-solving abilities, and
              cultural fit to ensure that we hire the most qualified and
              compatible individuals for our team.
            </p>
          </div>

          <ul className="grid w-full max-w-[996px] list-none gap-8 sm:grid-cols-3 sm:gap-6">
            {stages.map(({ id, title, description }) => (
              <li key={id} className="flex flex-col gap-2">
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.25] font-bold">
                  {title}
                </h3>
                <p className="text-base leading-6">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
