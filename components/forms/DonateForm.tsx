"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Check, CreditCard, Heart, Lock } from "lucide-react";
import { donationCauses, getCurrency, type Frequency } from "@/data/donation";
import { cn, formatCurrency } from "@/lib/utils";

interface DonorInfo {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

const initialDonor: DonorInfo = { firstName: "", lastName: "", email: "", country: "" };

type Step = 1 | 2 | 3 | 4;

interface DonateFormProps {
  initialAmount?: number;
  initialCurrency?: string;
  initialFrequency?: Frequency;
  initialCause?: string;
}

export default function DonateForm({
  initialAmount,
  initialCurrency,
  initialFrequency = "monthly",
  initialCause,
}: DonateFormProps) {
  const currency = getCurrency(initialCurrency);
  const presetAmounts = currency.presets;
  const startAmount = initialAmount && initialAmount > 0 ? initialAmount : presetAmounts[1];
  const isPreset = presetAmounts.includes(startAmount);
  const [step, setStep] = useState<Step>(1);
  const [frequency, setFrequency] = useState<Frequency>(initialFrequency);
  const [cause, setCause] = useState(
    donationCauses.some((option) => option.value === initialCause)
      ? (initialCause as string)
      : donationCauses[0].value
  );
  const [amount, setAmount] = useState<number>(isPreset ? startAmount : presetAmounts[1]);
  const [customAmount, setCustomAmount] = useState(isPreset ? "" : String(startAmount));
  const money = (value: number) => formatCurrency(value, currency.code);
  const causeLabel = donationCauses.find((option) => option.value === cause)?.label;
  const [donor, setDonor] = useState<DonorInfo>(initialDonor);
  const [donorErrors, setDonorErrors] = useState<Partial<Record<keyof DonorInfo, string>>>({});
  const [cardName, setCardName] = useState("");
  const [processing, setProcessing] = useState(false);
  const [confirmationRef, setConfirmationRef] = useState("");

  const selectedAmount = customAmount ? Number(customAmount) || 0 : amount;

  function handleAmountStep(event: FormEvent) {
    event.preventDefault();
    if (selectedAmount <= 0) return;
    setStep(2);
  }

  function handleDonorStep(event: FormEvent) {
    event.preventDefault();
    const errors: Partial<Record<keyof DonorInfo, string>> = {};
    if (!donor.firstName.trim()) errors.firstName = "Required";
    if (!donor.lastName.trim()) errors.lastName = "Required";
    if (!donor.email.includes("@")) errors.email = "Enter a valid email";
    setDonorErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setStep(3);
  }

  function handlePaymentStep(event: FormEvent) {
    event.preventDefault();
    if (!cardName.trim()) return;
    setProcessing(true);
    window.setTimeout(() => {
      setProcessing(false);
      setConfirmationRef(String(Math.floor(100000 + Math.random() * 900000)));
      setStep(4);
    }, 1200);
  }

  if (step === 4) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-forest/20 bg-forest/5 px-6 py-16 text-center sm:px-16">
        <div className="flex size-14 items-center justify-center rounded-full bg-forest text-cream">
          <Check className="size-7" aria-hidden="true" />
        </div>
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Thank you, {donor.firstName}.
        </h2>
        <p className="max-w-md text-muted">
          Your {frequency === "monthly" ? "monthly" : "one-time"} gift of{" "}
          {money(selectedAmount)} would go toward {causeLabel?.toLowerCase()}.
          This is a demo checkout — no payment was processed and no charge was made.
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
          Confirmation reference: DEMO-{confirmationRef}
        </p>
      </div>
    );
  }

  return (
    <div>
      <ol className="mb-10 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-muted">
        {["Amount", "Details", "Payment"].map((label, index) => {
          const stepNumber = (index + 1) as Step;
          const isActive = step === stepNumber;
          const isComplete = step > stepNumber;
          return (
            <li key={label} className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full border text-[11px]",
                  isActive && "border-forest bg-forest text-cream",
                  isComplete && "border-forest bg-forest text-cream",
                  !isActive && !isComplete && "border-ink/20 text-muted"
                )}
              >
                {isComplete ? <Check className="size-3.5" /> : index + 1}
              </span>
              <span className={isActive ? "text-ink" : undefined}>{label}</span>
              {index < 2 && <span className="mx-1 h-px w-6 bg-ink/15" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>

      {step === 1 && (
        <form onSubmit={handleAmountStep} className="flex flex-col gap-8">
          <div>
            <span className="mb-3 block text-sm font-medium text-ink">Frequency</span>
            <div className="grid grid-cols-2 gap-3">
              {(["monthly", "once"] as Frequency[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFrequency(option)}
                  className={cn(
                    "rounded-md border px-4 py-3 text-sm font-medium transition-colors",
                    frequency === option
                      ? "border-forest bg-forest text-cream"
                      : "border-ink/15 text-ink/70 hover:border-ink/40"
                  )}
                  aria-pressed={frequency === option}
                >
                  {option === "monthly" ? "Monthly" : "One-time"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="d-cause" className="mb-3 block text-sm font-medium text-ink">
              Cause
            </label>
            <select
              id="d-cause"
              value={cause}
              onChange={(event) => setCause(event.target.value)}
              className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-forest"
            >
              {donationCauses.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className="mb-3 block text-sm font-medium text-ink">
              Amount ({currency.code})
            </span>
            <div className="grid grid-cols-4 gap-3">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setAmount(preset);
                    setCustomAmount("");
                  }}
                  className={cn(
                    "rounded-md border-2 px-2 py-4 text-center font-display text-base transition-colors sm:text-lg",
                    amount === preset && !customAmount
                      ? "border-forest bg-forest text-cream"
                      : "border-ink/15 text-ink hover:border-ink/40"
                  )}
                  aria-pressed={amount === preset && !customAmount}
                >
                  {currency.symbol}
                  {preset.toLocaleString("en-US")}
                </button>
              ))}
            </div>
            <label htmlFor="custom-amount" className="mt-4 block text-sm text-muted">
              Or enter a custom amount
            </label>
            <div className="mt-2 flex items-center rounded-md border border-ink/15 px-4 py-3 focus-within:border-ink/40">
              <span className="mr-1 text-ink/60">{currency.symbol}</span>
              <input
                id="custom-amount"
                type="number"
                min={1}
                inputMode="numeric"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                placeholder="0"
                className="w-full bg-transparent text-ink outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={selectedAmount <= 0}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Heart className="size-4" aria-hidden="true" />
            Continue with {money(selectedAmount || 0)}
            {frequency === "monthly" && selectedAmount > 0 ? "/mo" : ""}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleDonorStep} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextField
              label="First name"
              id="d-first"
              value={donor.firstName}
              error={donorErrors.firstName}
              onChange={(value) => setDonor((prev) => ({ ...prev, firstName: value }))}
            />
            <TextField
              label="Last name"
              id="d-last"
              value={donor.lastName}
              error={donorErrors.lastName}
              onChange={(value) => setDonor((prev) => ({ ...prev, lastName: value }))}
            />
          </div>
          <TextField
            label="Email address"
            id="d-email"
            type="email"
            value={donor.email}
            error={donorErrors.email}
            onChange={(value) => setDonor((prev) => ({ ...prev, email: value }))}
          />
          <TextField
            label="Country (optional)"
            id="d-country"
            value={donor.country}
            onChange={(value) => setDonor((prev) => ({ ...prev, country: value }))}
          />

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm font-medium text-muted hover:text-ink"
            >
              Back
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-forest-dark"
            >
              Continue to payment
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePaymentStep} className="flex flex-col gap-6">
          <div className="flex items-center gap-2 rounded-md border border-dashed border-ink/20 bg-white px-4 py-3 text-xs text-muted">
            <Lock className="size-3.5 shrink-0" aria-hidden="true" />
            Demo payment form — no real payment processor is connected and no card
            details are transmitted or stored.
          </div>

          <TextField
            label="Name on card"
            id="d-card-name"
            value={cardName}
            onChange={setCardName}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label htmlFor="d-card-number" className="mb-2 block text-sm font-medium text-ink">
                Card number
              </label>
              <div className="flex items-center gap-2 rounded-md border border-ink/15 px-4 py-3 focus-within:border-ink/40">
                <CreditCard className="size-4 text-ink/40" aria-hidden="true" />
                <input
                  id="d-card-number"
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  disabled
                  className="w-full bg-transparent text-ink/50 outline-none"
                />
              </div>
            </div>
            <TextField label="Expiry / CVC" id="d-card-exp" placeholder="MM/YY · CVC" disabled />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-sm font-medium text-muted hover:text-ink"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={processing}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-forest-dark disabled:opacity-60"
            >
              {processing
                ? "Processing…"
                : `Confirm ${money(selectedAmount)}${frequency === "monthly" ? "/mo" : ""} gift`}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function TextField({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  disabled = false,
}: {
  label: string;
  id: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}): ReactNode {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-md border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:bg-ink/5 disabled:text-ink/40",
          error ? "border-gold" : "border-ink/15 focus:border-ink/40"
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-gold">
          {error}
        </p>
      )}
    </div>
  );
}
