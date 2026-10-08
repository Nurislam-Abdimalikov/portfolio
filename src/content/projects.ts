import type { Accent } from "@/lib/accents";
import type { L } from "@/lib/i18n";

export type Project = {
  id: string;
  name: string;
  accent: Accent;
  badge: L;
  meta: L;
  stack: string[];
  /** Live App Store listing for this app. */
  appStoreUrl: string;
  /** Companion web platform, when the product also ships on the web. */
  website?: { url: string; label: string };
  summary: L;
  features: L[];
  /** Real App Store screenshot shown inside the phone mockup. */
  shot: string;
  shotAlt: L;
};

export const PROJECTS: Project[] = [
  {
    id: "satuu",
    name: "Satuu.kg",
    accent: "blue",
    badge: {
      en: "Production Marketplace • v1.6 Live",
      ru: "Продакшн-маркетплейс • v1.6 в сторе",
    },
    meta: {
      en: "iOS v1.6 in the App Store · Web platform on satuu.kg",
      ru: "iOS v1.6 в App Store · Веб-платформа на satuu.kg",
    },
    stack: ["React Native CLI", "Next.js", "TypeScript", "Redux Toolkit", "REST API"],
    appStoreUrl: "https://apps.apple.com/us/app/satuu-kg/id6790179880",
    website: { url: "https://satuu.kg/", label: "satuu.kg" },
    summary: {
      en: "Regional marketplace and classifieds mobile platform. High-traffic catalog, dynamic filters, image uploading pipelines, and 6 active production release iterations.",
      ru: "Мобильный маркетплейс и классифайд. Каталог объявлений, фильтрация, загрузка медиа и поддержка 6 релизных циклов.",
    },
    features: [
      {
        en: "High-traffic catalog with dynamic filtering",
        ru: "Высоконагруженный каталог с динамическими фильтрами",
      },
      {
        en: "Image upload pipeline with compression",
        ru: "Пайплайн загрузки изображений со сжатием",
      },
      {
        en: "Redux Toolkit state across 40+ screens",
        ru: "Состояние на Redux Toolkit для 40+ экранов",
      },
      {
        en: "6 production release iterations shipped",
        ru: "6 релизных итераций доведены до прода",
      },
      {
        en: "Companion Next.js web platform at satuu.kg",
        ru: "Веб-платформа на Next.js — satuu.kg",
      },
    ],
    shot: "/apps/satuu.jpg",
    shotAlt: {
      en: "Satuu.kg listings catalog running on iPhone",
      ru: "Каталог объявлений Satuu.kg на iPhone",
    },
  },
  {
    id: "jolduu",
    name: "Jolduu",
    accent: "purple",
    badge: { en: "Startup • Live in App Store", ru: "Стартап • Уже в App Store" },
    meta: { en: "iOS · Live in the App Store", ru: "iOS · Опубликовано в App Store" },
    stack: ["React Native CLI", "TypeScript", "Geolocation", "REST API"],
    appStoreUrl: "https://apps.apple.com/us/app/jolduu/id6787068282",
    summary: {
      en: "Ride-sharing and intercity travel startup app. Intuitive booking flows, driver/passenger matching, and seamless API integration.",
      ru: "Стартап-сервис совместных поездок и междугородних маршрутов. Разработка UI, гео-навигация и интеграция с сервером.",
    },
    features: [
      { en: "Driver and passenger matching flows", ru: "Матчинг водителей и пассажиров" },
      { en: "Live geolocation and route handling", ru: "Живая геолокация и работа с маршрутами" },
      {
        en: "Booking funnel built for one-handed use",
        ru: "Воронка брони под управление одной рукой",
      },
      { en: "Seamless REST API integration", ru: "Бесшовная интеграция с REST API" },
    ],
    shot: "/apps/jolduu.jpg",
    shotAlt: {
      en: "Jolduu ride-booking map screen on iPhone",
      ru: "Экран заказа поездки Jolduu на iPhone",
    },
  },
  {
    id: "namaz",
    name: "Namaz Depteri",
    accent: "teal",
    badge: { en: "Utility • 100% Offline-First", ru: "Утилита • 100% Offline-First" },
    meta: { en: "iOS · Live in the App Store, v1.0.5", ru: "iOS · В App Store, v1.0.5" },
    stack: ["React Native", "Local Storage", "Custom UI"],
    appStoreUrl: "https://apps.apple.com/us/app/%D0%BD%D0%B0%D0%BC%D0%B0%D0%B7-%D0%B4%D0%B5%D0%BF%D1%82%D0%B5%D1%80%D0%B8/id6786592006",
    summary: {
      en: "Fast, battery-efficient utility app with robust offline-first architecture, fluid navigation, and zero latency.",
      ru: "Оффлайн-утилита с локальным хранением данных, плавной навигацией и мгновенным откликом.",
    },
    features: [
      {
        en: "Fully offline-first — zero network dependency",
        ru: "Полностью offline-first — без зависимости от сети",
      },
      { en: "Local persistence with instant reads", ru: "Локальное хранение с мгновенным чтением" },
      { en: "Battery-efficient render cycle", ru: "Экономичный к батарее цикл рендера" },
      {
        en: "Custom UI system, zero perceived latency",
        ru: "Собственная UI-система, нулевая задержка",
      },
    ],
    shot: "/apps/namaz.jpg",
    shotAlt: {
      en: "Namaz Depteri daily prayer tracker on iPhone",
      ru: "Экран ежедневных намазов Namaz Depteri на iPhone",
    },
  },
  {
    id: "streak",
    name: "Habit Tracker — Streak",
    accent: "amber",
    badge: { en: "Productivity • Live in App Store", ru: "Продуктивность • Уже в App Store" },
    meta: { en: "iOS · Live in the App Store", ru: "iOS · Опубликовано в App Store" },
    stack: ["React Native", "Custom State Management"],
    appStoreUrl: "https://apps.apple.com/us/app/habit-tracker-streak/id6784377074",
    summary: {
      en: "Interactive streak-tracking application with dynamic progress calculations and rewarding UX micro-interactions.",
      ru: "Трекер привычек с динамическим подсчетом серий и интерактивными анимациями.",
    },
    features: [
      {
        en: "Dynamic streak and progress calculation",
        ru: "Динамический подсчёт серий и прогресса",
      },
      {
        en: "Rewarding micro-interactions on every tap",
        ru: "Приятные микровзаимодействия на каждом тапе",
      },
      {
        en: "Custom state management, no heavy deps",
        ru: "Своё управление состоянием, без тяжёлых зависимостей",
      },
      {
        en: "Habit history that stays readable at a glance",
        ru: "История привычек, читаемая с одного взгляда",
      },
    ],
    shot: "/apps/streak.jpg",
    shotAlt: {
      en: "Habit Tracker Streak statistics screen on iPhone",
      ru: "Экран статистики Habit Tracker Streak на iPhone",
    },
  },
];
