// Pragmatic, RFC-lenient email check. Good enough for a waitlist gate;
// real verification happens when we send the first email.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(raw: unknown): string {
  return typeof raw === "string" ? raw.trim().toLowerCase() : "";
}

export function isValidEmail(email: string): boolean {
  if (email.length < 3 || email.length > 254) return false;
  return EMAIL_RE.test(email);
}

export function cleanName(raw: unknown, max = 80): string | null {
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}
