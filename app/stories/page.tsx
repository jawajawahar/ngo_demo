import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import TextReveal from "@/components/animations/TextReveal";
import ImageReveal from "@/components/animations/ImageReveal";
import StoriesGrid from "@/components/sections/StoriesGrid";
import { stories, getFeaturedStory } from "@/data/stories";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Editorial dispatches and human stories from the communities Voice of Need Foundation partners with.",
};

export default function StoriesPage() {
  const featured = getFeaturedStory();
  const rest = stories.filter((story) => story.slug !== featured.slug);

  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Reporting from the field."
        description="Editorial dispatches from the communities and programs we work alongside — the people behind the numbers."
        image={images.kidsPlaying}
        imageAlt="Two children playing together outdoors"
      />

      <section className="bg-white py-20 lg:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <ImageReveal className="relative aspect-[4/3] w-full rounded-lg lg:col-span-7">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>
          <div className="lg:col-span-5">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                Featured
              </span>
            </FadeUp>
            <TextReveal
              as="h2"
              className="mt-4 text-balance font-display text-[2rem] leading-[1.15] text-ink sm:text-[2.5rem]"
            >
              {featured.title}
            </TextReveal>
            {featured.quote && (
              <FadeUp delay={0.1} className="mt-6 flex gap-3 border-l-2 border-gold pl-5">
                <Quote className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                <p className="font-display text-lg leading-snug text-ink">
                  {featured.quote}
                </p>
              </FadeUp>
            )}
            <FadeUp delay={0.16} className="mt-6">
              <Button href={`/stories/${featured.slug}`} variant="secondary">
                Read the full story
              </Button>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <StoriesGrid stories={rest} />
        </Container>
      </section>
    </>
  );
}
