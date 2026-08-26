import type { TechName } from "@/components/icons/tech";

export type CaseStudy = {
  slug: string;
  /** Назва продукту */
  name: string;
  /** Великий рядок картки: «Loyalty & Rewards App» */
  category: string;
  /** Ключ фільтра на сторінці /cases і текст чипа в картці */
  industry: string;
  description: string;
  /** Стек — ключі з реєстру techIcons. Є не в кожного кейса */
  tech?: TechName[];
  /** Ринок клієнта. У розділі Our Cases не показується */
  country?: string;
  /** Не в кожного кейса є застосунок у сторах */
  rating?: { score: number; count: string };
  stores?: { appStore?: string; googlePlay?: string };
  /** Кругле лого в картці на /cases */
  logo?: string;
  /** Скрін продукту для картки на /cases */
  cover?: { src: string; alt: string };
  /** Мокапи для розділу Our Cases на головній */
  image?: { src: string; alt: string };
  /** Показувати на головній — там у макеті лише три кейси */
  featured?: boolean;
};

// Кейси з макета «New Insiders», артборд Cases.
export const cases: CaseStudy[] = [
  {
    slug: "atlys",
    name: "Atlys",
    category: "Travel & Visa Automation Platform",
    industry: "Travel",
    description:
      "Atlys is a digital platform that streamlines visa applications. Scan documents, choose dates, and submit requests in just a few clicks. By removing paperwork and long wait times, it ensures a seamless experience for travelers.",
    logo: "/cases/logos/atlys.avif",
    cover: {
      src: "/cases/covers/atlys.avif",
      alt: "Пошук віз у платформі Atlys на ноутбуці",
    },
  },
  {
    slug: "sxipher-ai",
    name: "Sxipher.ai",
    category: "Cyber Security Platform",
    industry: "Information Security",
    description:
      "Sxipher.ai provides advanced penetration testing and security assessments to address digital vulnerabilities. The platform protects infrastructures through custom security evaluations and risk mitigation strategies.",
    logo: "/cases/logos/sxipher-ai.avif",
    cover: {
      src: "/cases/covers/sxipher-ai.avif",
      alt: "Сторінка Sxipher.ai про AI-пентест на ноутбуці",
    },
  },
  {
    slug: "biosecurity",
    name: "Biosecurity",
    category: "Agritech Management Platform",
    industry: "Farmtech",
    description:
      "This platform enhances biosecurity with real-time farm data on performance and health for informed decisions. It streamlines supply ordering, training, and testing—accessible on mobile and desktop for efficient management.",
    logo: "/cases/logos/biosecurity.avif",
    cover: {
      src: "/cases/covers/biosecurity.avif",
      alt: "Головна сторінка платформи Biosecurity на ноутбуці",
    },
  },
  {
    slug: "oasis",
    name: "Oasis",
    category: "AI Content Generation Platform",
    industry: "Generative AI",
    description:
      "Oasis is an innovative platform where subscribers can generate detailed images from text descriptions using advanced machine learning technology. Users leverage this cutting-edge AI to create visual content, earning cryptocurrency coins for their contributions.",
    logo: "/cases/logos/oasis.avif",
    cover: {
      src: "/cases/covers/oasis.avif",
      alt: "Генератор зображень Oasis на ноутбуці",
    },
  },
  {
    slug: "goods2load",
    name: "Goods2load",
    category: "Logistics & Supply Chain Platform",
    industry: "Logistics",
    description:
      "Goods2load is a platform designed to streamline shipping for companies, offering a fast and cost-effective solution. It connects businesses with reliable shipping services, optimizing logistics to ensure efficient transportation of goods.",
    logo: "/cases/logos/goods2load.avif",
    cover: {
      src: "/cases/covers/goods2load.avif",
      alt: "Головна сторінка Goods2load на ноутбуці",
    },
  },
  {
    slug: "electricitywizard",
    name: "Electricitywizard",
    category: "Energy Management Platform",
    industry: "Utilitytech",
    description:
      "Electricitywizard helps navigate the energy market, providing tips to reduce electricity costs. Users can learn how to cut electricity usage, control their bills, compare providers, and check if they are overspending on annual electricity expenses.",
    logo: "/cases/logos/electricitywizard.avif",
    cover: {
      src: "/cases/covers/electricitywizard.avif",
      alt: "Сторінка порівняння тарифів Electricitywizard на ноутбуці",
    },
  },
  {
    slug: "chill-bill",
    name: "Chill Bill",
    category: "Loyalty & Reward App",
    industry: "Loyalty",
    featured: true,
    description:
      "Chill Bill is a mobile app that simplifies the management of restaurant loyalty cards. Users can store their cards digitally, and the app provides updates on discounts from partner restaurants, helping them stay informed about the best deals.",
    tech: ["Flutter", "Node.js", "Postgres", "Firebase"],
    rating: { score: 4.9, count: "34.5K" },
    stores: { appStore: "#", googlePlay: "#" },
    logo: "/cases/logos/chill-bill.avif",
    cover: {
      src: "/cases/covers/chill-bill.avif",
      alt: "Екрани застосунку Chill Bill",
    },
    image: {
      src: "/cases/chill-bill.webp",
      alt: "Екрани застосунку Chill Bill: список програм лояльності та карта партнерських ресторанів",
    },
  },
  {
    slug: "truth-or-dare",
    name: "Truth or Dare",
    category: "Entertainment App",
    industry: "Mobile Games",
    featured: true,
    description:
      "Truth or Dare is a mobile app designed for team gameplay. It brings the classic party game to your fingertips, providing a fun and engaging way to challenge each other with daring tasks and revealing questions.",
    tech: ["Flutter", "Node.js", "Socket.IO", "Redis"],
    rating: { score: 5, count: "11.2K" },
    stores: { appStore: "#", googlePlay: "#" },
    logo: "/cases/logos/truth-or-dare.avif",
    cover: {
      src: "/cases/covers/truth-or-dare.avif",
      alt: "Екрани гри Truth or Dare",
    },
    image: {
      src: "/cases/truth-or-dare.webp",
      alt: "Екрани гри Truth or Dare: нарахування балів і вибір між truth і dare",
    },
  },
  {
    slug: "pixy",
    name: "Pixy",
    category: "Social Network App",
    industry: "Socialtech",
    featured: true,
    description:
      "Pixy is a mobile app for social navigation that helps users structure and enhance their social lives. It provides personalized event and activity recommendations based on user interests, allows users to create their own events, and invite others.",
    tech: ["Flutter", "Python", "Postgres", "PyTorch"],
    rating: { score: 4.9, count: "21.1K" },
    stores: { appStore: "#", googlePlay: "#" },
    logo: "/cases/logos/pixy.avif",
    cover: {
      src: "/cases/covers/pixy.avif",
      alt: "Екрани застосунку Pixy",
    },
    image: {
      src: "/cases/pixy.webp",
      alt: "Екрани застосунку Pixy: вибір спільнот за інтересами та добірка учасників події",
    },
  },
];

export const featuredCases = cases.filter((item) => item.featured);
