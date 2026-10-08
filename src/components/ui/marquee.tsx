import { MARQUEE } from "@/content/stats";

/** The list is doubled so the CSS loop never shows a seam. */
export function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div
      className="relative mx-auto mt-14 max-w-7xl overflow-hidden sm:mt-20"
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max animate-marquee gap-2.5">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full glass-chip px-4 py-2 text-[12.5px] font-medium text-fg-subtle"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
