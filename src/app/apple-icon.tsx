import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: "40px",
        }}
      >
        <svg
          width="120"
          height="120"
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
    ),
    { ...size }
  );
}
