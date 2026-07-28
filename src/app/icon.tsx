import { ImageResponse } from "next/og";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "20px",
          fontSize: 44,
          fontWeight: 700,
          color: "white",
          letterSpacing: "-0.02em",
        }}
      >
        TN
      </div>
    ),
    { ...size }
  );
}
