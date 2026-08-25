#!/usr/bin/env node
// Генерує іконки з наборів Iconify у статичні дані, щоб не тримати
// іконкові пакети в рантаймі й не малювати SVG руками.
//
//   npm run icons
//
// Щоб додати іконку — впиши її в GROUPS і перезапусти.
// Каталог назв: https://icon-sets.iconify.design/

import { writeFile } from "node:fs/promises";

import { icons as devicon } from "@iconify-json/devicon";
import { icons as logos } from "@iconify-json/logos";
import { getIconData, iconToSVG, replaceIDs } from "@iconify/utils";

const GROUPS = [
  {
    out: "src/components/icons/tech-data.ts",
    constName: "techIconData",
    typeName: "TechName",
    typeDoc: "Ключі — те, що пишемо в полі tech кейса",
    set: devicon,
    setName: "devicon",
    // ключ у даних → назва іконки в наборі
    icons: {
      Flutter: "flutter",
      Python: "python",
      "Vue.js": "vuejs",
      "Node.js": "nodejs",
      Postgres: "postgresql",
      Redis: "redis",
      "Socket.IO": "socketio",
      Firebase: "firebase",
      PyTorch: "pytorch",
    },
  },
  {
    out: "src/components/icons/store-data.ts",
    constName: "storeIconData",
    typeName: "StoreName",
    typeDoc: "Магазини застосунків",
    set: logos,
    setName: "logos",
    icons: { googlePlay: "google-play-icon" },
  },
];

for (const group of GROUPS) {
  const entries = Object.entries(group.icons).map(([key, iconName]) => {
    const data = getIconData(group.set, iconName);
    if (!data) throw new Error(`${group.setName}:${iconName} не знайдено`);
    const { body, attributes } = iconToSVG(data, { height: "auto" });
    // унікальні id, щоб градієнти різних іконок не перетиналися в DOM
    return [key, { viewBox: attributes.viewBox, body: replaceIDs(body, `${iconName}-`) }];
  });

  const file = `// ЗГЕНЕРОВАНО scripts/gen-icons.mjs — правити руками не треба.
// Джерело: набір Iconify «${group.setName}» (devDependency).

export const ${group.constName} = {
${entries
  .map(([key, { viewBox, body }]) => `  ${JSON.stringify(key)}: {
    viewBox: ${JSON.stringify(viewBox)},
    body: ${JSON.stringify(body)},
  },`)
  .join("\n")}
} as const;

/** ${group.typeDoc} */
export type ${group.typeName} = keyof typeof ${group.constName};
`;

  await writeFile(group.out, file);
  console.log(`${group.out}: ${entries.length} іконок`);
}
