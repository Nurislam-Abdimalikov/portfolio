import type { ReactNode } from "react";

/** Small label. Uses `glass-chip` (no blur) — dozens of these would be costly. */
export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full glass-chip px-3 py-1.5 text-[12px] font-medium text-fg-muted ${className}`}
    >
      {children}
    </span>
  );
}
