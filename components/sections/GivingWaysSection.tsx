"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";

interface GivingOption {
  id: string;
  title: string;
  description: string;
  causeSlug: string;
  presets: { label: string; amount: number }[];
  primaryCta: string;
}

const givingOptions: GivingOption[] = [
  {
    id: "zakat-al-mal",
    title: "Zakat-al-Mal",
    description:
      "Fulfil your annual 2.5% wealth obligation. 100% of your Zakat goes directly to qualifying vulnerable families, widowed mothers, and orphans across Sri Lanka.",
    causeSlug: "zakat-al-mal",
    presets: [
      { label: "$100", amount: 100 },
      { label: "$250", amount: 250 },
      { label: "$500", amount: 500 },
    ],
    primaryCta: "Pay Zakat",
  },
  {
    id: "zakat-al-fitr",
    title: "Zakat-al-Fitr",
    description:
      "A compulsory gift given before Eid prayers so underserved children and families can celebrate Eid-ul-Fitr with dignity, nourishing food packs, and joy.",
    causeSlug: "zakat-al-fitr",
    presets: [
      { label: "$15", amount: 15 },
      { label: "$30", amount: 30 },
      { label: "$60", amount: 60 },
    ],
    primaryCta: "Give Fitrana",
  },
  {
    id: "sadaqah-jaria",
    title: "Sadaqah Jaria",
    description:
      "Continuous voluntary charity that keeps on giving. Sponsor a deep-well water pump, school learning materials, or a livelihood micro-grant in dry zones.",
    causeSlug: "sadaqah-jaria",
    presets: [
      { label: "$50", amount: 50 },
      { label: "$150", amount: 150 },
      { label: "$300", amount: 300 },
    ],
    primaryCta: "Sponsor Sadaqah",
  },
  {
    id: "fidyah-kaffarah",
    title: "Fidyah & Kaffarah",
    description:
      "Compensation for missed fasts due to illness, pregnancy, or broken vows. Provides essential staple grocery baskets and daily nutrition to families in need.",
    causeSlug: "fidyah-kaffarah",
    presets: [
      { label: "$10", amount: 10 },
      { label: "$50", amount: 50 },
      { label: "$100", amount: 100 },
    ],
    primaryCta: "Pay Fidyah",
  },
];

export default function GivingWaysSection() {
  return (
    <section
      className="relative bg-[#faf8f5] py-20 sm:py-24 lg:py-32 overflow-hidden border-y border-forest/10"
      aria-labelledby="giving-ways-heading"
    >
      {/* Subtle organic background accents in brand colors */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-forest/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-gold/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2
              id="giving-ways-heading"
              className="font-display text-[2.1rem] sm:text-[2.75rem] lg:text-[3.25rem] uppercase leading-[1.08] tracking-tight text-ink"
            >
              Choose How You Wish to Make an{" "}
              <span className="relative inline-block text-forest whitespace-nowrap">
                Impact
                {/* Hand-drawn organic brush stroke underline in crimson */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-gold/85"
                  viewBox="0 0 280 14"
                  fill="currentColor"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M4,10 C55,3.5 130,2 276,6.5 C220,11.5 125,13.5 4,10 Z" />
                </svg>
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              Join thousands supporting vulnerable families across Sri Lanka. Choose
              the form of giving — obligatory or voluntary — that aligns with your
              values, delivered under our strict 100% donation policy.
            </p>
          </FadeUp>
        </div>

        {/* 4 Giving Cards Grid with 3D Depth */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 items-stretch">
          {givingOptions.map((option, index) => {
            const isFirstCard = index === 0;
            const isLastCard = index === givingOptions.length - 1;
            const isMiddleCard = index === 1 || index === 2;

            // Custom curved corners:
            // 1st card (index === 0): bottom-left corner dramatically swept ("koora curve shap le ilu patte mari")
            // 4th card (index === 3): top-right corner dramatically swept ("koora curve shap le ilu patte mari")
            // Cards 2 & 3: clean modern rounded-2xl
            let cornerClasses = "rounded-2xl";
            let ctaCornerClasses = "rounded-xl";

            if (isFirstCard) {
              cornerClasses = "rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-[4.5rem] sm:rounded-bl-[5.5rem] lg:rounded-bl-[6rem]";
              ctaCornerClasses = "rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-[2.25rem]";
            } else if (isLastCard) {
              cornerClasses = "rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-[4.5rem] sm:rounded-tr-[5.5rem] lg:rounded-tr-[6rem]";
            }

            return (
              <FadeUp
                key={option.id}
                delay={0.1 + index * 0.08}
                className={`flex flex-col h-full ${
                  isMiddleCard ? "relative z-10" : "relative z-20"
                }`}
              >
                {/* Card Container: 3D Depth Layering (Cards 0 & 3 in Front, Cards 1 & 2 in Back with reinforced stroke) */}
                <div
                  className={`group relative flex flex-col justify-between h-full ${cornerClasses} overflow-hidden p-6 sm:p-7 bg-black transition-all duration-500 ${
                    isMiddleCard
                      ? "border-[3.5px] border-black scale-[0.97] lg:scale-[0.93] translate-y-0 lg:translate-y-1 brightness-95 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.75),0_10px_22px_-6px_rgba(0,0,0,0.5)] hover:scale-100 hover:brightness-100 hover:z-30 hover:-translate-y-3 hover:border-black hover:shadow-[0_36px_75px_-12px_rgba(0,0,0,0.9),0_0_40px_rgba(0,0,0,0.4)]"
                      : isLastCard
                      ? "border-0 scale-100 lg:scale-[1.03] -translate-y-3 sm:-translate-y-4 lg:-translate-y-7 shadow-[0_34px_70px_-10px_rgba(0,0,0,0.92),0_16px_32px_-6px_rgba(0,0,0,0.8),0_0_40px_rgba(215,3,80,0.3)] hover:scale-[1.02] lg:hover:scale-[1.06] hover:-translate-y-5 sm:hover:-translate-y-6 lg:hover:-translate-y-9 hover:shadow-[0_42px_85px_-12px_rgba(0,0,0,0.98),0_0_55px_rgba(215,3,80,0.55)]"
                      : "border border-white/20 scale-100 lg:scale-[1.03] shadow-[0_28px_60px_-12px_rgba(0,0,0,0.88),0_12px_28px_-6px_rgba(0,0,0,0.7)] hover:scale-[1.02] lg:hover:scale-[1.06] hover:-translate-y-2 hover:border-forest/60"
                  }`}
                >
                  
                  {/* Background Coins Image with High-Contrast Dark Emerald Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/alandsmann-coins-8975531_1920.jpg"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-105"
                      priority={index < 2}
                    />
                    {/* Deep Emerald + Charcoal Overlay - Fades out on hover for full image visibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#002b16]/92 to-black/95 transition-opacity duration-700 ease-out group-hover:opacity-0" />
                    {/* Soft bottom vignette on hover to ensure buttons stay perfectly legible against the image */}
                    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 pointer-events-none" />
                    {isFirstCard && (
                      <div className={`absolute inset-0 ring-1 ring-inset ${cornerClasses} pointer-events-none ring-white/15`} />
                    )}
                  </div>

                  {/* Card Content (Layered cleanly above the background image) */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Title & Description: Gracefully dissolves into the air on hover */}
                    <div className="transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-6 group-hover:blur-sm group-hover:scale-95 pointer-events-none">
                      {/* Title */}
                      <h3 className="font-display text-xl sm:text-[1.35rem] font-bold uppercase tracking-tight text-white drop-shadow-sm text-center pt-1 sm:pt-2">
                        {option.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-white/90 font-normal text-center">
                        {option.description}
                      </p>
                    </div>

                    {/* Card Bottom: Presets & Action Button */}
                    <div className="mt-6 pt-5 border-t border-white/15 transition-colors duration-500 group-hover:border-transparent">
                      {/* Quick amounts label dissolves on hover so only buttons exist */}
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/75 mb-2.5 text-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-3 group-hover:blur-xs pointer-events-none">
                        Quick amounts:
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {option.presets.map((preset) => (
                          <Link
                            key={preset.label}
                            href={`/donate?cause=${option.causeSlug}&amount=${preset.amount}`}
                            className="flex items-center justify-center py-2 px-2 rounded-lg border-2 border-white/40 bg-black/40 backdrop-blur-md text-xs font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:bg-gold hover:border-gold hover:text-white hover:-translate-y-0.5 transition-all"
                          >
                            {preset.label}
                          </Link>
                        ))}
                      </div>

                      {/* Main CTA */}
                      <Link
                        href={`/donate?cause=${option.causeSlug}`}
                        className={`mt-4 flex w-full items-center justify-center gap-2 ${ctaCornerClasses} border border-white/20 bg-gold px-4 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(215,3,80,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:bg-gold-dark hover:shadow-[0_12px_32px_rgba(215,3,80,0.8)] hover:-translate-y-0.5 active:translate-y-0 transition-all`}
                      >
                        <span>{option.primaryCta}</span>
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
