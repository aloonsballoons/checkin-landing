"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

type WaitlistFormProps = {
  /** "hero" = compact single-row; "full" = expanded with optional names. */
  variant?: "hero" | "full";
  idPrefix?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({ variant = "hero", idPrefix = "wl" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [relativeName, setRelativeName] = useState("");
  const [parentFirstName, setParentFirstName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [alreadyOnList, setAlreadyOnList] = useState(false);

  const emailId = `${idPrefix}-email`;
  const errorId = `${idPrefix}-error`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          relativeName: relativeName.trim() || undefined,
          parentFirstName: parentFirstName.trim() || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setAlreadyOnList(Boolean(data.alreadyOnList));
        setStatus("success");
        return;
      }
      setStatus("error");
      setMessage(data.error || "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("We couldn't reach the server. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-sage/40 bg-sage-soft/50 p-6 text-left shadow-soft sm:p-8"
        role="status"
        aria-live="polite"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-sage text-paper shadow-soft">
          <Check className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
          {alreadyOnList ? "You're already on the list" : "You're on the list"}
        </h3>
        <p className="mt-2 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
          {alreadyOnList
            ? "Good news — we already had you. We'll be in touch soon. You're a good kid for looking out for them."
            : "We'll be in touch soon. You're a good kid for looking out for them."}
        </p>
      </motion.div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {!isHero && (
        <div className="mb-3 grid gap-3 sm:grid-cols-2">
          <div className="text-left">
            <Label htmlFor={`${idPrefix}-parent`}>Your parent&apos;s first name (optional)</Label>
            <Input
              id={`${idPrefix}-parent`}
              className="mt-1.5"
              placeholder="Margaret"
              value={parentFirstName}
              autoComplete="off"
              onChange={(e) => setParentFirstName(e.target.value)}
            />
          </div>
          <div className="text-left">
            <Label htmlFor={`${idPrefix}-name`}>Your name (optional)</Label>
            <Input
              id={`${idPrefix}-name`}
              className="mt-1.5"
              placeholder="Sam"
              value={relativeName}
              autoComplete="given-name"
              onChange={(e) => setRelativeName(e.target.value)}
            />
          </div>
        </div>
      )}

      <div
        className={cn(
          "flex flex-col gap-3",
          isHero ? "sm:flex-row" : "sm:flex-row sm:items-end"
        )}
      >
        <div className="flex-1 text-left">
          <Label htmlFor={emailId} className={isHero ? "sr-only" : "mb-1.5 block"}>
            Email address
          </Label>
          <Input
            id={emailId}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? errorId : undefined}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            className="h-14 text-[1.05rem]"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="h-14 shrink-0"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Joining…
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="h-5 w-5" aria-hidden />
            </>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            id={errorId}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2.5 pl-1 text-left text-sm font-medium text-clay-deep"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
