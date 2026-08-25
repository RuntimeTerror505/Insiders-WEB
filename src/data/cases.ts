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
  /** Файл з public/. Без нього CaseRow малює плейсхолдер */
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
    tech: ["Flutter", "Node.js", "Postgres", "Firebase"],
    rating: { score: 4.9, count: "34.5K" },
    stores: { appStore: "#", googlePlay: "#" },
    image: {
      src: "/cases/chill-bill.webp",
      alt: "Екрани застосунку Chill Bill: список програм лояльності та карта партнерських ресторанів",
    },
  },
  {
    slug: "truth-or-dare",
    name: "Truth or Dare",
    category: "Entertainment App",
    description:
      "Truth or Dare is a mobile app designed for team gameplay. It brings the classic party game to your fingertips, providing a fun and engaging way to challenge each other with daring tasks and revealing questions.",
    tech: ["Flutter", "Node.js", "Socket.IO", "Redis"],
    rating: { score: 5, count: "11.2K" },
    stores: { appStore: "#", googlePlay: "#" },
    image: {
      src: "/cases/truth-or-dare.webp",
      alt: "Екрани гри Truth or Dare: нарахування балів і вибір між truth і dare",
    },
  },
  {
    slug: "pixy",
    name: "Pixy",
    category: "Social Networking App",
    description:
      "Pixy is a mobile app for social navigation that helps users structure and enhance their social lives. It provides personalized event and activity recommendations based on user interests, allows users to create their own events, and invite others.",
    tech: ["Flutter", "Python", "Postgres", "PyTorch"],
    rating: { score: 4.9, count: "21.1K" },
    stores: { appStore: "#", googlePlay: "#" },
    image: {
      src: "/cases/pixy.webp",
      alt: "Екрани застосунку Pixy: вибір спільнот за інтересами та добірка учасників події",
    },
  },
];
