"use client";

import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/landing/BrandMark";

const workflow = [
  ["01", "Attirer", "Un QR code transforme un passage en expérience simple et immédiate."],
  ["02", "Fidéliser", "Votre carte de fidélité reste dans le téléphone de vos clients, toujours à portée de main."],
  ["03", "Récompenser", "Tampons, points, avantages ou roue digitale : vous choisissez la mécanique qui vous ressemble."],
  ["04", "Suivre", "Retrouvez l’activité, les visites et les récompenses depuis un espace clair et centralisé."],
] as const;

const dashboardRows = [
  ["Emma D.", "Fidélité", "8 / 10", "12"],
  ["Lucas M.", "Fidélité", "5 / 10", "8"],
  ["Inès R.", "Roue + Fidélité", "Actif", "11"],
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
    <div className={`device iphone ${compact ? "device-compact" : ""}`} aria-label="Aperçu iPhone de la fidélité WALS">
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
    <div className={`device samsung ${compact ? "device-compact" : ""}`} aria-label="Aperçu Samsung de la roue digitale WALS">
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
    <div className="dashboard-frame" aria-label="Aperçu du futur espace commerçant WALS">
      <div className="dashboard-topbar">
        <div className="dashboard-dots"><i /><i /><i /></div>
        <span>app.wals.fr / mon-commerce</span>
        <span className="dashboard-live">Aperçu</span>
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand"><span>W</span><strong>WALS</strong></div>
          <nav>
            <a className="active">Vue d&apos;ensemble</a>
            <a>Mes clients</a>
            <a>Fidélité</a>
            <a>Récompenses</a>
            <a>Activité</a>
          </nav>
          <div className="sidebar-status"><i /> Bientôt disponible</div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-heading">
            <div><span>APERÇU DU COMMERCE</span><h3>Bonjour Le Fournil.</h3></div>
            <div className="dashboard-cta">+ Créer une offre</div>
          </div>
          <div className="dashboard-metrics">
            <div><span>Clients fidèles</span><strong>284</strong><small>Votre communauté</small></div>
            <div><span>Visites ce mois</span><strong>436</strong><small>Activité récente</small></div>
            <div><span>Récompenses</span><strong>58</strong><small>Avantages débloqués</small></div>
          </div>
          <div className="dashboard-grid">
            <div className="dashboard-panel activity-panel">
              <div className="panel-title"><strong>Activité clients</strong><span>30 jours</span></div>
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
              <div className="panel-title"><strong>Engagement</strong><span>Aperçu</span></div>
              <div className="pulse-score"><span>87</span><small>/100</small></div>
              <p>Dynamique clients</p>
              <div className="pulse-bars"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
          <div className="dashboard-table">
            <div className="table-head"><span>Client</span><span>Parcours</span><span>Progression</span><span>Visites</span></div>
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
            <a href="#produit">Les expériences</a>
            <a href="#terrain">Comment ça marche</a>
            <a href="#cockpit">Votre espace</a>
          </nav>
          <div className="header-status"><span className="status-dot" /> Bientôt disponible</div>
          <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label="Ouvrir la navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            <span /><span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#produit" onClick={closeMenu}>Les expériences</a>
          <a href="#terrain" onClick={closeMenu}>Comment ça marche</a>
          <a href="#cockpit" onClick={closeMenu}>Votre espace</a>
          <span>WALS arrive bientôt</span>
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
            <p className="intro intro-two hero-overline">FIDÉLISATION DIGITALE · SIMPLE · SANS APPLICATION À INSTALLER</p>
            <h1 className="intro intro-three hero-title">
              <span>FIDÉLISEZ.</span>
              <span className="hero-title-outline">ENGAGEZ.</span>
              <span>RÉCOMPENSEZ.</span>
              <span className="hero-title-orange">SIMPLEMENT.</span>
            </h1>
            <p className="intro intro-four hero-lead">WALS prépare une nouvelle façon de faire revenir vos clients : une fidélité digitale élégante dans leur téléphone, des expériences interactives qui donnent envie de participer et un espace simple pour tout piloter.</p>
            <div className="intro intro-five hero-actions">
              <a className="primary-link" href="#produit">Découvrir ce qui arrive <ArrowIcon /></a>
              <span className="build-note"><i /> Ouverture prochaine</span>
            </div>
          </div>

          <div className="hero-stage" ref={stageRef} onPointerMove={moveStage} onPointerLeave={resetStage}>
            <div className="stage-ring stage-ring-one" />
            <div className="stage-ring stage-ring-two" />
            <div className="stage-cross stage-cross-a">+</div>
            <div className="stage-cross stage-cross-b">+</div>
            <div className="device-wrap iphone-wrap"><Iphone /></div>
            <div className="device-wrap samsung-wrap"><Samsung /></div>
            <div className="stage-label stage-label-a"><span>01</span> Carte de fidélité</div>
            <div className="stage-label stage-label-b"><span>02</span> Roue digitale</div>
            <div className="stage-label stage-label-c"><SignalIcon /><strong>Votre espace</strong><small>simple & centralisé</small></div>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>CARTE WALLET</span><i />
            <span>ROUE DIGITALE</span><i />
            <span>RÉCOMPENSES</span><i />
            <span>EXPÉRIENCE CLIENT</span><i />
            <span>CARTE WALLET</span><i />
            <span>ROUE DIGITALE</span><i />
            <span>RÉCOMPENSES</span><i />
            <span>EXPÉRIENCE CLIENT</span><i />
          </div>
        </div>
      </section>

      <section id="produit" className="product-section light-section">
        <div className="site-container">
          <div className="section-intro" data-reveal>
            <p className="section-index">01 / LES EXPÉRIENCES</p>
            <div>
              <h2>Deux façons de donner<br /><span>envie de revenir.</span></h2>
              <p>WALS vous permettra d’activer la bonne expérience selon votre commerce : fidéliser sur la durée avec une carte digitale, créer de l’engagement avec une roue interactive, ou combiner les deux.</p>
            </div>
          </div>

          <article className="feature-story loyalty-story" data-reveal>
            <div className="story-number">01</div>
            <div className="story-copy">
              <span className="story-tag">FIDÉLITÉ DIGITALE</span>
              <h3>Votre fidélité, toujours dans leur téléphone.</h3>
              <p>Vos clients pourront conserver votre carte dans Apple Wallet ou Google Wallet. Plus de carte papier oubliée : leur progression, leurs points ou leurs tampons restent accessibles en quelques secondes.</p>
              <div className="story-specs">
                <span><AppleMark /> Apple Wallet</span>
                <span>Points & tampons</span>
                <span>Récompenses</span>
              </div>
            </div>
            <div className="story-visual iphone-story-visual">
              <div className="story-orbit" />
              <Iphone compact />
              <div className="micro-card micro-card-progress"><span>8 / 10</span><small>tampons</small></div>
              <div className="micro-card micro-card-wallet"><AppleMark /><span>Toujours dans Wallet</span></div>
            </div>
          </article>

          <article className="feature-story wheel-story" data-reveal>
            <div className="story-number">02</div>
            <div className="story-copy">
              <span className="story-tag orange">ROUE DIGITALE</span>
              <h3>Transformez un passage en moment à jouer.</h3>
              <p>Un scan, quelques secondes, une récompense possible. La roue digitale vous permettra de créer une animation simple autour de votre commerce avec vos propres gains, règles et identité visuelle.</p>
              <div className="story-specs">
                <span><AndroidMark /> Tous mobiles</span>
                <span>QR code</span>
                <span>Gains personnalisés</span>
              </div>
            </div>
            <div className="story-visual samsung-story-visual">
              <div className="story-orbit orange-orbit" />
              <Samsung compact />
              <div className="micro-card micro-card-gain"><span>-10%</span><small>prochaine visite</small></div>
              <div className="micro-card micro-card-limit"><span>1×</span><small>participation / jour</small></div>
            </div>
          </article>
        </div>
      </section>

      <section id="terrain" className="field-section dark-section">
        <div className="field-noise" />
        <div className="site-container">
          <div className="field-heading" data-reveal>
            <p className="section-index light">02 / POUR VOTRE COMMERCE</p>
            <h2>Pensé pour être simple.</h2>
            <p>Pour vous comme pour vos clients.</p>
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
            <p>Vos clients n’auront pas une nouvelle application à apprendre. Ils retrouveront simplement votre expérience là où ils sont déjà : sur leur téléphone.</p>
            <span>WALS / expérience client</span>
          </div>
        </div>
      </section>

      <section id="cockpit" className="cockpit-section light-section">
        <div className="site-container">
          <div className="cockpit-copy" data-reveal>
            <p className="section-index">03 / VOTRE ESPACE</p>
            <h2>Tout ce qui compte, au même endroit.</h2>
            <p>WALS prépare un espace commerçant clair pour suivre vos clients, leur progression, les visites, les récompenses et l’activité de vos expériences sans multiplier les outils.</p>
          </div>
          <div className="dashboard-stage" data-reveal>
            <div className="dashboard-halo" />
            <div className="dashboard-caption dashboard-caption-a"><span>A</span><strong>Activité</strong><small>visites & engagement</small></div>
            <div className="dashboard-caption dashboard-caption-b"><span>B</span><strong>Fidélité</strong><small>clients & récompenses</small></div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="build-section">
        <div className="build-grid" />
        <div className="site-container build-layout" data-reveal>
          <div className="build-code">WALS / BIENTÔT</div>
          <div className="build-copy">
            <span className="launch-pill inverse"><span className="launch-signal"><i /></span> Bientôt disponible</span>
            <h2>WALS arrive bientôt.<br />Préparez-vous à fidéliser autrement.</h2>
            <p>Nous finalisons actuellement l’expérience WALS pour proposer aux commerces une solution moderne, simple à utiliser et agréable pour leurs clients. La carte de fidélité, la roue digitale et l’espace commerçant sont en préparation. L’ouverture approche.</p>
            <div className="build-roadmap">
              <span><i className="done" /> Expérience client</span>
              <span><i className="done" /> Carte digitale</span>
              <span><i className="current" /> Espace commerçant</span>
              <span><i /> Ouverture</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <BrandMark />
          <p>La fidélisation digitale pensée pour les commerces. Bientôt disponible.</p>
          <span>© 2026 WALS</span>
        </div>
      </footer>
    </main>
  );
}
