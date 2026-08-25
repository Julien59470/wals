export function DashboardMockup() {
  const rows = [
    ["Le Fournil", "Fidélité", "Client actif", "Tarif libre"],
    ["Maison Barber", "Fidélité + Play", "Client actif", "Tarif libre"],
    ["Bella Beauty", "Fidélité", "Démo envoyée", "Relancer"],
    ["Café Central", "Play", "Prospect", "Démo à préparer"],
  ] as const;

  return (
    <div className="dashboard-showcase bo-dashboard-showcase" aria-label="Aperçu du cockpit partenaire WALS">
      <div className="dashboard-frame dashboard-desktop">
        <div className="dashboard-topbar"><span className="dashboard-dots"><i /><i /><i /></span><span>app.wals.fr / cockpit</span><b>VOTRE MARQUE · technologie WALS</b></div>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar"><div className="dashboard-brand bo-fidelya-sidebar"><span>F</span><strong>VOTRE MARQUE</strong></div><nav aria-label="Aperçu des sections du cockpit"><span className="active">Vue business</span><span>Prospects</span><span>Démonstrations</span><span>Clients</span><span>Suivi</span></nav><div className="sidebar-status"><i /> Technologie WALS</div></aside>
          <div className="dashboard-main">
            <div className="dashboard-heading"><div><span>APERÇU PARTENAIRE</span><h3>Votre activité.</h3></div><div className="dashboard-cta">+ Nouveau prospect</div></div>
            <div className="bo-dashboard-kpis"><div><span>Clients actifs</span><strong>—</strong></div><div><span>Prospects</span><strong>—</strong></div><div><span>Démos en cours</span><strong>—</strong></div><div><span>Nouveaux ce mois</span><strong>—</strong></div><div className="is-revenue"><span>Revenu mensuel</span><strong>Selon vos tarifs</strong></div></div>
            <div className="dashboard-grid"><div className="dashboard-panel agenda-panel"><div className="panel-title"><strong>À faire aujourd'hui</strong><span>Votre pipeline</span></div><div className="agenda-list"><div><time>09:30</time><span><b>Le Fournil</b><small>Suivi client</small></span><em>Actif</em></div><div><time>11:00</time><span><b>Bella Beauty</b><small>Relancer la démo</small></span><em>Démo</em></div><div><time>14:30</time><span><b>Café Central</b><small>Préparer la présentation</small></span><em>Prospect</em></div></div></div><div className="dashboard-panel health-panel"><div className="panel-title"><strong>Objectif portefeuille</strong><span>À personnaliser</span></div><strong className="health-score">—<small>/—</small></strong><p>Un cockpit visuel pour piloter votre activité.</p><div className="partner-referral"><span>Tarification</span><b>Vous restez libre</b></div></div></div>
            <div className="dashboard-table"><div className="table-head"><span>Commerce</span><span>Offre</span><span>État</span><span>Valeur</span></div>{rows.map(([name, offer, state, value]) => <div className="table-row" key={name}><span><i>{name[0]}</i>{name}</span><span>{offer}</span><span><b>{state}</b></span><span>{value}</span></div>)}</div>
          </div>
        </div>
      </div>
      <div className="dashboard-mobile" aria-hidden="true"><div className="mobile-cockpit-head"><span>F</span><div><small>VOTRE MARQUE · WALS</small><strong>Votre business</strong></div><b>•••</b></div><div className="mobile-cockpit-metrics"><div><strong>—</strong><span>clients</span></div><div><strong>—</strong><span>prospects</span></div><div><strong>Libre</strong><span>tarif</span></div></div><div className="mobile-cockpit-title"><span>Portefeuille</span><small>Aperçu</small></div><div className="mobile-agenda"><div><time>ACTIF</time><span><b>Le Fournil</b><small>Votre tarif</small></span><em>→</em></div><div><time>DÉMO</time><span><b>Bella Beauty</b><small>À relancer</small></span><em>→</em></div></div></div>
    </div>
  );
}
