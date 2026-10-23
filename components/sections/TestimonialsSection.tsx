"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const total = testimonials.length;
  const currentFeatured = testimonials[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-roll cylinder gently every 5 seconds (pauses on interaction/hover)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, handleNext]);

  // Touch Swipe Handlers for mobile & desktop drag
  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchStartX.current = clientX;
  };

  const onTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (touchStartX.current === null) return;
    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = touchStartX.current - clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // 3D Cylindrical Cylinder Math for each card
  const getCylinderStyle = (index: number) => {
    let diff = (index - activeIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // Active Card: Front and Center
    if (diff === 0) {
      return {
        transform: "translate3d(0%, 0, 0px) rotateY(0deg) scale(1)",
        zIndex: 35,
        opacity: 1,
        filter: "brightness(1) contrast(1)",
        pointerEvents: "auto" as const,
      };
    }

    // Step +1: Curving backwards to the right along cylinder
    if (diff === 1) {
      return {
        transform: "translate3d(48%, 0, -140px) rotateY(-36deg) scale(0.82)",
        zIndex: 22,
        opacity: 0.68,
        filter: "brightness(0.72) blur(0.4px)",
        pointerEvents: "auto" as const,
      };
    }

    // Step -1: Curving backwards to the left along cylinder
    if (diff === -1) {
      return {
        transform: "translate3d(-48%, 0, -140px) rotateY(36deg) scale(0.82)",
        zIndex: 22,
        opacity: 0.68,
        filter: "brightness(0.72) blur(0.4px)",
        pointerEvents: "auto" as const,
      };
    }

    // Step +2: Further along cylinder perimeter on right
    if (diff === 2) {
      return {
        transform: "translate3d(85%, 0, -280px) rotateY(-62deg) scale(0.66)",
        zIndex: 12,
        opacity: 0.35,
        filter: "brightness(0.48) blur(1.5px)",
        pointerEvents: "auto" as const,
      };
    }

    // Step -2: Further along cylinder perimeter on left
    if (diff === -2) {
      return {
        transform: "translate3d(-85%, 0, -280px) rotateY(62deg) scale(0.66)",
        zIndex: 12,
        opacity: 0.35,
        filter: "brightness(0.48) blur(1.5px)",
        pointerEvents: "auto" as const,
      };
    }

    // Back side of the cylinder (hidden)
    return {
      transform: "translate3d(0%, 0, -380px) rotateY(180deg) scale(0.5)",
      zIndex: 0,
      opacity: 0,
      filter: "brightness(0.2)",
      pointerEvents: "none" as const,
    };
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
        {/* Section Header */}
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

        {/* 3D Cylindrical Roller & Testimonial Showcase */}
        <FadeUp delay={0.2} className="mt-14 sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: 3D Revolving Cylinder Image Wheel (உருளை வடிவம்) */}
            <div
              className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] w-full select-none cursor-grab active:cursor-grabbing overflow-visible"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onMouseDown={onTouchStart}
              onMouseUp={onTouchEnd}
              style={{
                perspective: "1200px",
              }}
            >
              {/* Central Cylindrical Stage */}
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {testimonials.map((item, idx) => {
                  const style = getCylinderStyle(idx);
                  const isCurrent = idx === activeIndex;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      style={{
                        ...style,
                        transition: "all 650ms cubic-bezier(0.25, 1, 0.5, 1)",
                      }}
                      className={`absolute w-[240px] sm:w-[275px] lg:w-[290px] h-[380px] sm:h-[430px] lg:h-[470px] rounded-[2.5rem] overflow-hidden border-2 bg-black transition-all duration-700 ${
                        isCurrent
                          ? "border-forest/40 ring-4 ring-gold/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),0_0_35px_rgba(215,3,80,0.25)] cursor-default"
                          : "border-white/20 hover:border-gold/60 cursor-pointer shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                      }`}
                    >
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1024px) 300px, 260px"
                        className="object-cover object-center"
                        priority={idx < 3}
                      />

                      {/* Smooth dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      {/* Active Card Details Floating at Bottom */}
                      {isCurrent && (
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10 animate-fadeIn">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-gold mb-1">
                            {item.cause}
                          </p>
                          <h3 className="font-display text-2xl font-bold tracking-tight text-white leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-white/90 mt-1">
                            {item.role}
                          </p>
                          <p className="text-xs text-white/70 mt-0.5">
                            {item.location}
                          </p>
                        </div>
                      )}

                      {/* Subtle Glass Cylinder Highlight Strip */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />
                    </div>
                  );
                })}
              </div>

              {/* Gentle Helper hint for users */}
              <div className="absolute -bottom-6 flex items-center gap-2 text-[11px] font-medium tracking-wide text-forest/70">
                <span>Click or swipe to roll beneficiaries</span>
              </div>
            </div>

            {/* Right Column: Connected Testimonial Quote Card */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-forest/15 bg-gradient-to-br from-[#002b16] via-[#001f11] to-black text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] p-7 sm:p-10 lg:p-14 flex flex-col justify-between">
              <Quote
                className="pointer-events-none absolute -bottom-8 right-6 size-48 text-white/[0.03] select-none"
                aria-hidden="true"
              />

              <div className="relative z-10 my-auto">
                <div key={currentFeatured.id} className="animate-fadeIn">
                  <blockquote className="font-serif text-lg sm:text-2xl lg:text-[1.65rem] italic leading-relaxed text-white/95 transition-opacity duration-300">
                    &ldquo;{currentFeatured.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Slider Navigation & Cylinder Controls */}
              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between gap-4 relative z-10">
                {/* Step indicator dots */}
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
                      aria-label={`Roll to beneficiary ${idx + 1}`}
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-white/60">
                    0{activeIndex + 1} / 0{total}
                  </span>
                </div>

                {/* Previous / Next Roll Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-gold hover:border-gold transition-all"
                    aria-label={isAutoPlaying ? "Pause rolling" : "Play rolling"}
                    title={isAutoPlaying ? "Pause auto-roll" : "Play auto-roll"}
                  >
                    {isAutoPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5 ml-0.5" />}
                  </button>
                  <button
                    onClick={handlePrev}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-gold hover:border-gold transition-all"
                    aria-label="Previous beneficiary"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-gold hover:border-gold transition-all"
                    aria-label="Next beneficiary"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* 3 Secondary Community Stories Cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {testimonials.slice(1, 4).map((item, idx) => (
            <FadeUp key={item.id} delay={0.1 + idx * 0.08} className="flex flex-col h-full">
              <div
                onClick={() => {
                  const targetIndex = testimonials.findIndex((t) => t.id === item.id);
                  if (targetIndex !== -1) setActiveIndex(targetIndex);
                }}
                className="group relative flex flex-col justify-between h-full rounded-2xl border border-forest/15 bg-white p-6 sm:p-7 shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,56,34,0.1)] hover:border-forest/35 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
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
