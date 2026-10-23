"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { updates } from "@/data/updates";

export default function LatestUpdatesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUpdate = updates[activeIndex] || updates[0];

  return (
    <section className="relative bg-[#faf8f5] py-20 sm:py-24 lg:py-28 border-t border-forest/10" aria-labelledby="updates-heading">
      <Container>
        {/* Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b border-forest/10">
          <div>
            <FadeUp>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest/80">
                Field Dispatches
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2
                id="updates-heading"
                className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink"
              >
                Latest Ground Updates
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.12}>
            <Link
              href="/updates"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest hover:text-gold transition-colors"
            >
              <span>View All Updates</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>

        {/* Innovative Interactive Editorial Showcase */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Active Story Visual & Story Canvas (7 Cols) */}
          <FadeUp delay={0.15} className="lg:col-span-7 flex flex-col">
            <div className="group relative flex flex-col bg-white rounded-3xl border border-[#e8e2d8] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,40,25,0.06)] transition-all duration-500">
              {/* Clean Cinematic Photograph - Zero Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  key={activeUpdate.id}
                  src={activeUpdate.image}
                  alt={activeUpdate.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />
              </div>

              {/* Story Overview */}
              <div className="p-7 sm:p-9 flex flex-col">
                {/* Meta details */}
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest/80">
                  <span>{activeUpdate.location}</span>
                  <span>•</span>
                  <span>{activeUpdate.date}</span>
                  <span>•</span>
                  <span className="text-muted">{activeUpdate.category}</span>
                </div>

                {/* Title */}
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink leading-snug">
                  {activeUpdate.title}
                </h3>

                {/* Short Summary */}
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted line-clamp-3 font-serif">
                  {activeUpdate.shortSummary}
                </p>

                {/* Action Link */}
                <div className="mt-6 pt-5 border-t border-forest/10 flex items-center justify-between">
                  <span className="text-xs text-muted font-medium">
                    Reported by {activeUpdate.fieldOfficer.name}
                  </span>

                  <Link
                    href={`/updates/${activeUpdate.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest hover:text-gold transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right: Interactive Dispatches Index (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted mb-1 px-1">
              Select Recent Dispatch ({updates.length})
            </p>

            {updates.slice(0, 4).map((item, idx) => {
              const isSelected = activeUpdate.id === item.id;

              return (
                <FadeUp key={item.id} delay={0.1 + idx * 0.05}>
                  <div
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                      isSelected
                        ? "bg-white border-forest/40 shadow-[0_10px_30px_-10px_rgba(0,56,34,0.1)] translate-x-1"
                        : "bg-white/60 hover:bg-white border-[#e8e2d8] hover:border-forest/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Index Number */}
                      <span className={`font-display text-sm font-bold mt-0.5 shrink-0 ${
                        isSelected ? "text-forest" : "text-muted/60"
                      }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1 min-w-0">
                        {/* Meta */}
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-muted uppercase tracking-wider">
                          <span className={isSelected ? "text-forest font-bold" : ""}>
                            {item.location}
                          </span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>

                        {/* Title */}
                        <h4 className={`mt-1 font-display text-base font-bold uppercase tracking-tight leading-snug line-clamp-2 transition-colors ${
                          isSelected ? "text-forest" : "text-ink group-hover:text-forest"
                        }`}>
                          {item.title}
                        </h4>

                        {/* Direct Read Link */}
                        <div className="mt-2.5 flex items-center justify-between">
                          <span className="text-xs text-muted/80 line-clamp-1 font-serif">
                            {item.category}
                          </span>

                          <Link
                            href={`/updates/${item.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs font-bold uppercase tracking-wider text-forest hover:text-gold transition-colors inline-flex items-center gap-1"
                          >
                            <span>Read</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
