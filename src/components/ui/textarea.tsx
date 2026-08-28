import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Багаторядкове поле з того ж UI Kit (нода 153:1712, Type=Text).
 * Падінги в макеті несиметричні: 12 зверху, 16 зліва, 8 справа, 4 знизу —
 * низ лишений під лічильник символів, який кладуть поверх поля.
 */
function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input bg-background placeholder:text-placeholder not-focus-visible:hover:border-field-hover not-focus-visible:hover:placeholder:text-placeholder-hover focus-visible:border-field-focus focus-visible:placeholder:text-foreground w-full resize-none rounded-[8px] border pt-3 pr-2 pb-1 pl-4 text-sm leading-6 transition-colors outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
