"use client";

import { Boxes } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/content/copy";
import { SKILLS } from "@/content/skills";
import { ACCENT } from "@/lib/accents";
import { useL } from "@/lib/i18n";
import { useSheen } from "@/lib/sheen";

export function Skills() {
  const t = useL();
  const sheen = useSheen();

  return (
    <section id="skills" className="relative py-20 safe-x sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Boxes}
          eyebrow={t(T.skillsEyebrow)}
          title={t(T.skillsTitle)}
          text={t(T.skillsText)}
        />

        {/* One column on phones, two on tablets, asymmetric 6-col on desktop. */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6">
          {SKILLS.map((group, i) => {
            const a = ACCENT[group.accent];
            const Icon = group.icon;
            return (
              <Reveal key={group.id} delay={i * 0.05} className={group.span}>
                <div {...sheen} className="flex h-full flex-col overflow-hidden rounded-[26px] glass sheen lift">
                  <span aria-hidden className={`block h-1 w-full ${a.bar}`} />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="inline-grid size-11 place-items-center rounded-[14px] glass-chip">
                      <Icon className={`size-5 ${a.text}`} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-[1.3rem] text-fg">{t(group.title)}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-fg-muted">
                      {t(group.text)}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
