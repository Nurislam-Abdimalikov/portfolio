"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Send } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { StatusDot } from "@/components/ui/status-dot";
import { T } from "@/content/copy";
import { STATS } from "@/content/stats";
import { useL } from "@/lib/i18n";
import { useSheen } from "@/lib/sheen";

export function Hero() {
  const t = useL();
  const reduce = useReducedMotion();
  const sheen = useSheen();

  /*
   * Transform only — no opacity. An ancestor below 1 opacity becomes a
   * backdrop root and would flatten the glass while the animation runs.
   */
  const rise = (delay: number) => ({
    initial: reduce ? false : { y: 16 },
    animate: { y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative pt-28 safe-x sm:pt-32">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-12">
        {/* ---------------------------------------------------------- copy */}
        <motion.div
          {...rise(0)}
          {...sheen}
          className="rounded-[30px] glass sheen lift p-7 sm:p-10 lg:col-span-7 lg:p-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-chip px-3.5 py-1.5 text-[12.5px] font-semibold text-[#1d6b4a] dark:text-[#5ff0a8]">
            <StatusDot />
            {t(T.availability)}
          </span>

          <h1 className="mt-6 text-[2.5rem] leading-[1.04] text-fg sm:text-[3.4rem] lg:text-[3.6rem]">
            {t(T.heroTitleA)}{" "}
            <span className="bg-gradient-to-r from-[#3b63ea] via-[#9b5cff] to-[#1aa9a0] bg-clip-text text-transparent dark:from-[#7c9bff] dark:via-[#c39cff] dark:to-[#4fd8c9]">
              {t(T.heroTitleAccent)} {t(T.heroTitleB)}
            </span>
          </h1>

          {/* Two separate blocks: run together they read as one broken sentence. */}
          <p className="mt-5 max-w-xl text-[15px] font-semibold text-fg">{t(T.heroRole)}</p>
          <p className="mt-3 max-w-xl text-[16px] leading-[1.62] text-fg-muted">{t(T.heroText)}</p>

          <div className="mt-5 flex items-start gap-2 text-[13.5px] text-fg-subtle">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
            {t(T.heroLocation)}
          </div>

          {/* Both CTAs clear the 48px minimum touch target. */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full accent-fill shine press px-7 text-[15px] font-semibold"
            >
              {t(T.heroCtaPrimary)}
              <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full glass-chip press px-6 text-[15px] font-semibold text-fg transition-colors hover:bg-white/70 dark:hover:bg-white/[0.13]"
            >
              {t(T.heroCtaSecondary)}
              <Send className="size-[17px]" aria-hidden />
            </a>
          </div>

          <dl className="mt-9 grid grid-cols-3 gap-2.5">
            {STATS.map((stat) => (
              <div key={stat.value} className="rounded-[18px] glass-chip px-3.5 py-4 transition-transform duration-300 hover:-translate-y-0.5 sm:px-4">
                <dt className="sr-only">{t(stat.label)}</dt>
                <dd>
                  <span className="block text-[26px] font-semibold tracking-tight text-fg sm:text-[28px]">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 block text-[11.5px] leading-tight text-fg-subtle">
                    {t(stat.label)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* ------------------------------------------------------- portrait */}
        <motion.div {...rise(0.08)} {...sheen} className="rounded-[30px] glass sheen lift p-4 lg:col-span-5">
          <div className="relative h-full min-h-[380px] overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgb(20_24_60/0.2)]">
            {/*
              The photo is a tall overhead shot with the subject low in the
              frame, so the crop is pulled down to keep him centred.
              Next.js 16 deprecated `priority` in favour of `preload`.
            */}
            <Image
              src="/image/me.jpeg"
              alt={t(T.photoAlt)}
              fill
              sizes="(min-width: 1024px) 26rem, (min-width: 640px) 36rem, 92vw"
              className="object-cover object-[50%_80%]"
              preload
            />
            <div className="absolute inset-x-3 bottom-3 rounded-[16px] border border-white/30 bg-white/25 px-4 py-3 backdrop-blur-xl backdrop-saturate-150">
              <p className="text-[14.5px] font-semibold text-white drop-shadow-[0_1px_3px_rgb(0_0_0/0.4)]">
                Nurislam Abdimalikov
              </p>
              <p className="text-[12.5px] text-white/90 drop-shadow-[0_1px_3px_rgb(0_0_0/0.4)]">
                React Native · React · TypeScript
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}
