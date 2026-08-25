import type { ComponentProps, ComponentType } from "react";
import {
  AppWindow,
  Brain,
  ChartNoAxesColumnIncreasing,
  Palette,
  Smartphone,
  TabletSmartphone,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<ComponentProps<"svg">>;
};

// TODO: мок-дані. Замінити на реальний перелік послуг
export const services: Service[] = [
  {
    id: "ecommerce",
    title: "E-commerce App Development",
    description: "Drive sales and increase ER with our 5+ years of expertise.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    id: "cross-platform",
    title: "Cross-Platform App Development",
    description: "Reach a wider audience from iOS and Android to web and desktop.",
    icon: AppWindow,
  },
  {
    id: "android",
    title: "Android App Development",
    description: "Craft high-performance Android apps that captivate users and drive results.",
    icon: TabletSmartphone,
  },
  {
    id: "ios",
    title: "iOS App Development",
    description: "Reach the thriving iOS user base and elevate your business.",
    icon: Smartphone,
  },
  {
    id: "design",
    title: "UX/UI Design",
    description: "Increase user engagement with catchy design products.",
    icon: Palette,
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Bring your business to the next level with data-driven decisions.",
    icon: Brain,
  },
];
