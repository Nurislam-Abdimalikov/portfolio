import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactLink({
  href,
  icon,
  title,
  subtitle,
  fill,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  /** Tinted square behind the icon. */
  fill: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-16 w-full min-w-0 items-center gap-3.5 rounded-[18px] glass-chip press px-4 transition-colors hover:bg-white/70 dark:hover:bg-white/[0.13]"
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-[12px] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.4)] ${fill}`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[14.5px] font-semibold text-fg">{title}</span>
        <span className="block text-[12.5px] text-fg-subtle">{subtitle}</span>
      </span>
      <ArrowUpRight className="size-[18px] shrink-0 text-fg-subtle" aria-hidden />
    </a>
  );
}
