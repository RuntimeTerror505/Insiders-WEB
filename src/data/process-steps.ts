import type { ComponentProps, ComponentType } from "react";
import {
  Code2,
  LayoutTemplate,
  PenTool,
  Rocket,
  Search,
  TestTube2,
} from "lucide-react";

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<ComponentProps<"svg">>;
  image?: { src: string; alt: string };
};

// Процес однаковий для всіх індустрій — різниться лише контент навколо нього.
export const processSteps: ProcessStep[] = [
  {
    id: "market-research",
    title: "Market Research",
    icon: Search,
    description:
      "We delve deep into market trends, competitor strategies, and customer preferences to develop a solution that stands out and resonates with your target audience.",
    image: {
      src: "/industries/process/market-research.avif",
      alt: "Дашборд з аналітикою ринку",
    },
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    icon: PenTool,
    description:
      "We turn research into flows and screens: wireframes first, then a visual language that matches your brand and keeps every step of the journey obvious.",
    image: {
      src: "/industries/process/ux-ui-design.avif",
      alt: "Макети екранів застосунку",
    },
  },
  {
    id: "prototyping",
    title: "Prototyping",
    icon: LayoutTemplate,
    description:
      "A clickable prototype lets you feel the product before a line of production code is written — and lets us cut what does not earn its place.",
    image: {
      src: "/industries/process/prototyping.avif",
      alt: "Клікабельний прототип застосунку",
    },
  },
  {
    id: "agile-development",
    title: "Agile Development",
    icon: Code2,
    description:
      "Two or three senior engineers with Claude in the loop ship in two-week increments, and you see a working build at the end of every one of them.",
    image: {
      src: "/industries/process/agile-development.avif",
      alt: "Дошка спринту з задачами",
    },
  },
  {
    id: "qa-testing",
    title: "QA Testing",
    icon: TestTube2,
    description:
      "Automated suites plus manual passes on real devices. Every release candidate goes through the same checklist before it reaches your users.",
    image: {
      src: "/industries/process/qa-testing.avif",
      alt: "Звіт про тестування збірки",
    },
  },
  {
    id: "launch-support",
    title: "App Launch & Support",
    icon: Rocket,
    description:
      "We handle store submissions, monitoring and the first weeks after release — then keep the product current with a support plan that fits your roadmap.",
    image: {
      src: "/industries/process/launch-support.avif",
      alt: "Сторінка застосунку в сторі",
    },
  },
];
