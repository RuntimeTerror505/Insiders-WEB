export type Post = {
  slug: string;
  category: string;
  title: string;
  /** Дата публікації в ISO — форматуємо на рендері */
  date: string;
  readingTime: string;
  /** Обкладинка з public/. Без неї рендериться плейсхолдер */
  image?: string;
};

// TODO: мок-дані з макета. Замінити на реальні статті (згодом — MDX через lib/content.ts)
export const posts: Post[] = [
  {
    slug: "cross-platform-mobile-programming-2026",
    category: "Discovery",
    title: "The complete guide to cross-platform mobile programming in 2026",
    date: "2025-04-24",
    readingTime: "12 min",
    image: "/blog/cross-platform-mobile-programming-2026.webp",
  },
  {
    slug: "cross-platform-mobile-app-development-2026",
    category: "Discovery",
    title: "The complete guide to cross-platform mobile app development in 2026",
    date: "2025-04-24",
    readingTime: "12 min",
    image: "/blog/cross-platform-mobile-app-development-2026.webp",
  },
  {
    slug: "choosing-a-mobile-app-programming-company-2026",
    category: "Discovery",
    title: "Your ultimate guide to choosing a mobile app programming company in 2026",
    date: "2025-04-24",
    readingTime: "12 min",
    image: "/blog/choosing-a-mobile-app-programming-company-2026.webp",
  },
];
