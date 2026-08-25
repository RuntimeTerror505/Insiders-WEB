"use client";

import { useRef } from "react";
import type { ComponentProps, PointerEvent } from "react";

import { cn } from "@/lib/utils";

const MAX_TILT = 7;

export default function TiltCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    element.style.setProperty("--tilt-x", `${(0.5 - y) * MAX_TILT}deg`);
    element.style.setProperty("--tilt-y", `${(x - 0.5) * MAX_TILT}deg`);
  };

  const handlePointerLeave = () => {
    const element = ref.current;
    if (!element) return;

    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "transform-[perspective(900px)_rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))] transform-3d transition-transform duration-300 ease-out motion-reduce:transform-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
