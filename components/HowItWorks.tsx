import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { PhoneCall, Settings2, MessageSquareText } from "lucide-react";

const steps = [
  {
    icon: Settings2,
    n: "01",
    title: "Set it up in minutes",
    body: "Add your parent's number, record a short hello in your own voice, and note their meds, appointments, and the best time to call. You do this once — they do nothing.",
  },
  {
    icon: PhoneCall,
    n: "02",
    title: "CheckIn calls them daily",
    body: "Their phone rings like any other call. A warm, familiar conversation that remembers what matters and gently reminds them about medications and appointments.",
  },
  {
    icon: MessageSquareText,
    n: "03",
    title: "You hear from us only when it counts",
    body: "Most days, no news is good news. If something seems off — a fall, a missed dose, a low mood — you get a clear, calm text. Otherwise, life carries on.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">How it works</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Simple for you. Invisible for them.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Three small steps on your end. Nothing to install, learn, or charge on
              theirs.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.n}>
              <div className="group relative h-full overflow-hidden rounded-4xl border border-line bg-paper p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                <span className="absolute right-6 top-6 font-serif text-5xl font-semibold text-sand">
                  {step.n}
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-clay-wash text-clay-deep transition-colors duration-300 group-hover:bg-clay group-hover:text-paper">
                  <step.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
