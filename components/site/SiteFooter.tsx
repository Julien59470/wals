import Link from "next/link";

import { BrandMark } from "@/components/site/BrandMark";
import { contactEmail } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <BrandMark compact />
          <p>WALS prépare deux parcours de fidélité digitale : un pour les commerces et un pour les partenaires et revendeurs.</p>
        </div>
        <nav aria-label="Parcours WALS">
          <strong>Parcours</strong>
          <Link href="/commercants">Commerçants</Link>
          <Link href="/partenaires">Partenaires</Link>
        </nav>
        <nav aria-label="Informations légales et confidentialité">
          <strong>Informations</strong>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/cookies">Cookies & mesure d'audience</Link>
          <Link href="/accessibilite">Accessibilité</Link>
          <Link href="/desinscription">Désinscription</Link>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </nav>
      </div>
      <div className="site-container footer-bottom">
        <span>© 2026 WALS</span>
        <span>Ouverture prochaine · inscriptions à la liste de lancement disponibles.</span>
      </div>
    </footer>
  );
}
