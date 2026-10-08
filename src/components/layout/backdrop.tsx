"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * The wallpaper the glass refracts, plus a grain pass so the large gradients
 * never band.
 *
 * It drifts slightly against the scroll, which keeps the colour behind every
 * panel changing — the glass has something new to refract the whole way down.
 */
export function Backdrop() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, -140]);
  const scale = useTransform(scrollY, [0, 3000], [1, 1.12]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          y: reduce ? 0 : y,
          scale: reduce ? 1 : scale,
          opacity: "var(--wall-alpha)",
          background: `
            radial-gradient(55% 45% at 18% 18%, var(--wall-1) 0%, transparent 62%),
            radial-gradient(45% 38% at 82% 8%,  var(--wall-2) 0%, transparent 62%),
            radial-gradient(55% 55% at 72% 78%, var(--wall-3) 0%, transparent 62%),
            radial-gradient(45% 45% at 8% 88%,  var(--wall-4) 0%, transparent 62%),
            var(--wall-base)`,
        }}
        /* Oversized so the drift never exposes an edge. */
        className="pointer-events-none fixed -inset-y-32 inset-x-0 -z-20"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          opacity: "var(--grain-opacity)",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}
