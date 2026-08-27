import Image from "next/image";

const journeySteps = [
  ["01", "SCAN QR", "Le client rejoint votre programme en scannant votre QR code."],
  ["02", "CARTE WALLET", "Sa carte de fidélité reste directement accessible dans son Wallet."],
  ["03", "RÉCOMPENSE", "Chaque visite le rapproche d'un avantage clair et motivant."],
  ["04", "RELANCE", "Vous préparez une action pour lui rappeler sa récompense au bon moment."],
  ["05", "NOUVELLE VISITE", "Le client revient dans votre commerce et le cycle recommence."],
] as const;

function JourneyVisual({ index }: { index: number }) {
  if (index === 0) return <div className="ux-journey-visual ux-journey-qr"><span>WALS</span><Image src="/wals-qr.svg" alt="" width={94} height={94}/><small>SCANNEZ POUR REJOINDRE LE PROGRAMME</small></div>;
  if (index === 1) return <div className="ux-journey-visual ux-journey-wallet"><span>WALS</span><strong>CARTE DE FIDÉLITÉ</strong><div>{Array.from({length:10}).map((_,i)=><i className={i<4?"is-on":""} key={i}>{i<4?"W":""}</i>)}</div><small>Ajouter au Wallet</small></div>;
  if (index === 2) return <div className="ux-journey-visual ux-journey-reward"><span>VOTRE CARTE</span><div>{Array.from({length:10}).map((_,i)=><i className={i<7?"is-on":""} key={i}>★</i>)}</div><strong>7 / 10 passages</strong><small>Récompense bientôt débloquée</small></div>;
  if (index === 3) return <div className="ux-journey-visual ux-journey-reminder"><time>11:45</time><small>Mardi</small><div><b>WALS</b><span>Votre récompense vous attend !</span><em>Venez en profiter.</em></div></div>;
  return <div className="ux-journey-visual ux-journey-return"><span>NOUVELLE VISITE</span><strong>Client revenu</strong><div><i>↻</i><b>+1 visite</b></div><small>Le cycle de fidélité continue.</small></div>;
}

export function MerchantJourney() {
  return (
    <div className="ux-journey" data-reveal>
      <div className="ux-journey-grid">
        {journeySteps.map(([number,title,description], index) => (
          <article key={number}>
            <div className="ux-journey-copy"><span>{number}</span><h3>{title}</h3><p>{description}</p></div>
            <JourneyVisual index={index}/>
            {index < journeySteps.length - 1 && <i className="ux-journey-arrow" aria-hidden="true">→</i>}
          </article>
        ))}
      </div>
      <div className="ux-journey-loop"><span>↻</span><strong>Chaque visite prépare la suivante.</strong></div>
    </div>
  );
}
