import { AudienceHeader } from "@/components/landing/AudienceHeader";
import { BrandMark } from "@/components/landing/BrandMark";
import { DashboardMockup } from "@/components/landing/DashboardMockup";
import { MotionExperience } from "@/components/landing/MotionExperience";
import { Iphone, Samsung } from "@/components/landing/ProductDevices";
import { RevenueSimulator } from "@/components/landing/RevenueSimulator";
import { ArrowIcon, BenefitInterface, CheckIcon, FidelyaLogo } from "@/components/landing/VisualInterfaces";
import { LaunchNotifyForm } from "@/components/site/LaunchNotifyForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { partnerFaq, partnerSupport } from "@/lib/content";

export function PartnerExperience() {
  return (
    <div className="site-shell bo-site partner-site">
      <MotionExperience/>
      <AudienceHeader audience="partner"/>
      <main>
        <section id="top" className="bo-hero ux-partner-hero" data-motion-section>
          <div className="bo-hero-grid-bg"/>
          <div className="bo-hero-glow bo-hero-glow-a"/>
          <div className="bo-hero-glow bo-hero-glow-b"/>
          <div className="site-container bo-hero-layout">
            <div className="bo-hero-copy" data-reveal>
              <div className="bo-dev-note"><i/> Ouverture prochaine du programme partenaire</div>
              <p className="bo-overline">MARQUE · OFFRES · TARIFS · PORTEFEUILLE</p>
              <h1>Développez votre activité <span>de fidélité digitale.</span></h1>
              <p className="bo-hero-promise">Votre marque. Vos prix. Vos clients. <strong>La technologie WALS.</strong></p>
              <p className="bo-hero-lead">Personnalisez votre identité, créez vos offres, fixez vos tarifs et développez votre portefeuille de commerces avec les outils WALS.</p>
              <div className="bo-hero-actions"><a className="bo-primary-cta" href="#ouverture">Me prévenir de l'ouverture <ArrowIcon/></a></div>
              <div className="bo-proof-row"><span><CheckIcon/> Votre identité</span><span><CheckIcon/> Vos tarifs</span><span><CheckIcon/> Vos commerces</span></div>
            </div>

            <div className="bo-hero-business ux-partner-stage" data-reveal>
              <div className="bo-hero-business-ring"/>
              <div className="bo-brand-origin"><span>TECHNOLOGIE WALS</span><i>→</i><strong>VOTRE IDENTITÉ</strong></div>
              <article className="bo-fidelya-shell ux-partner-shell">
                <div className="bo-fidelya-head"><FidelyaLogo/><span>EXEMPLE DE MARQUE PARTENAIRE</span></div>
                <div className="bo-fidelya-main">
                  <div className="bo-fidelya-offer"><small>EXEMPLE DE TARIF DE REVENTE</small><strong>39 €<em>/mois</em></strong><span>Fidélité · campagnes · statistiques</span></div>
                  <div className="bo-fidelya-mini-dashboard"><div><span>Clients actifs</span><strong>18</strong></div><div className="is-revenue"><span>CA brut indicatif</span><strong>702 €</strong></div><div><span>Nouveaux ce mois</span><strong>+3</strong></div></div>
                </div>
                <div className="bo-fidelya-footer"><span>Votre activité au premier plan</span><small>Technologie <b>WALS</b></small></div>
              </article>
              <div className="ux-partner-tags"><span>Votre identité</span><span>Vos tarifs</span><span>Vos commerces</span></div>
            </div>
          </div>
        </section>

        <section id="business" className="bo-opportunity dark-section ux-partner-model" data-motion-section>
          <div className="site-container bo-section-layout">
            <div className="bo-section-copy" data-reveal>
              <p className="section-index light">01 / LE MODÈLE</p>
              <h2>Votre activité <span>au premier plan.</span></h2>
              <p>Vous gérez votre marque, vos offres, vos prospects et votre relation commerciale. WALS fournit la technologie et les outils nécessaires au fonctionnement de l'offre.</p>
            </div>
            <div className="bo-opportunity-flow" data-reveal>
              <div className="bo-flow-node is-wals"><small>TECHNOLOGIE</small><strong>WALS</strong></div><i>↓</i>
              <div className="bo-flow-node is-brand"><small>IDENTITÉ</small><strong>VOTRE MARQUE</strong></div><i>↓</i>
              <div className="bo-flow-node"><small>OFFRE</small><strong>VOS SERVICES</strong></div><i>↓</i>
              <div className="bo-flow-node"><small>PORTEFEUILLE</small><strong>VOS COMMERCES</strong></div>
            </div>
            <p className="bo-opportunity-line" data-reveal>Technologie WALS → Votre identité → Votre offre → <strong>Vos commerces.</strong></p>
          </div>
        </section>

        <section className="bo-freedom light-section ux-freedom-section" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row" data-reveal>
              <p className="section-index">02 / VOTRE LIBERTÉ</p>
              <div><h2>Votre marque. <span>Vos offres. Vos tarifs.</span></h2><p>Personnalisez votre identité commerciale, composez les services proposés, fixez librement vos tarifs de revente et développez votre propre portefeuille.</p></div>
            </div>
            <div className="bo-freedom-grid ux-premium-cards">
              <article data-reveal><span>01</span><h3>Votre marque</h3><p>Votre identité commerciale reste au premier plan dans la relation avec vos commerces.</p><div className="bo-freedom-visual bo-brand-mini"><FidelyaLogo small/></div></article>
              <article data-reveal><span>02</span><h3>Vos offres</h3><p>Composez les services que vous souhaitez présenter selon votre positionnement.</p><div className="bo-freedom-visual bo-offer-stack"><b>FIDÉLITÉ</b><b>PLAY</b><b>ENGAGEMENT</b></div></article>
              <article data-reveal><span>03</span><h3>Vos tarifs</h3><p>Fixez librement vos tarifs de revente et structurez votre propre modèle commercial.</p><div className="bo-freedom-visual bo-pricing-mini"><div><span>Exemples mensuels</span><b>29 · 39 · 49 · 59 · 69 €</b></div><div><span>Options</span><b>SELON VOTRE OFFRE</b></div></div></article>
              <article data-reveal><span>04</span><h3>Vos clients</h3><p>Développez votre propre portefeuille de commerces et votre relation commerciale.</p><div className="bo-freedom-visual bo-client-mini"><i>L</i><i>M</i><i>B</i><i>C</i><strong>+18</strong></div></article>
            </div>
          </div>
        </section>

        <section id="revenue" className="bo-revenue dark-section ux-revenue-section" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row bo-heading-light" data-reveal>
              <p className="section-index light">03 / SIMULATEUR</p>
              <div><h2>Projetez le potentiel <span>de votre portefeuille.</span></h2><p>Choisissez un tarif de revente et un nombre de commerces pour visualiser un chiffre d'affaires mensuel brut indicatif.</p></div>
            </div>
            <RevenueSimulator/>
          </div>
        </section>

        <section id="cockpit" className="bo-cockpit light-section ux-product-proof" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row" data-reveal>
              <p className="section-index">04 / COCKPIT PARTENAIRE</p>
              <div><h2>Pilotez votre activité <span>depuis un seul espace.</span></h2><p>Centralisez vos prospects, démonstrations, clients et indicateurs commerciaux pour suivre votre activité au quotidien.</p></div>
            </div>
            <div className="ux-dashboard-annotations" data-reveal><span>Prospectez</span><span>Présentez</span><span>Convertissez</span><span>Gérez</span></div>
            <div className="bo-cockpit-frame ux-dashboard-frame" data-reveal><DashboardMockup/></div>
          </div>
        </section>

        <section id="solutions" className="bo-benefits light-section ux-partner-solutions" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row" data-reveal>
              <p className="section-index">05 / VOTRE OFFRE</p>
              <div><h2>Des solutions concrètes <span>à proposer aux commerces.</span></h2><p>Fidélité Wallet, parrainage, campagnes, Play et statistiques : les principales expériences à intégrer à votre offre.</p></div>
            </div>
            <span className="ux-preview-badge">Aperçu avant ouverture</span>
            <div className="bo-benefit-grid ux-partner-benefits">
              <article className="bo-benefit-card bo-benefit-wide" data-reveal><div className="bo-benefit-copy"><span>01</span><h3>Fidélité Wallet</h3><p>Une carte digitale accessible depuis le Wallet du client.</p></div><div className="bo-benefit-visual bo-phone-crop"><Iphone compact/></div></article>
              <article className="bo-benefit-card" data-reveal><div className="bo-benefit-copy"><span>02</span><h3>Parrainage</h3><p>Une mécanique pour transformer les clients satisfaits en recommandations.</p></div><div className="bo-benefit-visual"><BenefitInterface type="referral"/></div></article>
              <article className="bo-benefit-card" data-reveal><div className="bo-benefit-copy"><span>03</span><h3>Campagnes</h3><p>Des communications pensées pour favoriser le retour client.</p></div><div className="bo-benefit-visual"><BenefitInterface type="campaign"/></div></article>
              <article className="bo-benefit-card" data-reveal><div className="bo-benefit-copy"><span>04</span><h3>Play</h3><p>Roue digitale et récompenses pour créer davantage d'engagement.</p></div><div className="bo-benefit-visual bo-phone-crop is-play"><Samsung compact/></div></article>
              <article className="bo-benefit-card bo-benefit-wide" data-reveal><div className="bo-benefit-copy"><span>05</span><h3>Statistiques</h3><p>Des indicateurs pour suivre l'utilisation et mieux piloter la fidélité.</p></div><div className="bo-benefit-visual"><BenefitInterface type="stats"/></div></article>
            </div>
          </div>
        </section>

        <section id="how" className="bo-start dark-section ux-commercial-path" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row bo-heading-light" data-reveal><p className="section-index light">06 / PARCOURS COMMERCIAL</p><div><h2>Du premier prospect <span>au premier client.</span></h2><p>Un parcours simple pour structurer votre lancement commerce après commerce.</p></div></div>
            <div className="bo-start-grid ux-commercial-grid">
              {[
                ["01","Personnalisez votre identité"], ["02","Préparez une démo"], ["03","Identifiez vos prospects"],
                ["04","Présentez votre offre"], ["05","Fixez vos tarifs"], ["06","Suivez vos clients depuis votre cockpit"],
              ].map(([number,label]) => <article data-reveal key={number}><span>{number}</span><h3>{label}</h3></article>)}
            </div>
          </div>
        </section>

        <section className="bo-white-label dark-section ux-white-label" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row bo-heading-light" data-reveal>
              <p className="section-index light">07 / MARQUE BLANCHE</p>
              <div><h2>Votre marque. <span>La technologie à votre service.</span></h2><p>Développez votre activité sous votre propre identité grâce aux outils WALS. Votre marque et votre relation commerciale restent au premier plan, tandis que WALS opère la couche technologique.</p></div>
            </div>
            <div className="ux-white-label-flow" data-reveal>
              <div><small>01</small><BrandMark/><strong>TECHNOLOGIE WALS</strong></div><i>→</i>
              <div className="is-personalize"><small>02</small><span className="ux-customize-symbol">✦</span><strong>PERSONNALISATION</strong></div><i>→</i>
              <div className="is-partner"><small>03</small><FidelyaLogo/><strong>VOTRE MARQUE</strong></div>
            </div>
            <div className="ux-white-label-proof" data-reveal><span>Votre marque au premier plan.</span><div className="ux-partner-wallet-card"><FidelyaLogo small/><strong>CARTE DE FIDÉLITÉ</strong><div>{Array.from({length:8}).map((_,index)=><i key={index} className={index<5?"on":""}>F</i>)}</div><small>Expérience personnalisée</small></div></div>
          </div>
        </section>

        <section className="bo-freedom light-section ux-support-section" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row" data-reveal><p className="section-index">08 / ACCOMPAGNEMENT</p><div><h2>Les outils pour passer <span>du prospect au client.</span></h2><p>Démos personnalisées, supports commerciaux, formation et accompagnement : des ressources conçues pour présenter l'offre, prospecter et démarrer plus facilement.</p></div></div>
            <div className="bo-freedom-grid ux-support-grid">
              {partnerSupport.map((item,index) => <article key={item.title} data-reveal><span>0{index+1}</span><div className="ux-support-preview"><i/><i/><i/><b>{index === 0 ? "DÉMO" : index === 1 ? "SUPPORT" : index === 2 ? "FORMATION" : "WALS"}</b></div><h3>{item.title}</h3><p>{item.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bo-faq light-section" data-motion-section>
          <div className="site-container bo-faq-layout">
            <div className="bo-faq-heading" data-reveal><p className="section-index">09 / QUESTIONS</p><h2>Préparez le lancement <span>de votre activité.</span></h2><p>Les dernières réponses utiles avant l'ouverture du programme Partenaires WALS.</p></div>
            <div className="bo-faq-list" data-reveal>{partnerFaq.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section id="ouverture" className="bo-final" data-motion-section>
          <div className="bo-final-grid"/>
          <div className="site-container bo-final-layout">
            <div data-reveal><div className="bo-dev-note is-light"><i/> Ouverture prochaine</div><h2>Préparez le lancement <span>de votre activité.</span></h2><p>Laissez votre email pour être prévenu dès l'ouverture du programme Partenaires WALS.</p><div className="bo-final-proof"><CheckIcon/> Une inscription suffit pour être prévenu de l'ouverture.</div></div>
            <div className="bo-final-form" data-reveal><small>OUVERTURE WALS · PARTENAIRES</small><h3>Me prévenir de l'ouverture</h3><LaunchNotifyForm audience="partner"/></div>
          </div>
        </section>
      </main>
      <SiteFooter/>
    </div>
  );
}
