"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.includes("@")) nextErrors.email = "Please enter a valid email.";
    if (!form.message.trim()) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 800);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-lg border border-forest/20 bg-forest/5 p-8"
      >
        <CheckCircle2 className="size-8 text-forest" aria-hidden="true" />
        <h3 className="font-display text-xl text-ink">Message sent</h3>
        <p className="text-sm text-muted">
          Thank you, {form.name.split(" ")[0]}. This is a demo form — no message was
          actually sent. In production we&apos;d reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-2 block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="c-name"
            type="text"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            aria-invalid={!!errors.name}
            className={inputClasses(!!errors.name)}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className="mb-2 block text-sm font-medium text-ink">
            Email address
          </label>
          <input
            id="c-email"
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            aria-invalid={!!errors.email}
            className={inputClasses(!!errors.email)}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="c-subject" className="mb-2 block text-sm font-medium text-ink">
          Subject
        </label>
        <select
          id="c-subject"
          value={form.subject}
          onChange={(event) => handleChange("subject", event.target.value)}
          className={inputClasses(false)}
        >
          <option value="">Select a topic</option>
          <option value="general">General inquiry</option>
          <option value="donations">Donations</option>
          <option value="volunteering">Volunteering</option>
          <option value="partnerships">Partnerships</option>
          <option value="media">Media & press</option>
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-2 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={!!errors.message}
          className={inputClasses(!!errors.message)}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-fit items-center justify-center rounded-full bg-forest px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-forest-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded-md border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    hasError ? "border-red-400" : "border-ink/15 focus:border-ink/40"
  );
}
