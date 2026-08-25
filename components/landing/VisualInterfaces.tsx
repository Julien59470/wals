export function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.1 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function FidelyaLogo({ small = false }: { small?: boolean }) {
  return <span className={`bo-fidelya-logo${small ? " is-small" : ""}`} aria-label="FIDELYA, marque fictive de démonstration"><i>F</i><span><strong>FIDELYA</strong><small>Solutions de fidélité digitale</small></span></span>;
}

export function BenefitInterface({ type }: { type: "referral" | "campaign" | "stats" }) {
  if (type === "referral") return <div className="bo-interface bo-referral-ui" aria-label="Aperçu d'une interface de parrainage"><div className="bo-ui-top"><span>Parrainage</span><b>Aperçu</b></div><div className="bo-referral-flow"><span>Camille</span><i>→</i><span>Alex</span></div><div className="bo-referral-reward"><strong>Avantage</strong><small>défini par le commerce</small></div><div className="bo-referral-link">Partager mon invitation <b>↗</b></div></div>;
  if (type === "campaign") return <div className="bo-interface bo-campaign-ui" aria-label="Aperçu d'une interface de campagne"><div className="bo-ui-top"><span>Campagne</span><b>Aperçu</b></div><strong>Une raison de revenir</strong><p>Message et offre configurés par le commerce.</p><div className="bo-notification-preview"><span>W</span><div><b>Le Fournil</b><small>Votre offre vous attend.</small></div></div><div className="bo-campaign-stats"><span><b>—</b><small>envoyées</small></span><span><b>—</b><small>engagement</small></span></div></div>;
  return <div className="bo-interface bo-stats-ui" aria-label="Aperçu des statistiques clients"><div className="bo-ui-top"><span>Base clients</span><b>Aperçu</b></div><strong>Indicateurs commerce</strong><div className="bo-chart-bars"><i style={{height:"42%"}}/><i style={{height:"58%"}}/><i style={{height:"48%"}}/><i style={{height:"72%"}}/><i style={{height:"66%"}}/><i style={{height:"88%"}}/><i style={{height:"96%"}}/></div><div className="bo-stat-row"><span>Fréquence</span><b>À mesurer</b></div><div className="bo-stat-row"><span>Clients revenus</span><b>À mesurer</b></div></div>;
}
