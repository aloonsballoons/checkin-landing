import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * CheckIn brand system
 * ====================
 *
 * Concept (PRIMARY) — "A call held with love": a heart with a telephone
 * receiver carved out of it in negative space. One mark, two instant readings —
 * the warmth (the heart) and the daily call (the handset). It says caring and
 * human, never clinical, and the heart silhouette keeps it legible all the way
 * down to a 24px favicon even when the receiver detail softens.
 *
 * The whole glyph is a single `evenodd` path, so it recolors with one fill and
 * the receiver "hole" simply shows whatever sits behind it:
 *   - color tone → a cream heart on a solid clay squircle (clay shows through
 *                  the receiver)
 *   - mono tone  → the heart fills `currentColor` (cream in the footer, the
 *                  dark surface on a CTA) and the receiver shows the backdrop
 *
 * The wordmark carries the same idea: a small clay heart punctuates the name.
 *
 * Everything is hand-drawn SVG on a 40-unit grid. Tokens mirror
 * tailwind.config.ts: clay #C0613F · clay-deep #A8492C · paper #FFFCF6 ·
 * ink #2C2520 · clay-soft #E8C2AE.
 */

type Variant = "lockup" | "mark" | "wordmark";
type Tone = "color" | "mono";
type Size = "sm" | "md";

type MarkProps = {
  className?: string;
  tone?: Tone;
};

/** Small solid heart that punctuates the wordmark. */
const HEART_GLYPH =
  "M6 10.5 C1.6 7.5 1 5.2 2 3.8 C2.9 2.5 4.8 2.7 6 4.3 C7.2 2.7 9.1 2.5 10 3.8 C11 5.2 10.4 7.5 6 10.5 Z";

// The primary glyph: an outer heart with a classic telephone receiver carved
// out of its lower-left in negative space. Drawn as one `evenodd` path on the
// 40-unit grid — the heart is the outer contour, the handset the inner one.
const HEART_CALL_GLYPH =
  "M20 33.5 C6 24.5 4.6 17.3 7.8 13.2 C10.8 9.4 16.4 10 20 15 " +
  "C23.6 10 29.2 9.4 32.2 13.2 C35.4 17.3 34 24.5 20 33.5 Z " +
  "M15 14.6 c-1.9 .35 -3 1.9 -2.65 3.8 c1.35 7.3 7.55 13.5 14.85 14.85 " +
  "c1.9 .35 3.45-.75 3.8-2.65 c.35-1.75 -.45-2.85 -2.05-3.5 l-2.5-1 " +
  "c-1.25-.5 -2-.15 -2.75 .65 c-1.9-1.25 -3.45-2.8 -4.7-4.7 " +
  "c.8-.75 1.15-1.5 .65-2.75 l-1-2.5 c-.65-1.6 -1.75-2.4 -3.5-2.05 Z";

/* -------------------------------------------------------------------------- */
/* Mark                                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Primary mark — a heart cradling a telephone receiver in negative space: the
 * daily call (the handset) made with love (the heart). `color` paints a cream
 * heart on a solid clay tile; `mono` fills the heart with `currentColor`. In
 * both tones the receiver is a cut-out that reveals the backdrop.
 */
export function CallHeartMark({ className, tone = "color" }: MarkProps) {
  const mono = tone === "mono";
  const fg = mono ? "currentColor" : "#FFFCF6";

  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-hidden="true"
    >
      {!mono && <rect width="40" height="40" rx="12" fill="#C0613F" />}
      <path fillRule="evenodd" d={HEART_CALL_GLYPH} fill={fg} />
    </svg>
  );
}

/** The mark used everywhere. */
export const PrimaryMark = CallHeartMark;

/** Small heart that punctuates the wordmark. */
function HeartAccent({ mono, className }: { mono?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={cn("h-[0.4em] w-[0.4em]", className)}
      aria-hidden="true"
    >
      <path
        d={HEART_GLYPH}
        className={mono ? "fill-current" : "fill-clay-deep"}
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Wordmark                                                                    */
/* -------------------------------------------------------------------------- */

function Wordmark({ size, mono }: { size: Size; mono: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-serif font-semibold tracking-[-0.01em]",
        mono ? "text-current" : "text-ink",
        size === "sm" ? "text-lg" : "text-xl"
      )}
    >
      <span>
        Check<span className={mono ? undefined : "text-clay-deep"}>In</span>
      </span>
      <HeartAccent mono={mono} className="ml-[0.14em] self-end mb-[0.22em]" />
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Public component                                                            */
/* -------------------------------------------------------------------------- */

type LogoProps = {
  className?: string;
  /** What to render. */
  variant?: Variant;
  /** `color` paints the clay tile; `mono` inherits `currentColor`. */
  tone?: Tone;
  /** Wordmark / lockup scale. */
  size?: Size;
  /** Link target; pass `null` to render a non-interactive element. */
  href?: string | null;
  "aria-label"?: string;
};

export function Logo({
  className,
  variant = "lockup",
  tone = "color",
  size = "md",
  href = "#top",
  "aria-label": ariaLabel = "CheckIn home",
}: LogoProps) {
  const mono = tone === "mono";

  const markEl = (
    <PrimaryMark
      tone={tone}
      className={cn(!mono && "shadow-soft", size === "sm" ? "h-8 w-8" : "h-9 w-9")}
    />
  );

  const content =
    variant === "mark" ? (
      markEl
    ) : variant === "wordmark" ? (
      <Wordmark size={size} mono={mono} />
    ) : (
      <span className="inline-flex items-center gap-2.5">
        {markEl}
        <Wordmark size={size} mono={mono} />
      </span>
    );

  if (href === null) {
    return (
      <span className={className} role="img" aria-label={ariaLabel}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn("inline-flex", className)}
    >
      {content}
    </Link>
  );
}

/** Back-compat alias for the standalone icon. */
export const LogoMark = PrimaryMark;
