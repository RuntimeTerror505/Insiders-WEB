import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div"> & {
  width?: "page" | "wide";
};

export default function Container({
  width = "page",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        width === "wide" ? "max-w-wide" : "max-w-page",
        className
      )}
      {...props}
    />
  );
}
