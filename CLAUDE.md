@AGENTS.md

# Конвенції проєкту

## Імпорти з React

Імпортуй усе з `react` іменовано. Простір імен `React.*` не використовуємо —
ні для хуків, ні для типів.

```tsx
// ✅
import { useEffect, useRef, useState } from "react";
import type { ComponentProps, CSSProperties } from "react";

const ref = useRef<HTMLDivElement>(null);
type IconProps = ComponentProps<"svg">;

// ❌
import * as React from "react";

const ref = React.useRef<HTMLDivElement>(null);
type IconProps = React.ComponentProps<"svg">;
```

Правило однакове для хуків (`useState`, `useEffect`, `useCallback`, `useMemo`,
`useRef`, `useContext`, `createContext`) і для типів (`ComponentProps`,
`ComponentType`, `CSSProperties`, `KeyboardEvent`, `ReactNode`).

Окремо про типи: `React.ComponentProps` компілюється **без жодного імпорту**,
бо `@types/react` оголошує глобальний простір імен `React`. Через це такі
випадки не ловляться ні `tsc`, ні лінтером — імпортуй тип явно.

Компоненти з shadcn (`npx shadcn add …`) приходять із `import * as React from
"react"` — переписуй одразу після додавання.

## Структура секцій

```
src/components/sections/
  home/                 # секції лише головної
    hero/               # тека на секцію: споріднені файли поруч
      hero-section.tsx
      hero-rings.tsx
    testimonials/
      testimonials-section.tsx
      testimonials-row.tsx
      testimonial-card.tsx
    cases/
      cases-section.tsx
      case-row.tsx
    …
  shared/               # секції, які рендерить більше ніж одна сторінка
```

Нова сторінка — нова тека поруч із `home/`. Секція з кількох файлів отримує
власну підтеку; секція з одного файла — теж, щоб рівень вкладеності був
однаковий і не доводилось вирішувати щоразу.

Усередині групи імпортуємо відносно (`./case-row`) — саме заради цього файли
й лежать разом. Ззовні — повним шляхом від `@/components/sections/`.

Переносимо в `shared/` лише за фактом: коли секцію почала рендерити друга
сторінка, а не «бо колись знадобиться».

Каркас (`components/layout`), примітиви (`components/ui`), іконки, `data/`
і `lib/` за сторінками не розкладаємо.
