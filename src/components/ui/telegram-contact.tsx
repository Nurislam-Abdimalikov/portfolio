"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { TelegramMark } from "@/components/ui/brand-icons";
import { T } from "@/content/copy";
import { useL } from "@/lib/i18n";
import { LINKS } from "@/lib/links";

/*
 * Two separate controls rather than one: the wide link opens the Telegram
 * chat straight away, and the narrow button copies the handle for anyone who
 * would rather paste it elsewhere. A <button> cannot be nested inside an <a>,
 * so they sit side by side — both keep a 48px+ touch target.
 */
export function TelegramContact() {
  const t = useL();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(LINKS.telegramHandle);
    } catch {
      // Clipboard API unavailable (older iOS Safari, or an insecure origin).
      // The handle is readable on screen either way, so fail quietly.
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1900);
  }, []);

  return (
    <div className="flex items-stretch gap-2">
      <a
        href={LINKS.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-16 min-w-0 flex-1 items-center gap-3.5 rounded-[18px] glass-chip press px-4 transition-colors hover:bg-white/70 dark:hover:bg-white/[0.13]"
      >
        <span className="grid size-10 shrink-0 place-items-center rounded-[12px] bg-gradient-to-br from-[#4aa8f0] to-[#2b7fd4] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.4)]">
          <TelegramMark className="size-[18px]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14.5px] font-semibold text-fg">
            {LINKS.telegramHandle}
          </span>
          <span className="block text-[12.5px] text-fg-subtle">{t(T.telegramSub)}</span>
        </span>
        <ArrowUpRight className="size-[18px] shrink-0 text-fg-subtle" aria-hidden />
      </a>

      <button
        type="button"
        onClick={copy}
        aria-label={t(T.copyHandle)}
        className="grid w-14 shrink-0 place-items-center rounded-[18px] glass-chip press text-fg-muted transition-colors hover:bg-white/70 dark:hover:bg-white/[0.13]"
      >
        {copied ? (
          <Check className="size-5 text-[#16a34a] dark:text-[#5ff0a8]" aria-hidden />
        ) : (
          <Copy className="size-[18px]" aria-hidden />
        )}
        <span className="sr-only" aria-live="polite">
          {copied ? t(T.copied) : ""}
        </span>
      </button>
    </div>
  );
}
