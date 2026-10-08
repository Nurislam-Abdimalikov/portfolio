import { Gauge, Layers, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import type { Accent } from "@/lib/accents";
import type { L } from "@/lib/i18n";

export const APPROACH: { icon: LucideIcon; accent: Accent; title: L; text: L }[] = [
  {
    icon: ShieldCheck,
    accent: "teal",
    title: { en: "Swagger / OpenAPI validation", ru: "Валидация через Swagger / OpenAPI" },
    text: {
      en: "Every endpoint is checked against the spec before a single screen is wired. Integration bugs surface at the contract, not in TestFlight the night before release.",
      ru: "Каждый эндпоинт сверяется со спецификацией до того, как собран хоть один экран. Баги интеграции всплывают на контракте, а не в TestFlight в ночь перед релизом.",
    },
  },
  {
    icon: Sparkles,
    accent: "purple",
    title: { en: "AI-native, human-reviewed", ru: "AI-Native, но с ревью человеком" },
    text: {
      en: "Cursor and Claude write the boilerplate at speed. Architecture, state boundaries and every release decision stay mine — that is where the quality is kept.",
      ru: "Cursor и Claude быстро пишут рутину. Архитектура, границы состояния и каждое решение о релизе — за мной. Именно там и сохраняется качество.",
    },
  },
  {
    icon: Layers,
    accent: "blue",
    title: { en: "Release-ready from day one", ru: "Готовность к релизу с первого дня" },
    text: {
      en: "Typed state, predictable data flow and a build pipeline aimed at App Store Connect from the first commit. Satuu.kg reaching v1.6 is the proof it holds up.",
      ru: "Типизированное состояние, предсказуемый поток данных и пайплайн, нацеленный на App Store Connect с первого коммита. Satuu.kg на v1.6 — доказательство, что это работает.",
    },
  },
  {
    icon: Gauge,
    accent: "amber",
    title: { en: "Shipped, not demoed", ru: "Зарелизено, а не показано на демо" },
    text: {
      en: "4 apps live, 6 production release cycles, 100% App Review approval. The work exists on real devices, in a real store, for real users.",
      ru: "4 приложения в сторе, 6 релизных циклов, 100% одобрения App Review. Работа живёт на реальных устройствах, в реальном сторе, у реальных пользователей.",
    },
  },
];
