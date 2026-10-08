"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Gauge } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { APPROACH } from "@/content/approach";
import { T } from "@/content/copy";
import { ACCENT } from "@/lib/accents";
import { useL } from "@/lib/i18n";
import { useSheen } from "@/lib/sheen";

function SpeedBar({
  label,
  value,
  width,
  tone,
  delay,
}: {
  label: string;
  value: string;
  width: string;
  tone: string;
  delay: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div>
      <div className="flex items-baseline justify-between text-[12.5px]">
        <span className="text-fg-subtle">{label}</span>
        <span className="font-semibold tabular-nums text-fg">{value}</span>
      </div>
      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-black/8 dark:bg-white/10">
        <motion.div
          className={`h-full rounded-full ${tone}`}
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? { width } : undefined}
        />
      </div>
    </div>
  );
}

export function Approach() {
  const t = useL();
  const sheen = useSheen();

  return (
    <section id="approach" className="relative py-20 safe-x sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Gauge}
          eyebrow={t(T.speedEyebrow)}
          title={t(T.speedTitle)}
          text={t(T.speedText)}
        />

        <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <div {...sheen} className="flex h-full flex-col justify-between rounded-[26px] glass sheen lift p-7">
              <div>
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
                  {t(T.timelineTitle)}
                </span>
                <p className="mt-4 bg-gradient-to-r from-[#3b63ea] to-[#1aa9a0] bg-clip-text text-[3.6rem] font-semibold leading-none tracking-tight text-transparent dark:from-[#7c9bff] dark:to-[#4fd8c9]">
                  4×
                </p>
                <div className="mt-7 space-y-5">
                  <SpeedBar
                    label={t(T.timelineLegacy)}
                    value={t(T.timelineLegacyValue)}
                    width="100%"
                    tone="bg-black/25 dark:bg-white/30"
                    delay={0.1}
                  />
                  <SpeedBar
                    label={t(T.timelineMine)}
                    value={t(T.timelineMineValue)}
                    width="25%"
                    tone="bg-gradient-to-r from-[#4f7bff] to-[#1aa9a0]"
                    delay={0.3}
                  />
                </div>
              </div>
              <p className="mt-7 text-[12.5px] leading-relaxed text-fg-subtle">{t(T.timelineNote)}</p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {APPROACH.map((item, i) => {
              const a = ACCENT[item.accent];
              const Icon = item.icon;
              return (
                <Reveal key={item.title.en} delay={0.05 * i}>
                  <div {...sheen} className="h-full rounded-[26px] glass sheen lift p-6 sm:p-7">
                    <span className="inline-grid size-11 place-items-center rounded-[14px] glass-chip">
                      <Icon className={`size-5 ${a.text}`} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-[1.15rem] leading-tight text-fg">{t(item.title)}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-fg-muted">
                      {t(item.text)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
