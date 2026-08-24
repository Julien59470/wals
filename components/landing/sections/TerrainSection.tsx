import { CheckIcon } from "@/components/landing/LandingIcons";

export function TerrainSection() {
  return (
    <section id="terrain" className="field-section" data-motion-section>
      <div className="site-container">
        <div className="field-heading" data-reveal><p className="section-index">03 / CONÇU POUR LE TERRAIN</p><h2>Du premier prospect<br /><span>au commerce actif.</span></h2><p>Le même commerce fictif accompagne toute l'expérience : vous voyez exactement comment une prospection devient une démonstration puis un client actif.</p></div>
        <div className="workflow-cinema" data-reveal>
          <div className="workflow-step-card step-prospect" data-step="01"><span>01</span><small>PROSPECT</small><strong>Le Fournil</strong><p>Boulangerie · 1 établissement</p><b>À préparer</b></div>
          <div className="workflow-arrow"><i /><i /><i /></div>
          <div className="workflow-step-card step-demo" data-step="02"><span>02</span><small>DÉMO</small><strong>Le Fournil</strong><div className="mini-brand"><b>W</b><em>Aux couleurs du commerce</em></div><b>Prête à montrer</b></div>
          <div className="workflow-arrow"><i /><i /><i /></div>
          <div className="workflow-step-card step-scan" data-step="03"><span>03</span><small>PRÉSENTATION</small><div className="fake-qr" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><strong>Scannez la démo</strong><b>Expérience mobile</b></div>
          <div className="workflow-arrow"><i /><i /><i /></div>
          <div className="workflow-step-card step-signed" data-step="04"><span>04</span><small>VENTE</small><strong>Le Fournil</strong><div className="signed-badge"><CheckIcon /> Signé</div><b>Commerce actif</b></div>
        </div>
        <div className="field-statement" data-reveal><span>PRINCIPE WALS</span><p>Le commerçant ne doit pas avoir à imaginer le résultat. <strong>Votre démo lui montre déjà ce que ses propres clients pourront utiliser.</strong></p></div>
      </div>
    </section>
  );
}
