"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { Users } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import DemoBadge from "@/components/ui/DemoBadge";
import ImageReveal from "@/components/animations/ImageReveal";
import FadeUp from "@/components/animations/FadeUp";
import TextReveal from "@/components/animations/TextReveal";
import { activeCampaign } from "@/data/campaigns";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function CampaignSection() {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const percent = Math.min(
    100,
    Math.round((activeCampaign.raised / activeCampaign.goal) * 100)
  );

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(fillRef.current, { width: `${percent}%` });
        return;
      }

      gsap.set(fillRef.current, { width: "0%" });
      gsap.to(fillRef.current, {
        width: `${percent}%`,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: barRef, dependencies: [percent] }
  );

  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <ImageReveal className="relative aspect-[16/11] w-full rounded-lg lg:col-span-6">
          <Image
            src={activeCampaign.image}
            alt={activeCampaign.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </ImageReveal>

        <div className="lg:col-span-6 lg:pl-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Current Campaign
            </span>
            <DemoBadge />
          </div>

          <TextReveal
            as="h2"
            className="mt-4 text-balance font-display text-[2rem] leading-[1.15] text-ink sm:text-[2.5rem]"
          >
            {activeCampaign.title}
          </TextReveal>

          <FadeUp delay={0.1}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              {activeCampaign.description}
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-8">
            <div ref={barRef}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-display text-2xl text-ink">
                  {formatCurrency(activeCampaign.raised, activeCampaign.currency)}
                </span>
                <span className="text-muted">
                  of {formatCurrency(activeCampaign.goal, activeCampaign.currency)} goal
                </span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink/10">
                <div ref={fillRef} className="h-full rounded-full bg-gold" />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Users className="size-3.5" aria-hidden="true" />
                  {formatNumber(activeCampaign.donorCount)} donors
                </span>
                <span>{activeCampaign.daysLeft} days left</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-8 flex flex-wrap gap-4">
            <Button href="/donate">Support this campaign</Button>
            <Button href={`/our-work/community-development`} variant="secondary" showArrow={false}>
              Learn more
            </Button>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
