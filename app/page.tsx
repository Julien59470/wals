import { AudienceChooser } from "@/components/site/AudienceChooser";
import { BrandMark } from "@/components/site/BrandMark";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="site-container home-hero-inner">
            <div className="hero-logo"><BrandMark /></div>
            <span className="eyebrow">LA FIDÉLITÉ DIGITALE, DEUX FAÇONS DE L'UTILISER</span>
            <h1>Une technologie. <span>Deux parcours.</span></h1>
            <p className="home-hero-lead">WALS prépare une plateforme pour aider les commerces à fidéliser leurs clients et permettre à des partenaires de proposer leurs propres solutions sous leur identité.</p>
          </div>
        </section>
        <section className="choice-section">
          <div className="site-container"><AudienceChooser /></div>
        </section>
        <section className="platform-intro">
          <div className="site-container">
            <div className="intro-grid">
              <div><span className="eyebrow dark">LE SOCLE WALS</span><h2>Le produit reste le même. Le besoin change.</h2></div>
              <p>Le commerce cherche à faire revenir ses clients. Le partenaire cherche à construire une offre professionnelle autour de cette technologie. Chaque parcours possède donc son propre contenu, ses propres démonstrations et sa propre conversion.</p>
            </div>
            <div className="principles">
              <article><span>01</span><h3>Pas de promesse fictive</h3><p>Les fonctions non finalisées sont indiquées comme aperçus ou en préparation.</p></article>
              <article><span>02</span><h3>Pas de tarif inventé</h3><p>Aucun prix WALS ni prix de revente n'est publié tant que le modèle n'est pas arrêté.</p></article>
              <article><span>03</span><h3>Deux funnels séparés</h3><p>Les demandes commerçants et partenaires sont enregistrées avec des finalités distinctes.</p></article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
