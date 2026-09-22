"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { images } from "@/data/images";

export default function HomeHero() {
  const rootRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const targets = [
        eyebrowRef.current,
        headlineRef.current,
        descriptionRef.current,
        ctaRef.current,
      ].filter(Boolean);

      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        gsap.set(imageWrapRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(imageRef.current, { scale: 1 });
        gsap.set(scrollCueRef.current, { opacity: 1 });
        return;
      }

      gsap.set(targets, { opacity: 0, y: 28 });
      gsap.set(imageWrapRef.current, { clipPath: "inset(0% 0% 100% 0%)" });
      gsap.set(imageRef.current, { scale: 1.18 });
      gsap.set(scrollCueRef.current, { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.35, defaults: { ease: "power3.out" } });

      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7 })
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.45")
        .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.55")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(
          imageWrapRef.current,
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.inOut" },
          "-=0.9"
        )
        .to(imageRef.current, { scale: 1, duration: 1.6, ease: "power3.out" }, "<0.1")
        .to(scrollCueRef.current, { opacity: 1, duration: 0.6 }, "-=0.4");

      gsap.to(imageRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-dark"
    >
      <div ref={imageWrapRef} className="absolute inset-0" style={{ overflow: "hidden" }}>
        <div ref={imageRef} className="absolute inset-0 -top-[8%] h-[116%] w-full">
          <Image
            src={images.heroCommunity}
            alt="Children from a partner community smiling together outdoors"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-forest-dark/50" />
      </div>

      <Container className="relative z-10 flex flex-col gap-8 pb-20 pt-40 sm:pb-28 lg:pb-32">
        <span
          ref={eyebrowRef}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-gold"
        >
          Voice of Need Foundation · Demo data throughout
        </span>
        <h1
          ref={headlineRef}
          className="max-w-4xl text-balance font-display text-[2.75rem] leading-[1.05] text-white sm:text-[3.75rem] lg:text-[5.25rem]"
        >
          Change that starts with listening.
        </h1>
        <p
          ref={descriptionRef}
          className="max-w-xl text-balance text-lg leading-relaxed text-white/85 sm:text-xl"
        >
          We partner with communities on education, clean water, healthcare, the
          environment, and emergency relief — building what they ask for, not what we
          assume they need.
        </p>
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
          <Button href="/donate" size="lg">
            Donate now
          </Button>
          <Button href="/our-work" variant="outline-light" size="lg" showArrow={false}>
            Explore our work
          </Button>
        </div>
      </Container>

      <div
        ref={scrollCueRef}
        className="absolute inset-x-0 bottom-6 z-10 hidden justify-center sm:flex"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="size-4 animate-bounce motion-reduce:animate-none" />
        </div>
      </div>
    </section>
  );
}
