import { ImageResponse } from "next/og";

export const alt = "TaxiNoir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          gap: "40px",
        }}
      >
        {/* Logo icon */}
        <div
          style={{
            width: "160px",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1a1a1a",
            borderRadius: "36px",
            border: "2px solid #333",
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 36 36"
            fill="none"
          >
            <line
              x1="8"
              y1="12"
              x2="28"
              y2="12"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="18"
              y1="15"
              x2="18"
              y2="27"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 600,
            letterSpacing: "-1px",
          }}
        >
          <span style={{ color: "#a3a3a3" }}>Taxi</span>
          <span style={{ color: "#ffffff", fontWeight: 700 }}>Noir</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#737373",
            letterSpacing: "0.5px",
          }}
        >
          Chauffeurs agree&#769;s &bull; Tarif fixe &bull; 24h/24
        </div>
      </div>
    ),
    { ...size }
  );
}
