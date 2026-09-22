"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewsletterForm({ light = false }: { light?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
    }, 700);
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className={cn(
          "flex items-center gap-2 text-sm",
          light ? "text-white" : "text-forest"
        )}
      >
        <Check className="size-4" aria-hidden="true" />
        You&apos;re subscribed. Thank you for staying close to the work.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@example.com"
          className={cn(
            "w-full rounded-full border bg-transparent px-5 py-3 text-sm outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:min-w-72",
            light
              ? "border-white/25 text-white placeholder:text-white/50 focus:border-white/60"
              : "border-ink/20 text-ink placeholder:text-muted focus:border-ink/50"
          )}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
        />
        {status === "error" && (
          <p id="newsletter-error" className="mt-2 text-xs text-red-400">
            Please enter a valid email address.
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60",
          light ? "bg-gold text-forest-dark hover:bg-gold/90" : "bg-forest text-cream hover:bg-forest-dark"
        )}
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
        {status !== "loading" && <ArrowRight className="size-4" aria-hidden="true" />}
      </button>
    </form>
  );
}
