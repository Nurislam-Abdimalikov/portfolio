import Image, { type StaticImageData } from "next/image";

/**
 * macOS-style window around a website screenshot — the desktop counterpart to
 * `PhoneMockup`, so web work sits in the same visual language as the apps.
 */
export function BrowserFrame({
  src,
  alt,
  url,
}: {
  src: StaticImageData;
  alt: string;
  url: string;
}) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/60 bg-white/70 shadow-[0_26px_60px_rgb(20_24_60/0.25)] dark:border-white/15 dark:bg-white/10">
      <div className="flex items-center gap-3 border-b border-black/5 px-3.5 py-2.5 dark:border-white/10">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto truncate rounded-md bg-black/5 px-3 py-0.5 text-[11.5px] font-medium text-fg-subtle dark:bg-white/10">
          {url}
        </span>
        {/* Balances the traffic lights so the address stays optically centred. */}
        <span aria-hidden className="w-[46px]" />
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 34rem, 92vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
