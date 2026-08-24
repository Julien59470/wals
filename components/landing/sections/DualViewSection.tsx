import { CheckIcon } from "@/components/landing/LandingIcons";
import { Iphone, Samsung } from "@/components/landing/ProductDevices";

export function DualViewSection() {
  return (
    <section className="dual-view-section light-section" data-motion-section>
      <div className="site-container">
        <div className="dual-view-heading" data-reveal><p className="section-index">06 / DEUX CÔTÉS, UNE SEULE PLATEFORME</p><h2>Simple devant le commerce.<br /><span>Puissant derrière.</span></h2></div>
        <div className="dual-view-grid">
          <article className="dual-panel merchant-panel" data-reveal><div className="dual-label">CE QUE LE COMMERCE VOIT</div><h3>Une expérience immédiatement compréhensible.</h3><ul><li><CheckIcon /> Une carte à ses couleurs</li><li><CheckIcon /> Une roue accessible par QR</li><li><CheckIcon /> Des récompenses visibles</li><li><CheckIcon /> Une expérience pensée mobile</li></ul><div className="dual-phone-stack"><div><Iphone compact /></div><div><Samsung compact /></div></div></article>
          <article className="dual-panel reseller-panel" data-reveal><div className="dual-label">CE QUE VOUS GÉREZ</div><h3>Tout ce qu'il faut pour vendre et suivre.</h3><ul><li><CheckIcon /> Prospects et visites</li><li><CheckIcon /> Démonstrations personnalisées</li><li><CheckIcon /> Commerces et solutions actives</li><li><CheckIcon /> Activité et prochaines actions</li></ul><div className="mini-cockpit"><div><span>Nova Beauty</span><b>Démo prête</b></div><div><span>Le Fournil</span><b className="active">Actif</b></div><div><span>Barber 22</span><b className="active">Actif</b></div></div></article>
        </div>
      </div>
    </section>
  );
}
