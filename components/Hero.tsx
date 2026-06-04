import { CallVisual } from "@/components/CallVisual";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section id="top" className="wash-hero relative overflow-hidden">
      <div className="container-px grid items-center gap-14 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-20">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" /> A daily call home
          </span>

          <h1 className="mt-6 text-balance font-serif text-[2.7rem] font-semibold leading-[1.04] text-ink sm:text-6xl">
            Help your parent keep living{" "}
            <span className="relative whitespace-nowrap text-clay-deep">
              life their way
              <svg
                className="absolute -bottom-2 left-0 w-full text-clay/50"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8c60-6 120-6 180-3s90 3 116-1"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
            CheckIn places a warm daily phone call to your aging parent — helping
            them stay on top of medications, appointments, and the rhythm of their
            day. It remembers what matters, and texts you only if something&apos;s
            wrong.
          </p>

          <div id="join" className="mt-9 max-w-xl scroll-mt-24">
            <WaitlistForm variant="hero" idPrefix="hero" />
            <p className="mt-3 pl-1 text-sm text-ink-faint">
              No app. No smartphone. Nothing for them to set up.
            </p>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-0 rounded-[3rem] bg-gradient-to-br from-clay-wash/40 to-sage-soft/30 blur-2xl" />
          <CallVisual />
        </div>
      </div>
    </section>
  );
}
