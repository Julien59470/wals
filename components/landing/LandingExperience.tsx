"use client";

import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/landing/BrandMark";

const workflow = [
  ["01", "Préparer", "Créez une démonstration personnalisée avant même d'entrer chez le commerçant."],
  ["02", "Présenter", "Montrez immédiatement le rendu sur mobile avec le logo, les couleurs et l'offre du prospect."],
  ["03", "Vendre", "Proposez la fidélité, la roue digitale ou les deux, et construisez votre propre offre commerciale."],
  ["04", "Développer", "Centralisez vos prospects, vos commerces actifs, vos démonstrations et votre activité au même endroit."],
] as const;

const dashboardRows = [
  ["Le Fournil", "Fidélité", "Actif", "1 284"],
  ["Nova Beauty", "Roue", "Démo", "—"],
  ["Barber 22", "Fidélité + Roue", "Actif", "836"],
] as const;

function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 15.5 8.1 11l3.1 3.1L20 5.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.8 5.5H20v5.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.35 5.03c.88-1.03 1.49-2.45 1.32-3.86-1.27.05-2.81.85-3.72 1.88-.82.92-1.53 2.37-1.33 3.75 1.42.11 2.86-.72 3.73-1.77Zm3.18 7.7c-.03-3.08 2.52-4.56 2.63-4.63-1.43-2.09-3.66-2.38-4.45-2.41-1.89-.19-3.69 1.11-4.65 1.11-.96 0-2.45-1.08-4.03-1.05-2.07.03-3.98 1.2-5.05 3.05-2.15 3.73-.55 9.26 1.55 12.29 1.03 1.49 2.25 3.16 3.86 3.1 1.55-.06 2.13-1 4-1 1.86 0 2.38 1 4.02.97 1.66-.03 2.71-1.52 3.73-3.01 1.18-1.73 1.67-3.4 1.7-3.49-.04-.02-3.25-1.25-3.28-4.93Z" fill="currentColor" />
    </svg>
  );
}

function AndroidMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7.1 7.2-1.4-2.4m11.2 2.4 1.4-2.4M6.1 9.2h11.8v7.7H6.1V9.2Zm2.1 7.7v3m7.6-3v3M4.2 10.3v5.2m15.6-5.2v5.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.2 9.2c.5-2.1 2.4-3.6 4.8-3.6s4.3 1.5 4.8 3.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9.6" cy="7.5" r=".55" fill="currentColor" />
      <circle cx="14.4" cy="7.5" r=".55" fill="currentColor" />
    </svg>
  );
}

function Iphone({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`device iphone ${compact ? "device-compact" : ""}`} aria-label="Aperçu iPhone de la fidélité digitale proposée avec WALS">
      <span className="iphone-button iphone-button-one" />
      <span className="iphone-button iphone-button-two" />
      <span className="iphone-button iphone-button-three" />
      <div className="device-screen iphone-screen">
        <div className="device-status ios-status">
          <span>09:41</span>
          <span className="status-cluster"><i /><i /><i /></span>
        </div>
        <div className="dynamic-island"><span /></div>
        <div className="wallet-head">
          <div>
            <span className="screen-kicker">APPLE WALLET</span>
            <strong>Mes cartes</strong>
          </div>
          <div className="wallet-avatar">JF</div>
        </div>
        <div className="wallet-pass">
          <div className="pass-top">
            <div className="pass-logo">W</div>
            <div>
              <span>Boulangerie</span>
              <strong>Le Fournil</strong>
            </div>
            <span className="pass-count">8/10</span>
          </div>
          <div className="stamp-grid">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={index} className={index < 8 ? "stamp stamp-on" : "stamp"}>{index < 8 ? "W" : ""}</span>
            ))}
          </div>
          <div className="pass-note"><span>2 passages</span> avant votre récompense</div>
          <div className="wallet-code"><i /><i /><i /><i /><i /></div>
        </div>
        <div className="wallet-stack-card wallet-stack-card-a" />
        <div className="wallet-stack-card wallet-stack-card-b" />
        <div className="iphone-home" />
      </div>
    </div>
  );
}

function Samsung({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`device samsung ${compact ? "device-compact" : ""}`} aria-label="Aperçu Samsung de la roue digitale proposée avec WALS">
      <span className="samsung-button samsung-button-one" />
      <span className="samsung-button samsung-button-two" />
      <div className="device-screen samsung-screen">
        <div className="device-status android-status">
          <span>09:41</span>
          <span className="status-cluster"><i /><i /><i /></span>
        </div>
        <div className="camera-hole" />
        <div className="wheel-app-head">
          <div className="pass-logo small">W</div>
          <div>
            <span className="screen-kicker">LE FOURNIL</span>
            <strong>Votre chance du jour</strong>
          </div>
        </div>
        <div className="wheel-area">
          <span className="wheel-pointer" />
          <div className="android-wheel">
            <span className="wheel-label wheel-label-a">-10%</span>
            <span className="wheel-label wheel-label-b">Perdu</span>
            <span className="wheel-label wheel-label-c">Café</span>
            <span className="wheel-label wheel-label-d">-20%</span>
            <div className="wheel-hub">W</div>
          </div>
        </div>
        <button className="spin-button" type="button" tabIndex={-1}>Lancer la roue</button>
        <div className="wheel-meta"><span>1 participation</span><span>aujourd&apos;hui</span></div>
        <div className="android-gesture" />
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="dashboard-frame" aria-label="Aperçu du futur cockpit revendeur WALS">
      <div className="dashboard-topbar">
        <div className="dashboard-dots"><i /><i /><i /></div>
        <span>app.wals.fr / cockpit</span>
        <span className="dashboard-live">Aperçu</span>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand"><span>W</span><strong>WALS</strong></div>
          <nav>
            <a className="active">Vue terrain</a>
            <a>Prospects</a>
            <a>Commerces</a>
            <a>Démonstrations</a>
            <a>Activité</a>
          </nav>
          <div className="sidebar-status"><i /> Bientôt disponible</div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-heading">
            <div><span>VOTRE ACTIVITÉ</span><h3>Bonjour.</h3></div>
            <div className="dashboard-cta">+ Nouvelle démo</div>
          </div>
          <div className="dashboard-metrics">
            <div><span>Prospects suivis</span><strong>24</strong><small>Votre pipeline</small></div>
            <div><span>Démos en cours</span><strong>07</strong><small>À présenter ou relancer</small></div>
            <div><span>Commerces actifs</span><strong>18</strong><small>Votre portefeuille</small></div>
          </div>
          <div className="dashboard-grid">
            <div className="dashboard-panel activity-panel">
              <div className="panel-title"><strong>Activité commerciale</strong><span>30 jours</span></div>
              <div className="activity-chart">
                <svg viewBox="0 0 520 170" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff6d1b" stopOpacity=".22" />
                      <stop offset="100%" stopColor="#ff6d1b" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="chart-area" d="M0 145 C45 140, 55 120, 92 126 S150 90, 186 102 S250 72, 286 83 S345 40, 383 62 S445 28, 520 38 L520 170 L0 170 Z" fill="url(#chartFill)" />
                  <path className="chart-line" d="M0 145 C45 140, 55 120, 92 126 S150 90, 186 102 S250 72, 286 83 S345 40, 383 62 S445 28, 520 38" fill="none" stroke="#ff6d1b" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="chart-grid-lines"><i /><i /><i /><i /></div>
              </div>
            </div>
            <div className="dashboard-panel pulse-panel">
              <div className="panel-title"><strong>Portefeuille</strong><span>Aperçu</span></div>
              <div className="pulse-score"><span>87</span><small>/100</small></div>
              <p>Comptes actifs</p>
              <div className="pulse-bars"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
          <div className="dashboard-table">
            <div className="table-head"><span>Commerce</span><span>Solution</span><span>État</span><span>Interactions</span></div>
            {dashboardRows.map(([name, module, state, value]) => (
              <div className="table-row" key={name}>
                <span><i>{name.slice(0, 1)}</i>{name}</span>
                <span>{module}</span>
                <span><b className={state === "Actif" ? "status-active" : "status-demo"}>{state}</b></span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function moveStage(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    stageRef.current.style.setProperty("--mx", x.toFixed(3));
    stageRef.current.style.setProperty("--my", y.toFixed(3));
  }

  function resetStage() {
    stageRef.current?.style.setProperty("--mx", "0");
    stageRef.current?.style.setProperty("--my", "0");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" aria-label="Revenir en haut de WALS" onClick={closeMenu}><BrandMark /></a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#produit">Les solutions</a>
            <a href="#terrain">Pour vendre</a>
            <a href="#cockpit">Votre cockpit</a>
          </nav>
          <div className="header-status"><span className="status-dot" /> Accès revendeurs bientôt</div>
          <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label="Ouvrir la navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            <span /><span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#produit" onClick={closeMenu}>Les solutions</a>
          <a href="#terrain" onClick={closeMenu}>Pour vendre</a>
          <a href="#cockpit" onClick={closeMenu}>Votre cockpit</a>
          <span>WALS arrive bientôt pour les revendeurs</span>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-grid" />
        <div className="hero-orbit hero-orbit-a" />
        <div className="hero-orbit hero-orbit-b" />
        <div className="hero-glow hero-glow-orange" />
        <div className="hero-glow hero-glow-blue" />
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <div className="intro intro-one launch-pill"><span className="launch-signal"><i /></span> WALS arrive bientôt</div>
            <p className="intro intro-two hero-overline">PLATEFORME POUR REVENDEURS · DÉMARCHEURS · AGENCES</p>
            <h1 className="intro intro-three hero-title">
              <span>PROSPECTEZ.</span>
              <span className="hero-title-outline">DÉMONTREZ.</span>
              <span>VENDEZ.</span>
              <span className="hero-title-orange">DÉVELOPPEZ.</span>
            </h1>
            <p className="intro intro-four hero-lead">WALS prépare la plateforme qui vous permettra de proposer aux commerces des solutions digitales modernes, de créer des démonstrations qui se vendent visuellement et de piloter votre activité depuis un seul espace.</p>
            <div className="intro intro-five hero-actions">
              <a className="primary-link" href="#produit">Découvrir ce qui arrive <ArrowIcon /></a>
              <span className="build-note"><i /> Accès revendeurs prochainement</span>
            </div>
          </div>

          <div className="hero-stage" ref={stageRef} onPointerMove={moveStage} onPointerLeave={resetStage}>
            <div className="stage-ring stage-ring-one" />
            <div className="stage-ring stage-ring-two" />
            <div className="stage-cross stage-cross-a">+</div>
            <div className="stage-cross stage-cross-b">+</div>
            <div className="device-wrap iphone-wrap"><Iphone /></div>
            <div className="device-wrap samsung-wrap"><Samsung /></div>
            <div className="stage-label stage-label-a"><span>01</span> Fidélité à revendre</div>
            <div className="stage-label stage-label-b"><span>02</span> Roue digitale</div>
            <div className="stage-label stage-label-c"><SignalIcon /><strong>Votre cockpit</strong><small>prospects & commerces</small></div>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>DÉMOS PERSONNALISÉES</span><i />
            <span>FIDÉLITÉ DIGITALE</span><i />
            <span>ROUE DIGITALE</span><i />
            <span>MULTI-COMMERCES</span><i />
            <span>DÉMOS PERSONNALISÉES</span><i />
            <span>FIDÉLITÉ DIGITALE</span><i />
            <span>ROUE DIGITALE</span><i />
            <span>MULTI-COMMERCES</span><i />
          </div>
        </div>
      </section>

      <section id="produit" className="product-section light-section">
        <div className="site-container">
          <div className="section-intro" data-reveal>
            <p className="section-index">01 / CE QUE VOUS POURREZ VENDRE</p>
            <div>
              <h2>Deux solutions.<br /><span>Autant d'offres à construire.</span></h2>
              <p>La fidélité digitale et la roue resteront totalement indépendantes. Vous pourrez proposer l'une, l'autre ou les deux selon le commerce, son activité et votre propre approche commerciale.</p>
            </div>
          </div>

          <article className="feature-story loyalty-story" data-reveal>
            <div className="story-number">01</div>
            <div className="story-copy">
              <span className="story-tag">FIDÉLITÉ DIGITALE</span>
              <h3>Une solution simple à montrer. Facile à comprendre.</h3>
              <p>Présentez au commerçant une carte personnalisée qui s'intègre directement dans Apple Wallet ou Google Wallet, avec points ou tampons, progression, récompenses et identité visuelle à ses couleurs.</p>
              <div className="story-specs">
                <span><AppleMark /> Apple Wallet</span>
                <span>Points & tampons</span>
                <span>Personnalisation</span>
              </div>
            </div>
            <div className="story-visual iphone-story-visual">
              <div className="story-orbit" />
              <Iphone compact />
              <div className="micro-card micro-card-progress"><span>8 / 10</span><small>tampons</small></div>
              <div className="micro-card micro-card-wallet"><AppleMark /><span>Démo prête à montrer</span></div>
            </div>
          </article>

          <article className="feature-story wheel-story" data-reveal>
            <div className="story-number">02</div>
            <div className="story-copy">
              <span className="story-tag orange">ROUE DIGITALE</span>
              <h3>Une démo qui capte l'attention en quelques secondes.</h3>
              <p>Faites scanner un QR code au commerçant et montrez immédiatement l'expérience. Gains, pertes, coupons, limites, probabilités et branding pourront être adaptés pour construire une offre concrète et visuelle.</p>
              <div className="story-specs">
                <span><AndroidMark /> Tous mobiles</span>
                <span>QR code</span>
                <span>Configuration sur mesure</span>
              </div>
            </div>
            <div className="story-visual samsung-story-visual">
              <div className="story-orbit orange-orbit" />
              <Samsung compact />
              <div className="micro-card micro-card-gain"><span>-10%</span><small>exemple de gain</small></div>
              <div className="micro-card micro-card-limit"><span>1×</span><small>règle configurable</small></div>
            </div>
          </article>
        </div>
      </section>

      <section id="terrain" className="field-section dark-section">
        <div className="field-noise" />
        <div className="site-container">
          <div className="field-heading" data-reveal>
            <p className="section-index light">02 / CONÇU POUR VENDRE</p>
            <h2>Votre terrain. Votre méthode.</h2>
            <p>WALS prépare les outils pour accélérer les deux.</p>
          </div>
          <div className="workflow-rail" data-reveal>
            <div className="workflow-line"><span /></div>
            {workflow.map(([number, title, copy]) => (
              <article className="workflow-step" key={number}>
                <div className="workflow-node"><span>{number}</span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="field-statement" data-reveal>
            <div className="statement-mark">W</div>
            <p>Le commerçant ne doit pas avoir à imaginer le résultat. Votre démo doit lui montrer immédiatement ce que ses propres clients pourront utiliser.</p>
            <span>WALS / vente terrain</span>
          </div>
        </div>
      </section>

      <section id="cockpit" className="cockpit-section light-section">
        <div className="site-container">
          <div className="cockpit-copy" data-reveal>
            <p className="section-index">03 / VOTRE COCKPIT</p>
            <h2>Votre activité commerciale, enfin au même endroit.</h2>
            <p>WALS prépare un espace pensé pour suivre vos prospects, créer vos démonstrations, gérer vos commerces signés et garder une vision claire de votre activité sans multiplier les logiciels.</p>
          </div>
          <div className="dashboard-stage" data-reveal>
            <div className="dashboard-halo" />
            <div className="dashboard-caption dashboard-caption-a"><span>A</span><strong>Pipeline</strong><small>prospects & démos</small></div>
            <div className="dashboard-caption dashboard-caption-b"><span>B</span><strong>Portefeuille</strong><small>commerces & activité</small></div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="build-section">
        <div className="build-grid" />
        <div className="site-container build-layout" data-reveal>
          <div className="build-code">WALS / BIENTÔT</div>
          <div className="build-copy">
            <span className="launch-pill inverse"><span className="launch-signal"><i /></span> Plateforme en développement</span>
            <h2>WALS arrive bientôt.<br />Préparez votre prochaine offre à vendre.</h2>
            <p>Nous construisons actuellement une plateforme pensée pour les revendeurs, démarcheurs indépendants et agences qui veulent commercialiser des solutions digitales auprès des commerces. Démonstrations personnalisées, fidélité digitale, roue, gestion multi-commerces et cockpit commercial sont en préparation.</p>
            <div className="build-roadmap">
              <span><i className="done" /> Expériences produits</span>
              <span><i className="done" /> Vitrine</span>
              <span><i className="current" /> Cockpit revendeur</span>
              <span><i /> Ouverture des accès</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <BrandMark />
          <p>La plateforme de vente et de gestion pensée pour les revendeurs de solutions aux commerces. Bientôt disponible.</p>
          <span>© 2026 WALS</span>
        </div>
      </footer>
    </main>
  );
}
