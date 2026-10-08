import { CodeXml, Database, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import type { Accent } from "@/lib/accents";
import type { L } from "@/lib/i18n";

export const SKILLS: {
  id: string;
  icon: LucideIcon;
  accent: Accent;
  title: L;
  text: L;
  items: string[];
  /** Bento span — only applied from the `lg` breakpoint up. */
  span: string;
}[] = [
  {
    id: "mobile",
    icon: Smartphone,
    accent: "blue",
    title: { en: "Mobile", ru: "Мобильная разработка" },
    text: {
      en: "The core discipline — from the first native module to the green checkmark in App Store Connect.",
      ru: "Основная дисциплина — от первого нативного модуля до зелёной галочки в App Store Connect.",
    },
    items: ["React Native CLI", "iOS", "Android", "Xcode", "TestFlight", "App Store Connect"],
    span: "lg:col-span-4",
  },
  {
    id: "web",
    icon: CodeXml,
    accent: "purple",
    title: { en: "Web", ru: "Веб" },
    text: {
      en: "Typed, fast and accessible interfaces for the browser.",
      ru: "Типизированные, быстрые и доступные интерфейсы для браузера.",
    },
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    span: "lg:col-span-2",
  },
  {
    id: "data",
    icon: Database,
    accent: "teal",
    title: { en: "Data & Backend", ru: "Данные и бэкенд" },
    text: {
      en: "Contracts first — the integration layer is validated before a screen exists.",
      ru: "Сначала контракты — слой интеграции валидируется ещё до появления экрана.",
    },
    items: ["REST API", "Swagger / OpenAPI validation", "Firebase"],
    span: "lg:col-span-2",
  },
  {
    id: "workflow",
    icon: Workflow,
    accent: "amber",
    title: { en: "Workflow", ru: "Процесс" },
    text: {
      en: "AI handles the boilerplate. Architecture, state boundaries and release calls stay human.",
      ru: "AI берёт на себя рутину. Архитектура, границы состояния и решения о релизе остаются за человеком.",
    },
    items: ["AI-Augmented Engineering (Cursor, Claude)", "Git", "Bun", "Vite"],
    span: "lg:col-span-4",
  },
];
