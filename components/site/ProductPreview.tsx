export function MerchantPreview() {
  return (
    <div className="product-preview merchant-preview" aria-label="Aperçu illustratif du futur espace commerce WALS">
      <div className="preview-topbar"><span>MON COMMERCE</span><b>Aperçu produit</b></div>
      <div className="preview-metrics">
        <article><small>Cartes actives</small><strong>—</strong><span>Suivi en préparation</span></article>
        <article><small>Visites</small><strong>—</strong><span>Historique à venir</span></article>
        <article><small>Récompenses</small><strong>—</strong><span>Règles personnalisables</span></article>
      </div>
      <div className="preview-main-grid">
        <div className="preview-chart">
          <div className="preview-section-title"><strong>Activité client</strong><span>Illustration</span></div>
          <div className="chart-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
        <div className="preview-actions">
          <div className="preview-section-title"><strong>Actions</strong><span>À préparer</span></div>
          <span>Créer une récompense</span>
          <span>Préparer une campagne</span>
          <span>Voir les clients</span>
        </div>
      </div>
    </div>
  );
}

export function PartnerPreview() {
  return (
    <div className="product-preview partner-preview" aria-label="Aperçu illustratif du futur cockpit partenaire WALS">
      <div className="preview-topbar"><span>VOTRE COCKPIT</span><b>Illustration non contractuelle</b></div>
      <div className="pipeline">
        <article><small>PROSPECTS</small><strong>À identifier</strong><span>Boulangerie du quartier</span><span>Salon indépendant</span></article>
        <article><small>DÉMOS</small><strong>À préparer</strong><span>Identité personnalisée</span><span>Offre adaptée</span></article>
        <article><small>OFFRES</small><strong>À proposer</strong><span>Vos conditions</span><span>Vos tarifs</span></article>
        <article><small>CLIENTS</small><strong>À développer</strong><span>Suivi centralisé</span><span>Relation directe</span></article>
      </div>
    </div>
  );
}

export function WalletCardPreview() {
  return (
    <div className="wallet-scene" aria-label="Illustration d'une carte de fidélité digitale">
      <div className="phone-frame">
        <div className="phone-island" />
        <div className="wallet-demo">
          <small>CARTE DE FIDÉLITÉ</small>
          <strong>LE FOURNIL</strong>
          <p>Votre fidélité, directement dans votre téléphone.</p>
          <div className="stamp-row" aria-hidden="true">{Array.from({ length: 8 }).map((_, index) => <i className={index < 5 ? "on" : ""} key={index} />)}</div>
          <span>Progression illustrée</span>
        </div>
        <div className="phone-note"><b>Récompense</b><span>Définie par le commerce</span></div>
      </div>
    </div>
  );
}
