import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// The browser tab shows just the brand; the longer line is kept for social
// shares, where there's room for the full pitch.
const title = "CheckIn";
const shareTitle = "CheckIn — a daily call that helps Mom or Dad stay independent";
const description =
  "A landline-simple companion that calls your aging parent every day, helps them stay on top of meds and appointments, remembers what matters, and texts you if something's wrong. No app. No smartphone. Nothing for them to set up.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://checkin.example.com"),
  openGraph: {
    title: shareTitle,
    description,
    type: "website",
    siteName: "CheckIn",
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description,
  },
  // Favicon, apple-touch icon, and OG image are file-based and auto-detected by
  // the App Router: app/icon.svg, app/apple-icon.svg, app/opengraph-image.tsx —
  // all drawn from the hand-authored heart-and-receiver mark (components/Logo.tsx).
};

export const viewport: Viewport = {
  themeColor: "#FAF4EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
