import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-cream/80 backdrop-blur-md">
      <nav className="container-px flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          <a href="#how" className="transition-colors hover:text-clay-deep">
            How it works
          </a>
          <a href="#different" className="transition-colors hover:text-clay-deep">
            Why it&apos;s different
          </a>
          <a href="#faq" className="transition-colors hover:text-clay-deep">
            Questions
          </a>
        </div>
        <Button asChild size="sm" className="shadow-none">
          <a href="#join">Join the waitlist</a>
        </Button>
      </nav>
    </header>
  );
}
