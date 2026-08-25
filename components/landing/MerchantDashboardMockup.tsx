export function MerchantDashboardMockup() {
  const rows = [
    ["Clients fidèles", "Segment", "À suivre", "Aperçu"],
    ["Nouveaux clients", "Segment", "À suivre", "Aperçu"],
    ["Récompenses", "Fidélité", "En cours", "Aperçu"],
    ["Campagnes", "Engagement", "À préparer", "Aperçu"],
  ] as const;

  return (
    <div className="dashboard-showcase bo-dashboard-showcase merchant-dashboard" aria-label="Aperçu du futur espace commerçant WALS">
      <div className="dashboard-frame dashboard-desktop">
        <div className="dashboard-topbar"><span className="dashboard-dots"><i /><i /><i /></span><span>app.wals.fr / commerce</span><b>LE FOURNIL · aperçu WALS</b></div>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar"><div className="dashboard-brand"><span>W</span><strong>LE FOURNIL</strong></div><nav aria-label="Aperçu des sections commerce"><span className="active">Vue d'ensemble</span><span>Clients</span><span>Fidélité</span><span>Campagnes</span><span>Statistiques</span></nav><div className="sidebar-status"><i /> Aperçu produit</div></aside>
          <div className="dashboard-main">
            <div className="dashboard-heading"><div><span>APERÇU COMMERCE</span><h3>Votre fidélité.</h3></div><div className="dashboard-cta">+ Nouvelle action</div></div>
            <div className="bo-dashboard-kpis merchant-kpis"><div><span>Cartes actives</span><strong>—</strong></div><div><span>Visites</span><strong>—</strong></div><div><span>Récompenses</span><strong>—</strong></div><div className="is-revenue"><span>Clients revenus</span><strong>—</strong></div></div>
            <div className="dashboard-grid"><div className="dashboard-panel agenda-panel"><div className="panel-title"><strong>Actions à préparer</strong><span>Exemples</span></div><div className="agenda-list"><div><time>FIDÉLITÉ</time><span><b>Récompense</b><small>Définir le prochain avantage</small></span><em>→</em></div><div><time>RETOUR</time><span><b>Campagne</b><small>Préparer un message</small></span><em>→</em></div><div><time>PARRAINAGE</time><span><b>Invitation</b><small>Configurer l'avantage</small></span><em>→</em></div></div></div><div className="dashboard-panel health-panel"><div className="panel-title"><strong>Fidélité</strong><span>Illustration</span></div><strong className="health-score">—<small>%</small></strong><p>Les indicateurs réels seront définis dans le périmètre de lancement.</p><div className="partner-referral"><span>Statut</span><b>En préparation</b></div></div></div>
            <div className="dashboard-table merchant-table"><div className="table-head"><span>Élément</span><span>Type</span><span>État</span><span>Vue</span></div>{rows.map(([name, type, state, value]) => <div className="table-row" key={name}><span><i>{name[0]}</i>{name}</span><span>{type}</span><span><b>{state}</b></span><span>{value}</span></div>)}</div>
          </div>
        </div>
      </div>
      <div className="dashboard-mobile" aria-hidden="true"><div className="mobile-cockpit-head"><span>W</span><div><small>LE FOURNIL</small><strong>Votre fidélité</strong></div><b>•••</b></div><div className="mobile-cockpit-metrics"><div><strong>—</strong><span>cartes</span></div><div><strong>—</strong><span>visites</span></div><div><strong>—</strong><span>retours</span></div></div><div className="mobile-cockpit-title"><span>Actions</span><small>Aperçu</small></div><div className="mobile-agenda"><div><time>FIDÉLITÉ</time><span><b>Récompense</b><small>À définir</small></span><em>→</em></div><div><time>CAMPAGNE</time><span><b>Réactivation</b><small>À préparer</small></span><em>→</em></div></div></div>
    </div>
  );
}
