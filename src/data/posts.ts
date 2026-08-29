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
  author?: { name: string; avatar?: string };
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

// TODO: мок-дані. Замінити на реальні статті (згодом — MDX через lib/content.ts)
export const posts: Post[] = [
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
    author: { name: "Insiders Team", avatar: "/blog/authors/insiders.avif" },
  },
  {
    slug: "most-reviewed-software-developers",
    category: "Popular",
    title:
      "The Manifest Hails Insiders as one of the Most Reviewed Software Developers in Lviv",
    excerpt: [
      "It's time to celebrate with us! The Manifest, the go-to platform for business insights and growth strategies, has just crowned Insiders as one of the most-reviewed software developers in the city.",
    ],
    date: "2026-06-06",
    readingTime: "5 min",
    image: "/blog/most-reviewed-software-developers.avif",
    author: { name: "Kateryna Bondar", avatar: "/blog/authors/kateryna.avif" },
  },
  {
    slug: "cross-platform-mobile-app-development-2026",
    category: "App Development Guides",
    title: "The Complete Guide to Cross-Platform Mobile App Development in 2026",
    date: "2026-04-30",
    readingTime: "12 min",
    image: "/blog/cross-platform-mobile-app-development-2026.webp",
  },
  {
    slug: "choosing-a-mobile-app-programming-company-2026",
    category: "App Development Guides",
    title: "Your Ultimate Guide to Choosing a Mobile App Programming Company in 2026",
    date: "2026-04-29",
    readingTime: "10 min",
    image: "/blog/choosing-a-mobile-app-programming-company-2026.webp",
  },
  {
    slug: "mobile-app-development-tools-2026",
    category: "App Development Trends",
    title: "The Complete Guide to Mobile App Development Tools in 2026",
    date: "2026-04-23",
    readingTime: "11 min",
    image: "/blog/mobile-app-development-tools-2026.avif",
  },
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
    slug: "chatgpt-integration-for-apps",
    category: "AI and ChatGPT Integration",
    title: "How to Integrate ChatGPT Into Your Product Without Burning the Budget",
    date: "2026-04-23",
    readingTime: "9 min",
    image: "/blog/chatgpt-integration-for-apps.avif",
  },
  {
    slug: "ecommerce-app-checklist",
    category: "E-Commerce Insights",
    title: "The E-Commerce App Checklist: What to Ship Before Your First Sale",
    date: "2026-04-23",
    readingTime: "8 min",
    image: "/blog/ecommerce-app-checklist.avif",
  },
  {
    slug: "first-flutter-app-2026",
    category: "App Development Guides",
    title: "Creating Your First Flutter App: The Ultimate Guide for 2026",
    date: "2026-04-23",
    readingTime: "13 min",
    image: "/blog/first-flutter-app-2026.avif",
  },
  {
    slug: "flutter-ios-development-2026",
    category: "App Development Trends",
    title: "The Complete Guide to Flutter iOS Development in 2026",
    date: "2026-04-23",
    readingTime: "10 min",
    image: "/blog/flutter-ios-development-2026.avif",
  },
  {
    slug: "choosing-the-best-app-developers-2026",
    category: "Popular",
    title: "Choosing the Best App Developers: A Comprehensive Guide for 2026",
    date: "2026-04-13",
    readingTime: "9 min",
    image: "/blog/choosing-the-best-app-developers-2026.avif",
  },
];

/** У макеті великий блок один — решта позначених featured падає в сітку. */
export const featuredPost = posts.find((post) => post.featured);
export const gridPosts = posts.filter((post) => post !== featuredPost);
