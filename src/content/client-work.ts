import type { StaticImageData } from "next/image";
import type { L } from "@/lib/i18n";
// Static import so a refreshed screenshot gets a new hashed URL (see projects.ts).
import mezmayShot from "@/assets/web/mezmay.jpg";

export type Testimonial = {
  quote: L;
  author: L;
  role: L;
  /** True when the English text is a translation of a Russian original. */
  translatedFromRu: boolean;
};

export type ClientProject = {
  id: string;
  name: L;
  badge: L;
  role: L;
  url: string;
  urlLabel: string;
  summary: L;
  features: L[];
  stack: string[];
  shot: StaticImageData;
  shotAlt: L;
  testimonial: Testimonial;
};

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: "mezmay",
    name: { en: "Mezmay Maison", ru: "Мезмай Мезон" },
    badge: { en: "Commercial project • Live", ru: "Коммерческий проект • Работает" },
    role: {
      en: "Full-Stack Web Development & Direct Booking Platform",
      ru: "Full-stack веб-разработка и платформа прямого бронирования",
    },
    url: "https://mezmay-maison.ru",
    urlLabel: "mezmay-maison.ru",
    summary: {
      en: "A full web service and booking platform for a guest complex in Mezmay village, Krasnodar Krai. Built to take direct bookings around aggregator commissions (Avito, Sutochno, Ostrovok — 15–20%). Includes a responsive room catalogue, sauna and plunge-pool booking, instant Telegram notifications and a secured admin panel for managing dates.",
      ru: "Полноценный веб-сервис и платформа бронирования для гостевого комплекса в посёлке Мезмай (Краснодарский край). Разработан для приёма прямых броней в обход комиссий агрегаторов (Авито, Суточно, Островок 15–20%). Включает адаптивный каталог номеров, бронирование бани/купели, мгновенные уведомления в Telegram и защищённую админ-панель для управления датами.",
    },
    features: [
      {
        en: "Direct bookings, no 15–20% aggregator commission",
        ru: "Прямые брони без 15–20% комиссии агрегаторов",
      },
      {
        en: "Responsive room catalogue plus sauna & plunge-pool booking",
        ru: "Адаптивный каталог номеров и бронирование бани/купели",
      },
      {
        en: "Instant Telegram notifications for every request",
        ru: "Мгновенные уведомления в Telegram по каждой заявке",
      },
      {
        en: "Secured admin panel for managing available dates",
        ru: "Защищённая админ-панель для управления датами",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Telegram Bot API", "Custom CMS / Admin Panel"],
    shot: mezmayShot,
    shotAlt: {
      en: "Mezmay Maison website home page with booking actions",
      ru: "Главная страница сайта Мезмай Мезон с кнопками бронирования",
    },
    testimonial: {
      quote: {
        en: "Working with Nurislam is an extraordinary example of attentiveness and responsiveness. He offered a working prototype right from the start, accommodated all feedback with lightning-fast revisions, and delivered a seamless experience. The fastest and easiest collaboration I've had with any developer.",
        ru: "Работа с тобой, Нурислам — это удивительный пример чуткости и внимательности. Ты ненавязчиво предложил услугу, причем в предложении уже была базовая версия сайта. Учёл все пожелания и несколько раз делал правки мгновенно. Это самое быстрое и простое взаимодействие с исполнителем из всех, с кем я работал. Результатом остался очень доволен!",
      },
      author: { en: "Alexander", ru: "Александр" },
      role: {
        en: "Owner of Mezmay Maison guest complex",
        ru: "Владелец гостевого комплекса «Мезмай Мезон»",
      },
      translatedFromRu: true,
    },
  },
];
