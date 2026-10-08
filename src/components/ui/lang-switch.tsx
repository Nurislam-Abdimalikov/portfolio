"use client";

import type { Lang } from "@/lib/i18n";

/** Segmented control: the active segment lifts out of the glass. */
export function LangSwitch({
  lang,
  onChange,
  className = "",
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label="Language"
      className={`flex items-center gap-0.5 rounded-full glass-chip p-0.5 ${className}`}
    >
      {(["en", "ru"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            aria-pressed={active}
            className={`min-h-11 min-w-10 rounded-full px-2.5 text-[12px] font-semibold uppercase tracking-wide transition-colors ${
              active
                ? "bg-white/75 text-fg shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_1px_3px_rgb(20_24_60/0.1)] dark:bg-white/15"
                : "text-fg-subtle hover:text-fg"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
