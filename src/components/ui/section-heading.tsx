import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full glass-chip px-3.5 py-1.5 text-[12px] font-semibold text-fg-muted">
          <Icon className="size-3.5" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-[2rem] leading-[1.08] text-fg sm:text-5xl">{title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-[16px] leading-relaxed text-fg-muted">{text}</p>
      </Reveal>
    </div>
  );
}
