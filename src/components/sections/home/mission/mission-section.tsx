import Image from "next/image";

import Container from "@/components/layout/container";

/** Показники з макета. Числа — Montserrat Medium Italic 48px. */
const stats = [
  {
    value: "2–3",
    label: (
      <>
        Senior engineers
        <br />
        pet project — with the output of a 50-person team
      </>
    ),
  },
  { value: "150+", label: "Apps launched" },
  { value: "3", label: "Unicorns 🦄" },
];

export default function MissionSection() {
  return (
    <section className="bg-black py-16 text-white">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:h-[565px] lg:flex-row lg:items-center">
          <div className="flex h-full flex-1 flex-col justify-between gap-12">
            <div className="flex flex-col items-start gap-6">
              <span className="from-mission-start via-mission-mid to-mission-end inline-flex rounded-[8px] bg-linear-to-r via-54% px-6 py-3 text-sm leading-6 font-bold tracking-[1.12px] uppercase">
                We are on a MISSION
              </span>

              <div className="flex w-full flex-col gap-1">
                <h2 className="max-w-[666px] text-[clamp(2rem,4.45vw,4rem)] leading-[1.2] font-bold tracking-[-0.025em] capitalize">
                  #1 Software Company{" "}
                  <span className="flex h-[1.2em] items-center gap-x-4">
                    in Lviv by
                    <Image
                      src="/icons/clutch.svg"
                      alt="Clutch"
                      width={180}
                      height={100}
                      unoptimized
                      className="h-auto w-[2.8125em]"
                    />
                  </span>
                </h2>
                {/* Мальована підкреслююча лінія з макета (502×20). */}
                <Image
                  src="/icons/heading-underline.svg"
                  alt=""
                  width={503}
                  height={21}
                  unoptimized
                  className="h-[21px] w-full max-w-[502px]"
                />
              </div>
            </div>

            <ul className="flex w-full list-none flex-col gap-6 sm:flex-row sm:items-start sm:justify-center">
              {stats.map((stat) => (
                <li
                  key={stat.value}
                  className="flex flex-col gap-2 font-medium sm:flex-1"
                >
                  <span className="text-5xl leading-[1.2] italic">
                    {stat.value}
                  </span>
                  <span className="text-base leading-6">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Праворуч у макеті — три порожні плейсхолдери під зображення. */}
          <div className="flex h-full flex-1 flex-col gap-4">
            <div className="min-h-[200px] flex-1 rounded-[8px] bg-white" />
            <div className="flex min-h-[200px] flex-1 gap-4">
              <div className="flex-1 rounded-[8px] bg-white" />
              <div className="flex-1 rounded-[8px] bg-white" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
