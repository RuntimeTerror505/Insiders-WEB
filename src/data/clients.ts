export type Client = {
  name: string;
  /** Лого з public/about/trusted. Без файлу в картці лишається назва */
  logo?: string;
};

// Секція «Trusted By Great Companies» на сторінці About.
export const clients: Client[] = [
  { name: "Coca-Cola", logo: "/about/trusted/coca-cola.avif" },
  { name: "Samsung", logo: "/about/trusted/samsung.avif" },
  { name: "Knauf", logo: "/about/trusted/knauf.avif" },
  { name: "Sony", logo: "/about/trusted/sony.avif" },
  { name: "HP", logo: "/about/trusted/hp.avif" },
  { name: "Philips", logo: "/about/trusted/philips.avif" },
];
