import { HeaderClient } from "@/components/landing/HeaderClient";
import { BuildSection } from "@/components/landing/sections/BuildSection";
import { BusinessSection } from "@/components/landing/sections/BusinessSection";
import { CockpitSection } from "@/components/landing/sections/CockpitSection";
import { DualViewSection } from "@/components/landing/sections/DualViewSection";
import { FaqSection } from "@/components/landing/sections/FaqSection";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { PrinciplesSection } from "@/components/landing/sections/PrinciplesSection";
import { SectorsSection } from "@/components/landing/sections/SectorsSection";
import { SiteFooter } from "@/components/landing/sections/SiteFooter";
import { SolutionsSection } from "@/components/landing/sections/SolutionsSection";
import { TerrainSection } from "@/components/landing/sections/TerrainSection";

export function LandingExperience() {
  return (
    <main className="site-shell">
      <HeaderClient />
      <HeroSection />
      <BusinessSection />
      <SolutionsSection />
      <TerrainSection />
      <PrinciplesSection />
      <CockpitSection />
      <DualViewSection />
      <SectorsSection />
      <FaqSection />
      <BuildSection />
      <SiteFooter />
    </main>
  );
}
