"use client";

import Image from "next/image";
import { GithubMark, TelegramMark, WhatsappMark } from "@/components/ui/brand-icons";
import { T } from "@/content/copy";
import { useL } from "@/lib/i18n";
import { LINKS } from "@/lib/links";

const SOCIALS = [
  { href: LINKS.github, label: "GitHub", Mark: GithubMark },
  { href: LINKS.telegram, label: "Telegram", Mark: TelegramMark },
  { href: LINKS.whatsapp, label: "WhatsApp", Mark: WhatsappMark },
];

export function Footer() {
  const t = useL();

  return (
    <footer className="relative safe-x safe-b pb-6 pt-4">
      <div className="mx-auto max-w-6xl rounded-[26px] glass px-5 py-5 sm:px-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/40">
              {/*
                The source photo is a wide overhead shot, so the avatar zooms in
                on the face rather than showing the whole frame at 40px.
              */}
              <Image
                src="/image/me.jpeg"
                alt=""
                fill
                sizes="40px"
                className="scale-[3.4] object-cover object-[50%_46%]"
              />
            </span>
            <div>
              <p className="text-[14px] font-semibold text-fg">Nurislam Abdimalikov</p>
              {/*
                No `new Date()` here: the page is prerendered, so a build-time
                year would silently go stale — and Cache Components rejects
                unstable values during the prerender outright.
              */}
              <p className="text-[12.5px] text-fg-subtle">© {t(T.footerRights)}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {SOCIALS.map(({ href, label, Mark }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full glass-chip text-fg-muted transition-colors hover:text-fg"
              >
                <Mark className="size-[18px]" />
              </a>
            ))}
            <a
              href="#top"
              className="ml-1 inline-flex min-h-11 items-center rounded-full glass-chip px-4 text-[12.5px] font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {t(T.backToTop)}
            </a>
          </div>
        </div>

        <p className="mt-5 border-t border-white/25 pt-4 text-center text-[12px] text-fg-subtle dark:border-white/10">
          {t(T.footerBuilt)}
        </p>
      </div>
    </footer>
  );
}
