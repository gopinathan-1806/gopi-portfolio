import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #05070a 0%, #0c1017 55%, #05070a 100%)",
          color: "#eef1f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 9999,
              border: "2px solid #22d3ee",
              fontSize: 22,
              fontWeight: 700,
              color: "#22d3ee",
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 24, color: "#8a93a3" }}>gopinathan-1806.dev</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              backgroundImage: "linear-gradient(120deg, #22d3ee, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.title}
          </div>
          <div style={{ fontSize: 24, color: "#8a93a3", maxWidth: 900 }}>
            Cloud Infrastructure &middot; Kubernetes &amp; GitOps &middot; RAG &amp; AI Agents &middot; LLMOps
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["AWS", "Azure", "IBM Cloud", "Kubernetes", "LangChain", "n8n"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 20,
                padding: "8px 18px",
                borderRadius: 9999,
                border: "1px solid #1c222d",
                color: "#eef1f5",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
