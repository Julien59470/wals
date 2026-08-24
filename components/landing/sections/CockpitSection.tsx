import { DashboardMockup } from "@/components/landing/DashboardMockup";

export function CockpitSection() {
  return (
    <section id="cockpit" className="cockpit-section light-section" data-motion-section>
      <div className="site-container">
        <div className="cockpit-copy" data-reveal><p className="section-index">05 / WALS COCKPIT</p><h2>Un cockpit qui vous dit <span>quoi faire aujourd'hui.</span></h2><p>Pas un CRM générique de plus. WALS Cockpit est pensé autour des tournées, des visites, des démos personnalisées, des commerces actifs et des relances à effectuer.</p><div className="cockpit-chips"><span>Visites du jour</span><span>Démos prêtes</span><span>Relances</span><span>Itinéraire terrain</span><span>Santé portefeuille</span><span>Parrainages</span></div></div>
        <div className="dashboard-stage" data-reveal><div className="dashboard-halo" /><DashboardMockup /></div>
      </div>
    </section>
  );
}
