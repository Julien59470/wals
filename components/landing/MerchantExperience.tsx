import Link from "next/link";

import { AudienceHeader } from "@/components/landing/AudienceHeader";
import { MerchantDashboardMockup } from "@/components/landing/MerchantDashboardMockup";
import { MerchantFeatureTabs } from "@/components/landing/MerchantFeatureTabs";
import { MerchantJourney } from "@/components/landing/MerchantJourney";
import { MotionExperience } from "@/components/landing/MotionExperience";
import { Iphone, Samsung } from "@/components/landing/ProductDevices";
import { ArrowIcon, CheckIcon } from "@/components/landing/VisualInterfaces";
import { WalletTrust } from "@/components/landing/WalletTrust";
import { LaunchNotifyForm } from "@/components/site/LaunchNotifyForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { merchantFaq } from "@/lib/content";
import { sectors } from "@/lib/sectors";

const sectorVisuals = ["RESTO", "COIFFURE", "FOURNIL", "BEAUTÉ", "LOCAL"] as const;

export function MerchantExperience() {
  return (
    <div className="site-shell bo-site merchant-site">
      <MotionExperience/>
      <AudienceHeader audience="merchant"/>
      <main>
        <section id="top" className="bo-hero merchant-hero ux-merchant-hero" data-motion-section>
          <div className="bo-hero-grid-bg"/>
          <div className="bo-hero-glow bo-hero-glow-a"/>
          <div className="bo-hero-glow bo-hero-glow-b"/>
          <div className="site-container bo-hero-layout">
            <div className="bo-hero-copy" data-reveal>
              <div className="bo-dev-note"><i/> Aperçu avant ouverture</div>
              <p className="bo-overline">FIDÉLITÉ DIGITALE · RÉCOMPENSES · ENGAGEMENT</p>
              <h1>Faites revenir vos clients. <span>Plus souvent.</span></h1>
              <p className="bo-hero-promise">Une fidélité simple à utiliser. <strong>Une relation qui continue après chaque visite.</strong></p>
              <p className="bo-hero-lead">Carte Wallet, récompenses, campagnes, parrainage et suivi client : WALS réunit les outils essentiels pour fidéliser vos clients depuis un seul espace.</p>
              <div className="bo-hero-actions"><a className="bo-primary-cta" href="#contact">Me prévenir de l'ouverture <ArrowIcon/></a></div>
              <div className="bo-proof-row ux-hero-reassurance">
                <span><CheckIcon/> Sans application à télécharger</span>
                <span><CheckIcon/> Compatible Wallet</span>
                <span><CheckIcon/> Mise en place simple</span>
              </div>
              <WalletTrust tone="dark" className="ux-merchant-wallet-trust"/>
            </div>

            <div className="merchant-stage ux-merchant-stage" data-reveal>
              <Iphone/>
              <Samsung/>
              <div className="merchant-stage-card ux-stage-card">
                <small>EXPÉRIENCE WALS</small>
                <strong>La fidélité directement dans le Wallet.</strong>
                <span>Une expérience simple à retrouver, sans application WALS dédiée.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bo-opportunity dark-section merchant-flow ux-journey-section" data-motion-section>
          <div className="site-container">
            <div className="ux-centered-heading" data-reveal>
              <p className="section-index light">01 / LE PARCOURS CLIENT</p>
              <h2>Du premier passage <span>au prochain retour.</span></h2>
              <p>Transformez chaque passage en occasion de faire revenir vos clients. WALS réunit fidélité, récompenses et relances dans une expérience simple, directement sur leur téléphone.</p>
            </div>
            <MerchantJourney/>
          </div>
        </section>

        <section id="solutions" className="bo-benefits light-section ux-feature-section" data-motion-section>
          <div className="site-container">
            <div className="ux-centered-heading is-dark" data-reveal>
              <p className="section-index">02 / FONCTIONNALITÉS INTERACTIVES</p>
              <h2>Tout ce qu'il faut pour <span>fidéliser, engager et faire revenir.</span></h2>
              <p>Découvrez chaque fonctionnalité et voyez comment WALS accompagne le retour client, sans transformer votre quotidien en catalogue d'outils.</p>
            </div>
            <MerchantFeatureTabs/>
          </div>
        </section>

        <section className="bo-cockpit light-section ux-product-proof" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row" data-reveal>
              <p className="section-index">03 / ESPACE COMMERCE</p>
              <div>
                <h2>Pilotez votre fidélité <span>depuis un seul espace.</span></h2>
                <p>Suivez vos cartes actives, visites, récompenses, campagnes et retours clients depuis votre tableau de bord.</p>
              </div>
            </div>
            <div className="ux-dashboard-annotations" data-reveal><span>Suivez vos clients</span><span>Mesurez les retours</span><span>Pilotez vos campagnes</span></div>
            <div className="bo-cockpit-frame ux-dashboard-frame" data-reveal><MerchantDashboardMockup/></div>
          </div>
        </section>

        <section id="secteurs" className="bo-markets dark-section ux-sector-section" data-motion-section>
          <div className="site-container">
            <div className="bo-heading-row bo-heading-light" data-reveal>
              <p className="section-index light">04 / COMMERCES</p>
              <div>
                <h2>Une fidélité adaptée <span>à votre commerce.</span></h2>
                <p>Boulangerie, coiffure, restauration, beauté ou commerce de proximité : adaptez vos récompenses et vos actions à la fréquence réelle de vos clients.</p>
              </div>
            </div>
            <div className="ux-sector-grid">
              {sectors.map((sector,index) => (
                <Link href={`/commercants/${sector.slug}`} key={sector.slug} className="ux-sector-card" data-reveal>
                  <div className={`ux-sector-visual is-${index+1}`}><span>{sectorVisuals[index]}</span><i/><i/></div>
                  <div><small>{String(index+1).padStart(2,"0")}</small><strong>{sector.shortName}</strong><span>Voir les cas d'usage →</span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bo-faq light-section" data-motion-section>
          <div className="site-container bo-faq-layout">
            <div className="bo-faq-heading" data-reveal>
              <p className="section-index">05 / QUESTIONS</p>
              <h2>Ce qu'il faut savoir <span>avant l'ouverture.</span></h2>
              <p>Les réponses essentielles sur l'expérience WALS et son lancement.</p>
            </div>
            <div className="bo-faq-list" data-reveal>
              {merchantFaq.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section id="contact" className="bo-final" data-motion-section>
          <div className="bo-final-grid"/>
          <div className="site-container bo-final-layout">
            <div data-reveal>
              <div className="bo-dev-note is-light"><i/> Ouverture prochaine</div>
              <h2>Soyez parmi les premiers <span>à découvrir WALS.</span></h2>
              <p>Laissez votre email et recevez une notification dès l'ouverture du parcours Commerçants.</p>
              <div className="bo-final-proof"><CheckIcon/> Une inscription suffit pour être prévenu de l'ouverture.</div>
            </div>
            <div className="bo-final-form" data-reveal>
              <small>OUVERTURE WALS · COMMERCES</small>
              <h3>Me prévenir de l'ouverture</h3>
              <LaunchNotifyForm audience="merchant"/>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter/>
    </div>
  );
}
