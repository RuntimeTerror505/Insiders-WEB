import type { TileIcon } from "@/components/ui/icon-tile";

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: TileIcon;
  image?: { src: string; alt: string };
};

// Процес однаковий для всіх індустрій — різниться лише контент навколо нього.
export const processSteps: ProcessStep[] = [
  {
    id: "market-research",
    title: "Market Research",
    icon: "/industries/icons/file-search-fill.svg",
    description:
      "We delve deep into market trends, competitor strategies, and customer preferences to develop a solution that stands out and resonates with your target audience.",
    image: {
      src: "/industries/e-commerce/process/market-research.avif",
      alt: "Дашборд з аналітикою ринку",
    },
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    icon: "/industries/icons/pen-nib-fill.svg",
    description:
      "We turn research into flows and screens: wireframes first, then a visual language that matches your brand and keeps every step of the journey obvious.",
  },
  {
    id: "prototyping",
    title: "Prototyping",
    icon: "/industries/icons/git-branch-fill.svg",
    description:
      "A clickable prototype lets you feel the product before a line of production code is written — and lets us cut what does not earn its place.",
  },
  {
    id: "agile-development",
    title: "Agile Development",
    icon: "/industries/icons/code-box-fill.svg",
    description:
      "Two or three senior engineers with Claude in the loop ship in two-week increments, and you see a working build at the end of every one of them.",
  },
  {
    id: "qa-testing",
    title: "QA Testing",
    icon: "/industries/icons/bug-2-fill.svg",
    description:
      "Automated suites plus manual passes on real devices. Every release candidate goes through the same checklist before it reaches your users.",
  },
  {
    id: "launch-support",
    title: "App Launch & Support",
    icon: "/industries/icons/rocket-2-fill.svg",
    description:
      "We handle store submissions, monitoring and the first weeks after release — then keep the product current with a support plan that fits your roadmap.",
  },
];
