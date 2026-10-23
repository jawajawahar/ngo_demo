"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { regionImpact } from "@/data/impact";
import { formatNumber } from "@/lib/utils";

export default function RegionImpact() {
  const listRef = useRef<HTMLDivElement>(null);
  const maxReach = Math.max(...regionImpact.map((region) => region.peopleReached));

  useGSAP(
    () => {
      const bars = listRef.current?.querySelectorAll<HTMLDivElement>("[data-bar-fill]");
      if (!bars || bars.length === 0) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      bars.forEach((bar) => {
        const target = bar.dataset.width ?? "0%";
        if (prefersReducedMotion) {
          gsap.set(bar, { width: target });
          return;
        }
        gsap.set(bar, { width: "0%" });
        gsap.to(bar, {
          width: target,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: listRef }
  );

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="mb-14 flex items-center gap-3">
          <SectionHeading
            eyebrow="Where We Work"
            title="Impact by region"
            className="max-w-xl"
          />
        </div>

        <div ref={listRef} className="flex flex-col gap-8">
          {regionImpact.map((region) => (
            <div key={region.region}>
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg text-ink sm:text-xl">
                  {region.region}
                </h3>
                <p className="shrink-0 text-sm text-muted">
                  {formatNumber(region.peopleReached)} reached · {region.projects} projects
                </p>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-ink/8">
                <div
                  data-bar-fill
                  data-width={`${Math.round((region.peopleReached / maxReach) * 100)}%`}
                  className="h-full rounded-full bg-forest"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
