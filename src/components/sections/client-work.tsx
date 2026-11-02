"use client";

import { ArrowUpRight, Check, Globe, Quote } from "lucide-react";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CLIENT_PROJECTS, type ClientProject } from "@/content/client-work";
import { T } from "@/content/copy";
import { useL, useLang } from "@/lib/i18n";
import { useSheen } from "@/lib/sheen";

function ClientCard({ project }: { project: ClientProject }) {
  const t = useL();
  const lang = useLang();
  const sheen = useSheen();
  const review = project.testimonial;

  return (
    <Reveal>
      <article {...sheen} className="overflow-hidden rounded-[30px] glass sheen lift">
        <span aria-hidden className="block h-1 w-full bg-gradient-to-r from-[#34d399] to-[#0f766e]" />

        <div className="grid gap-9 p-6 sm:p-9 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-11">
          <BrowserFrame src={project.shot} alt={t(project.shotAlt)} url={project.urlLabel} />

          <div className="min-w-0">
            <Chip className="font-semibold text-[#0f766e] dark:text-[#5eead4]">
              <span className="size-1.5 rounded-full bg-[#10b981]" />
              {t(project.badge)}
            </Chip>

            <h3 className="mt-4 text-[1.9rem] leading-none text-fg sm:text-[2.4rem]">
              {t(project.name)}
            </h3>
            <p className="mt-3 text-[13px] font-semibold text-fg-muted">
              <span className="text-fg-subtle">{t(T.role)}: </span>
              {t(project.role)}
            </p>

            <p className="mt-5 text-[15.5px] leading-relaxed text-fg-muted">{t(project.summary)}</p>

            <h4 className="mt-7 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
              {t(T.highlights)}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature.en} className="flex gap-2.5 text-[14.5px] text-fg-muted">
                  <Check className="mt-0.5 size-[17px] shrink-0 text-[#0f766e] dark:text-[#5eead4]" aria-hidden />
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

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full accent-fill shine press px-5 text-[14px] font-semibold"
            >
              <Globe className="size-4" aria-hidden />
              {t(T.visitWebsite)}
              <span className="opacity-80">{project.urlLabel}</span>
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* ------------------------------------------------ client review */}
        <figure className="mx-6 mb-6 rounded-[22px] glass-chip p-6 sm:mx-9 sm:mb-9 sm:p-8 lg:mx-11 lg:mb-11">
          <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
            <Quote className="size-4 text-[#0f766e] dark:text-[#5eead4]" aria-hidden />
            {t(T.clientReview)}
          </div>

          <blockquote
            lang={lang}
            className="mt-4 text-[17px] font-medium leading-[1.6] text-fg sm:text-[19px]"
          >
            {/* Typographic quotes follow the language: «…» in Russian, “…” in English. */}
            {lang === "ru" ? "«" : "“"}
            {t(review.quote)}
            {lang === "ru" ? "»" : "”"}
          </blockquote>

          <figcaption className="mt-5 flex flex-wrap items-center gap-3">
            <span
              aria-hidden
              className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#34d399] to-[#0f766e] text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.4)]"
            >
              {t(review.author).charAt(0)}
            </span>
            <span className="min-w-0">
              <span className="block text-[14.5px] font-semibold text-fg">{t(review.author)}</span>
              <span className="block text-[12.5px] text-fg-subtle">
                {t(review.role)} ·{" "}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-current/30 underline-offset-2 hover:text-fg"
                >
                  {project.urlLabel}
                </a>
              </span>
            </span>
            {lang === "en" && review.translatedFromRu && (
              <span className="ml-auto text-[11.5px] italic text-fg-subtle">{t(T.translatedFromRu)}</span>
            )}
          </figcaption>
        </figure>
      </article>
    </Reveal>
  );
}

export function ClientWork() {
  const t = useL();

  return (
    <section id="client-work" className="relative py-20 safe-x sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Globe}
          eyebrow={t(T.webEyebrow)}
          title={t(T.webTitle)}
          text={t(T.webText)}
        />
        <div className="mt-12 space-y-5 sm:mt-16">
          {CLIENT_PROJECTS.map((project) => (
            <ClientCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
