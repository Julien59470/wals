import { LandingExperience } from "@/components/landing/LandingExperience";
import { MotionExperience } from "@/components/landing/MotionExperience";
import { siteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WALS",
  url: siteUrl,
  description: "WALS fournit la technologie permettant de créer sa propre activité de fidélité digitale en marque blanche : offres, Wallet, engagement client et cockpit de gestion.",
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
