"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Clock, Radio, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { getFeaturedUpdate, getLatestUpdates } from "@/data/updates";

export default function LatestUpdatesSection() {
  const featured = getFeaturedUpdate();
  const allLatest = getLatestUpdates(4);
  const secondaryUpdates = allLatest.filter((item) => item.id !== featured.id);

  return (
    <section className="relative bg-[#fbf9f5] py-24 sm:py-28 lg:py-32 overflow-hidden border-t border-forest/10" aria-labelledby="updates-heading">
      {/* Subtle organic ambient background glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-[420px] rounded-full bg-forest/[0.04] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-[420px] rounded-full bg-gold/[0.05] blur-3xl" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Section Header with Live Dispatch Beacon */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-forest/10">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-forest/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-forest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span>Live Field Dispatches • Updated Weekly</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2
                id="updates-heading"
                className="mt-4 font-display text-[2.2rem] sm:text-[2.85rem] lg:text-[3.35rem] uppercase leading-[1.08] tracking-tight text-ink"
              >
                Latest Updates from{" "}
                <span className="relative inline-block text-forest whitespace-nowrap">
                  Our Ground Teams
                  {/* Organic brush underline */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 text-gold/85"
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
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
                Transparent dispatches on relief deliveries, completed water projects, newly opened school labs, and emergency responses across Sri Lanka.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="shrink-0">
            <Link
              href="/updates"
              className="group inline-flex items-center gap-2 rounded-xl border border-forest/25 bg-white px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest shadow-sm hover:bg-forest hover:text-white hover:border-forest transition-all duration-300"
            >
              <span>View All Updates</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>

        {/* Dynamic Updates Layout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Main Primary Featured Update (Hero Card) */}
          <FadeUp delay={0.15} className="lg:col-span-7 flex flex-col h-full">
            <Link
              href={`/updates/${featured.slug}`}
              className="group relative flex flex-col justify-between h-full rounded-3xl border border-[#e8e2d8] bg-white overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,40,25,0.07)] hover:shadow-[0_25px_60px_-10px_rgba(0,40,25,0.14)] hover:border-forest/40 transition-all duration-500"
            >
              {/* Featured Image with Hover Scale */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Floating Category Badge & Featured Tag */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    <Radio className="size-3 animate-pulse" />
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white/90">
                    <Clock className="size-3 text-gold" />
                    {featured.readTime}
                  </span>
                </div>

                {/* Location and Date Stamp on Image Bottom */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-medium text-white/95 z-10">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-gold shrink-0" />
                    {featured.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/80">
                    <Calendar className="size-3.5 shrink-0" />
                    {featured.date}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-9 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink group-hover:text-forest transition-colors duration-300 leading-snug">
                    {featured.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-muted line-clamp-3">
                    {featured.shortSummary}
                  </p>

                  {/* Impact Stats Strip */}
                  <div className="mt-6 pt-5 border-t border-forest/10 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {featured.impactStats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-[#f7f5f0] p-3 border border-forest/5">
                        <p className="font-display text-lg font-bold text-forest leading-tight">
                          {stat.value}
                        </p>
                        <p className="text-[11px] text-muted line-clamp-1 mt-0.5 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author / Field Officer Footer */}
                <div className="mt-7 pt-5 border-t border-forest/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative size-10 rounded-full overflow-hidden ring-2 ring-forest/20 shrink-0">
                      <Image
                        src={featured.fieldOfficer.avatar}
                        alt={featured.fieldOfficer.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink">
                        {featured.fieldOfficer.name}
                      </p>
                      <p className="text-[11px] text-muted line-clamp-1">
                        {featured.fieldOfficer.role}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-forest group-hover:text-gold transition-colors">
                    <span>Read Full Dispatch</span>
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* Secondary Latest Updates (Right Column Stack) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondaryUpdates.map((item, idx) => (
              <FadeUp key={item.id} delay={0.2 + idx * 0.1} className="flex-1">
                <Link
                  href={`/updates/${item.slug}`}
                  className="group relative flex flex-col sm:flex-row gap-5 h-full rounded-2xl border border-[#e8e2d8] bg-white p-5 sm:p-5 shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,56,34,0.1)] hover:border-forest/35 transition-all duration-300"
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[4/3] sm:w-40 sm:h-auto rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 640px) 160px, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 z-10">
                      <span className="rounded-md bg-forest/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content snippet */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-muted mb-1.5 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3 text-gold" />
                          {item.date}
                        </span>
                        <span>•</span>
                        <span className="truncate flex items-center gap-1">
                          <MapPin className="size-3 text-forest/70" />
                          {item.location}
                        </span>
                      </div>

                      <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-ink group-hover:text-forest transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>

                      <p className="mt-1.5 text-xs text-muted leading-relaxed line-clamp-2 font-serif">
                        {item.shortSummary}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-forest/10 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-forest flex items-center gap-1">
                        <CheckCircle2 className="size-3 text-emerald-600" />
                        {item.impactStats[0].value} {item.impactStats[0].label}
                      </span>

                      <span className="text-xs font-bold uppercase tracking-wider text-forest group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                        <span>Details</span>
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
