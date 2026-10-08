import type { L } from "@/lib/i18n";

/** Every string on the page, in both languages. English is the default. */
export const T = {
  availability: {
    en: "Available for high-impact projects & contracts",
    ru: "Открыт к сильным проектам и контрактам",
  },
  navCta: { en: "Let\u2019s talk", ru: "Связаться" },
  menu: { en: "Menu", ru: "Меню" },
  toggleTheme: { en: "Toggle theme", ru: "Сменить тему" },
  closeMenu: { en: "Close menu", ru: "Закрыть меню" },

  heroTitleA: { en: "I ship real apps to the", ru: "Запускаю реальные приложения в" },
  heroTitleAccent: { en: "App Store", ru: "App Store" },
  heroTitleB: { en: "4\u00d7 faster.", ru: "в 4 раза быстрее." },
  heroRole: {
    en: "Cross-Platform Mobile & Frontend Engineer — React Native & React",
    ru: "Cross-Platform Mobile & Frontend разработчик — React Native и React",
  },
  heroText: {
    en: "AI-native development paired with strict architecture turns months of roadmap into weeks of shipped product — without trading away quality, types or review approval.",
    ru: "AI-Native разработка в связке со строгой архитектурой превращает месяцы роадмапа в недели готового продукта — без потери качества, типизации и одобрения ревью.",
  },
  heroLocation: {
    en: "Bishkek, Kyrgyzstan · Open to worldwide remote",
    ru: "Бишкек, Кыргызстан · Открыт к удалёнке по всему миру",
  },
  heroCtaPrimary: { en: "View projects", ru: "Смотреть проекты" },
  heroCtaSecondary: { en: "Contact me", ru: "Связаться" },
  photoAlt: {
    en: "Portrait of Nurislam Abdimalikov",
    ru: "Портрет Нурислама Абдималикова",
  },
  shippingNow: { en: "Shipping now", ru: "В работе" },
  appsLive: { en: "4+ apps live", ru: "4+ в сторе" },

  workEyebrow: { en: "Featured work", ru: "Избранные проекты" },
  workTitle: { en: "Live in the App Store", ru: "Уже в App Store" },
  workText: {
    en: "Four production applications on real devices — not prototypes, not concepts. Every one of them passed App Review and serves real users today.",
    ru: "Четыре продакшн-приложения на реальных устройствах — не прототипы и не концепты. Каждое прошло App Review и работает с живыми пользователями.",
  },
  stack: { en: "Stack", ru: "Стек" },
  highlights: { en: "Highlights", ru: "Ключевое" },
  appStore: { en: "Live on App Store", ru: "Доступно в App Store" },
  viewOnAppStore: { en: "View on App Store", ru: "Открыть в App Store" },
  visitWebsite: { en: "Visit website", ru: "Открыть сайт" },

  skillsEyebrow: { en: "Toolkit", ru: "Инструментарий" },
  skillsTitle: { en: "Built on a deliberate stack", ru: "Осознанно выбранный стек" },
  skillsText: {
    en: "Nothing here is résumé filler. Every tool below has carried an app from an empty repo to a release on App Store Connect.",
    ru: "Здесь нет «строчек для резюме». Каждый инструмент ниже довёл приложение от пустого репозитория до релиза в App Store Connect.",
  },

  speedEyebrow: { en: "Why work with me", ru: "Почему со мной выгодно" },
  speedTitle: { en: "Engineered for speed", ru: "Спроектировано под скорость" },
  speedText: {
    en: "Speed usually costs quality. The approach below is how I get the speed and keep the quality — contracts validated up front, architecture decided once, AI doing the typing instead of the thinking.",
    ru: "Обычно за скорость платят качеством. Этот подход даёт скорость и сохраняет качество: контракты валидируются заранее, архитектура решается один раз, а AI печатает — но не думает за меня.",
  },
  timelineTitle: { en: "Typical delivery window", ru: "Типичный срок запуска" },
  timelineLegacy: { en: "Conventional team", ru: "Обычная команда" },
  timelineMine: { en: "AI-native workflow", ru: "AI-Native процесс" },
  timelineLegacyValue: { en: "~12 weeks", ru: "~12 недель" },
  timelineMineValue: { en: "~3 weeks", ru: "~3 недели" },
  timelineNote: {
    en: "Measured from empty repository to a build submitted to App Store Connect.",
    ru: "От пустого репозитория до билда, отправленного в App Store Connect.",
  },

  contactEyebrow: { en: "Contact", ru: "Контакты" },
  contactTitle: {
    en: "Let\u2019s build something that ships",
    ru: "Давайте сделаем то, что выйдет в релиз",
  },
  contactText: {
    en: "Contracts, product builds or a long-term team seat — if it needs to reach the App Store, I\u2019d like to hear about it. Fastest reply is on Telegram.",
    ru: "Контракт, запуск продукта или место в команде надолго — если это должно дойти до App Store, расскажите. Быстрее всего отвечаю в Telegram.",
  },
  copied: { en: "Copied!", ru: "Скопировано!" },
  // Kept short so it never truncates inside the narrow contact row on phones.
  telegramSub: { en: "Opens a direct chat", ru: "Написать напрямую" },
  copyHandle: { en: "Copy username", ru: "Скопировать юзернейм" },
  whatsappSub: { en: "Direct line, same day", ru: "Прямая линия, ответ в тот же день" },
  githubSub: { en: "Code, commits & history", ru: "Код, коммиты и история" },

  footerBuilt: {
    en: "Built with Next.js, TypeScript, Tailwind CSS & Framer Motion",
    ru: "Собрано на Next.js, TypeScript, Tailwind CSS и Framer Motion",
  },
  footerRights: {
    en: "Nurislam Abdimalikov · All rights reserved.",
    ru: "Нурислам Абдималиков · Все права защищены.",
  },
  backToTop: { en: "Back to top", ru: "Наверх" },
} satisfies Record<string, L>;
