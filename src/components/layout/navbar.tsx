"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LangSwitch } from "@/components/ui/lang-switch";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV } from "@/content/nav";
import { T } from "@/content/copy";
import { langStore, useL, useLang } from "@/lib/i18n";

export function Navbar() {
  const t = useL();
  const lang = useLang();
  const [open, setOpen] = useState(false);

  /*
   * Freeze the page behind the mobile sheet. The lock goes on <html>, not
   * <body>: html owns the viewport's overflow (see globals.css), so locking
   * body would leave the document happily scrolling behind the menu.
   */
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    // The sheet is `md:hidden`. Without this, widening past `md` while it is
    // open would hide the menu and strand the page in a locked state.
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onDesktop = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);

    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <>
      {/* Floating capsule toolbar, the way Tahoe docks its window chrome. */}
      <header className="fixed inset-x-0 top-0 z-50 safe-t safe-x pt-3">
        <div className="mx-auto flex h-[58px] max-w-6xl items-center justify-between rounded-full glass pl-4 pr-2">
          <a href="#top" className="flex items-center gap-2.5 py-2" aria-label="Nurislam Abdimalikov — home">
            <span className="grid size-[30px] shrink-0 place-items-center rounded-[9px] bg-gradient-to-br from-[#4f7bff] to-[#9b5cff] text-[11px] font-bold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.5),0_2px_6px_rgb(60_80_200/0.35)]">
              NA
            </span>
            <span className="hidden text-[14.5px] font-semibold tracking-tight text-fg sm:block">
              Nurislam Abdimalikov
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-fg-muted transition-colors hover:bg-white/50 hover:text-fg dark:hover:bg-white/10"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle label={t(T.toggleTheme)} />
            <LangSwitch lang={lang} onChange={langStore.set} />
            <a
              href="#contact"
              className="hidden min-h-10 items-center gap-1.5 rounded-full accent-fill shine press px-4 text-[13.5px] font-semibold sm:inline-flex"
            >
              {t(T.navCta)}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t(T.closeMenu) : t(T.menu)}
              className="grid size-11 place-items-center rounded-full glass-chip text-fg md:hidden"
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label={t(T.closeMenu)}
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-black/20 backdrop-blur-sm"
            />
            <motion.nav
              id="mobile-menu"
              initial={{ y: -14, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -10, scale: 0.98 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-[calc(env(safe-area-inset-top)+5.25rem)] overflow-hidden rounded-[26px] glass p-2"
            >
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center rounded-[18px] px-4 text-[16px] font-medium text-fg active:bg-white/50 dark:active:bg-white/10"
                >
                  {t(item.label)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 flex min-h-14 items-center justify-center gap-2 rounded-[18px] accent-fill px-4 text-[16px] font-semibold"
              >
                {t(T.navCta)}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
