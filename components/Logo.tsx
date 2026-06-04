import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * CheckIn brand system
 * ====================
 *
 * Concept (PRIMARY) — "A caring phone call": a telephone handset whose lower
 * mouthpiece is a heart. One idea, two readings — the daily call (the receiver)
 * made with love (the heart). Warm and human, never clinical, and it stays
 * legible all the way down to a 24px favicon.
 *
 * The handset is built from three same-fill pieces (oval earpiece + handle +
 * heart) that union into one silhouette, so it recolors with one fill:
 *   - color tone → a cream handset on a solid clay squircle
 *   - mono tone  → the handset fills `currentColor` (cream in the footer, the
 *                  dark surface on a CTA)
 *
 * The wordmark carries the same idea: a small clay heart punctuates the name.
 *
 * An alternate mark (concept B, "Caring conversation") — a speech bubble
 * cradling a heart — is exported as `BubbleMark`. To make it the primary mark
 * everywhere, point `PrimaryMark` at it (see below).
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

const HEART_GLYPH =
  "M6 10.5 C1.6 7.5 1 5.2 2 3.8 C2.9 2.5 4.8 2.7 6 4.3 C7.2 2.7 9.1 2.5 10 3.8 C11 5.2 10.4 7.5 6 10.5 Z";

// The receiver, drawn on the 40-unit grid as three pieces that union into one
// silhouette: an oval earpiece (upper-left), a handle that arcs over the top,
// and — in place of the lower mouthpiece — a heart.
const EARPIECE = { cx: 13.5, cy: 13, rx: 5.4, ry: 4, rotate: -45 };
const HANDLE = "M13.5 13 C19 7.5 30 10 28 24";
const HEART_MOUTH = "translate(27 27) scale(1.15) translate(-6 -6)";

/* -------------------------------------------------------------------------- */
/* Marks                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Primary mark — a telephone handset whose lower mouthpiece is a heart: the
 * daily call (the receiver) made with love (the heart). `color` paints a cream
 * handset on a solid clay tile; `mono` fills the handset with `currentColor`.
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

      {/* Earpiece + handle + heart mouthpiece, all the same fill → one shape. */}
      <ellipse
        cx={EARPIECE.cx}
        cy={EARPIECE.cy}
        rx={EARPIECE.rx}
        ry={EARPIECE.ry}
        transform={`rotate(${EARPIECE.rotate} ${EARPIECE.cx} ${EARPIECE.cy})`}
        fill={fg}
      />
      <path
        d={HANDLE}
        fill="none"
        stroke={fg}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path transform={HEART_MOUTH} d={HEART_GLYPH} fill={fg} />
    </svg>
  );
}

/**
 * Alternate mark (concept B) — a soft speech bubble cradling a heart. Swap it
 * in everywhere by setting `PrimaryMark = BubbleMark`.
 */
export function BubbleMark({ className, tone = "color" }: MarkProps) {
  const mono = tone === "mono";
  const fg = mono ? "currentColor" : "#FFFCF6";

  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-hidden="true"
    >
      {!mono && (
        <>
          <defs>
            <linearGradient id="ci-tile-b" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#CB6B46" />
              <stop offset="1" stopColor="#A8492C" />
            </linearGradient>
          </defs>
          <rect width="40" height="40" rx="12" fill="url(#ci-tile-b)" />
        </>
      )}
      <path
        d="M12 9.5h16a4 4 0 0 1 4 4v8.5a4 4 0 0 1-4 4h-7.8l-4.9 3.9a1 1 0 0 1-1.6-.8V25.5H12a4 4 0 0 1-4-4V13.5a4 4 0 0 1 4-4Z"
        fill={mono ? "none" : fg}
        stroke={mono ? "currentColor" : "none"}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M20 22.4 c-3.2-2.1 -3.6-3.8 -2.9-4.8 .6-.9 2-.7 2.9 .4 .9-1.1 2.3-1.3 2.9-.4 .7 1 .3 2.7-2.9 4.8 Z"
        fill={mono ? "currentColor" : "#A8492C"}
      />
    </svg>
  );
}

/** The mark used everywhere. Point this at `BubbleMark` to swap concepts. */
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
