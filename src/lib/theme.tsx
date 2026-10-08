"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const THEME_KEY = "portfolio-theme";

/*
 * Same shape as the language store: light is the server snapshot, so the
 * markup hydrates identically every time and React swaps in a stored
 * preference on its own — no setState-in-effect, no hydration mismatch.
 */
export const themeStore = {
  listeners: new Set<() => void>(),

  subscribe(onChange: () => void) {
    themeStore.listeners.add(onChange);
    window.addEventListener("storage", onChange);
    return () => {
      themeStore.listeners.delete(onChange);
      window.removeEventListener("storage", onChange);
    };
  },

  getSnapshot(): Theme {
    try {
      return window.localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
    } catch {
      // Storage blocked (private mode) — light stays.
      return "light";
    }
  },

  getServerSnapshot(): Theme {
    return "light";
  },

  set(theme: Theme) {
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore: the toggle still works for this session.
    }
    /*
     * Paint the attribute here rather than in an effect. A View Transition
     * snapshots the DOM inside its callback, so the change has to land
     * synchronously or the reveal animates between two identical frames.
     */
    document.documentElement.dataset.theme = theme;
    for (const notify of themeStore.listeners) notify();
  },
};

/** Reads the theme and keeps `<html data-theme>` in sync with it. */
export function useTheme() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  /**
   * Flips the theme behind a circular reveal centred on the click.
   * Falls back to an instant swap without View Transitions or when the
   * visitor asked for reduced motion.
   */
  const toggleFrom = useCallback((x: number, y: number) => {
    const next: Theme = themeStore.getSnapshot() === "dark" ? "light" : "dark";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !document.startViewTransition) {
      themeStore.set(next);
      return;
    }

    const transition = document.startViewTransition(() => {
      themeStore.set(next);
    });

    // Radius out to the furthest corner, so the circle always clears the page.
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
        },
        {
          duration: 620,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, []);

  return { theme, toggleFrom };
}
