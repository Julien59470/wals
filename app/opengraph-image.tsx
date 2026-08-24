import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WALS — Plateforme de vente terrain pour revendeurs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "linear-gradient(135deg,#061326,#0b3155)", color: "white", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 34, fontWeight: 800 }}><span style={{ display: "flex", width: 52, height: 52, alignItems: "center", justifyContent: "center", borderRadius: 14, background: "#ff6d1b" }}>W</span>WALS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: 980 }}>
        <div style={{ fontSize: 74, lineHeight: .95, letterSpacing: "-4px", fontWeight: 800 }}>Transformez votre prospection terrain en offres digitales à revendre.</div>
        <div style={{ fontSize: 25, color: "#b6c1cc" }}>Fidélité digitale · Roue interactive · Démonstrations personnalisées · Cockpit revendeur</div>
      </div>
      <div style={{ display: "flex", color: "#ff9c64", fontSize: 20, fontWeight: 700 }}>WALS.FR</div>
    </div>,
    size,
  );
}
