import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WALS — Plateforme de vente terrain pour revendeurs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px", background: "radial-gradient(circle at 82% 20%,#16476f,#082743 38%,#061326 76%)", color: "white", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 35, fontWeight: 800 }}>
        <span style={{ display: "flex", position: "relative", width: 58, height: 58, alignItems: "center", justifyContent: "center", borderRadius: 15, background: "#ff6d1b", fontSize: 32 }}>W<span style={{ position: "absolute", right: -8, top: -11, fontSize: 28 }}>↗</span></span>
        WALS
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: 980 }}>
        <div style={{ display: "flex", color: "#ff9c64", fontSize: 18, fontWeight: 800, letterSpacing: "3px" }}>POUR REVENDEURS · AGENCES · VENTE TERRAIN</div>
        <div style={{ fontSize: 76, lineHeight: .94, letterSpacing: "-4px", fontWeight: 800 }}>Vendez des solutions digitales aux commerces.</div>
        <div style={{ fontSize: 25, color: "#bdc8d2" }}>Fidélité digitale · Roue interactive · Démonstrations personnalisées · Cockpit revendeur</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#8fa0b0", fontSize: 18 }}><span>WALS</span><span>Plateforme en développement</span></div>
    </div>,
    size,
  );
}
