import { Reveal } from "@/components/Reveal";

export function WhatItsFor() {
  return (
    <section className="wash-soft relative py-24 sm:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">What it&apos;s really for</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              They want to stay in their own home. You want them safe. Both can be
              true.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              Your parent has spent a lifetime running their own day, and they&apos;d
              like to keep it that way. You just want to know they&apos;re okay —
              without taking over, hovering, or turning every call into a checklist.
              CheckIn sits gently in that gap.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <article className="h-full rounded-4xl border border-line bg-paper p-8 shadow-soft">
              <p className="font-serif text-sm font-semibold uppercase tracking-[0.16em] text-clay-deep">
                For Mom or Dad
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-ink">
                A warm voice each morning that helps them keep on top of their day —
                their meds, their appointments, the small things that add up to
                living independently. A companion, never a nag.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="h-full rounded-4xl border border-line bg-ink p-8 shadow-lift">
              <p className="font-serif text-sm font-semibold uppercase tracking-[0.16em] text-clay-soft">
                For you
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-cream">
                The quiet reassurance that someone&apos;s looking out for them every
                day — and a heads-up if something seems off. Caring for a parent
                without managing their every detail, or fearing the call.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
