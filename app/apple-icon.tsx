import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", alignItems: "center", justifyContent: "center", borderRadius: "42px", background: "#061326", color: "white", fontFamily: "Arial, sans-serif", fontSize: 100, fontWeight: 900 }}>
      W<span style={{ position: "absolute", right: 16, top: -7, color: "#ff6d1b", fontSize: 84, fontWeight: 900 }}>↗</span>
    </div>,
    size,
  );
}
