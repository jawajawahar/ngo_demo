import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import TextReveal from "@/components/animations/TextReveal";
import ImageReveal from "@/components/animations/ImageReveal";
import StoryCard from "@/components/cards/StoryCard";
import CTABand from "@/components/sections/CTABand";
import { stories, getStoryBySlug, getRelatedStories } from "@/data/stories";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      type: "article",
      title: story.title,
      description: story.excerpt,
      images: [{ url: story.image }],
    },
  };
}

const categoryLabels: Record<string, string> = {
  education: "Education",
  community: "Community Development",
  environment: "Environment",
  healthcare: "Healthcare",
  "emergency-relief": "Emergency Relief",
};

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const related = getRelatedStories(story.slug, 3);
  const formattedDate = new Date(story.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    datePublished: story.date,
    image: story.image,
    author: story.author ? { "@type": "Person", name: story.author } : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="pt-40 pb-12 lg:pt-48">
          <Container className="mx-auto max-w-3xl">
            <FadeUp>
              <nav aria-label="Breadcrumb" className="text-xs text-muted">
                <Link href="/stories" className="hover:text-ink">
                  Stories
                </Link>
                <span className="mx-2">/</span>
                <span className="text-ink/70">{categoryLabels[story.category]}</span>
              </nav>
            </FadeUp>
            <TextReveal
              as="h1"
              className="mt-6 text-balance font-display text-[2.25rem] leading-[1.1] text-ink sm:text-[3.25rem]"
            >
              {story.title}
            </TextReveal>
            <FadeUp delay={0.1}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4" aria-hidden="true" />
                  {story.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  {formattedDate}
                </span>
                <span>{story.readTime}</span>
              </div>
            </FadeUp>
          </Container>
        </header>

        <Container>
          <ImageReveal className="relative aspect-[16/9] w-full rounded-lg">
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
        </Container>

        <div className="py-16 lg:py-24">
          <Container className="mx-auto max-w-2xl">
            <FadeUp>
              <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                {story.excerpt}
              </p>
            </FadeUp>

            {story.quote && (
              <FadeUp
                delay={0.08}
                className="my-10 flex gap-4 border-l-2 border-gold py-1 pl-6"
              >
                <Quote className="mt-1 size-6 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-display text-2xl leading-snug text-ink">
                    {story.quote}
                  </p>
                  {story.author && (
                    <p className="mt-3 text-sm text-muted">
                      {story.author}
                      {story.authorRole ? `, ${story.authorRole}` : ""}
                    </p>
                  )}
                </div>
              </FadeUp>
            )}

            <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-ink/85">
              {story.content.map((paragraph, index) => (
                <FadeUp key={index} delay={index * 0.04} as="p">
                  {paragraph}
                </FadeUp>
              ))}
            </div>

            {story.results && story.results.length > 0 && (
              <FadeUp className="mt-12 grid grid-cols-1 gap-6 border-y border-ink/10 py-8 sm:grid-cols-2">
                {story.results.map((result) => (
                  <div key={result.label}>
                    <p className="font-display text-3xl text-forest">{result.value}</p>
                    <p className="mt-1 text-sm text-muted">{result.label}</p>
                  </div>
                ))}
              </FadeUp>
            )}
          </Container>
        </div>

        {related.length > 0 && (
          <section className="bg-cream py-20 lg:py-28">
            <Container>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">Related stories</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedStory) => (
                  <StoryCard key={relatedStory.slug} story={relatedStory} />
                ))}
              </div>
            </Container>
          </section>
        )}
      </article>

      <CTABand
        eyebrow="Continue the Story"
        title="Your support writes the next chapter."
        primaryLabel="Donate now"
        primaryHref="/donate"
        secondaryLabel="Read more stories"
        secondaryHref="/stories"
      />
    </>
  );
}
