import type { ComponentProps, ComponentType } from "react";
import {
  Heart,
  Megaphone,
  ShoppingBag,
  ShoppingCart,
  Truck,
  Wallet,
} from "lucide-react";

export type Industry = {
  id: string;
  title: string;
  items: string[];
  href: string;
  icon: ComponentType<ComponentProps<"svg">>;
};

// TODO: мок-дані з макета. Замінити на реальний перелік індустрій.
export const industries: Industry[] = [
  {
    id: "e-commerce",
    title: "E-Commerce",
    icon: ShoppingCart,
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
    icon: Heart,
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
    icon: ShoppingBag,
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
    icon: Wallet,
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
    icon: Megaphone,
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
    icon: Truck,
    href: "/industries/logistics",
    items: [
      "Delivery Management",
      "Shipping Logistics Management",
      "Inventory Management",
      "Telematics Software Development",
    ],
  },
];
