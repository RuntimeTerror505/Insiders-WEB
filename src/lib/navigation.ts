export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/**
 * Головна навігація. Єдине джерело правди для десктопного меню,
 * мобільного драверу і футера. Коли додамо i18n — тут labels
 * заміняться на ключі перекладу, структура лишиться та сама.
 */
export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Product Development", href: "/services/product-development" },
      { label: "Outstaffing", href: "/services/outstaffing" },
      { label: "ChatGPT Integration", href: "/services/chatgpt-integration" },
      { label: "AI Development", href: "/services/ai-development" },
      { label: "AI Plan For Your App", href: "/services/ai-plan" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Cases", href: "/cases" },
  { label: "Jobs", href: "/jobs" },
  { label: "Blog", href: "/blog" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "E-commerce Development", href: "/industries/e-commerce" },
      { label: "Healthcare Development", href: "/industries/healthcare" },
      { label: "Fintech Development", href: "/industries/fintech" },
      { label: "Retail Development", href: "/industries/retail" },
    ],
  },
];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * CTA у хедері (кнопка «AI Plan» у макеті «New Insiders»).
 */
export const headerCta = {
  label: "AI Plan",
  href: "/services/ai-plan",
} as const;
