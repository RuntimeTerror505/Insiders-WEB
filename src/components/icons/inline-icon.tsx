import type { ComponentProps } from "react";

/**
 * Малює іконку з даних, згенерованих scripts/gen-icons.mjs. Розмітка —
 * статичний рядок із пакета Iconify у devDependencies, тож вставляти її
 * як HTML безпечно.
 */
export default function InlineIcon({
  icon,
  ...props
}: ComponentProps<"svg"> & { icon: { viewBox: string; body: string } }) {
  return (
    <svg
      viewBox={icon.viewBox}
      aria-hidden
      focusable="false"
      {...props}
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}
