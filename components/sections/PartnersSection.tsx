"use client";

import Link from "next/link";
import { ArrowRight, Building2, Droplets, HeartPulse, Sprout, SunMedium, Compass, Shield, Waves } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { partners } from "@/data/partners";

// Helper to render customized SVG logo marks for each partner
function getPartnerIcon(type: string) {
  switch (type) {
    case "wash":
      return <Droplets className="size-6 text-emerald-700" />;
    case "healthcare":
      return <HeartPulse className="size-6 text-crimson" />;
    case "livelihood":
      return <Sprout className="size-6 text-emerald-600" />;
    case "education":
      return <SunMedium className="size-6 text-amber-600" />;
    case "logistics":
      return <Compass className="size-6 text-forest" />;
    case "grantmaker":
    default:
      return <Building2 className="size-6 text-forest" />;
  }
}

export default function PartnersSection() {
  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="relative bg-[#f7f5f0] py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-forest/10" aria-labelledby="partners-heading">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-10 border-b border-forest/10">
          <div>
            <FadeUp>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest/80">
                Institutional Alliances
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2
                id="partners-heading"
                className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink"
              >
                In Partnership With
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-muted font-serif">
                Working alongside accredited trusts, public health collectives, and civic engineering networks to maximize ground impact across Sri Lanka.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <Link
              href="/get-involved/partner"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest hover:text-gold transition-colors shrink-0"
            >
              <span>Become an Alliance Partner</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </Container>

      {/* Infinite Smooth Logo Ribbon with Left & Right Gradient Masks */}
      <div className="relative mt-12 w-full overflow-hidden py-4">
        {/* Left & Right gradient masks for silky edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#f7f5f0] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#f7f5f0] to-transparent z-10" />

        <div className="animate-partner-marquee flex gap-4 sm:gap-6 items-center">
          {marqueeList.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="group flex items-center gap-3.5 rounded-2xl border border-[#e8e2d8] bg-white/90 backdrop-blur-sm px-5 py-3.5 shadow-sm hover:border-forest/40 hover:shadow-md transition-all duration-300 shrink-0 cursor-default"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#faf8f5] border border-forest/10 shrink-0 group-hover:scale-105 transition-transform">
                {getPartnerIcon(partner.type)}
              </div>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-tight text-ink group-hover:text-forest transition-colors">
                  {partner.name}
                </p>
                <p className="text-[11px] text-muted font-medium">
                  {partner.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Alliance Cards Grid */}
      <Container className="mt-14 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {partners.slice(0, 6).map((partner, idx) => (
            <FadeUp key={partner.name} delay={0.08 + idx * 0.05} className="flex flex-col h-full">
              <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-[#e8e2d8] bg-white p-6 sm:p-7 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,56,34,0.08)] hover:border-forest/40 hover:-translate-y-1 transition-all duration-300">
                <div>
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-center justify-between pb-4 border-b border-forest/10">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#faf8f5] border border-forest/10 group-hover:border-forest/30 transition-colors">
                      {getPartnerIcon(partner.type)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest/75 font-mono">
                      {partner.location}
                    </span>
                  </div>

                  {/* Partner Name */}
                  <h3 className="mt-4 font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-ink group-hover:text-forest transition-colors leading-snug">
                    {partner.name}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mt-0.5">
                    {partner.category}
                  </p>

                  {/* Focus Description */}
                  <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed font-serif">
                    {partner.focus}
                  </p>
                </div>

                {/* Footer link to partner info */}
                <div className="mt-6 pt-4 border-t border-forest/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-forest">
                    Active Ground Partner
                  </span>
                  <Link
                    href="/get-involved/partner"
                    className="text-xs font-bold uppercase tracking-wider text-muted group-hover:text-forest group-hover:translate-x-0.5 transition-all inline-flex items-center gap-1"
                  >
                    <span>Connect</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
