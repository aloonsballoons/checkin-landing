import { ImageResponse } from "next/og";

// OG / Twitter card — regenerated from the CheckIn "Presence" mark.
export const alt =
  "CheckIn — a daily call that helps Mom or Dad stay independent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The Presence mark, inlined as an SVG data URI so the card is drawn straight
// from the same artwork as the favicon and header lockup.
const mark = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
    <defs>
      <linearGradient id='t' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#CB6B46'/><stop offset='1' stop-color='#A8492C'/>
      </linearGradient>
    </defs>
    <rect width='40' height='40' rx='12' fill='url(#t)'/>
    <circle cx='20' cy='20' r='13' fill='none' stroke='#FFFCF6' stroke-width='2' opacity='0.5'/>
    <circle cx='20' cy='20' r='7.8' fill='none' stroke='#FFFCF6' stroke-width='2.3' opacity='0.92'/>
    <circle cx='20' cy='20' r='3.5' fill='#FFFCF6'/>
  </svg>`
)}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "84px 96px",
          background:
            "radial-gradient(60% 55% at 80% 12%, rgba(192,97,63,0.16), transparent 70%), #FAF4EA",
          color: "#2C2520",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={88} height={88} alt="" />
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700 }}>
            <span>Check</span>
            <span style={{ color: "#A8492C" }}>In</span>
            <span style={{ color: "#A8492C", marginLeft: 6 }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 880,
            }}
          >
            A daily call that helps Mom or Dad stay independent.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#5E544A" }}>
            No app. No smartphone. Nothing for them to set up.
          </div>
        </div>
      </div>
    ),
    size
  );
}
