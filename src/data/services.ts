export type Service = {
  id: string;
  title: string;
  description: string;
  /** Іконка з макета, експортована в avif: біла на прозорому, 64×64. */
  icon: string;
};

// TODO: мок-дані. Замінити на реальний перелік послуг
export const services: Service[] = [
  {
    id: "ecommerce",
    title: "E-commerce App Development",
    description: "Drive sales and increase ER with our 5+ years of expertise.",
    icon: "/home/icons/bar-chart.avif",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform App Development",
    description: "Reach a wider audience from iOS and Android to web and desktop.",
    icon: "/home/icons/terminal-window.avif",
  },
  {
    id: "android",
    title: "Android App Development",
    description: "Craft high-performance Android apps that captivate users and drive results.",
    icon: "/home/icons/smartphone.avif",
  },
  {
    id: "ios",
    title: "iOS App Development",
    description: "Reach the thriving iOS user base and elevate your business.",
    icon: "/home/icons/smartphone.avif",
  },
  {
    id: "design",
    title: "UX/UI Design",
    description: "Increase user engagement with catchy design products.",
    icon: "/home/icons/palette.avif",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Bring your business to the next level with data-driven decisions.",
    icon: "/home/icons/brain.avif",
  },
];
