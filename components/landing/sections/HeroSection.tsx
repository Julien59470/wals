import { ArrowIcon } from "@/components/landing/LandingIcons";
import { Iphone, Samsung } from "@/components/landing/ProductDevices";
import { sectors } from "@/components/landing/data";

export function HeroSection() {
  return (
    <section id="top" className="hero-section" data-motion-section>
      <div className="hero-grid" /><div className="hero-orbit hero-orbit-a" /><div className="hero-orbit hero-orbit-b" /><div className="hero-glow hero-glow-orange" /><div className="hero-glow hero-glow-blue" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <div className="launch-pill"><span className="launch-signal"><i /></span> Plateforme en développement</div>
          <p className="hero-overline">POUR REVENDEURS · COMMERCIAUX INDÉPENDANTS · AGENCES</p>
          <h1 className="hero-title"><span className="hero-title-desktop">Transformez votre prospection terrain <em>en offres digitales à revendre.</em></span><span className="hero-title-mobile">Vendez des solutions digitales <em>aux commerces.</em></span></h1>
          <p className="hero-lead hero-lead-desktop">Fidélité digitale, roue interactive et démonstrations personnalisées. Présentez vos offres aux commerces et pilotez votre activité depuis un seul cockpit.</p>
          <p className="hero-lead hero-lead-mobile">Préparez vos démos, présentez vos offres et pilotez vos clients depuis un seul espace.</p>
          <div className="hero-actions"><a className="primary-link" href="#terrain">Découvrir le parcours revendeur <ArrowIcon /></a><span className="build-note"><i /> Ouverture partenaires bientôt</span></div>
          <div className="hero-manifest" aria-label="Promesse WALS"><span>PROSPECTEZ.</span><span>DÉMONTREZ.</span><span>VENDEZ.</span><span>DÉVELOPPEZ.</span></div>
        </div>
        <div className="hero-stage">
          <div className="stage-ring stage-ring-one" /><div className="stage-ring stage-ring-two" />
          <div className="device-wrap iphone-wrap"><Iphone /></div><div className="device-wrap samsung-wrap"><Samsung /></div>
          <div className="stage-label stage-label-a"><span>01</span><strong>WALS Fidélité</strong><small>Apple & Google Wallet</small></div>
          <div className="stage-label stage-label-b"><span>02</span><strong>WALS Play</strong><small>Roue & coupons</small></div>
          <div className="stage-label stage-label-c"><span>03</span><strong>WALS Cockpit</strong><small>Prospects & commerces</small></div>
          <div className="stage-label stage-label-mobile"><span>W</span><strong>Fidélité + roue</strong><small>Deux offres indépendantes</small></div>
        </div>
      </div>
      <div className="hero-ticker" aria-hidden="true"><div className="ticker-track">{[...sectors.slice(0, 4), ...sectors.slice(0, 4)].map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}</div></div>
    </section>
  );
}
