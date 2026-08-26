import type { Metadata } from "next";
import Link from "next/link";

import { AudienceHeader } from "@/components/landing/AudienceHeader";
import { LaunchNotifyForm } from "@/components/site/LaunchNotifyForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import type { SectorPage as SectorData } from "@/lib/sectors";
import { canonicalDomain } from "@/lib/site";

export function sectorMetadata(sector: SectorData): Metadata {
  const path = `/commercants/${sector.slug}`;
  return {
    title: `${sector.shortName} — future fidélité digitale WALS`,
    description: `${sector.description} WALS est actuellement en cours de développement.`,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${canonicalDomain}${path}`,
      title: `${sector.shortName} — future fidélité digitale WALS`,
      description: `${sector.description} Découvrez le concept avant le lancement.`,
    },
  };
}

export function SectorLanding({ sector }: { sector: SectorData }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sector.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <AudienceHeader audience="merchant" />
      <main>
        <section className="subhero merchant-theme">
          <div className="site-container subhero-grid">
            <div>
              <Link className="breadcrumb" href="/commercants">← Tous les commerces</Link>
              <span className="eyebrow">WALS POUR {sector.shortName.toUpperCase()} · EN DÉVELOPPEMENT</span>
              <h1>{sector.title}</h1>
              <p>{sector.description} Les écrans et scénarios présentés décrivent le produit que WALS est en train de construire.</p>
              <div className="hero-actions"><a className="primary-button" href="#contact">Être prévenu du lancement</a><a className="text-link" href="#scenarios">Voir les cas d'usage →</a></div>
            </div>
            <div className="sector-hero-card">
              <small>LE POINT DE DÉPART</small>
              <strong>{sector.problem}</strong>
              <span>{sector.cadence}</span>
            </div>
          </div>
        </section>

        <section className="section light-section" id="scenarios">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow dark">CAS D'USAGE ENVISAGÉS</span><h2>Un parcours adapté au rythme réel du commerce.</h2><p>Ces scénarios illustrent le positionnement en cours de conception. Ils ne constituent pas encore des fonctionnalités commercialement disponibles.</p></div>
            <div className="three-grid">{sector.scenarios.map((scenario, index) => <article className="number-card" key={scenario.title}><span>0{index + 1}</span><h3>{scenario.title}</h3><p>{scenario.description}</p></article>)}</div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="site-container split-section">
            <div><span className="eyebrow">RÉCOMPENSES ENVISAGÉES</span><h2>Des avantages cohérents avec votre activité.</h2><p>Le futur programme doit pouvoir s'adapter à la fréquence de visite, à la marge disponible et à ce qui a réellement de la valeur pour le client.</p></div>
            <div className="reward-list">{sector.rewardIdeas.map((reward) => <div key={reward}><span aria-hidden="true">✓</span><strong>{reward}</strong></div>)}</div>
          </div>
        </section>

        <section className="section light-section">
          <div className="site-container faq-layout">
            <div className="section-heading compact"><span className="eyebrow dark">QUESTIONS</span><h2>Questions fréquentes avant le lancement.</h2></div>
            <div className="faq-list">{sector.faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="site-container contact-grid">
            <div><span className="eyebrow">WALS EST EN DÉVELOPPEMENT</span><h2>Recevez un email lorsque le parcours commerce ouvrira.</h2><p>Pas de formulaire commercial à remplir aujourd'hui : laissez uniquement votre email pour être prévenu de la sortie.</p></div>
            <LaunchNotifyForm audience="merchant" />
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
