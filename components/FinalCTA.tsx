import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

export function FinalCTA() {
  return (
    <section id="waitlist" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-px">
        <div className="wash-hero relative overflow-hidden rounded-[2.75rem] border border-line bg-paper px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
          {/* soft decorative call rings */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-clay/10 blur-3xl"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <Reveal>
              <span className="eyebrow">Founding families</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] text-ink sm:text-[3.25rem]">
                Let them keep their independence. Keep your peace of mind.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
                Join the waitlist and be first to give Mom or Dad a warm daily call —
                with founding pricing reserved for you.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mx-auto mt-10 max-w-xl">
                <WaitlistForm variant="full" idPrefix="final" />
                <p className="mt-4 text-sm text-ink-faint">
                  No app. No smartphone. Nothing for them to set up. We&apos;ll only
                  email you about CheckIn.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
