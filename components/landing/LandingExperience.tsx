import { BrandMark } from "@/components/landing/BrandMark";
import { HeaderClient } from "@/components/landing/HeaderClient";

const sectors = ["BOULANGERIES", "BARBERS", "COIFFEURS", "RESTAURANTS", "INSTITUTS", "COFFEE SHOPS", "PIZZERIAS", "COMMERCES DE PROXIMITÉ"] as const;

const faqs = [
  ["Puis-je vendre uniquement la fidélité ou uniquement la roue ?", "Oui. Les deux solutions sont pensées pour être commercialisées séparément ou réunies dans une même offre selon le besoin du commerce."],
  ["Est-ce moi qui construis mon offre commerciale ?", "Oui. WALS est conçu pour vous laisser structurer votre proposition, votre accompagnement et votre prix de vente au commerce."],
  ["Puis-je préparer une démo avant d'entrer chez un prospect ?", "C'est un principe central de WALS : préparer une démonstration aux couleurs du commerce pour arriver avec quelque chose de concret à montrer, plutôt qu'avec une simple promesse."],
  ["Le commerçant doit-il installer du matériel ?", "WALS est pensé autour d'expériences légères : QR code, navigateur mobile et Wallet. L'objectif est de limiter au maximum la friction et le matériel nécessaire sur place."],
  ["Puis-je gérer plusieurs commerces ?", "Oui. Le cockpit revendeur est conçu pour suivre vos prospects, vos démos, vos commerces actifs et l'activité de votre portefeuille depuis un seul espace."],
  ["Est-ce que l'expérience sera personnalisable ?", "Oui. L'identité du commerce, ses couleurs, ses offres et ses paramètres feront partie de la personnalisation. Les options exactes liées à l'identité revendeur seront précisées à l'ouverture."],
] as const;

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.1 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Iphone({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`device iphone ${compact ? "device-compact" : ""}`} aria-label="Aperçu d'une carte de fidélité digitale WALS">
      <div className="device-screen iphone-screen">
        <div className="device-status"><span>09:41</span><span>● ● ●</span></div>
        <div className="dynamic-island" />
        <div className="wallet-head"><span>APPLE WALLET</span><strong>Mes cartes</strong></div>
        <div className="wallet-pass">
          <div className="pass-top"><div className="pass-logo">W</div><div><span>Boulangerie</span><strong>Le Fournil</strong></div><span className="pass-count"><b>6</b>/10</span></div>
          <div className="stamp-grid">
            {Array.from({ length: 10 }).map((_, index) => <span key={index} className={`stamp ${index < 6 ? "stamp-on" : index === 6 ? "stamp-next" : ""}`}>{index < 7 ? "W" : ""}</span>)}
          </div>
          <div className="pass-note"><strong className="pass-note-before">Encore 4 passages</strong><strong className="pass-note-after">Encore 3 passages</strong><span>avant votre récompense</span></div>
          <div className="wallet-code"><i /><i /><i /><i /><i /></div>
        </div>
        <div className="wallet-notification"><span>W</span><div><strong>Le Fournil</strong><small>Un nouveau tampon vient d'être ajouté.</small></div></div>
        <div className="iphone-home" />
      </div>
    </div>
  );
}

function Samsung({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`device samsung ${compact ? "device-compact" : ""}`} aria-label="Aperçu de la roue digitale WALS">
      <div className="device-screen samsung-screen">
        <div className="device-status"><span>09:41</span><span>● ● ●</span></div>
        <div className="camera-hole" />
        <div className="wheel-app-head"><div className="pass-logo small">W</div><div><span>LE FOURNIL</span><strong>Votre chance du jour</strong></div></div>
        <div className="wheel-area"><span className="wheel-pointer" /><div className="android-wheel"><span>-10%</span><span>PERDU</span><span>CAFÉ</span><span>-20%</span><div className="wheel-hub">W</div></div></div>
        <div className="spin-button">Lancer la roue</div>
        <div className="wheel-win"><span>GAGNÉ</span><strong>Café offert</strong><small>Coupon valable lors de votre prochaine visite</small></div>
        <div className="android-gesture" />
      </div>
    </div>
  );
}

function DashboardMockup() {
  const rows = [
    ["Le Fournil", "Fidélité", "Actif", "À suivre"],
    ["Nova Beauty", "Roue", "Démo prête", "Visite 14:30"],
    ["Barber 22", "Fidélité + Roue", "Actif", "Bonne santé"],
  ] as const;

  return (
    <div className="dashboard-frame" aria-label="Aperçu du futur cockpit revendeur WALS">
      <div className="dashboard-topbar"><span className="dashboard-dots"><i /><i /><i /></span><span>app.wals.fr / cockpit</span><b>Aperçu produit</b></div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand"><span>W</span><strong>WALS</strong></div>
          <nav><a className="active">Vue terrain</a><a>Prospects</a><a>Démonstrations</a><a>Commerces</a><a>Activité</a></nav>
          <div className="sidebar-status"><i /> Espace revendeur</div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-heading"><div><span>VOTRE ACTIVITÉ</span><h3>Bonjour.</h3></div><div className="dashboard-cta">+ Nouvelle démo</div></div>
          <div className="dashboard-metrics">
            <div><span>Prospects à visiter</span><strong>12</strong><small>4 aujourd'hui</small></div>
            <div><span>Démos prêtes</span><strong>07</strong><small>Personnalisées</small></div>
            <div><span>Commerces actifs</span><strong>18</strong><small>Votre portefeuille</small></div>
          </div>
          <div className="dashboard-grid">
            <div className="dashboard-panel"><div className="panel-title"><strong>Pipeline terrain</strong><span>Cette semaine</span></div><div className="pipeline"><span><b>18</b><small>Prospects</small></span><i /><span><b>11</b><small>Démos</small></span><i /><span><b>5</b><small>Signés</small></span></div></div>
            <div className="dashboard-panel health-panel"><div className="panel-title"><strong>Santé portefeuille</strong><span>Live</span></div><strong className="health-score">87<small>/100</small></strong><p>3 comptes à relancer</p></div>
          </div>
          <div className="dashboard-table">
            <div className="table-head"><span>Commerce</span><span>Solution</span><span>État</span><span>Prochaine action</span></div>
            {rows.map(([name, module, state, action]) => <div className="table-row" key={name}><span><i>{name[0]}</i>{name}</span><span>{module}</span><span><b>{state}</b></span><span>{action}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingExperience() {
  return (
    <main className="site-shell">
      <HeaderClient />

      <section id="top" className="hero-section" data-motion-section>
        <div className="hero-grid" /><div className="hero-orbit hero-orbit-a" /><div className="hero-orbit hero-orbit-b" /><div className="hero-glow hero-glow-orange" /><div className="hero-glow hero-glow-blue" />
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <div className="launch-pill"><span className="launch-signal"><i /></span> Plateforme en développement</div>
            <p className="hero-overline">POUR REVENDEURS · COMMERCIAUX INDÉPENDANTS · AGENCES</p>
            <h1 className="hero-title">Transformez votre prospection terrain <span>en offres digitales à revendre.</span></h1>
            <p className="hero-lead">Fidélité digitale, roue interactive, démonstrations personnalisées et pilotage commercial. WALS prépare tout ce qu'il faut pour arriver chez un commerce avec une offre concrète, visuelle et prête à présenter.</p>
            <div className="hero-actions"><a className="primary-link" href="#solutions">Découvrir WALS <ArrowIcon /></a><span className="build-note"><i /> Pensé pour la vente terrain</span></div>
            <div className="hero-manifest" aria-label="Promesse WALS"><span>PROSPECTEZ.</span><span>DÉMONTREZ.</span><span>VENDEZ.</span><span>DÉVELOPPEZ.</span></div>
          </div>
          <div className="hero-stage">
            <div className="stage-ring stage-ring-one" /><div className="stage-ring stage-ring-two" />
            <div className="device-wrap iphone-wrap"><Iphone /></div><div className="device-wrap samsung-wrap"><Samsung /></div>
            <div className="stage-label stage-label-a"><span>01</span><strong>WALS Fidélité</strong><small>Apple & Google Wallet</small></div>
            <div className="stage-label stage-label-b"><span>02</span><strong>WALS Play</strong><small>Roue & coupons</small></div>
            <div className="stage-label stage-label-c"><span>03</span><strong>WALS Cockpit</strong><small>Prospects & commerces</small></div>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true"><div className="ticker-track">{[...sectors.slice(0,4), ...sectors.slice(0,4)].map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}</div></div>
      </section>

      <section id="solutions" className="solutions-section light-section" data-motion-section>
        <div className="site-container">
          <div className="section-intro" data-reveal><p className="section-index">01 / VOTRE GAMME</p><div><h2>Deux solutions à vendre.<br /><span>Un écosystème pour les piloter.</span></h2><p>Construisez une offre adaptée à chaque commerce : fidélité seule, roue seule ou combinaison des deux. WALS Cockpit centralise ensuite vos démonstrations et votre portefeuille.</p></div></div>
          <div className="product-grid">
            <article className="product-card loyalty-card" data-reveal><div className="product-copy"><span className="product-index">01</span><span className="product-tag">WALS FIDÉLITÉ</span><h3>Une fidélité digitale que le commerçant comprend en quelques secondes.</h3><p>Carte personnalisée dans Apple Wallet ou Google Wallet, points ou tampons, progression, récompenses et identité visuelle du commerce.</p><div className="product-points"><span><CheckIcon /> Démo personnalisable</span><span><CheckIcon /> Points & tampons</span><span><CheckIcon /> Wallet mobile</span></div></div><div className="product-visual loyalty-visual"><Iphone compact /><div className="visual-callout callout-one"><b>7/10</b><span>Tampons</span></div></div></article>
            <article className="product-card play-card" data-reveal><div className="product-copy"><span className="product-index">02</span><span className="product-tag orange">WALS PLAY</span><h3>Une expérience qui arrête le regard et rend la démo mémorable.</h3><p>Le prospect scanne un QR code, la roue tourne et l'expérience devient immédiatement concrète : gains, coupons, règles, limites et branding.</p><div className="product-points"><span><CheckIcon /> QR immédiat</span><span><CheckIcon /> Gains & coupons</span><span><CheckIcon /> Règles configurables</span></div></div><div className="product-visual play-visual"><Samsung compact /><div className="visual-callout callout-two"><b>Café offert</b><span>Exemple de gain</span></div></div></article>
          </div>
        </div>
      </section>

      <section id="business" className="business-section dark-section" data-motion-section>
        <div className="site-container">
          <div className="business-heading" data-reveal><p className="section-index light">02 / VOTRE BUSINESS</p><h2>Votre offre.<br />Vos prix.<br /><span>Vos clients.</span></h2><p>WALS ne doit pas seulement vous donner un produit à montrer. La plateforme est pensée pour vous aider à construire une activité commerciale autour de solutions digitales simples à démontrer et à revendre.</p></div>
          <div className="business-pillars">
            <article data-reveal><span>01</span><h3>Construisez votre offre</h3><p>Fidélité, roue ou combinaison des deux : adaptez votre proposition à chaque commerce et à votre méthode de vente.</p></article>
            <article data-reveal><span>02</span><h3>Fixez votre tarif</h3><p>Vous gardez la maîtrise de votre proposition commerciale et de la valeur que vous apportez au commerce.</p></article>
            <article data-reveal><span>03</span><h3>Développez votre portefeuille</h3><p>Prospects, démonstrations et commerces actifs restent réunis dans un cockpit construit autour de votre activité.</p></article>
          </div>
          <div className="business-metric-strip" data-reveal><div><strong>0</strong><span>application WALS à imposer au client final</span></div><div><strong>2</strong><span>solutions indépendantes à commercialiser</span></div><div><strong>1</strong><span>cockpit pour piloter votre activité</span></div></div>
        </div>
      </section>

      <section id="terrain" className="field-section" data-motion-section>
        <div className="site-container">
          <div className="field-heading" data-reveal><p className="section-index">03 / CONÇU POUR LE TERRAIN</p><h2>Du premier prospect<br /><span>au commerce actif.</span></h2><p>Une seule histoire. Un seul commerce fictif. Tout le parcours WALS en quelques secondes.</p></div>
          <div className="workflow-cinema" data-reveal>
            <div className="workflow-step-card step-prospect"><span>01</span><small>PROSPECT</small><strong>Le Fournil</strong><p>Boulangerie · 1 établissement</p><b>À préparer</b></div>
            <div className="workflow-arrow"><i /><i /><i /></div>
            <div className="workflow-step-card step-demo"><span>02</span><small>DÉMO</small><strong>Le Fournil</strong><div className="mini-brand"><b>W</b><em>Aux couleurs du commerce</em></div><b>Prête à montrer</b></div>
            <div className="workflow-arrow"><i /><i /><i /></div>
            <div className="workflow-step-card step-scan"><span>03</span><small>PRÉSENTATION</small><div className="fake-qr" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><strong>Scannez la démo</strong><b>Expérience mobile</b></div>
            <div className="workflow-arrow"><i /><i /><i /></div>
            <div className="workflow-step-card step-signed"><span>04</span><small>VENTE</small><strong>Le Fournil</strong><div className="signed-badge"><CheckIcon /> Signé</div><b>Commerce actif</b></div>
          </div>
          <div className="field-statement" data-reveal><span>PRINCIPE WALS</span><p>Le commerçant ne doit pas avoir à imaginer le résultat. <strong>Votre démo doit déjà lui montrer ce que ses propres clients pourront utiliser.</strong></p></div>
        </div>
      </section>

      <section className="dual-view-section light-section" data-motion-section>
        <div className="site-container">
          <div className="dual-view-heading" data-reveal><p className="section-index">04 / DEUX CÔTÉS, UNE SEULE PLATEFORME</p><h2>Simple devant le commerce.<br /><span>Puissant derrière.</span></h2></div>
          <div className="dual-view-grid">
            <article className="dual-panel merchant-panel" data-reveal><div className="dual-label">CE QUE LE COMMERCE VOIT</div><h3>Une expérience immédiatement compréhensible.</h3><ul><li><CheckIcon /> Une carte à ses couleurs</li><li><CheckIcon /> Une roue accessible par QR</li><li><CheckIcon /> Des récompenses visibles</li><li><CheckIcon /> Une expérience pensée mobile</li></ul><div className="dual-phone-stack"><div><Iphone compact /></div><div><Samsung compact /></div></div></article>
            <article className="dual-panel reseller-panel" data-reveal><div className="dual-label">CE QUE VOUS GÉREZ</div><h3>Tout ce qu'il faut pour vendre et suivre.</h3><ul><li><CheckIcon /> Prospects et visites</li><li><CheckIcon /> Démonstrations personnalisées</li><li><CheckIcon /> Commerces et solutions actives</li><li><CheckIcon /> Activité et prochaines actions</li></ul><div className="mini-cockpit"><div><span>Nova Beauty</span><b>Démo prête</b></div><div><span>Le Fournil</span><b className="active">Actif</b></div><div><span>Barber 22</span><b className="active">Actif</b></div></div></article>
          </div>
        </div>
      </section>

      <section className="sectors-section" data-motion-section>
        <div className="site-container sectors-heading" data-reveal><p className="section-index light">05 / VOTRE TERRAIN DE JEU</p><h2>Des commerces partout.<br /><span>Des offres à construire partout.</span></h2></div>
        <div className="sectors-marquee" aria-hidden="true"><div>{[...sectors, ...sectors].map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}</div></div>
      </section>

      <section id="cockpit" className="cockpit-section light-section" data-motion-section>
        <div className="site-container">
          <div className="cockpit-copy" data-reveal><p className="section-index">06 / WALS COCKPIT</p><h2>Un cockpit qui parle votre langage commercial.</h2><p>Pas un CRM générique de plus. WALS Cockpit est pensé autour des visites terrain, des démos personnalisées, des solutions vendues et de la santé de votre portefeuille.</p><div className="cockpit-chips"><span>Prospects à visiter</span><span>Démos prêtes</span><span>Solutions actives</span><span>Prochaine action</span><span>Santé portefeuille</span></div></div>
          <div className="dashboard-stage" data-reveal><div className="dashboard-halo" /><DashboardMockup /></div>
        </div>
      </section>

      <section className="faq-section" data-motion-section>
        <div className="site-container faq-layout">
          <div className="faq-heading" data-reveal><p className="section-index">07 / QUESTIONS REVENDEURS</p><h2>Ce qu'il faut savoir avant l'ouverture.</h2><p>WALS est encore en développement. Voici déjà les principes qui structurent la plateforme et l'expérience revendeur.</p></div>
          <div className="faq-list" data-reveal>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="build-section" data-motion-section>
        <div className="build-grid" /><div className="site-container build-layout" data-reveal><div className="build-code">WALS / 2026</div><div className="build-copy"><span className="launch-pill inverse"><span className="launch-signal"><i /></span> En développement</span><h2>Le terrain est prêt.<br />WALS arrive.</h2><p>La fidélité, la roue, les démos personnalisées et le cockpit revendeur prennent forme pour vous permettre de construire une offre digitale crédible, démontrable et simple à vendre aux commerces.</p><div className="build-roadmap"><span><i className="done" /> Expériences produits</span><span><i className="done" /> Vitrine</span><span><i className="current" /> Cockpit revendeur</span><span><i /> Ouverture des accès</span></div></div></div>
      </section>

      <footer className="site-footer"><div className="site-container footer-inner"><div className="footer-brand"><BrandMark /><p>La plateforme de vente terrain pensée pour les revendeurs de solutions digitales aux commerces.</p></div><div className="footer-links"><div><strong>Produit</strong><a href="#solutions">Fidélité</a><a href="#solutions">Roue</a><a href="#cockpit">Cockpit</a></div><div><strong>WALS</strong><a href="#business">Pour revendre</a><a href="#terrain">Vente terrain</a><a href="#top">En développement</a></div><div><strong>Légal</strong><span>Mentions légales à venir</span><span>Confidentialité à venir</span></div></div><div className="footer-bottom"><span>© 2026 WALS</span><span>Conçu pour la prospection terrain.</span></div></div></footer>
    </main>
  );
}
