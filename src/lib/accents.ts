export type Accent = "blue" | "purple" | "teal" | "amber";

/**
 * Soft tints that sit on the glass without fighting it.
 * Tailwind scans source text for class names, so every variant has to exist
 * as a complete literal string — never assembled at runtime.
 */
export const ACCENT: Record<Accent, { text: string; dot: string; bar: string }> = {
  blue: {
    text: "text-[#3b63ea] dark:text-[#8aa6ff]",
    dot: "bg-[#3b63ea]",
    bar: "bg-gradient-to-r from-[#4f7bff] to-[#3b63ea]",
  },
  purple: {
    text: "text-[#8b4ddb] dark:text-[#c39cff]",
    dot: "bg-[#8b4ddb]",
    bar: "bg-gradient-to-r from-[#a56bff] to-[#8b4ddb]",
  },
  teal: {
    text: "text-[#0f8f84] dark:text-[#5fe3d4]",
    dot: "bg-[#0f8f84]",
    bar: "bg-gradient-to-r from-[#2fd3c0] to-[#0f8f84]",
  },
  amber: {
    text: "text-[#9a6a10] dark:text-[#f5c266]",
    dot: "bg-[#c7901f]",
    bar: "bg-gradient-to-r from-[#ffcf6b] to-[#c7901f]",
  },
};
