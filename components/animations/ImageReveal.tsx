"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = wrapperRef.current;
      if (!el) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(el.firstElementChild, { scale: 1 });
        return;
      }

      gsap.set(el, { clipPath: "inset(0% 0% 100% 0%)" });
      gsap.set(el.firstElementChild, { scale: 1.15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.to(el, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        delay,
        ease: "power4.inOut",
      }).to(
        el.firstElementChild,
        {
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "<0.1"
      );
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className={className} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
}
