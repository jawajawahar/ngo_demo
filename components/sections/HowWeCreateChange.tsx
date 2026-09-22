"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";
import { changeProcess } from "@/data/impact";
import { cn } from "@/lib/utils";

export default function HowWeCreateChange() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      const triggers = stepRefs.current.map((el, index) => {
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });

      return () => {
        triggers.forEach((trigger) => trigger?.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-forest py-24 text-white lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="How We Create Change"
          title="A process built on trust"
          light
          className="max-w-xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:sticky lg:top-32 lg:col-span-5 lg:block lg:h-fit">
            <span className="font-display text-8xl text-gold/90">
              0{activeIndex + 1}
            </span>
            <h3 className="mt-4 font-display text-3xl">
              {changeProcess[activeIndex].title}
            </h3>
            <p className="mt-4 max-w-sm text-white/75">
              {changeProcess[activeIndex].description}
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-7 lg:gap-24">
            {changeProcess.map((step, index) => (
              <div
                key={step.step}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={cn(
                  "border-l-2 pl-6 transition-colors duration-500 lg:min-h-[40vh] lg:pt-4",
                  index === activeIndex ? "border-gold" : "border-white/15"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-500",
                    index === activeIndex ? "text-gold" : "text-white/40"
                  )}
                >
                  Step {index + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-md text-white/70 lg:hidden">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <FadeUp className="mt-16 border-t border-white/10 pt-8 text-sm text-white/50">
          Listen. Partner. Act. Measure. Then we do it again — with the same community,
          for as long as they want us there.
        </FadeUp>
      </Container>
    </section>
  );
}
