export type Client = {
  name: string;
  /** Лого з public/about/trusted. Без файлу в картці лишається назва */
  logo?: string;
};

// Секція «Trusted By Great Companies» на сторінці About.
export const clients: Client[] = [
  { name: "Coca-Cola", logo: "/about/trusted/coca-cola.webp" },
  { name: "Samsung", logo: "/about/trusted/samsung.webp" },
  { name: "Knauf", logo: "/about/trusted/knauf.webp" },
  { name: "Sony", logo: "/about/trusted/sony.webp" },
  { name: "HP", logo: "/about/trusted/hp.webp" },
  { name: "Philips", logo: "/about/trusted/philips.webp" },
];
