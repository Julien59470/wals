import type { Metadata } from "next";
import Link from "next/link";

import { LeadForm } from "@/components/site/LeadForm";
import { MerchantPreview, WalletCardPreview } from "@/components/site/ProductPreview";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StatusBadge } from "@/components/site/StatusBadge";
import { merchantFaq, productFeatures } from "@/lib/content";
import { sectors } from "@/lib/sectors";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fidélité digitale pour commerces",
  description: "WALS prépare une solution de fidélité digitale pour aider les commerces à faire revenir leurs clients avec une carte Wallet, des récompenses et des outils d'engagement.",
  alternates: { canonical: "/commercants" },
  openGraph: { url: `${canonicalDomain}/commercants`, title: "WALS pour les commerces — Faites revenir vos clients", description: "Carte de fidélité digitale, récompenses, engagement et suivi client dans un parcours dédié aux commerces." },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: merchantFaq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
};

export default function MerchantsPage() {
  return (
    <>
      <SiteHeader audience="merchant" />
      <main>
        <section className="subhero merchant-theme">
          <div className="site-container subhero-grid">
            <div>
              <span className="eyebrow">POUR LES COMMERCES</span>
              <h1>Faites revenir vos clients. <span>Plus naturellement.</span></h1>
              <p>WALS prépare une expérience de fidélité digitale pensée pour le commerce de proximité : une carte dans le téléphone, des récompenses claires et des outils pour garder le contact sans imposer une application WALS dédiée.</p>
              <div className="hero-actions"><a className="primary-button" href="#contact">Demander une présentation</a><a className="secondary-button" href="#fonctionnalites">Voir le produit</a></div>
              <div className="hero-proof"><span>Carte digitale pensée pour Wallet</span><span>Programme adapté au commerce</span><span>Périmètre clairement documenté</span></div>
            </div>
            <WalletCardPreview />
          </div>
        </section>

        <section className="section light-section" id="fonctionnalites">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow dark">CE QUE WALS PRÉPARE</span><h2>La fidélité expliquée par <span>des résultats concrets.</span></h2><p>Le site distingue volontairement les aperçus des fonctions en préparation. Rien n'est présenté comme définitivement disponible tant que le produit n'est pas ouvert commercialement.</p></div>
            <div className="feature-grid">{productFeatures.map((feature, index) => <article className="feature-card" key={feature.title}><div className="feature-top"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><StatusBadge status={feature.status} /></div><h3>{feature.title}</h3><p>{feature.description}</p><footer>{feature.merchantBenefit}</footer></article>)}</div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="site-container split-section" style={{ color: "var(--text)" }}>
            <div><span className="eyebrow dark">VOTRE ESPACE</span><h2>Suivre la fidélité sans transformer votre journée en tableau de bord.</h2><p style={{ color: "var(--muted)" }}>L'interface vise une lecture simple : activité, clients, récompenses et actions à préparer. Les chiffres montrés dans cet aperçu sont volontairement neutralisés pour ne pas fabriquer de performance.</p></div>
            <MerchantPreview />
          </div>
        </section>

        <section className="section dark-section">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow">COMMENT ÇA DOIT FONCTIONNER</span><h2>Du comptoir au retour client.</h2><p style={{ color: "rgba(255,255,255,.64)" }}>Un parcours court, compréhensible par l'équipe et par le client. Les modalités exactes de validation seront publiées lorsque le produit sera stabilisé.</p></div>
            <div className="steps-grid">
              <article className="number-card"><span>01</span><h3>Le client découvre</h3><p>Un QR code ou un point d'entrée simple lui présente le programme du commerce.</p></article>
              <article className="number-card"><span>02</span><h3>Il garde sa carte</h3><p>La carte est conçue pour rester accessible dans son Wallet plutôt que dans une application WALS séparée.</p></article>
              <article className="number-card"><span>03</span><h3>Le commerce fidélise</h3><p>Récompenses, suivi et actions de réactivation sont organisés autour de la relation client.</p></article>
            </div>
          </div>
        </section>

        <section className="section light-section">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow dark">SELON VOTRE ACTIVITÉ</span><h2>Une mécanique différente selon le commerce.</h2><p>Pas de pages sectorielles générées automatiquement à vide : chaque secteur ci-dessous dispose de cas d'usage, récompenses et objections propres.</p></div>
            <div className="sector-grid">{sectors.map((sector) => <Link className="sector-link" href={`/commercants/${sector.slug}`} key={sector.slug}><span>WALS POUR</span><strong>{sector.name}</strong><small>Voir les cas d'usage →</small></Link>)}</div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="site-container faq-layout">
            <div className="section-heading compact"><span className="eyebrow dark">QUESTIONS</span><h2>Ce qui est déjà clair avant le lancement.</h2></div>
            <div className="faq-list">{merchantFaq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="site-container contact-grid">
            <div><span className="eyebrow">PRÉSENTER VOTRE BESOIN</span><h2>Parlons de votre commerce.</h2><p>Cette demande sert uniquement à traiter votre prise de contact. L'inscription aux informations de lancement est séparée et facultative.</p></div>
            <LeadForm audience="merchant" />
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
