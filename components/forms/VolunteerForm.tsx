"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { volunteerOpportunities } from "@/data/volunteer";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  commitment: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  commitment: "on-site",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function VolunteerForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function validate(values: FormState): Errors {
    const nextErrors: Errors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!values.email.trim() || !values.email.includes("@")) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.interest) nextErrors.interest = "Please select an area of interest.";
    return nextErrors;
  }

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-lg border border-forest/20 bg-forest/5 p-8"
      >
        <CheckCircle2 className="size-8 text-forest" aria-hidden="true" />
        <h3 className="font-display text-xl text-ink">Application received</h3>
        <p className="text-sm text-muted">
          Thank you, {form.name.split(" ")[0]}. This is a demo form — no data was sent.
          In production, our volunteer team would follow up within two weeks.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="v-name" error={errors.name}>
          <input
            id="v-name"
            type="text"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className={inputClasses(!!errors.name)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "v-name-error" : undefined}
          />
        </Field>
        <Field label="Email address" htmlFor="v-email" error={errors.email}>
          <input
            id="v-email"
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className={inputClasses(!!errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "v-email-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Phone (optional)" htmlFor="v-phone">
          <input
            id="v-phone"
            type="tel"
            value={form.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            className={inputClasses(false)}
          />
        </Field>
        <Field label="Area of interest" htmlFor="v-interest" error={errors.interest}>
          <select
            id="v-interest"
            value={form.interest}
            onChange={(event) => handleChange("interest", event.target.value)}
            className={inputClasses(!!errors.interest)}
            aria-invalid={!!errors.interest}
            aria-describedby={errors.interest ? "v-interest-error" : undefined}
          >
            <option value="">Select an opportunity</option>
            {volunteerOpportunities.map((opportunity) => (
              <option key={opportunity.slug} value={opportunity.slug}>
                {opportunity.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-ink">Preferred commitment</legend>
        <div className="flex flex-wrap gap-3">
          {[
            { value: "on-site", label: "On-site" },
            { value: "remote", label: "Remote" },
            { value: "either", label: "Either" },
          ].map((option) => (
            <label
              key={option.value}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors",
                form.commitment === option.value
                  ? "border-forest bg-forest text-cream"
                  : "border-ink/15 text-ink/70 hover:border-ink/40"
              )}
            >
              <input
                type="radio"
                name="commitment"
                value={option.value}
                checked={form.commitment === option.value}
                onChange={(event) => handleChange("commitment", event.target.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Tell us a bit about yourself (optional)" htmlFor="v-message">
        <textarea
          id="v-message"
          rows={4}
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className={inputClasses(false)}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-fit items-center justify-center rounded-full bg-forest px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-forest-dark disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded-md border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    hasError ? "border-gold" : "border-ink/15 focus:border-ink/40"
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs text-gold">
          {error}
        </p>
      )}
    </div>
  );
}
