import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does my parent need a smartphone?",
    a: "No. CheckIn works on any phone — a landline, a flip phone, whatever they already use. It simply calls them. There's no app to download, no account for them to make, and nothing to charge or update.",
  },
  {
    q: "Will it actually remind them about their medication?",
    a: "Yes. You tell us which medications and when, and CheckIn brings them up gently and naturally during the daily call — never like a machine reading a list. If a dose seems to be missed, we let you know so you can follow up.",
  },
  {
    q: "What if they don't answer?",
    a: "We try again a little later, a couple of times. If we still can't reach them by the end of your chosen window, we send you a text so you can check in yourself. You're never left wondering.",
  },
  {
    q: "Is this an emergency service?",
    a: "No — and we want to be honest about that. CheckIn is a daily companion and an early heads-up for family. It is not a medical or emergency service. If something is urgent, always call 911 or your local emergency number.",
  },
  {
    q: "Is their data private?",
    a: "Yes. What your parent shares on calls is kept secure and used only to make their conversations warmer and to flag concerns to you. We don't sell it and we don't share it. You can pause or delete anytime.",
  },
  {
    q: "What does it cost?",
    a: "Founding families get early pricing locked in. Join the waitlist and you'll be first to know the details — with the founding rate reserved for you.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <span className="eyebrow">Questions</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              The things families ask us first.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-soft">
              Still wondering about something? It&apos;ll be one of the first things we
              answer when we reach out.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="space-y-3" defaultValue="item-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
