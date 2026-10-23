"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import QuickDonate from "@/components/forms/QuickDonate";
import { images } from "@/data/images";

export default function HomeHero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
      if (prefersReducedMotion) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.15 }
      );
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-forest"
      aria-label="Welcome to Voice of Need Foundation"
    >
      {/* Full-width Hero Background Image */}
      <Image
        src={images.heroCommunity}
        alt="Children from a partner community smiling together outdoors"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] lg:object-[60%_center]"
      />

      {/* Cinematic Dark Gradient Overlay for Maximum Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Main Content Grid */}
      <Container className="relative z-10 grid grid-cols-1 items-center gap-12 pt-32 pb-24 sm:pt-36 sm:pb-28 lg:min-h-[88svh] lg:grid-cols-12 lg:gap-10 lg:pt-40 lg:pb-36">
        {/* Left Column: Heading, Story, CTAs, and Trust info */}
        <div className="text-white lg:col-span-7">
          <p data-hero-item className="text-sm font-bold uppercase tracking-[0.2em] text-white/85">
            Voice of Need Foundation
          </p>

          <h1
            data-hero-item
            className="mt-5 max-w-2xl text-balance font-display text-[2.75rem] uppercase leading-[1.04] sm:text-[3.5rem] lg:text-[4.25rem] tracking-tight"
          >
            Be the voice for those in need
          </h1>

          <p
            data-hero-item
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/90 font-normal"
          >
            Education, healthcare, clean water and emergency relief for families across
            Sri Lanka — delivered with compassion and full transparency.
          </p>

          <div data-hero-item className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/donate" variant="donate" size="lg" showArrow={false}>
              Donate now
            </Button>
            <Button href="/our-work" variant="outline-light" size="lg" showArrow={false}>
              Our appeals
            </Button>
          </div>
        </div>

        {/* Right Column: Donation Card overlapping naturally */}
        <div data-hero-item className="lg:col-span-5 lg:pl-4 xl:pl-8">
          <QuickDonate className="mx-auto max-w-md" />
        </div>
      </Container>

      {/* Asymmetric Organic Curved Bottom Edge — Seamlessly transitioning into the next section */}
      <div className="absolute bottom-0 inset-x-0 w-full overflow-hidden leading-none text-white pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96 C360,20 840,85 1440,15 L1440,96 L0,96 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
