import { Apple } from "lucide-react";

export function AppStoreBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full glass-chip px-3 py-1.5 text-[11px] font-semibold text-fg">
      <Apple className="size-3.5" aria-hidden />
      {label}
    </span>
  );
}
