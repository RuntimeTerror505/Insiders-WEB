export type Post = {
  slug: string;
  category: string;
  title: string;
  /** Лід під заголовком, по абзацу на елемент. Показується у великому пості */
  excerpt?: string[];
  /** Дата публікації в ISO — форматуємо на рендері */
  date: string;
  readingTime: string;
  /** Обкладинка з public/blog. Без неї рендериться плейсхолдер */
  image?: string;
  /** Перший такий пост стоїть великим блоком над сіткою */
  featured?: boolean;
};

export const postCategories = [
  "App Development Guides",
  "App Development Trends",
  "E-Commerce Insights",
  "AI and ChatGPT Integration",
  "Popular",
  "Socialtech",
] as const;

/**
 * TODO: мок-дані. Поки в блозі чотири матеріали: один великий угорі
 * і три в сітці. Кожен має повне тіло статті в data/blog-articles.tsx.
 */
export const posts: Post[] = [
  {
    slug: "cross-platform-mobile-programming-2026",
    // У макеті великий пост підписаний «Discovery» — цієї рубрики немає
    // в рядку фільтрів, вона стоїть тільки тут.
    category: "Discovery",
    title: "The Complete Guide to Cross-Platform Mobile Programming in 2026",
    excerpt: [
      "A few years ago, building a mobile app meant making one of the toughest choices in your project: do you build for iOS or Android first? Or do you double your budget and build both?",
      "That choice is no longer the only option.",
      "Cross platform app development lets you build one app that runs beautifully on both iOS and Android using a single codebase. It saves time. It saves money. And in 2026, it has become the default approach for most businesses building modern mobile apps.",
    ],
    date: "2026-04-23",
    readingTime: "12 min",
    image: "/blog/cross-platform-mobile-programming-2026.webp",
    featured: true,
  },
  {
    slug: "government-procurement-aggregator",
    category: "App Development Guides",
    title:
      "Building a Government Procurement Aggregator: 15 Data Sources, Two Languages, One Search Box",
    excerpt: [
      "Fifteen procurement platforms, no public APIs, two writing systems, and deadlines measured in days. How we built a bilingual, AI-enriched tender aggregator — including the anti-bot walls and the 10 GB response that took the site down.",
    ],
    date: "2026-08-12",
    readingTime: "14 min",
    image: "/blog/government-procurement-aggregator.avif",
  },
  {
    slug: "mvp-in-three-weeks",
    category: "App Development Trends",
    title: "Shipping an MVP in Three Weeks: What We Cut, and What We Refused To",
    excerpt: [
      "Three weeks is enough time to build something real — but only if you are honest about what a first release is for. Here is the cut list we use, the four things we never cut, and what happened to the apps that shipped this way.",
    ],
    date: "2026-07-04",
    readingTime: "9 min",
    image: "/blog/mvp-in-three-weeks.webp",
  },
  {
    slug: "tech-debt-audit",
    category: "Popular",
    title:
      "The Tech-Debt Audit: Finding $10K of Avoidable Spend in One Sprint",
    excerpt: [
      "Technical debt rarely shows up in the backlog. It shows up on the invoice — in cloud bills, in support hours, in releases that take a week instead of a day. Here is the five-day audit we run, and the three findings that repeat in almost every codebase.",
    ],
    date: "2026-05-19",
    readingTime: "11 min",
    image: "/blog/tech-debt-audit.webp",
  },
];

/** У макеті великий блок один — решта позначених featured падає в сітку. */
export const featuredPost = posts.find((post) => post.featured);
export const gridPosts = posts.filter((post) => post !== featuredPost);
