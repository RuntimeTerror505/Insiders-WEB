export type Industry = {
  id: string;
  title: string;
  items: string[];
  href: string;
  /** Іконка з макета, експортована в avif: біла на прозорому, 64×64. */
  icon: string;
};

// TODO: мок-дані з макета. Замінити на реальний перелік індустрій.
export const industries: Industry[] = [
  {
    id: "e-commerce",
    title: "E-Commerce",
    icon: "/home/icons/shopping-cart-2.avif",
    href: "/industries/e-commerce",
    items: [
      "E-commerce Store Development",
      "End to End Marketplace",
      "AR Based Solutions",
      "Shipping and Fulfillment Solutions",
      "ChatGPT Integration",
    ],
  },
  {
    id: "healthcare",
    title: "HealthCare",
    icon: "/home/icons/heart.avif",
    href: "/industries/healthcare",
    items: [
      "Telemedicine Solutions",
      "Electronic Health Records (EHR)",
      "Custom Practice Management Systems",
      "Medical Device Integrations",
      "ChatGPT Integration",
    ],
  },
  {
    id: "retail",
    title: "Retail",
    icon: "/home/icons/shopping-bag-4.avif",
    href: "/industries/retail",
    items: [
      "Custom In-Store Navigation Solutions",
      "POS (Point Of Sale) Apps",
      "Loyalty Program Apps",
      "Personalized Shopping Apps",
    ],
  },
  {
    id: "fintech",
    title: "FinTech",
    icon: "/home/icons/wallet.avif",
    href: "/industries/fintech",
    items: [
      "Digital Payment Systems",
      "Custom Digital Banking",
      "Wealth/Finance Management Solutions",
      "Insurance App Development",
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    icon: "/home/icons/megaphone.avif",
    href: "/industries/social-media",
    items: [
      "Community App Development",
      "Dating & Matrimony App Development",
      "Messaging App Development",
      "Media Sharing App Development",
      "ChatGPT Integration",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    icon: "/home/icons/truck.avif",
    href: "/industries/logistics",
    items: [
      "Delivery Management",
      "Shipping Logistics Management",
      "Inventory Management",
      "Telematics Software Development",
    ],
  },
];
