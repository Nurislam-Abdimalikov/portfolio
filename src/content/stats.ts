import type { L } from "@/lib/i18n";

export const STATS: { value: string; label: L }[] = [
  { value: "4+", label: { en: "Live App Store apps", ru: "Приложения в App Store" } },
  { value: "v1.6", label: { en: "Shipped to production", ru: "Доведено до продакшена" } },
  { value: "100%", label: { en: "Review approval", ru: "Одобрение ревью" } },
];

/** Scrolling strip under the hero. Order is cosmetic only. */
export const MARQUEE = [
  "React Native CLI",
  "TypeScript",
  "Redux Toolkit",
  "Next.js",
  "React",
  "Tailwind CSS",
  "REST API",
  "Swagger / OpenAPI",
  "Firebase",
  "Xcode",
  "TestFlight",
  "App Store Connect",
  "Git",
  "Bun",
  "Vite",
];
