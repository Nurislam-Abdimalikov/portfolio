"use client";

import { Apple, ArrowUpRight, Check, Globe } from "lucide-react";
import { PhoneMockup } from "@/components/phone/phone-mockup";
import { AppStoreBadge } from "@/components/ui/app-store-badge";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { T } from "@/content/copy";
import { PROJECTS, type Project } from "@/content/projects";
import { ACCENT } from "@/lib/accents";
import { useL } from "@/lib/i18n";
import { useSheen } from "@/lib/sheen";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useL();
  const a = ACCENT[project.accent];
  const sheen = useSheen();
  // Alternate which side the phone sits on, from the `lg` breakpoint up.
  const flipped = index % 2 === 1;

  return (
    <Reveal>
      <article {...sheen} className="overflow-hidden rounded-[30px] glass sheen lift">
        <span aria-hidden className={`block h-1 w-full ${a.bar}`} />

        <div className="grid gap-9 p-6 sm:p-9 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-11">
          <div className={flipped ? "lg:order-2" : ""}>
            <PhoneMockup src={project.shot} alt={t(project.shotAlt)} />
          </div>

          <div className={`min-w-0 ${flipped ? "lg:order-1" : ""}`}>
            <Chip className={`font-semibold ${a.text}`}>
              <span className={`size-1.5 rounded-full ${a.dot}`} />
              {t(project.badge)}
            </Chip>

            <h3 className="mt-4 text-[1.9rem] leading-none text-fg sm:text-[2.4rem]">
              {project.name}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <AppStoreBadge label={t(T.appStore)} />
              <span className="text-[12.5px] text-fg-subtle">{t(project.meta)}</span>
            </div>

            <p className="mt-5 text-[15.5px] leading-relaxed text-fg-muted">{t(project.summary)}</p>

            <h4 className="mt-7 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
              {t(T.highlights)}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature.en} className="flex gap-2.5 text-[14.5px] text-fg-muted">
                  <Check className={`mt-0.5 size-[17px] shrink-0 ${a.text}`} aria-hidden />
                  <span>{t(feature)}</span>
                </li>
              ))}
            </ul>

            <h4 className="mt-7 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
              {t(T.stack)}
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>

            {/* Wraps to one button per line on narrow phones. */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full accent-fill shine press px-5 text-[14px] font-semibold"
              >
                <Apple className="size-4" aria-hidden />
                {t(T.viewOnAppStore)}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>

              {project.website && (
                <a
                  href={project.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full glass-chip press px-5 text-[14px] font-semibold text-fg transition-colors hover:bg-white/70 dark:hover:bg-white/[0.13]"
                >
                  <Globe className="size-4" aria-hidden />
                  {t(T.visitWebsite)}
                  <span className="text-fg-subtle">{project.website.label}</span>
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const t = useL();

  return (
    <section id="work" className="relative py-20 safe-x sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Apple}
          eyebrow={t(T.workEyebrow)}
          title={t(T.workTitle)}
          text={t(T.workText)}
        />
        <div className="mt-12 space-y-5 sm:mt-16">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
