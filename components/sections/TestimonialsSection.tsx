"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
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
                  let diff = (idx - activeIndex) % total;
                  if (diff > total / 2) diff -= total;
                  if (diff < -total / 2) diff += total;

                  const style = getCylinderStyle(idx);
                  const isCurrent = diff === 0;

                  return (
                    <div
                      key={item.id}
                      style={{
                        ...style,
                        transition: "all 650ms cubic-bezier(0.25, 1, 0.5, 1)",
                      }}
                      className="absolute w-[240px] sm:w-[275px] lg:w-[290px] h-[380px] sm:h-[430px] lg:h-[470px]"
                    >
                      {/* Realistic floor shade directly beneath the card */}
                      <div
                        className={`pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 w-[88%] h-8 rounded-[100%] transition-all duration-700 ${
                          isCurrent
                            ? "bg-black/80 blur-xl opacity-100 scale-100"
                            : "bg-black/30 blur-md opacity-35 scale-75"
                        }`}
                        aria-hidden="true"
                      />

                      {/* Main Cylindrical Card */}
                      <div
                        onClick={() => setActiveIndex(idx)}
                        className={`relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 bg-black transition-all duration-700 ${
                          isCurrent
                            ? "border-[#d70350]/70 ring-4 ring-[#d70350]/30 shadow-[0_35px_65px_-15px_rgba(0,0,0,0.85),0_15px_30px_rgba(0,0,0,0.6),0_0_40px_rgba(215,3,80,0.35)] cursor-default"
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

                        {/* Shadow & Rim Reflection cast halfway from the front card onto side cards */}
                        {diff === 1 && (
                          <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 z-20 overflow-hidden"
                            aria-hidden="true"
                          >
                            {/* Deep ambient shadow cast halfway across the card */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                            {/* Reflected glow from the front card's edge */}
                            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[rgba(215,3,80,0.45)] via-black/20 to-transparent" />
                          </div>
                        )}

                        {diff === -1 && (
                          <div
                            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 z-20 overflow-hidden"
                            aria-hidden="true"
                          >
                            {/* Deep ambient shadow cast halfway across the card */}
                            <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent" />
                            {/* Reflected glow from the front card's edge */}
                            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[rgba(215,3,80,0.45)] via-black/20 to-transparent" />
                          </div>
                        )}

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
                    </div>
                  );
                })}
              </div>

              {/* Stage Floor Ambient Base Shade */}
              <div
                className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 w-[340px] sm:w-[400px] h-10 rounded-[100%] bg-gradient-to-r from-transparent via-black/50 to-transparent blur-2xl z-0"
                aria-hidden="true"
              />
            </div>

            {/* Right Column: Aesthetic Compact Light Testimonial Quote Card */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-[#e8e2d8] bg-gradient-to-br from-white via-[#fcfbf8] to-[#f6f2ea] text-ink shadow-[0_20px_50px_-15px_rgba(0,40,25,0.06),0_4px_16px_rgba(0,0,0,0.02)] p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              {/* Subtle aesthetic watermark quote icon */}
              <Quote
                className="pointer-events-none absolute -bottom-8 right-6 size-48 text-forest/[0.035] select-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Decorative small quote icon */}
                <Quote className="size-10 sm:size-11 text-gold/40 mb-5 shrink-0" aria-hidden="true" />

                <div key={currentFeatured.id} className="animate-fadeIn">
                  <blockquote className="font-serif text-xl sm:text-2xl lg:text-[1.8rem] italic leading-[1.62] text-ink/90">
                    &ldquo;{currentFeatured.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
