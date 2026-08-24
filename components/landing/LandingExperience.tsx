import { BrandMark } from "@/components/landing/BrandMark";
import { DashboardMockup } from "@/components/landing/DashboardMockup";
import { HeaderClient } from "@/components/landing/HeaderClient";
import { Iphone, Samsung } from "@/components/landing/ProductDevices";
import { RevenueSimulator } from "@/components/landing/RevenueSimulator";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { faqs, sectors } from "@/components/landing/data";

const bakeryPhoto = "https://unsplash.com/photos/1sTxH4lyIXM/download?force=true";
const presentationPhoto = "https://unsplash.com/photos/tOy9vb-EEDw/download?force=true";
const counterPhoto = "https://unsplash.com/photos/zrD1yiGuewA/download?force=true";
const barberPhoto = "https://unsplash.com/photos/tdDPj4Jpwu4/download?force=true";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.1 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function FidelyaLogo({ small = false }: { small?: boolean }) {
  return (
    <span className={`bo-fidelya-logo${small ? " is-small" : ""}`} aria-label="FIDELYA, marque fictive de démonstration">
      <i>F</i><span><strong>FIDELYA</strong><small>Solutions de fidélité digitale</small></span>
    </span>
  );
}

function BenefitInterface({ type }: { type: "referral" | "campaign" | "stats" }) {
  if (type === "referral") {
    return (
      <div className="bo-interface bo-referral-ui" aria-label="Aperçu d'une interface de parrainage">
        <div className="bo-ui-top"><span>Parrainage</span><b>Actif</b></div>
        <div className="bo-referral-flow"><span>Camille</span><i>→</i><span>Alex</span></div>
        <div className="bo-referral-reward"><strong>+100 pts</strong><small>pour le parrain</small></div>
        <div className="bo-referral-link">Partager mon invitation <b>↗</b></div>
      </div>
    );
  }

  if (type === "campaign") {
    return (
      <div className="bo-interface bo-campaign-ui" aria-label="Aperçu d'une interface de campagne">
        <div className="bo-ui-top"><span>Campagne</span><b>Prête</b></div>
        <strong>Revenez cette semaine</strong>
        <p>-15 % sur votre prochaine visite.</p>
        <div className="bo-notification-preview"><span>F</span><div><b>Le Fournil</b><small>Votre offre vous attend.</small></div></div>
        <div className="bo-campaign-stats"><span><b>428</b><small>envoyées</small></span><span><b>62 %</b><small>ouvertes</small></span></div>
      </div>
    );
  }

  return (
    <div className="bo-interface bo-stats-ui" aria-label="Aperçu des statistiques clients">
      <div className="bo-ui-top"><span>Base clients</span><b>Ce mois</b></div>
      <strong>1 284 clients</strong>
      <div className="bo-chart-bars"><i style={{ height: "42%" }} /><i style={{ height: "58%" }} /><i style={{ height: "48%" }} /><i style={{ height: "72%" }} /><i style={{ height: "66%" }} /><i style={{ height: "88%" }} /><i style={{ height: "96%" }} /></div>
      <div className="bo-stat-row"><span>Fréquence moyenne</span><b>2,8 visites</b></div>
      <div className="bo-stat-row"><span>Clients revenus</span><b>+18 %</b></div>
    </div>
  );
}

export function LandingExperience() {
  return (
    <main className="site-shell bo-site">
      <HeaderClient />

      <section id="top" className="bo-hero" data-motion-section>
        <div className="bo-hero-grid-bg" />
        <div className="bo-hero-glow bo-hero-glow-a" /><div className="bo-hero-glow bo-hero-glow-b" />
        <div className="site-container bo-hero-layout">
          <div className="bo-hero-copy" data-reveal>
            <div className="bo-dev-note"><i /> En cours de développement</div>
            <p className="bo-overline">CRÉEZ VOTRE PROPRE ACTIVITÉ · PROPULSÉE PAR WALS</p>
            <h1>Lancez votre propre business <span>de fidélité digitale.</span></h1>
            <p className="bo-hero-promise">Votre marque. Vos prix. Vos clients. <strong>Notre technologie.</strong></p>
            <p className="bo-hero-lead">WALS vous donne les outils pour créer et vendre vos propres solutions de fidélité aux commerçants. Construisez votre offre, fixez vos tarifs et développez votre portefeuille clients.</p>
            <div className="bo-hero-actions"><a className="bo-primary-cta" href="#ouverture">Lancer mon activité <ArrowIcon /></a></div>
            <div className="bo-proof-row"><span><CheckIcon /> 100 % marque blanche</span><span><CheckIcon /> Vous fixez vos prix</span><span><CheckIcon /> Revenus mensuels récurrents</span></div>
          </div>

          <div className="bo-hero-business" data-reveal aria-label="Exemple de business créé avec WALS">
            <div className="bo-hero-business-ring" />
            <div className="bo-brand-origin"><span>WALS</span><i>→</i><strong>VOTRE MARQUE</strong></div>
            <article className="bo-fidelya-shell">
              <div className="bo-fidelya-head"><FidelyaLogo /><span>EXEMPLE DE MARQUE</span></div>
              <div className="bo-fidelya-main">
                <div className="bo-fidelya-offer"><small>FIDÉLITÉ DIGITALE</small><strong>39 €<em>/mois</em></strong><span>Carte Wallet · campagnes · statistiques</span></div>
                <div className="bo-fidelya-mini-dashboard">
                  <div><span>Clients actifs</span><strong>18</strong></div>
                  <div className="is-revenue"><span>Revenu mensuel</span><strong>702 €</strong></div>
                  <div><span>Nouveaux ce mois</span><strong>+3</strong></div>
                </div>
              </div>
              <div className="bo-fidelya-footer"><span>Votre marque devant.</span><small>Propulsé par <b>WALS</b></small></div>
            </article>
            <div className="bo-wallet-demo-card"><span>LE FOURNIL</span><strong>7 / 10 tampons</strong><div>{Array.from({ length: 10 }).map((_, index) => <i key={index} className={index < 7 ? "on" : ""}>F</i>)}</div><small>Carte créée par FIDELYA</small></div>
          </div>
        </div>
      </section>

      <section id="business" className="bo-opportunity dark-section" data-motion-section>
        <div className="site-container bo-section-layout">
          <div className="bo-section-copy" data-reveal>
            <p className="section-index light">01 / L'OPPORTUNITÉ</p>
            <h2>Et si votre prochain business <span>était déjà prêt ?</span></h2>
            <p>Pas de logiciel à développer. Pas d'application à créer. WALS fournit la technologie. Vous créez votre marque, construisez votre offre et trouvez vos clients.</p>
          </div>
          <div className="bo-opportunity-flow" data-reveal>
            <div className="bo-flow-node is-wals"><small>TECHNOLOGIE</small><strong>WALS</strong></div><i>↓</i>
            <div className="bo-flow-node is-brand"><small>IDENTITÉ</small><strong>VOTRE MARQUE</strong></div><i>↓</i>
            <div className="bo-flow-node"><small>PROPOSITION</small><strong>VOTRE OFFRE</strong></div><i>↓</i>
            <div className="bo-flow-node"><small>PORTEFEUILLE</small><strong>VOS COMMERCES</strong></div><i>↓</i>
            <div className="bo-flow-node is-money"><small>RÉCURRENCE</small><strong>VOS REVENUS</strong></div>
          </div>
          <p className="bo-opportunity-line" data-reveal>Vous développez votre activité. <strong>WALS fait fonctionner la technologie.</strong></p>
        </div>
      </section>

      <section className="bo-freedom light-section" data-motion-section>
        <div className="site-container">
          <div className="bo-heading-row" data-reveal><p className="section-index">02 / VOTRE LIBERTÉ</p><div><h2>Votre activité. <span>Vos règles.</span></h2><p>WALS fournit les outils. Le business vous appartient.</p></div></div>
          <div className="bo-freedom-grid">
            <article data-reveal><span>01</span><h3>Votre marque</h3><p>Utilisez votre logo, vos couleurs et votre identité.</p><div className="bo-freedom-visual bo-brand-mini"><FidelyaLogo small /></div></article>
            <article data-reveal><span>02</span><h3>Vos offres</h3><p>Construisez les offres que vous souhaitez proposer aux commerçants.</p><div className="bo-freedom-visual bo-offer-stack"><b>FIDÉLITÉ</b><b>PLAY</b><b>PACK COMPLET</b></div></article>
            <article data-reveal><span>03</span><h3>Vos prix</h3><p>Vous choisissez les tarifs facturés à vos clients.</p><div className="bo-freedom-visual bo-pricing-mini"><div><span>Fidélité</span><b>39 €/mois</b></div><div><span>Fidélité + Play</span><b>59 €/mois</b></div><div><span>Installation</span><b>99 €</b></div><small>Exemple de tarification.</small></div></article>
            <article data-reveal><span>04</span><h3>Vos clients</h3><p>Vous développez et gérez votre propre portefeuille de commerces.</p><div className="bo-freedom-visual bo-client-mini"><i>L</i><i>M</i><i>B</i><i>C</i><strong>+14</strong></div></article>
          </div>
          <div className="bo-core-message" data-reveal><span>WALS fournit les outils.</span><strong>Le business vous appartient.</strong></div>
        </div>
      </section>

      <section id="revenue" className="bo-revenue dark-section" data-motion-section>
        <div className="site-container">
          <div className="bo-heading-row bo-heading-light" data-reveal><p className="section-index light">03 / VOS REVENUS</p><div><h2>Un commerce après l'autre. <span>Un revenu qui se construit.</span></h2><p>Choisissez un prix, développez votre portefeuille et visualisez le chiffre d'affaires mensuel correspondant.</p></div></div>
          <RevenueSimulator />
        </div>
      </section>

      <section id="cockpit" className="bo-cockpit light-section" data-motion-section>
        <div className="site-container">
          <div className="bo-heading-row" data-reveal><p className="section-index">04 / VOTRE COCKPIT</p><div><h2>Votre business. <span>Un seul cockpit.</span></h2><p>Retrouvez vos prospects, vos démonstrations et vos clients depuis un seul espace.</p></div></div>
          <div className="bo-cockpit-frame" data-reveal><DashboardMockup /></div>
          <p className="bo-cockpit-desire" data-reveal>Imaginez <strong>vos propres commerces</strong> affichés ici.</p>
        </div>
      </section>

      <section id="solutions" className="bo-benefits light-section" data-motion-section>
        <div className="site-container">
          <div className="bo-heading-row" data-reveal><p className="section-index">05 / CE QUE VOUS VENDEZ</p><div><h2>Donnez aux commerces une raison <span>de vous payer chaque mois.</span></h2><p>Ne vendez pas des fonctionnalités. Vendez des résultats simples à comprendre.</p></div></div>
          <div className="bo-benefit-grid">
            <article className="bo-benefit-card bo-benefit-wide" data-reveal><div className="bo-benefit-copy"><span>01</span><h3>Faites revenir leurs clients</h3><p>Carte de fidélité digitale directement dans Apple Wallet et Google Wallet.</p></div><div className="bo-benefit-visual bo-phone-crop"><Iphone compact /></div></article>
            <article className="bo-benefit-card" data-reveal><div className="bo-benefit-copy"><span>02</span><h3>Attirez de nouveaux clients</h3><p>Parrainage et opérations d'acquisition faciles à expliquer.</p></div><div className="bo-benefit-visual"><BenefitInterface type="referral" /></div></article>
            <article className="bo-benefit-card" data-reveal><div className="bo-benefit-copy"><span>03</span><h3>Augmentez la fréquence d'achat</h3><p>Campagnes, offres et notifications pour créer des raisons de revenir.</p></div><div className="bo-benefit-visual"><BenefitInterface type="campaign" /></div></article>
            <article className="bo-benefit-card" data-reveal><div className="bo-benefit-copy"><span>04</span><h3>Créez de l'engagement</h3><p>Jeux, roue digitale et récompenses qui rendent l'expérience mémorable.</p></div><div className="bo-benefit-visual bo-phone-crop is-play"><Samsung compact /></div></article>
            <article className="bo-benefit-card bo-benefit-wide" data-reveal><div className="bo-benefit-copy"><span>05</span><h3>Aidez-les à mieux connaître leurs clients</h3><p>Base clients et statistiques pour suivre l'usage et mieux piloter les actions.</p></div><div className="bo-benefit-visual"><BenefitInterface type="stats" /></div></article>
          </div>
        </div>
      </section>

      <section id="how" className="bo-start dark-section" data-motion-section>
        <div className="site-container">
          <div className="bo-heading-row bo-heading-light" data-reveal><p className="section-index light">06 / DÉMARRER</p><div><h2>De zéro <span>à votre premier client.</span></h2><p>Un parcours simple à répéter commerce après commerce.</p></div></div>
          <div className="bo-start-grid">
            <article data-reveal><span>01</span><h3>Créez votre identité</h3><p>Votre nom, votre logo, vos couleurs.</p></article>
            <article data-reveal><span>02</span><h3>Préparez votre démo</h3><p>Créez une carte personnalisée pour votre prospect.</p></article>
            <article data-reveal><span>03</span><h3>Trouvez un commerce</h3><p>Restaurant, boulangerie, barber, institut, café, salle de sport…</p></article>
            <article data-reveal><span>04</span><h3>Présentez votre solution</h3><p>Montrez directement ce que vous pouvez mettre en place.</p></article>
            <article data-reveal><span>05</span><h3>Choisissez votre prix</h3><p>Vous définissez votre offre commerciale.</p></article>
            <article data-reveal><span>06</span><h3>Activez votre client</h3><p>Le commerce est actif et vous le gérez depuis votre espace.</p></article>
          </div>
          <p className="bo-repeat-line" data-reveal>Puis recommencez avec <strong>le suivant.</strong></p>
        </div>
      </section>

      <section id="terrain" className="bo-terrain light-section" data-motion-section>
        <div className="site-container">
          <div className="bo-heading-row" data-reveal><p className="section-index">07 / DU QUARTIER AU CLIENT</p><div><h2>Transformez un commerce autour de vous <span>en client.</span></h2><p>Le Fournil sert de fil rouge : un prospect réel, une démo concrète, une activation visible.</p></div></div>
          <div className="bo-story-grid">
            <article className="bo-story-card bo-story-photo" data-reveal style={{ backgroundImage: `linear-gradient(180deg,rgba(4,15,29,.08),rgba(4,15,29,.82)),url(${bakeryPhoto})` }}><span>ÉTAPE 1</span><div><small>PROSPECT IDENTIFIÉ ✓</small><h3>Le Fournil</h3><p>Une boulangerie de quartier à laquelle proposer une solution simple.</p></div></article>
            <article className="bo-story-card bo-story-wallet" data-reveal><span>ÉTAPE 2</span><div className="bo-story-device"><Iphone compact /></div><div className="bo-story-caption"><small>DÉMO PRÊTE ✓</small><h3>Le Fournil dans Wallet</h3></div></article>
            <article className="bo-story-card bo-story-photo" data-reveal style={{ backgroundImage: `linear-gradient(180deg,rgba(4,15,29,.08),rgba(4,15,29,.82)),url(${presentationPhoto})` }}><span>ÉTAPE 3</span><div><small>SOLUTION PRÉSENTÉE ✓</small><h3>Une démo, pas un discours.</h3><p>Le commerçant voit immédiatement ce que ses clients utiliseront.</p></div></article>
            <article className="bo-story-card bo-story-client" data-reveal><span>ÉTAPE 4</span><div className="bo-client-activated"><FidelyaLogo small /><div><small>NOUVEAU CLIENT ACTIF ✓</small><strong>Le Fournil</strong><span>Fidélité · 39 €/mois</span></div><b>ACTIF</b></div><div className="bo-story-caption"><h3>Le prospect rejoint votre portefeuille.</h3></div></article>
          </div>
        </div>
      </section>

      <section className="bo-white-label dark-section" data-motion-section>
        <div className="site-container">
          <div className="bo-heading-row bo-heading-light" data-reveal><p className="section-index light">08 / MARQUE BLANCHE</p><div><h2>Votre marque devant. <span>WALS derrière.</span></h2><p>Construisez votre activité sans avoir à développer la technologie.</p></div></div>
          <div className="bo-white-label-grid" data-reveal>
            <div className="bo-side-card is-you"><small>VOUS</small><FidelyaLogo /><ul><li>Votre marque</li><li>Votre logo</li><li>Vos offres</li><li>Vos prix</li><li>Vos prospects</li><li>Vos clients</li><li>Votre facturation</li><li>Votre relation commerciale</li></ul></div>
            <div className="bo-white-label-center"><span>VOUS VENDEZ</span><i>↔</i><strong>WALS OPÈRE</strong></div>
            <div className="bo-side-card is-wals"><small>WALS</small><BrandMark /><ul><li>Technologie</li><li>Wallet</li><li>Infrastructure</li><li>Hébergement</li><li>Outils</li><li>Mises à jour</li><li>Gestion technique</li></ul></div>
          </div>
          <p className="bo-white-label-line" data-reveal>Vous vendez. <strong>Nous faisons tourner la technologie.</strong></p>
        </div>
      </section>

      <section className="bo-photo-strip" data-motion-section>
        <div className="bo-photo-panel" style={{ backgroundImage: `linear-gradient(180deg,transparent,rgba(3,12,24,.72)),url(${counterPhoto})` }}><span>Une expérience montrée au comptoir.</span></div>
        <div className="bo-photo-panel" style={{ backgroundImage: `linear-gradient(180deg,transparent,rgba(3,12,24,.72)),url(${barberPhoto})` }}><span>Des commerces réels à prospecter.</span></div>
        <div className="bo-photo-panel bo-photo-wallets"><div className="bo-floating-wallet"><b>LE FOURNIL</b><span>7/10</span></div><div className="bo-floating-wallet is-beauty"><b>BELLA BEAUTY</b><span>VIP</span></div><div className="bo-floating-wallet is-barber"><b>MAISON BARBER</b><span>4/8</span></div><span>Une offre qui s'adapte à chaque commerce.</span></div>
      </section>

      <section className="bo-markets dark-section" data-motion-section>
        <div className="site-container">
          <div className="bo-heading-row bo-heading-light" data-reveal><p className="section-index light">09 / VOTRE MARCHÉ</p><div><h2>Des commerces <span>partout autour de vous.</span></h2><p>Chaque commerce qui cherche à fidéliser, engager ou faire revenir ses clients peut devenir une opportunité commerciale.</p></div></div>
          <div className="bo-market-grid">{sectors.map((sector, index) => <article key={sector} data-reveal><span>{String(index + 1).padStart(2, "0")}</span><strong>{sector}</strong><small>Prospect potentiel</small></article>)}</div>
          <div className="bo-market-marquee" aria-hidden="true"><div>{[...sectors, ...sectors].map((sector, index) => <span key={`${sector}-${index}`}>{sector}<i /></span>)}</div></div>
        </div>
      </section>

      <section className="bo-faq light-section" data-motion-section>
        <div className="site-container bo-faq-layout">
          <div className="bo-faq-heading" data-reveal><p className="section-index">10 / QUESTIONS</p><h2>Vous construisez le business. <span>WALS fournit la base.</span></h2><p>Les réponses essentielles avant de lancer votre activité.</p></div>
          <div className="bo-faq-list" data-reveal>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section id="ouverture" className="bo-final" data-motion-section>
        <div className="bo-final-grid" />
        <div className="site-container bo-final-layout">
          <div data-reveal><div className="bo-dev-note is-light"><i /> Accès partenaires en préparation</div><h2>Votre prochain business <span>peut commencer ici.</span></h2><p>Construisez votre marque. Choisissez vos prix. Trouvez vos premiers commerces. WALS fournit la technologie.</p><div className="bo-final-proof"><CheckIcon /> Aucune compétence en développement nécessaire.</div></div>
          <div className="bo-final-form" data-reveal><small>ÊTRE INFORMÉ DU LANCEMENT</small><h3>Lancer mon activité</h3><p>Laissez votre email pour recevoir l'ouverture des accès partenaires.</p><WaitlistForm /></div>
        </div>
      </section>

      <footer className="bo-footer">
        <div className="site-container bo-footer-inner"><div><BrandMark /><p>WALS fournit la technologie. Le business vous appartient.</p></div><div className="bo-footer-links"><a href="#business">Votre activité</a><a href="#solutions">Ce que vous vendez</a><a href="#how">Comment ça marche</a><a href="#cockpit">Votre Cockpit</a><a href="/confidentialite">Confidentialité</a></div><span>© 2026 WALS</span></div>
      </footer>
    </main>
  );
}
