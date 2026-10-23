"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentFeatured = testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="relative bg-[#faf8f5] py-20 sm:py-24 lg:py-32 overflow-hidden border-y border-forest/10"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle organic ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-forest/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-gold/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header - Clean, editorial, no badges or pills */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest/80">
              Voices from the Ground
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2
              id="testimonials-heading"
              className="mt-3 font-display text-[2.1rem] sm:text-[2.75rem] lg:text-[3.25rem] uppercase leading-[1.08] tracking-tight text-ink"
            >
              Words of Gratitude from{" "}
              <span className="relative inline-block text-forest whitespace-nowrap">
                Families We Serve
                {/* Hand-drawn organic brush stroke underline */}
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

          <FadeUp delay={0.14}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              Listen to the real voices of widowed mothers, village council elders, farmers,
              and school students across Sri Lanka whose lives have been lifted through your
              generosity.
            </p>
          </FadeUp>
        </div>

        {/* Featured Editorial Quote Showcase: Separated Image Card and Testimonial Card */}
        <FadeUp delay={0.2} className="mt-14 sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Standalone Image Card */}
            <div className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-forest/15 shadow-[0_20px_50px_rgba(0,0,0,0.18)] min-h-[380px] lg:min-h-[460px] h-full group bg-black">
              <Image
                src={currentFeatured.avatar}
                alt={currentFeatured.name}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                priority
              />
              {/* Subtle dark gradient overlay at bottom of photo for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* Beneficiary Details floating cleanly over the bottom of the image */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gold mb-1">
                  {currentFeatured.cause}
                </p>
                <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold tracking-tight text-white drop-shadow-sm leading-tight">
                  {currentFeatured.name}
                </h3>
                <p className="text-sm font-medium text-white/90 mt-1">
                  {currentFeatured.role}
                </p>
                <p className="text-xs text-white/70 mt-0.5">
                  {currentFeatured.location}
                </p>
              </div>
            </div>

            {/* Card 2: Standalone Testimonial Quote Card */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-forest/15 bg-gradient-to-br from-[#002b16] via-[#001f11] to-black text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] p-7 sm:p-10 lg:p-14 flex flex-col justify-between">
              <Quote
                className="pointer-events-none absolute -bottom-8 right-6 size-48 text-white/[0.03] select-none"
                aria-hidden="true"
              />

              <div className="relative z-10 my-auto">
                <blockquote className="font-serif text-lg sm:text-2xl lg:text-[1.65rem] italic leading-relaxed text-white/95">
                  &ldquo;{currentFeatured.quote}&rdquo;
                </blockquote>
              </div>

              {/* Slider Navigation */}
              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between gap-4 relative z-10">
                {/* Step indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex
                          ? "w-8 bg-gold"
                          : "w-2 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to story ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Previous / Next Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-gold hover:border-gold transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-gold hover:border-gold transition-all"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* 3 Secondary Community Stories Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {testimonials.slice(1, 4).map((item, idx) => (
            <FadeUp key={item.id} delay={0.1 + idx * 0.08} className="flex flex-col h-full">
              <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-forest/15 bg-white p-6 sm:p-7 shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,56,34,0.1)] hover:border-forest/35 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <p className="text-sm leading-relaxed text-ink/80 italic font-serif">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-forest/10 flex items-center gap-3.5">
                  <div className="relative size-11 rounded-full overflow-hidden ring-1 ring-forest/20 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-ink truncate group-hover:text-forest transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted truncate">
                      {item.role}
                    </p>
                    <p className="text-[11px] font-medium text-forest/75 truncate">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Action Button Banner */}
        <FadeUp delay={0.3} className="mt-14 sm:mt-16 text-center">
          <div className="mx-auto max-w-xl">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-ink">
              Every Contribution Reaches The Field
            </h3>
            <p className="mt-2 text-sm text-muted">
              Choose an appeal or project close to your heart and bring hope to families in Sri Lanka today.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/donate"
                className="rounded-xl bg-gold px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-gold-dark hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Donate Now
              </Link>
              <Link
                href="/our-work"
                className="rounded-xl border border-forest/25 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest hover:bg-forest hover:text-white hover:-translate-y-0.5 transition-all"
              >
                View Our Appeals
              </Link>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
