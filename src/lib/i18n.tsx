"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "en" | "ru";

/** A piece of copy in every supported language. */
export type L = Record<Lang, string>;

const LANG_KEY = "portfolio-lang";

/*
 * The chosen language lives in localStorage rather than component state, so it
 * survives a reload and stays in sync across tabs. Reading it through
 * `useSyncExternalStore` keeps English as the server snapshot: the markup
 * hydrates as English every time and React swaps in a stored preference on its
 * own, with no setState-in-effect and no hydration mismatch.
 */
export const langStore = {
  listeners: new Set<() => void>(),

  subscribe(onChange: () => void) {
    langStore.listeners.add(onChange);
    window.addEventListener("storage", onChange);
    return () => {
      langStore.listeners.delete(onChange);
      window.removeEventListener("storage", onChange);
    };
  },

  getSnapshot(): Lang {
    try {
      return window.localStorage.getItem(LANG_KEY) === "ru" ? "ru" : "en";
    } catch {
      // Storage blocked (private mode) — English stays.
      return "en";
    }
  },

  getServerSnapshot(): Lang {
    return "en";
  },

  set(lang: Lang) {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Ignore: the switch still works for this session.
    }
    for (const notify of langStore.listeners) notify();
  },
};

const LangContext = createContext<Lang>("en");

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    langStore.subscribe,
    langStore.getSnapshot,
    langStore.getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext value={lang}>{children}</LangContext>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}

/** Returns a translator that picks the active language out of a localized string. */
export function useL() {
  const lang = useLang();
  return useCallback((value: L) => value[lang], [lang]);
}
