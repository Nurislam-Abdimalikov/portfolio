import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// Inter is the closest free match to Apple's SF Pro, which the Liquid Glass
// material is designed around.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nurislam Abdimalikov — Cross-Platform Mobile & Frontend Engineer",
  description:
    "React Native & React engineer shipping production iOS apps to the App Store 4x faster with AI-native development and strict architecture. 4+ live App Store apps.",
  keywords: [
    "React Native",
    "React",
    "Next.js",
    "TypeScript",
    "iOS Developer",
    "Mobile Engineer",
    "Bishkek",
    "Nurislam Abdimalikov",
  ],
  authors: [{ name: "Nurislam Abdimalikov" }],
  creator: "Nurislam Abdimalikov",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nurislam Abdimalikov — Cross-Platform Mobile & Frontend Engineer",
    description:
      "Shipping production iOS apps 4x faster with AI-native development. 4+ live App Store apps.",
    siteName: "Nurislam Abdimalikov",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurislam Abdimalikov — Mobile & Frontend Engineer",
    description:
      "React Native & React engineer. 4+ live App Store apps, shipped 4x faster.",
  },
};

/*
 * `themeColor` + `viewport` belong in the separate `viewport` export, not in
 * `metadata`. `viewportFit: "cover"` is what lets the `safe-*` utilities in
 * globals.css actually see the notch insets on iOS.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e24" },
  ],
  colorScheme: "light dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    /*
     * No `h-full` on <html>: pinning the root to the viewport height while it
     * also carries `overflow-x` turns it into a 100vh scroll box. `min-h-dvh`
     * on <body> gives the same full-height layout and leaves the document as
     * the one scroller.
     */
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col text-fg">
        {children}
      </body>
    </html>
  );
}
