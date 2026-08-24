import { WaitlistForm } from "@/components/landing/WaitlistForm";

export function BuildSection() {
  return (
    <section id="ouverture" className="build-section" data-motion-section>
      <div className="build-grid" />
      <div className="site-container build-layout" data-reveal>
        <div className="build-code">WALS / 2026</div>
        <div className="build-copy">
          <span className="launch-pill inverse"><span className="launch-signal"><i /></span> En développement</span>
          <h2>Le terrain est prêt.<br />WALS arrive.</h2>
          <p>La fidélité, la roue, les démonstrations personnalisées et le cockpit revendeur prennent forme pour vous permettre de construire une offre digitale crédible, démontrable et simple à vendre aux commerces.</p>
          <div className="build-roadmap"><span><i className="done" /> Expériences produits</span><span><i className="done" /> Vitrine</span><span><i className="current" /> Cockpit revendeur</span><span><i /> Ouverture des accès</span></div>
          <div className="waitlist-block"><div><small>ACCÈS PARTENAIRES</small><h3>Soyez averti au moment de l'ouverture.</h3><p>Un email uniquement lorsque WALS ouvrira ses accès partenaires. Pas de formulaire commercial, pas d'appel.</p></div><WaitlistForm /></div>
        </div>
      </div>
    </section>
  );
}
