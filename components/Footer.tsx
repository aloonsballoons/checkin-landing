import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="container-px py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo href={null} />
            <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
              A landline-simple daily call that helps an aging parent stay
              independent — and quietly keeps family in the loop.
            </p>
          </div>

          <nav className="flex gap-14 text-sm" aria-label="Footer">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-ink">Product</span>
              <a href="#how" className="text-ink-soft transition-colors hover:text-clay-deep">
                How it works
              </a>
              <a href="#different" className="text-ink-soft transition-colors hover:text-clay-deep">
                Why it&apos;s different
              </a>
              <a href="#faq" className="text-ink-soft transition-colors hover:text-clay-deep">
                Questions
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-ink">Get started</span>
              <a href="#join" className="text-ink-soft transition-colors hover:text-clay-deep">
                Join the waitlist
              </a>
              <a
                href="mailto:hello@checkin.example.com"
                className="text-ink-soft transition-colors hover:text-clay-deep"
              >
                Contact us
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-paper/60 px-5 py-4 text-sm leading-relaxed text-ink-soft">
          <strong className="font-semibold text-ink">
            CheckIn is not a medical or emergency service.
          </strong>{" "}
          It&apos;s a daily companion and an early heads-up for family. If a situation
          is urgent, call 911 or your local emergency number.
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CheckIn. Made with care.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-clay-deep">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-clay-deep">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
