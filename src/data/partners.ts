export type Partner = {
  name: string;
  /** SVG у public/logos. Поки файлу нема — у смузі рендериться назва. */
  logo?: string;
};

// TODO: додати SVG логотипів — у макеті це повні локапи (знак + вордмарк)
// у фірмових кольорах, монохромні іконки з components/icons/tech не підійдуть.
export const partners: Partner[] = [
  { name: "Flutter" },
  { name: "Fastly" },
  { name: "Firebase" },
  { name: "Python" },
  { name: "Vue.js" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "Stripe" },
  { name: "CloudWatch" },
];
