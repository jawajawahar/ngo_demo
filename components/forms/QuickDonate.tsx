"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import {
  donationCauses,
  donationCurrencies,
  getCurrency,
  type Frequency,
} from "@/data/donation";
import { cn } from "@/lib/utils";

export default function QuickDonate({ className }: { className?: string }) {
  const router = useRouter();
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [cause, setCause] = useState(donationCauses[0].value);
  const currency = getCurrency(currencyCode);
  const [amount, setAmount] = useState<number>(currency.presets[1]);
  const [customAmount, setCustomAmount] = useState("");

  const selectedAmount = customAmount ? Number(customAmount) || 0 : amount;

  function handleCurrencyChange(code: string) {
    setCurrencyCode(code);
    setAmount(getCurrency(code).presets[1]);
    setCustomAmount("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (selectedAmount <= 0) return;
    const params = new URLSearchParams({
      amount: String(selectedAmount),
      currency: currency.code,
      frequency,
      cause,
    });
    router.push(`/donate?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 text-ink shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/5 border border-white/80 transition-all duration-300",
        className
      )}
      aria-label="Quick donate"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-forest">
          Quick donate
        </h2>
        <label className="sr-only" htmlFor="qd-currency">
          Currency
        </label>
        <select
          id="qd-currency"
          value={currencyCode}
          onChange={(event) => handleCurrencyChange(event.target.value)}
          className="rounded-lg border border-ink/15 bg-white px-2.5 py-1.5 text-xs font-bold outline-none focus:border-forest"
        >
          {donationCurrencies.map((option) => (
            <option key={option.code} value={option.code}>
              {option.symbol} {option.code}
            </option>
          ))}
        </select>
      </div>

      <div
        className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border-2 border-forest p-0.5"
        role="radiogroup"
        aria-label="Donation frequency"
      >
        {(["once", "monthly"] as Frequency[]).map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={frequency === option}
            onClick={() => setFrequency(option)}
            className={cn(
              "rounded-lg py-2.5 text-sm font-bold uppercase transition-all duration-200",
              frequency === option
                ? "bg-forest text-white shadow-sm"
                : "bg-transparent text-forest hover:bg-mint"
            )}
          >
            {option === "once" ? "Single" : "Monthly"}
          </button>
        ))}
      </div>

      <label
        htmlFor="qd-cause"
        className="mt-5 block text-xs font-bold uppercase tracking-[0.14em] text-muted"
      >
        I want to support
      </label>
      <select
        id="qd-cause"
        value={cause}
        onChange={(event) => setCause(event.target.value)}
        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm font-semibold outline-none transition-colors focus:border-forest"
      >
        {donationCauses.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {currency.presets.map((preset) => {
          const active = amount === preset && !customAmount;
          return (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setAmount(preset);
                setCustomAmount("");
              }}
              aria-pressed={active}
              className={cn(
                "rounded-xl border-2 py-2.5 text-sm font-bold transition-all duration-200",
                active
                  ? "border-forest bg-forest text-white shadow-sm"
                  : "border-ink/15 text-ink hover:border-forest"
              )}
            >
              {currency.symbol}
              {preset.toLocaleString("en-US")}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-center rounded-xl border-2 border-ink/15 px-4 py-2.5 transition-colors focus-within:border-forest">
        <span className="mr-2 text-sm font-bold text-ink/50">{currency.symbol}</span>
        <label htmlFor="qd-custom" className="sr-only">
          Other amount
        </label>
        <input
          id="qd-custom"
          type="number"
          min={1}
          inputMode="numeric"
          value={customAmount}
          onChange={(event) => setCustomAmount(event.target.value)}
          placeholder="Other amount"
          className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-medium placeholder:text-ink/40"
        />
      </div>

      <button
        type="submit"
        disabled={selectedAmount <= 0}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-[15px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-gold-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
      >
        Donate {selectedAmount > 0 && `${currency.symbol}${selectedAmount.toLocaleString("en-US")}`}
        {frequency === "monthly" && selectedAmount > 0 ? " monthly" : " now"}
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
        <Lock className="size-3" aria-hidden="true" />
        Secure checkout
      </p>
    </form>
  );
}
