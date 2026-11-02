import type { StaticImageData } from "next/image";
import type { Accent } from "@/lib/accents";
import type { L } from "@/lib/i18n";
/*
 * Static imports, not /public paths: Next.js hashes the file contents into the
 * URL, so replacing a screenshot always ships under a new address. With a
 * plain /public path the optimizer keeps serving its cached copy of the old
 * file — even across rebuilds — until the cache TTL runs out.
 */
import jolduuShot from "@/assets/apps/jolduu.jpg";
import kitebiShot from "@/assets/apps/kitebi.jpg";
import namazShot from "@/assets/apps/namaz.jpg";
import satuuShot from "@/assets/apps/satuu.jpg";
import streakShot from "@/assets/apps/streak.jpg";

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
  shot: StaticImageData;
  /**
   * "screen" — a bare UI capture, framed as an iPhone.
   * "poster" — the store's own marketing art, which already draws a device
   * and callouts that overhang it; cropping to the screen would slice those
   * callouts in half, so it is shown whole, the way the App Store shows it.
   */
  shotStyle?: "screen" | "poster";
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
    shot: satuuShot,
    shotAlt: {
      en: "Satuu.kg listings catalog running on iPhone",
      ru: "Каталог объявлений Satuu.kg на iPhone",
    },
  },
  {
    id: "jolduu",
    name: "Jolduu",
    accent: "indigo",
    badge: { en: "City & Intercity Service • New design", ru: "Город и межгород • Новый дизайн" },
    meta: { en: "iOS · v1.0.1 Live in the App Store", ru: "iOS · v1.0.1 в App Store" },
    stack: ["React Native CLI", "TypeScript", "Geolocation", "REST API", "Reanimated"],
    appStoreUrl: "https://apps.apple.com/ga/app/jolduu/id6787068282",
    summary: {
      en: "A full city and intercity mobility service in one app: taxi in five car classes, car and moto delivery, and freight up to 300 kg with loaders. Fares are shown up front with no hidden surcharges, and an order takes a couple of taps.",
      ru: "Полноценный городской и междугородний сервис в одном приложении: такси пяти классов, доставка на авто и мото и грузоперевозки до 300 кг с грузчиками. Цена известна заранее, без скрытых доплат, а заказ — в пару касаний.",
    },
    features: [
      {
        en: "Taxi (5 car classes), car/moto delivery and freight up to 300 kg with loaders",
        ru: "Такси (5 классов авто), доставка (авто/мото) и грузоперевозки до 300 кг с грузчиками",
      },
      {
        en: "Transparent pricing — fare known in advance, no hidden surcharges",
        ru: "Прозрачное ценообразование — цена известна заранее, без скрытых доплат",
      },
      {
        en: "Interactive map with live route tracking",
        ru: "Интерактивная карта и лайв-трекинг маршрута",
      },
      { en: "Order placed in a couple of taps", ru: "Заказ в пару касаний" },
    ],
    shot: jolduuShot,
    shotStyle: "poster",
    shotAlt: {
      en: "Jolduu App Store art: fare known in advance — route on a live map and taxi classes from 98 som",
      ru: "Иллюстрация Jolduu из App Store: цена известна заранее — маршрут на карте и классы такси от 98 сом",
    },
  },
  {
    id: "kitebi",
    name: "Namaz Kitebi",
    accent: "green",
    badge: { en: "Lifestyle & Education • v1.0.2 Live", ru: "Лайфстайл и обучение • v1.0.2 в сторе" },
    meta: { en: "iOS · Version 1.0.2 in the App Store", ru: "iOS · Версия 1.0.2 в App Store" },
    stack: ["React Native CLI", "TypeScript", "Local Storage", "Custom Typography"],
    appStoreUrl:
      "https://apps.apple.com/ga/app/%D0%BD%D0%B0%D0%BC%D0%B0%D0%B7-%D0%BA%D0%B8%D1%82%D0%B5%D0%B1%D0%B8/id6810094989",
    summary: {
      en: "A modern mobile guide to prayer with intuitive navigation — lessons, step-by-step instructions and prayer times that work fully offline, in a clean, calm interface.",
      ru: "Современное мобильное руководство по намазу с интуитивной навигацией — уроки, пошаговые инструкции и время намазов, которые работают полностью офлайн, в чистом и спокойном интерфейсе.",
    },
    features: [
      {
        en: "Modern, easy-to-follow prayer guide with intuitive navigation",
        ru: "Современное и удобное руководство по намазу с интуитивной навигацией",
      },
      {
        en: "Works 100% offline — no internet required",
        ru: "Работает 100% офлайн — интернет не обязателен",
      },
      {
        en: "Clean, aesthetic UI/UX with fast rendering and low battery use",
        ru: "Чистый, эстетичный UI/UX, быстрый рендеринг и экономный расход батареи",
      },
    ],
    shot: kitebiShot,
    shotAlt: {
      en: "Namaz Kitebi lessons screen with the five daily prayers on iPhone",
      ru: "Экран уроков Намаз китеби с пятью намазами на iPhone",
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
    shot: namazShot,
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
    shot: streakShot,
    shotAlt: {
      en: "Habit Tracker Streak statistics screen on iPhone",
      ru: "Экран статистики Habit Tracker Streak на iPhone",
    },
  },
];
