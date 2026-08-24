import { BrandMark } from "@/components/landing/BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer"><div className="site-container footer-inner"><div className="footer-brand"><BrandMark /><p>La plateforme de vente terrain pensée pour les revendeurs de solutions digitales aux commerces.</p></div><div className="footer-links"><div><strong>Produit</strong><a href="#solutions">Fidélité</a><a href="#solutions">Roue</a><a href="#cockpit">Cockpit</a></div><div><strong>WALS</strong><a href="#business">Votre business</a><a href="#terrain">Vente terrain</a><a href="#ouverture">Ouverture</a></div><div><strong>Informations</strong><a href="/confidentialite">Confidentialité</a><span>Plateforme en développement</span></div></div><div className="footer-bottom"><span>© 2026 WALS</span><span>Conçu pour la prospection terrain.</span></div></div></footer>
  );
}
