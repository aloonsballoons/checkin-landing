import { Reveal } from "@/components/Reveal";
import { Lock, PhoneOutgoing } from "lucide-react";

const points = [
  {
    icon: Lock,
    title: "Their conversations stay private",
    body: "What your parent shares is kept secure and used only to make their calls warmer and to flag concerns to you. We don't sell it. We don't share it.",
  },
  {
    icon: PhoneOutgoing,
    title: "You're always in control",
    body: "Change the call time, update reminders, or pause anytime. CheckIn supports your family — it never takes decisions out of your hands.",
  },
];

export function Trust() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="overflow-hidden rounded-[2.75rem] border border-line bg-paper shadow-soft">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="wash-soft border-b border-line p-9 sm:p-12 lg:border-b-0 lg:border-r">
              <Reveal>
                <span className="eyebrow">Honest by design</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-balance font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  We&apos;d rather be clear than impressive.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft">
                  Trusting someone with your parent&apos;s wellbeing is a big deal. So
                  here&apos;s exactly what CheckIn is — and what it isn&apos;t — in
                  plain words.
                </p>
              </Reveal>
            </div>

            <div className="divide-y divide-line p-3 sm:p-5">
              {points.map((p, i) => (
                <Reveal key={p.title} delay={0.05 * i}>
                  <div className="flex gap-5 p-6 sm:p-7">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sage-soft text-sage-deep">
                      <p.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-pretty leading-relaxed text-ink-soft">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
