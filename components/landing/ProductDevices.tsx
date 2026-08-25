import Image from "next/image";

export function Iphone({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`device iphone ${compact ? "device-compact" : ""}`} role="img" aria-label="Aperçu d'une carte de fidélité digitale WALS dans Apple Wallet">
      <div className="device-screen iphone-screen">
        <div className="device-status"><span>09:41</span><span>● ● ●</span></div>
        <div className="dynamic-island" />
        <div className="wallet-head"><span>APPLE WALLET</span><strong>Mes cartes</strong></div>
        <div className="wallet-pass">
          <div className="pass-top">
            <div className="pass-logo">W</div><div><span>Boulangerie</span><strong>Le Fournil</strong></div>
            <span className="pass-count" aria-label="Progression de 6 à 7 tampons sur 10"><b className="count-before">6</b><b className="count-after">7</b><em>/10</em></span>
          </div>
          <div className="stamp-grid">{Array.from({ length: 10 }).map((_, index) => <span key={index} className={`stamp ${index < 6 ? "stamp-on" : index === 6 ? "stamp-next" : ""}`}>{index < 7 ? "W" : ""}</span>)}</div>
          <div className="pass-note"><strong className="pass-note-before">Encore 4 passages</strong><strong className="pass-note-after">Encore 3 passages</strong><span>avant votre récompense</span></div>
          <div className="wallet-qr" aria-label="QR code vers wals.fr"><Image src="/wals-qr.svg" alt="" width={78} height={78} draggable={false} /></div>
        </div>
        <div className="wallet-notification"><span>W</span><div><strong>Le Fournil</strong><small>Nouveau tampon ajouté. Plus que 3 passages.</small></div></div>
        <div className="iphone-home" />
      </div>
    </figure>
  );
}

export function Samsung({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`device samsung ${compact ? "device-compact" : ""}`} role="img" aria-label="Aperçu de la roue digitale WALS sur un smartphone Android">
      <div className="device-screen samsung-screen">
        <div className="device-status"><span>09:41</span><span>● ● ●</span></div><div className="camera-hole" />
        <div className="wheel-app-head"><div className="pass-logo small">W</div><div><span>LE FOURNIL</span><strong>Votre chance du jour</strong></div></div>
        <div className="wheel-area"><span className="wheel-pointer" /><div className="android-wheel"><span className="wheel-label wheel-label-top">-10%</span><span className="wheel-label wheel-label-right">PERDU</span><span className="wheel-label wheel-label-bottom">CAFÉ</span><span className="wheel-label wheel-label-left">-20%</span><div className="wheel-hub">W</div></div></div>
        <div className="spin-button">Lancer la roue</div>
        <div className="wheel-win"><span>GAGNÉ</span><strong>Café offert</strong><small>Coupon valable lors de votre prochaine visite</small></div>
        <div className="android-gesture" />
      </div>
    </figure>
  );
}
