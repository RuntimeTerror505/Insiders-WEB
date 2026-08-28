import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Поле вводу з UI Kit «New Insiders» (нода 153:1712): 48px висота,
 * текст 14/24, бордер міняється на ховері й у фокусі.
 *
 * Радіус 8px стоїть числом — шкала радіусів побудована від 12px кнопок
 * і найближчий крок (--radius-sm) дає 7.2px.
 *
 * Ховер описаний як «не у фокусі»: Tailwind сортує focus-* після hover,
 * але покладатися на цей порядок крихко, а фокус тут головний стан.
 *
 * Праворуч у макеті 24px падінгу, ліворуч 16px. Коли в поле кладуть
 * іконку, місце під неї додає викликач через `pl-12`.
 */
function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      className={cn(
        "border-input bg-background placeholder:text-placeholder not-focus-visible:hover:border-field-hover not-focus-visible:hover:border-field-hover not-focus-visible:hover:placeholder:text-placeholder-hover focus-visible:border-field-focus focus-visible:placeholder:text-foreground h-12 w-full rounded-[8px] border py-3 pr-6 pl-4 text-sm leading-6 transition-colors outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
