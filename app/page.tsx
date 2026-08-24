import { LandingExperience } from "@/components/landing/LandingExperience";
import { MotionExperience } from "@/components/landing/MotionExperience";
import { siteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WALS",
  url: siteUrl,
  description: "Plateforme pour revendeurs de solutions digitales aux commerces : fidélité digitale, roue interactive, démonstrations personnalisées et cockpit commercial.",
  inLanguage: "fr-FR",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <MotionExperience />
      <LandingExperience />
    </>
  );
}
