import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { getAllUpdates } from "@/data/updates";

export const metadata: Metadata = {
  title: "Field Updates & Real-Time Dispatches | Sri Lanka Community Relief",
  description: "Stay informed with transparent dispatches from our ground teams on flood relief, rural education, deep water wells, and mobile healthcare clinics.",
};

export default function UpdatesIndexPage() {
  const updates = getAllUpdates();

  return (
    <main className="min-h-screen bg-[#faf8f5] text-ink py-16 sm:py-24">
      <Container>
        {/* Page Header */}
        <div className="max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-forest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Field Reporting & Operations Archive</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-ink leading-tight">
              Latest Project Updates & <span className="text-forest">Field Dispatches</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="mt-4 text-lg text-muted leading-relaxed font-serif">
              Explore verifiable field reports directly from our field officers, engineers, and volunteers operating across the Northern, Eastern, and Central provinces of Sri Lanka.
            </p>
          </FadeUp>
        </div>

        {/* Updates Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {updates.map((item, idx) => (
            <FadeUp key={item.id} delay={0.1 + idx * 0.08} className="flex flex-col h-full">
              <Link
                href={`/updates/${item.slug}`}
                className="group relative flex flex-col justify-between h-full rounded-3xl border border-[#e8e2d8] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-forest/40 transition-all duration-400"
              >
                {/* Clean Photography - No Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-muted uppercase tracking-wider mb-2">
                      <span className="text-forest font-bold">{item.location}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>

                    <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink group-hover:text-forest transition-colors leading-snug">
                      {item.title}
                    </h2>

                    <p className="mt-2.5 text-sm leading-relaxed text-muted font-serif line-clamp-3">
                      {item.shortSummary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-forest/10 flex items-center justify-between">
                    <span className="text-xs text-muted font-medium">
                      {item.category}
                    </span>

                    <span className="text-xs font-bold uppercase tracking-wider text-forest group-hover:text-gold transition-colors inline-flex items-center gap-1">
                      <span>Read Dispatch</span>
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Container>
    </main>
  );
}
