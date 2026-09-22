"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface TextRevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  scroll?: boolean;
}

/** Vertical mask/clip reveal for headings — distinct from the opacity-based FadeUp. */
export default function TextReveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  scroll = true,
}: TextRevealProps) {
  const outerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const inner = innerRef.current;
      if (!inner) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(inner, { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.set(inner, { yPercent: 110, opacity: 0 });

      gsap.to(inner, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power4.out",
        scrollTrigger: scroll
          ? {
              trigger: outerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          : undefined,
      });
    },
    { scope: outerRef }
  );

  return (
    <Tag ref={outerRef} className={className} style={{ overflow: "hidden", display: "block" }}>
      <span ref={innerRef} style={{ display: "inline-block" }}>
        {children}
      </span>
    </Tag>
  );
}
