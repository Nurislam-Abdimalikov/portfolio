"use client";

import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

/**
 * Feeds the cursor position into `--mx` / `--my` for the `sheen` utility.
 *
 * Writes are batched into one animation frame, and touch pointers are ignored
 * so a tap never leaves a highlight frozen on the panel.
 */
export function useSheen() {
  const frame = useRef(0);

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    // Read these now: React clears `currentTarget` once the handler returns.
    const el = event.currentTarget;
    const { clientX, clientY } = event;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  }, []);

  return { onPointerMove };
}
