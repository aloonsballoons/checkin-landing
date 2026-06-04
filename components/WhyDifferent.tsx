import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { HeartHandshake, BrainCircuit, BellRing, PhoneOff } from "lucide-react";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Helps them stay independent",
    body: "Friendly nudges for medications and appointments, so they keep running their own day — on their own terms, in their own home.",
  },
  {
    icon: BrainCircuit,
    title: "Remembers their life",
    body: "The hip that hurt last Tuesday, the grandkids' names, the walk they meant to take. Each call picks up where the last one left off — never a cold bot starting from zero.",
  },
  {
    icon: BellRing,
    title: "Tells you if something's wrong",
    body: "A gentle text for a fall, a missed dose, a low mood, or confusion. You stay in the loop without having to ask, chase, or worry in the dark.",
  },
  {
    icon: PhoneOff,
    title: "Nothing for them to learn",
    body: "No app to download. No smartphone to figure out. No password, no charging, no setup. The phone just rings — the way it always has.",
  },
];

export function WhyDifferent() {
  return (
    <section id="different" className="relative bg-ink py-24 text-cream sm:py-32">
      <div className="container-px">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-clay-soft">
              Why it&apos;s different
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-serif text-4xl font-semibold leading-tight text-paper sm:text-5xl">
              Built around dignity — not surveillance.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
              CheckIn isn&apos;t a camera, a tracker, or a panic button. It&apos;s a
              daily moment of connection that happens to keep everyone a little
              safer.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="flex h-full gap-5 rounded-4xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-cream/[0.07] sm:p-8">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-clay/90 text-paper">
                  <b.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-paper sm:text-2xl">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-pretty leading-relaxed text-cream/70">
                    {b.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
