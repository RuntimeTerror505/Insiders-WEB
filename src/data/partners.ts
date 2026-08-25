export type Partner = {
  name: string;
  /** Лого з public/. Поки файлу нема — у смузі рендериться назва. */
  logo?: { src: string; width: number; height: number };
};

export const partners: Partner[] = [
  { name: "Flutter", logo: { src: "/logos/flutter.webp", width: 532, height: 152 } },
  { name: "Fastly", logo: { src: "/logos/fastly.webp", width: 392, height: 152 } },
  { name: "Firebase", logo: { src: "/logos/firebase.webp", width: 540, height: 152 } },
  { name: "Python", logo: { src: "/logos/python.webp", width: 624, height: 152 } },
  { name: "Vue.js", logo: { src: "/logos/vue.webp", width: 432, height: 152 } },
  { name: "Docker", logo: { src: "/logos/docker.webp", width: 540, height: 152 } },
  { name: "AWS", logo: { src: "/logos/aws.webp", width: 256, height: 152 } },
  { name: "Stripe", logo: { src: "/logos/stripe.webp", width: 364, height: 152 } },
  { name: "CloudWatch", logo: { src: "/logos/cloudwatch.webp", width: 712, height: 152 } },
];
