import { ImageResponse } from "next/og";

export const alt = "WALS — Fidélité digitale en développement pour commerces et partenaires";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, background: "radial-gradient(circle at 82% 16%,#17466f,#0b2948 35%,#061326 78%)", color: "white", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 34, fontWeight: 800 }}><span style={{ color: "#ff6d1b" }}>↗</span> WALS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 1020 }}><span style={{ color: "#ff9f69", fontSize: 19, letterSpacing: 3, fontWeight: 800 }}>PLATEFORME EN DÉVELOPPEMENT</span><strong style={{ fontSize: 74, lineHeight: .94, letterSpacing: -4 }}>Une technologie. Deux parcours.</strong><span style={{ color: "#bfccd8", fontSize: 26 }}>Pour les commerces · Pour les partenaires</span></div>
      <div style={{ color: "#8192a3", fontSize: 18 }}>wals.fr</div>
    </div>, size,
  );
}
