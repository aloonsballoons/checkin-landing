import { ImageResponse } from "next/og";

// OG / Twitter card — drawn from the CheckIn "call held with love" mark.
export const alt =
  "CheckIn — a daily call that helps Mom or Dad stay independent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The primary mark — a heart with a telephone receiver carved out in negative
// space — inlined as an SVG data URI so the card is drawn straight from the
// same artwork as the favicon and header lockup.
const mark = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
    <defs>
      <linearGradient id='t' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#CB6B46'/><stop offset='1' stop-color='#A8492C'/>
      </linearGradient>
    </defs>
    <rect width='40' height='40' rx='12' fill='url(#t)'/>
    <path fill-rule='evenodd' fill='#FFFCF6' d='M20 33.5 C6 24.5 4.6 17.3 7.8 13.2 C10.8 9.4 16.4 10 20 15 C23.6 10 29.2 9.4 32.2 13.2 C35.4 17.3 34 24.5 20 33.5 Z M15 14.6 c-1.9 .35 -3 1.9 -2.65 3.8 c1.35 7.3 7.55 13.5 14.85 14.85 c1.9 .35 3.45-.75 3.8-2.65 c.35-1.75 -.45-2.85 -2.05-3.5 l-2.5-1 c-1.25-.5 -2-.15 -2.75 .65 c-1.9-1.25 -3.45-2.8 -4.7-4.7 c.8-.75 1.15-1.5 .65-2.75 l-1-2.5 c-.65-1.6 -1.75-2.4 -3.5-2.05 Z'/>
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
          // Satori parses the `background` shorthand as a list of images, so a
          // trailing solid color is invalid — set color and gradient separately.
          backgroundColor: "#FAF4EA",
          backgroundImage:
            "radial-gradient(60% 55% at 80% 12%, rgba(192,97,63,0.16), transparent 70%)",
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
