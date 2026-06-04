"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircleHeart, Sparkles } from "lucide-react";

/** Soft animated waveform — five bars breathing at offset phases. */
function Waveform() {
  const bars = [0.35, 0.7, 1, 0.6, 0.4];
  return (
    <div className="flex h-10 items-center gap-1.5" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1.5 rounded-full bg-clay/80 motion-reduce:!animate-none"
          style={{
            height: `${h * 100}%`,
            animation: "floaty 1.4s ease-in-out infinite",
            animationDelay: `${i * 0.13}s`,
          }}
        />
      ))}
    </div>
  );
}

export function CallVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6">
      {/* Pulsing call rings — the phone "connecting". */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {[0, 0.85, 1.7].map((delay) => (
            <span
              key={delay}
              className="absolute h-64 w-64 rounded-full border border-clay/30"
              style={{ animation: "pulsering 2.6s ease-out infinite", animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      )}

      {/* Phone card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30, rotate: -4 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-[19rem] rounded-[2.75rem] border border-line bg-paper p-3 shadow-lift"
      >
        <div className="overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-sand/70 to-paper">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-5 text-[0.7rem] font-medium text-ink-faint">
            <span>9:02</span>
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-clay" aria-hidden /> CheckIn
            </span>
          </div>

          {/* call body */}
          <div className="flex flex-col items-center px-6 pb-7 pt-6 text-center">
            <div className="relative">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-clay-wash font-serif text-3xl font-semibold text-clay-deep shadow-soft">
                M
              </div>
              <span className="absolute -right-1 bottom-1 grid h-8 w-8 place-items-center rounded-full bg-sage text-paper shadow-soft">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
            </div>

            <p className="mt-5 font-serif text-xl font-semibold text-ink">Calling Mom</p>
            <p className="mt-1 text-sm text-sage-deep">Connected · good morning, Margaret</p>

            <div className="mt-5 flex items-center justify-center">
              <Waveform />
            </div>

            {/* memory snippet — continuity, not a cold bot */}
            <div className="mt-6 w-full rounded-2xl border border-line bg-paper/80 px-4 py-3 text-left">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-clay-deep">
                Remembering
              </p>
              <p className="mt-1 text-sm leading-snug text-ink-soft">
                Your hip felt better Tuesday — did the walk help? And it&apos;s the
                10 a.m. pill this morning.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating family text card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16, x: 10 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-3 -right-2 z-20 w-52 rounded-2xl border border-line bg-paper px-4 py-3 shadow-lift sm:-right-6"
      >
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage-soft text-sage-deep">
            <MessageCircleHeart className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Text to you</p>
            <p className="mt-0.5 text-xs leading-snug text-ink-soft">
              Mom sounded great today. Took her morning meds. 💛
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
