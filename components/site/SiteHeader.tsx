import { AudienceHeader } from "@/components/landing/AudienceHeader";

export function SiteHeader({ audience }: { audience?: "merchant" | "partner" }) {
  return <AudienceHeader audience={audience} />;
}
