import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Quote as QuoteIcon, 
  CheckCircle2, 
  ArrowRight,
  HeartHandshake
} from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { getAllUpdates, getUpdateBySlug, getRelatedUpdates } from "@/data/updates";

interface UpdatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const updates = getAllUpdates();
  return updates.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({ params }: UpdatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    return {
      title: "Update Not Found | Sri Lanka Community Relief",
    };
  }

  return {
    title: `${update.title} | Field Updates`,
    description: update.shortSummary,
    openGraph: {
      title: update.title,
      description: update.shortSummary,
      images: [
        {
          url: update.image,
          width: 1200,
          height: 630,
          alt: update.imageAlt,
        },
      ],
    },
  };
}

export default async function UpdateDetailPage({ params }: UpdatePageProps) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  const relatedUpdates = getRelatedUpdates(update.slug, 3);

  return (
    <article className="min-h-screen bg-[#faf8f5] text-ink pb-24 sm:pb-32">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="border-b border-forest/10 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <Container className="py-4 flex items-center justify-between">
          <Link
            href="/updates"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-forest hover:text-gold transition-colors"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            <span>All Field Updates</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-muted font-medium">
            <span className="hidden sm:inline">Home / Updates /</span>
            <span className="truncate max-w-[180px] sm:max-w-[260px] text-ink font-semibold">
              {update.category}
            </span>
          </div>
        </Container>
      </div>

      {/* Main Article Header */}
      <header className="relative pt-12 sm:pt-16 pb-10">
        <Container className="max-w-4xl">
          <FadeUp>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest">
              <span>{update.category}</span>
              <span className="text-muted/60">•</span>
              <span className="text-muted">{update.location}</span>
              <span className="text-muted/60">•</span>
              <span className="text-muted">{update.date}</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold uppercase tracking-tight text-ink leading-[1.12]">
              {update.title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="mt-4 text-lg sm:text-xl leading-relaxed text-muted font-serif italic">
              {update.subtitle}
            </p>
          </FadeUp>

          {/* Editorial Byline */}
          <FadeUp delay={0.18}>
            <div className="mt-6 pt-5 border-t border-forest/10 flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs sm:text-sm text-muted font-medium">
                Field report by <strong className="text-ink">{update.fieldOfficer.name}</strong>, {update.fieldOfficer.role}
              </p>

              <div className="flex items-center gap-2">
                <Link
                  href="/donate"
                  className="rounded-xl bg-forest px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-forest-dark transition-all"
                >
                  Support this Work
                </Link>
              </div>
            </div>
          </FadeUp>
        </Container>
      </header>

      {/* Featured Photography */}
      <Container className="max-w-4xl">
        <FadeUp delay={0.2}>
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-forest/15 bg-slate-900">
            <Image
              src={update.image}
              alt={update.imageAlt}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <p className="mt-2.5 text-xs text-muted italic text-center">
            {update.imageAlt} • Captured on-site in {update.district}
          </p>
        </FadeUp>

        {/* Real-Time Impact Metric Stat Cards */}
        <FadeUp delay={0.24}>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {update.impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-forest/15 bg-white p-5 shadow-sm text-center flex flex-col justify-center"
              >
                <p className="font-display text-2xl sm:text-3xl font-bold text-forest tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-muted leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Structured Body Content */}
        <div className="mt-12 space-y-10">
          {/* Key Takeaways Callout Card */}
          <FadeUp delay={0.28}>
            <div className="rounded-2xl border-l-4 border-l-gold border border-forest/10 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-ink flex items-center gap-2">
                <CheckCircle2 className="size-5 text-gold shrink-0" />
                Key Field Actions Taken
              </h3>
              <ul className="mt-4 space-y-3">
                {update.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink/85 leading-relaxed">
                    <span className="font-bold text-forest shrink-0 mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Narrative Content Blocks */}
          {update.content.map((block, idx) => (
            <FadeUp key={idx} delay={0.3 + idx * 0.05} className="space-y-4">
              {block.heading && (
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-forest mt-8 mb-4">
                  {block.heading}
                </h2>
              )}
              {block.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-ink/90 font-serif">
                  {para}
                </p>
              ))}
            </FadeUp>
          ))}

          {/* Direct Ground Voice / Quote */}
          {update.quote && (
            <FadeUp delay={0.4}>
              <div className="my-10 relative overflow-hidden rounded-3xl border border-[#e8e2d8] bg-gradient-to-br from-white via-[#fcfbf8] to-[#f6f2ea] p-8 sm:p-10 shadow-md">
                <QuoteIcon className="size-10 text-gold/50 mb-3" />
                <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-ink/90">
                  &ldquo;{update.quote.text}&rdquo;
                </blockquote>
                <div className="mt-5 pt-4 border-t border-forest/10">
                  <p className="font-display text-base font-bold text-forest uppercase tracking-tight">
                    {update.quote.author}
                  </p>
                  <p className="text-xs text-muted font-medium">
                    {update.quote.role}
                  </p>
                </div>
              </div>
            </FadeUp>
          )}

          {/* Tags */}
          <FadeUp delay={0.45}>
            <div className="pt-6 border-t border-forest/10 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted mr-2">
                Tags:
              </span>
              {update.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-forest/5 px-3 py-1 text-xs font-semibold text-forest border border-forest/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* CTA Banner: Help expand this work */}
          <FadeUp delay={0.5}>
            <div className="mt-14 rounded-3xl bg-forest p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold mb-3">
                  <HeartHandshake className="size-3.5" />
                  Direct Donor Accountability
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                  100% of Your Donation Reaches Verified Relief
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  Support our volunteer teams delivering food packs, clean drinking water, and educational kits directly to vulnerable families.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/donate"
                  className="rounded-xl bg-gold px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-gold-dark transition-all text-center"
                >
                  Donate to this Project
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Related Updates Section */}
        {relatedUpdates.length > 0 && (
          <div className="mt-20 pt-16 border-t border-forest/10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                Other Recent Field Dispatches
              </h3>
              <Link
                href="/updates"
                className="text-xs font-bold uppercase tracking-wider text-forest hover:text-gold transition-colors inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedUpdates.map((item) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="group rounded-2xl border border-forest/15 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-forest/35 transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 300px, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-[11px] text-muted font-medium mb-1.5 uppercase tracking-wider">
                        <span className="text-forest font-bold">{item.location}</span>
                        <span className="mx-1.5">•</span>
                        <span>{item.date}</span>
                      </p>
                      <h4 className="font-display text-base font-bold uppercase tracking-tight text-ink group-hover:text-forest transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted line-clamp-2 font-serif">
                        {item.shortSummary}
                      </p>
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-forest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Read Dispatch</span>
                      <ArrowRight className="size-3" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
