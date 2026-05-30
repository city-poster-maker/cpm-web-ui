import { AboutSection } from "@/components/AboutSection";
import { CityGenerator } from "@/components/CityGenerator";
import { PosterCarousel } from "@/components/PosterCarousel";
import { SiteHeader } from "@/components/SiteHeader";

export default function GeneratorPage() {
  return (
    <main>
      <SiteHeader />
      <CityGenerator />
      <PosterCarousel />
      <AboutSection />
    </main>
  );
}
