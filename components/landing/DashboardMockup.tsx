export function DashboardMockup() {
  const rows = [
    ["Le Fournil", "Fidélité", "Client actif", "39 €/mois"],
    ["Maison Barber", "Fidélité + Play", "Client actif", "59 €/mois"],
    ["Bella Beauty", "Fidélité", "Démo envoyée", "49 €/mois"],
    ["Café Central", "Play", "Prospect", "29 €/mois"],
  ] as const;

  return (
    <div className="dashboard-showcase bo-dashboard-showcase" aria-label="Aperçu du cockpit partenaire WALS avec données d'exemple">
      <div className="dashboard-frame dashboard-desktop">
        <div className="dashboard-topbar"><span className="dashboard-dots"><i /><i /><i /></span><span>app.wals.fr / cockpit</span><b>FIDELYA · EXEMPLE WALS</b></div>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar"><div className="dashboard-brand bo-fidelya-sidebar"><span>F</span><strong>FIDELYA</strong></div><nav aria-label="Aperçu des sections du cockpit"><span className="active">Vue business</span><span>Prospects</span><span>Démonstrations</span><span>Clients</span><span>Revenus</span></nav><div className="sidebar-status"><i /> Aperçu cockpit WALS</div></aside>
          <div className="dashboard-main">
            <div className="dashboard-heading"><div><span>EXEMPLE DE PORTEFEUILLE</span><h3>Bonjour.</h3></div><div className="dashboard-cta">+ Nouveau prospect</div></div>
            <div className="bo-dashboard-kpis"><div><span>Clients actifs</span><strong>18</strong></div><div><span>Prospects</span><strong>6</strong></div><div><span>Démos en cours</span><strong>3</strong></div><div><span>Nouveaux ce mois</span><strong>+3</strong></div><div className="is-revenue"><span>Revenu mensuel indicatif</span><strong>702 €</strong></div></div>
            <div className="dashboard-grid"><div className="dashboard-panel agenda-panel"><div className="panel-title"><strong>À faire aujourd'hui</strong><span>Exemple de pipeline</span></div><div className="agenda-list"><div><time>09:30</time><span><b>Le Fournil</b><small>Suivi client</small></span><em>Actif</em></div><div><time>11:00</time><span><b>Bella Beauty</b><small>Relancer la démo</small></span><em>Démo</em></div><div><time>14:30</time><span><b>Café Central</b><small>Préparer la présentation</small></span><em>Prospect</em></div></div></div><div className="dashboard-panel health-panel"><div className="panel-title"><strong>Objectif portefeuille</strong><span>Exemple</span></div><strong className="health-score">18<small>/30</small></strong><p>12 commerces avant l'objectif présenté.</p><div className="partner-referral"><span>Revenu mensuel</span><b>702 € / mois</b></div></div></div>
            <div className="dashboard-table"><div className="table-head"><span>Commerce</span><span>Offre</span><span>État</span><span>Valeur</span></div>{rows.map(([name, offer, state, value]) => <div className="table-row" key={name}><span><i>{name[0]}</i>{name}</span><span>{offer}</span><span><b>{state}</b></span><span>{value}</span></div>)}</div>
          </div>
        </div>
      </div>
      <div className="dashboard-mobile" aria-hidden="true"><div className="mobile-cockpit-head"><span>F</span><div><small>FIDELYA · WALS</small><strong>Votre business</strong></div><b>•••</b></div><div className="mobile-cockpit-metrics"><div><strong>18</strong><span>clients</span></div><div><strong>6</strong><span>prospects</span></div><div><strong>702€</strong><span>/ mois</span></div></div><div className="mobile-cockpit-title"><span>Portefeuille</span><small>+3 ce mois-ci</small></div><div className="mobile-agenda"><div><time>ACTIF</time><span><b>Le Fournil</b><small>39 €/mois</small></span><em>→</em></div><div><time>ACTIF</time><span><b>Maison Barber</b><small>59 €/mois</small></span><em>→</em></div><div><time>DÉMO</time><span><b>Bella Beauty</b><small>À relancer</small></span><em>→</em></div></div></div>
      <p className="dashboard-demo-note">Données et tarifs d'exemple présentés à titre illustratif.</p>
    </div>
  );
}
