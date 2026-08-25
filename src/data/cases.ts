import type { TechName } from "@/components/icons/tech";

export type CaseStudy = {
  slug: string;
  /** Назва продукту — у макеті йде надрядком над категорією */
  name: string;
  /** Великий рядок картки: «Loyalty & Rewards App» */
  category: string;
  description: string;
  /** Стек — ключі з реєстру techIcons */
  tech: TechName[];
  /** Ринок клієнта. У розділі Our Cases не показується */
  country?: string;
  /** Не в кожного кейса є застосунок у сторах */
  rating?: { score: number; count: string };
  stores?: { appStore?: string; googlePlay?: string };
  /** Файл з public/. Поки скриншотів немає — рядок малює плейсхолдер */
  image?: { src: string; alt: string };
};

// Кейси з макета «New Insiders», розділ Our Cases (Frame 57).
export const cases: CaseStudy[] = [
  {
    slug: "chill-bill",
    name: "Chill Bill",
    category: "Loyalty & Rewards App",
    description:
      "Chill Bill is a mobile app that simplifies the management of restaurant loyalty cards. Users can store their cards digitally, and the app provides updates on discounts from partner restaurants, helping them stay informed about the best deals.",
    tech: ["Flutter", "Python", "Vue.js", "Firebase"],
    rating: { score: 4.9, count: "34.5K" },
    stores: { appStore: "#", googlePlay: "#" },
  },
  {
    // TODO: повний опис не вичитався з Figma — квота REST API вичерпана.
    // Скопіювати текст із макета (Frame 45).
    slug: "truth-or-dare",
    name: "Truth or Dare",
    category: "Entertainment App",
    description: "Truth or Dare is a mobile app desi…",
    tech: ["Flutter", "Python", "Vue.js", "Firebase"],
    rating: { score: 5, count: "11.2K" },
    stores: { appStore: "#", googlePlay: "#" },
  },
  {
    // TODO: повний опис не вичитався з Figma. Скопіювати з макета (Frame 46).
    slug: "pixy",
    name: "Pixy",
    category: "Social Networking App",
    description: "Pixy is a mobile app for social na…",
    tech: ["Flutter", "Python", "Vue.js", "Firebase"],
    rating: { score: 4.9, count: "21.1K" },
    stores: { appStore: "#", googlePlay: "#" },
  },
];
