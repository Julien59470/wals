export function DashboardMockup() {
  const rows = [
    ["Le Fournil", "Fidélité", "Actif", "Relance J+7"],
    ["Nova Beauty", "Roue", "Démo prête", "Visite 14:30"],
    ["Barber 22", "Fidélité + Roue", "Actif", "Suivi mensuel"],
  ] as const;

  return (
    <div className="dashboard-showcase" aria-label="Aperçu du futur cockpit revendeur WALS">
      <div className="dashboard-frame dashboard-desktop">
        <div className="dashboard-topbar"><span className="dashboard-dots"><i /><i /><i /></span><span>app.wals.fr / cockpit</span><b>Aperçu produit</b></div>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar"><div className="dashboard-brand"><span>W</span><strong>WALS</strong></div><nav aria-label="Aperçu des sections du cockpit"><span className="active">Vue terrain</span><span>Prospects</span><span>Démonstrations</span><span>Commerces</span><span>Activité</span></nav><div className="sidebar-status"><i /> Espace revendeur</div></aside>
          <div className="dashboard-main">
            <div className="dashboard-heading"><div><span>VOTRE JOURNÉE</span><h3>Mardi 25 août.</h3></div><div className="dashboard-cta">+ Nouvelle démo</div></div>
            <div className="dashboard-metrics"><div><span>Visites aujourd'hui</span><strong>04</strong><small>Prochaine à 09:30</small></div><div><span>Démos prêtes</span><strong>07</strong><small>Personnalisées</small></div><div><span>À relancer</span><strong>03</strong><small>Action recommandée</small></div></div>
            <div className="dashboard-grid">
              <div className="dashboard-panel agenda-panel"><div className="panel-title"><strong>Agenda terrain</strong><span>Itinéraire du jour</span></div><div className="agenda-list"><div><time>09:30</time><span><b>Le Fournil</b><small>Démo Fidélité prête</small></span><em>À visiter</em></div><div><time>11:00</time><span><b>Barber 22</b><small>Relance commerciale</small></span><em>Relance</em></div><div><time>14:30</time><span><b>Nova Beauty</b><small>Démo WALS Play</small></span><em>À visiter</em></div></div></div>
              <div className="dashboard-panel health-panel"><div className="panel-title"><strong>Santé portefeuille</strong><span>18 actifs</span></div><strong className="health-score">87<small>/100</small></strong><p>3 comptes demandent une action.</p><div className="partner-referral"><span>Parrainages partenaires</span><b>2 actifs</b></div></div>
            </div>
            <div className="dashboard-table"><div className="table-head"><span>Commerce</span><span>Solution</span><span>État</span><span>Prochaine action</span></div>{rows.map(([name, module, state, action]) => <div className="table-row" key={name}><span><i>{name[0]}</i>{name}</span><span>{module}</span><span><b>{state}</b></span><span>{action}</span></div>)}</div>
          </div>
        </div>
      </div>
      <div className="dashboard-mobile" aria-hidden="true">
        <div className="mobile-cockpit-head"><span>W</span><div><small>WALS COCKPIT</small><strong>Votre journée</strong></div><b>•••</b></div>
        <div className="mobile-cockpit-metrics"><div><strong>4</strong><span>visites</span></div><div><strong>7</strong><span>démos</span></div><div><strong>3</strong><span>relances</span></div></div>
        <div className="mobile-cockpit-title"><span>Agenda terrain</span><small>Mardi 25 août</small></div>
        <div className="mobile-agenda"><div><time>09:30</time><span><b>Le Fournil</b><small>Démo Fidélité prête</small></span><em>→</em></div><div><time>11:00</time><span><b>Barber 22</b><small>Relance</small></span><em>→</em></div><div><time>14:30</time><span><b>Nova Beauty</b><small>Démo Play</small></span><em>→</em></div></div>
      </div>
    </div>
  );
}
