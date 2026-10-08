"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";

const SPRING = { stiffness: 220, damping: 22, mass: 0.6 };

/**
 * Real App Store screenshots — they already carry their own status bar and
 * Dynamic Island, so nothing is overlaid on top of them.
 *
 * The device tilts toward the cursor. Transform lives on the phone, never on
 * a glass ancestor, so no `backdrop-filter` is disturbed.
 */
export function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  const reduce = useReducedMotion();

  // −0.5…0.5 relative to the centre of the device.
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-13, 13]), SPRING);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), SPRING);
  const glare = useTransform(px, [-0.5, 0, 0.5], [0.55, 0.12, 0.55]);

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="relative mx-auto w-[214px] shrink-0 sm:w-[238px]"
      style={{ perspective: 1100 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="rounded-[2.9rem] bg-gradient-to-b from-white/70 via-white/25 to-white/50 p-[3px] shadow-[0_26px_60px_rgb(20_24_60/0.28)] dark:from-white/25 dark:via-white/8 dark:to-white/15"
      >
        <div className="relative overflow-hidden rounded-[2.75rem] ring-1 ring-black/10">
          <div className="relative aspect-[9/19.5] w-full select-none">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 640px) 238px, 214px"
              className="object-cover"
            />
            {/* Glare that rides across the screen as the device turns. */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent"
              style={{ opacity: glare }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
