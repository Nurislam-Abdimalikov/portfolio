import { Backdrop } from "@/components/layout/backdrop";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { LanguageProvider } from "@/lib/i18n";

/*
 * The page itself stays a Server Component: only `LanguageProvider` and the
 * interactive sections ship as client code, and the whole route still
 * prerenders to static HTML.
 */
export default function Home() {
  return (
    <LanguageProvider>
      <Backdrop />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
