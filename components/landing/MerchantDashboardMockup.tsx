export function MerchantDashboardMockup() {
  const rows = [
    ["Clients fidèles", "Segment", "642 clients", "+12 %"],
    ["Nouveaux clients", "Segment", "198 ce mois", "+9 %"],
    ["Récompenses", "Fidélité", "214 utilisées", "7,2 %"],
    ["Campagnes", "Engagement", "3 prévues", "62 %"],
  ] as const;

  return (
    <div className="dashboard-showcase bo-dashboard-showcase merchant-dashboard" aria-label="Aperçu du futur espace commerçant WALS avec données fictives">
      <div className="dashboard-frame dashboard-desktop">
        <div className="dashboard-topbar"><span className="dashboard-dots"><i /><i /><i /></span><span>app.wals.fr / commerce</span><b>LE FOURNIL · DÉMONSTRATION WALS</b></div>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar"><div className="dashboard-brand"><span>W</span><strong>LE FOURNIL</strong></div><nav aria-label="Aperçu des sections commerce"><span className="active">Vue d'ensemble</span><span>Clients</span><span>Fidélité</span><span>Campagnes</span><span>Statistiques</span></nav><div className="sidebar-status"><i /> Futur espace commerce</div></aside>
          <div className="dashboard-main">
            <div className="dashboard-heading"><div><span>DONNÉES DE DÉMONSTRATION</span><h3>Votre fidélité.</h3></div><div className="dashboard-cta">+ Nouvelle action</div></div>
            <div className="bo-dashboard-kpis merchant-kpis"><div><span>Cartes actives</span><strong>1 284</strong></div><div><span>Visites</span><strong>2 968</strong></div><div><span>Récompenses</span><strong>214</strong></div><div className="is-revenue"><span>Clients revenus</span><strong>68 %</strong></div></div>
            <div className="dashboard-grid"><div className="dashboard-panel agenda-panel"><div className="panel-title"><strong>Actions à préparer</strong><span>Exemples</span></div><div className="agenda-list"><div><time>FIDÉLITÉ</time><span><b>Récompense</b><small>Produit offert au 10e passage</small></span><em>Actif</em></div><div><time>RETOUR</time><span><b>Campagne</b><small>198 clients ciblés</small></span><em>Prête</em></div><div><time>PARRAINAGE</time><span><b>Invitation</b><small>47 partages ce mois</small></span><em>Suivi</em></div></div></div><div className="dashboard-panel health-panel"><div className="panel-title"><strong>Taux de retour</strong><span>Illustration</span></div><strong className="health-score">68<small>%</small></strong><p>Exemple d'indicateur destiné au futur tableau de bord.</p><div className="partner-referral"><span>Cartes actives</span><b>1 284</b></div></div></div>
            <div className="dashboard-table merchant-table"><div className="table-head"><span>Élément</span><span>Type</span><span>État</span><span>Résultat</span></div>{rows.map(([name, type, state, value]) => <div className="table-row" key={name}><span><i>{name[0]}</i>{name}</span><span>{type}</span><span><b>{state}</b></span><span>{value}</span></div>)}</div>
          </div>
        </div>
      </div>
      <div className="dashboard-mobile" aria-hidden="true"><div className="mobile-cockpit-head"><span>W</span><div><small>LE FOURNIL</small><strong>Votre fidélité</strong></div><b>•••</b></div><div className="mobile-cockpit-metrics"><div><strong>1 284</strong><span>cartes</span></div><div><strong>2 968</strong><span>visites</span></div><div><strong>68%</strong><span>retours</span></div></div><div className="mobile-cockpit-title"><span>Actions</span><small>Démonstration</small></div><div className="mobile-agenda"><div><time>FIDÉLITÉ</time><span><b>Récompense</b><small>214 utilisées</small></span><em>→</em></div><div><time>CAMPAGNE</time><span><b>Réactivation</b><small>62 % ouverture</small></span><em>→</em></div></div></div>
      <p className="dashboard-demo-note">Données fictives destinées à montrer le niveau de remplissage du futur tableau de bord.</p>
    </div>
  );
}
