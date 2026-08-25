import type { ComponentProps } from "react";

import InlineIcon from "@/components/icons/inline-icon";
import { techIconData, type TechName } from "@/components/icons/tech-data";

export type { TechName };

/** Кольорове лого технології з набору devicon. */
export default function TechIcon({
  name,
  ...props
}: ComponentProps<"svg"> & { name: TechName }) {
  return <InlineIcon icon={techIconData[name]} {...props} />;
}
