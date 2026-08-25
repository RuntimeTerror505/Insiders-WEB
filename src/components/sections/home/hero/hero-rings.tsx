"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Кільця з макета: набір злегка деформованих кіл, кожне обертається
 * зі своєю швидкістю, а сама деформація повільно «дихає». Малюємо на
 * canvas — це десятки тисяч сегментів на кадр, для SVG-анімації забагато.
 */

const TAU = Math.PI * 2;

/** Брендові кольори штрихів, RGB — canvas не читає CSS-змінні теми. */
const STROKE_COLORS: readonly (readonly [number, number, number])[] = [
  [229, 53, 203], // brand-500
  [198, 3, 178], // brand-600
  [168, 5, 153], // brand-gradient-start
  [142, 2, 128], // brand-700
  [100, 2, 90], // brand-800
  [66, 2, 60], // brand-gradient-end
  [243, 164, 232], // brand-300
];

const RING_COUNT = 16;
/** Точок на кільце — при менших значеннях на великих екранах видно грані. */
const SEGMENTS = 260;

type Harmonic = { k: number; amp: number; phase: number; speed: number };

type Ring = {
  radius: number;
  rotation: number;
  width: number;
  alpha: number;
  color: readonly [number, number, number];
  harmonics: Harmonic[];
};

/** Детермінований PRNG — кільця мають виглядати однаково між рендерами. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createRings(): Ring[] {
  const random = mulberry32(20260820);
  return Array.from({ length: RING_COUNT }, (_, i) => {
    return {
      // Максимум радіуса з урахуванням гармонік ≈ 0.98 — кільця не ріжуться
      // об край canvas у жодній фазі.
      radius: 0.64 + random() * 0.16,
      // Половина кілець обертається у зворотний бік — так лінії перетинаються.
      rotation: (0.05 + random() * 0.13) * (random() < 0.5 ? -1 : 1),
      width: 1 + random() * 1.4,
      // Різна прозорість дає відчуття глибини, як на макеті.
      alpha: 0.16 + random() * 0.5,
      color: STROKE_COLORS[i % STROKE_COLORS.length],
      harmonics: Array.from({ length: 3 }, () => ({
        // 2–5 хвиль по колу: менше — це овал, більше — «зірка».
        k: 2 + Math.floor(random() * 4),
        amp: 0.018 + random() * 0.055,
        phase: random() * TAU,
        speed: (0.08 + random() * 0.22) * (random() < 0.5 ? -1 : 1),
      })),
    };
  });
}

export default function HeroRings({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rings = createRings();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    const draw = (time: number) => {
      const t = time / 1000;
      const cx = width / 2;
      const cy = height / 2;
      const unit = Math.min(width, height) / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (const ring of rings) {
        const spin = ring.rotation * t;

        ctx.beginPath();
        for (let i = 0; i <= SEGMENTS; i++) {
          const theta = (i / SEGMENTS) * TAU;

          let scale = 1;
          for (const h of ring.harmonics) {
            scale += h.amp * Math.sin(h.k * theta + h.phase + h.speed * t);
          }

          const r = ring.radius * unit * scale;
          const angle = theta + spin;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        const [r, g, b] = ring.color;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${ring.alpha})`;
        ctx.lineWidth = ring.width;
        ctx.stroke();
      }
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (frame || reduceMotion) return;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Після зміни розміру буфер порожній — перемальовуємо одразу,
      // інакше при reduce-motion кадр більше ніколи не з'явиться.
      draw(reduceMotion ? 0 : performance.now());
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Поза екраном анімація не потрібна — не гріємо CPU на довгій сторінці.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    intersectionObserver.observe(canvas);

    resize();
    if (visible) start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("block h-full w-full", className)}
    />
  );
}
