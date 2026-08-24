import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", alignItems: "center", justifyContent: "center", borderRadius: "18px", background: "#061326", color: "white", fontFamily: "Arial, sans-serif", fontSize: 35, fontWeight: 900 }}>
      W<span style={{ position: "absolute", right: 4, top: -4, color: "#ff6d1b", fontSize: 31, fontWeight: 900 }}>↗</span>
    </div>,
    size,
  );
}
