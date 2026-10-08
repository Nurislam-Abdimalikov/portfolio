"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ label }: { label: string }) {
  const { theme, toggleFrom } = useTheme();

  return (
    <button
      type="button"
      onClick={(e) => toggleFrom(e.clientX, e.clientY)}
      aria-label={label}
      aria-pressed={theme === "dark"}
      className="grid size-11 place-items-center rounded-full glass-chip press text-fg-muted transition-colors hover:text-fg"
    >
      {theme === "dark" ? (
        <Moon className="size-[18px]" aria-hidden />
      ) : (
        <Sun className="size-[18px]" aria-hidden />
      )}
    </button>
  );
}
