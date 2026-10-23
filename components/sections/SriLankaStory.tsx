"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

export default function SriLankaStory() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="story-heading">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          
          {/* Left Column: Heading with brush underline, short history & CTA buttons */}
          <div className="lg:col-span-6 xl:col-span-6">
            <FadeUp>
              <h2
                id="story-heading"
                className="font-display text-[2.25rem] sm:text-[2.85rem] lg:text-[3.25rem] uppercase leading-[1.06] tracking-tight text-ink"
              >
                Nourishing Futures:{" "}
                <span className="relative inline-block text-forest">
                  Our Roots, Their Smiles
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

            <FadeUp delay={0.1}>
              <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted font-normal">
                Founded to stand beside vulnerable communities across Sri Lanka, Voice of Need Foundation delivers urgent food relief, clean water, healthcare, and education to empower underserved children and families island-wide.
              </p>
            </FadeUp>

            <FadeUp delay={0.18} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <Button href="/about" variant="secondary" size="lg" showArrow={true}>
                Read more
              </Button>
              <Button href="/donate" variant="donate" size="lg" showArrow={false}>
                Join now
              </Button>
            </FadeUp>
          </div>

          {/* Right Column: Sri Lanka map directly on the default browser page (no card box, no badge) */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
            <FadeUp delay={0.15} className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <Image
                src="/sri-lanka-map.png"
                alt="Sri Lanka map silhouette filled with smiling children"
                width={700}
                height={700}
                priority
                className="w-full h-auto max-h-[580px] sm:max-h-[640px] object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
            </FadeUp>
          </div>

        </div>
      </Container>
    </section>
  );
}
