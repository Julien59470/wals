import type { Metadata } from "next";

import { BrandMark } from "@/components/site/BrandMark";
import { SiteFooter } from "@/components/site/SiteFooter";
import { UnsubscribeForm } from "@/components/site/UnsubscribeForm";

export const metadata: Metadata = { title: "Désinscription", description: "Retirer une adresse des informations de lancement WALS.", robots: { index: false, follow: true } };

export default function UnsubscribePage(){ return <><main className="unsubscribe-page"><div className="unsubscribe-wrap"><BrandMark/><span className="eyebrow">COMMUNICATIONS WALS</span><h1>Ne plus recevoir les informations de lancement.</h1><p>Saisissez l'adresse concernée. Pour protéger la confidentialité, le résultat ne confirme jamais si elle était auparavant enregistrée.</p><UnsubscribeForm/></div></main><SiteFooter/></>; }
