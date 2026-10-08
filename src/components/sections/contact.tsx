"use client";

import { MapPin, Send } from "lucide-react";
import { GithubMark, WhatsappMark } from "@/components/ui/brand-icons";
import { ContactLink } from "@/components/ui/contact-link";
import { Reveal } from "@/components/ui/reveal";
import { StatusDot } from "@/components/ui/status-dot";
import { TelegramContact } from "@/components/ui/telegram-contact";
import { T } from "@/content/copy";
import { useL } from "@/lib/i18n";
import { useSheen } from "@/lib/sheen";
import { LINKS } from "@/lib/links";

export function Contact() {
  const t = useL();
  const sheen = useSheen();

  return (
    <section id="contact" className="relative py-20 safe-x sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div {...sheen} className="rounded-[30px] glass sheen lift p-7 sm:p-10 lg:p-14">
            {/*
              `min-w-0` on both columns: grid items default to `min-width: auto`,
              so a nowrap child (anything with `truncate`) would otherwise force
              the whole grid wider than the card and get clipped on phones.
            */}
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
              <div className="min-w-0 lg:col-span-3">
                <span className="inline-flex items-center gap-2 rounded-full glass-chip px-3.5 py-1.5 text-[12px] font-semibold text-fg-muted">
                  <Send className="size-3.5" aria-hidden />
                  {t(T.contactEyebrow)}
                </span>

                <h2 className="mt-5 text-[2rem] leading-[1.08] text-fg sm:text-[2.75rem]">
                  {t(T.contactTitle)}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-fg-muted">{t(T.contactText)}</p>

                <div className="mt-7 flex flex-col gap-3">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full glass-chip px-3.5 py-1.5 text-[12.5px] font-semibold text-[#1d6b4a] dark:text-[#5ff0a8]">
                    <StatusDot />
                    {t(T.availability)}
                  </span>
                  <span className="inline-flex items-start gap-2 text-[13px] text-fg-subtle">
                    <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                    {t(T.heroLocation)}
                  </span>
                </div>
              </div>

              <div className="min-w-0 space-y-3 lg:col-span-2">
                <TelegramContact />
                <ContactLink
                  href={LINKS.whatsapp}
                  icon={<WhatsappMark className="size-[18px]" />}
                  title={LINKS.whatsappLabel}
                  subtitle={t(T.whatsappSub)}
                  fill="bg-gradient-to-br from-[#4ade80] to-[#16a34a]"
                />
                <ContactLink
                  href={LINKS.github}
                  icon={<GithubMark className="size-[18px]" />}
                  title={LINKS.githubHandle}
                  subtitle={t(T.githubSub)}
                  fill="bg-gradient-to-br from-[#4a5168] to-[#23283a]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
