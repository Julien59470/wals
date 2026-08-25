import type { Metadata } from "next";
import Link from "next/link";

import { LeadForm } from "@/components/site/LeadForm";
import { PartnerPreview } from "@/components/site/ProductPreview";
import { RevenueSimulator } from "@/components/site/RevenueSimulator";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StatusBadge } from "@/components/site/StatusBadge";
import { partnerFaq, partnerSupport, productFeatures } from "@/lib/content";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plateforme de fidélité en marque blanche pour partenaires",
  description: "WALS prépare un parcours partenaire pour proposer des solutions de fidélité digitale sous votre identité, créer vos offres et gérer votre portefeuille de commerces.",
  alternates: { canonical: "/partenaires" },
  openGraph: { url: `${canonicalDomain}/partenaires`, title: "WALS Partenaires — Construisez votre offre de fidélité digitale", description: "Votre marque, vos offres, vos clients. WALS prépare la technologie et les outils opérationnels." },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: partnerFaq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
};

export default function PartnersPage() {
  return (
    <>
      <SiteHeader audience="partner" />
      <main>
        <section className="subhero partner-theme">
          <div className="site-container subhero-grid">
            <div>
              <span className="eyebrow">POUR LES PARTENAIRES</span>
              <h1>Construisez votre offre. <span>WALS prépare la technologie.</span></h1>
              <p>Un parcours pensé pour les agences, indépendants et commerciaux qui veulent proposer des solutions de fidélité digitale aux commerces sans développer eux-mêmes toute l'infrastructure.</p>
              <div className="hero-actions"><a className="primary-button" href="#contact">Demander l'accès partenaire</a><a className="secondary-button" href="#modele">Comprendre le modèle</a></div>
              <div className="hero-proof"><span>Prix de revente libres</span><span>Identité partenaire au premier plan</span><span>Aucune promesse de revenu</span></div>
            </div>
            <PartnerPreview />
          </div>
        </section>

        <section className="section light-section" id="modele">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow dark">LE MODÈLE PARTENAIRE</span><h2>Votre relation commerciale devant. <span>WALS en infrastructure.</span></h2><p>Le niveau exact de marque blanche, la facturation WALS et les responsabilités contractuelles seront documentés avant ouverture. Le site n'utilise donc plus l'expression « 100 % marque blanche » comme garantie absolue.</p></div>
            <div className="three-grid">
              <article className="number-card"><span>01</span><h3>Votre identité</h3><p>Le modèle vise à mettre en avant votre nom, vos offres et votre relation avec les commerces, dans les limites du périmètre technique final.</p></article>
              <article className="number-card"><span>02</span><h3>Vos conditions commerciales</h3><p>Vous construisez votre offre de revente. Aucun exemple de prix n'est imposé ou suggéré par WALS sur cette page.</p></article>
              <article className="number-card"><span>03</span><h3>Votre portefeuille</h3><p>Le cockpit prévu centralise prospects, démonstrations, offres et commerces actifs dans un espace opérationnel.</p></article>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow dark">CE QUE VOUS POURREZ PROPOSER</span><h2>Des briques commerciales, pas une liste de buzzwords.</h2><p>Chaque capacité est reliée au bénéfice que le partenaire peut expliquer au commerce. Les statuts empêchent de présenter un module en préparation comme déjà disponible.</p></div>
            <div className="feature-grid">{productFeatures.map((feature, index) => <article className="feature-card" key={feature.title}><div className="feature-top"><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><StatusBadge status={feature.status} /></div><h3>{feature.title}</h3><p>{feature.description}</p><footer>{feature.partnerAngle}</footer></article>)}</div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="site-container split-section">
            <div><span className="eyebrow">SIMULATION LIBRE</span><h2>Testez votre propre modèle commercial.</h2><p>Le simulateur n'affiche aucun prix WALS, aucun tarif de revente recommandé et aucun calcul de « rentabilité garantie ». Il multiplie uniquement les valeurs que vous saisissez.</p></div>
            <RevenueSimulator />
          </div>
        </section>

        <section className="section light-section">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow dark">VOTRE COCKPIT</span><h2>Prospecter, démontrer, proposer, suivre.</h2><p>Un même espace est prévu pour accompagner le cycle commercial. L'interface ci-dessous est une illustration non contractuelle et ne contient volontairement aucun faux chiffre de performance.</p></div>
            <PartnerPreview />
          </div>
        </section>

        <section className="section soft-section">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow dark">VOUS NE PARTEZ PAS D'UNE PAGE BLANCHE</span><h2>Technologie, vente et prise en main.</h2><p>Les éléments ci-dessous font partie du parcours prévu. Ils restent indiqués comme en préparation jusqu'à leur ouverture effective.</p></div>
            <div className="support-grid">{partnerSupport.map((item, index) => <article className="support-card" key={item.title}><span>0{index + 1} · EN PRÉPARATION</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow">UN MARCHÉ RÉEL, DES CHIFFRES SOURCÉS</span><h2>Des dizaines de milliers de commerces dans plusieurs catégories cibles.</h2><p style={{ color: "rgba(255,255,255,.64)" }}>Plutôt qu'un chiffre global de « marché adressable » difficile à définir, WALS publie ici uniquement trois volumes officiels de la Base permanente des équipements 2024 de l'Insee, France entière.</p></div>
            <div className="market-grid">
              <article className="market-stat"><strong>50 106</strong><span>Boulangeries-pâtisseries</span><small>Nombre d'équipements recensés en 2024.</small></article>
              <article className="market-stat"><strong>93 948</strong><span>Activités de coiffure</span><small>Nombre d'équipements recensés en 2024.</small></article>
              <article className="market-stat"><strong>35 743</strong><span>Épiceries et supérettes</span><small>Nombre d'équipements recensés en 2024.</small></article>
            </div>
            <p className="source-note">Source : Insee, Base permanente des équipements 2024, France entière, parue le 10 juillet 2025. Ces volumes ne représentent pas des clients WALS ni une estimation de conversion. <a href="https://www.insee.fr/fr/statistiques/8610258?geo=FE-1" rel="noreferrer" target="_blank">Consulter la source officielle.</a></p>
          </div>
        </section>

        <section className="section light-section">
          <div className="site-container">
            <div className="section-heading"><span className="eyebrow dark">CHOISIR VOTRE PARCOURS</span><h2>Un discours adapté à votre activité.</h2></div>
            <div className="audience-grid">
              <Link className="audience-card partner" href="/partenaires/agences"><span className="audience-kicker">Agences</span><h2>Ajouter la fidélité digitale à votre offre.</h2><p>Pour les agences web, marketing, communication et acteurs locaux qui accompagnent déjà des entreprises.</p><strong>Parcours agences <span>→</span></strong></Link>
              <Link className="audience-card partner" href="/partenaires/independants-commerciaux"><span className="audience-kicker">Indépendants & commerciaux</span><h2>Construire un portefeuille de commerces.</h2><p>Pour les profils qui veulent prospecter localement et développer leur propre relation commerciale.</p><strong>Parcours indépendants <span>→</span></strong></Link>
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="site-container faq-layout">
            <div className="section-heading compact"><span className="eyebrow dark">QUESTIONS PARTENAIRES</span><h2>Ce que WALS promet — et ce qu'il ne promet pas encore.</h2></div>
            <div className="faq-list">{partnerFaq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="site-container contact-grid">
            <div><span className="eyebrow">PROGRAMME PARTENAIRE</span><h2>Présentez votre projet.</h2><p>La demande sert à qualifier votre besoin partenaire. L'inscription aux informations de lancement reste facultative et séparée.</p></div>
            <LeadForm audience="partner" />
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
