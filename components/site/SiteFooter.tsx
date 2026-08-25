import Link from "next/link";

import { BrandMark } from "@/components/site/BrandMark";
import { contactEmail } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <BrandMark compact />
          <p>La même technologie, deux parcours : fidéliser son commerce ou construire une offre en marque blanche.</p>
        </div>
        <nav aria-label="Parcours WALS">
          <strong>Parcours</strong>
          <Link href="/commercants">Commerçants</Link>
          <Link href="/partenaires">Partenaires</Link>
          <Link href="/partenaires/agences">Agences</Link>
          <Link href="/partenaires/independants-commerciaux">Indépendants</Link>
        </nav>
        <nav aria-label="Informations légales">
          <strong>Informations</strong>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/desinscription">Désinscription</Link>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </nav>
      </div>
      <div className="site-container footer-bottom">
        <span>© 2026 WALS</span>
        <span>Plateforme en cours de développement.</span>
      </div>
    </footer>
  );
}
