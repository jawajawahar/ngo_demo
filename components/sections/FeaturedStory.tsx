import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ImageReveal from "@/components/animations/ImageReveal";
import FadeUp from "@/components/animations/FadeUp";
import TextReveal from "@/components/animations/TextReveal";
import { getFeaturedStory } from "@/data/stories";

export default function FeaturedStory() {
  const story = getFeaturedStory();

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <ImageReveal className="relative aspect-[4/5] w-full rounded-lg lg:col-span-5">
          <Image
            src={story.image}
            alt={story.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </ImageReveal>

        <div className="lg:col-span-7 lg:pl-8">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Featured Story
            </span>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-4 text-balance font-display text-[2rem] uppercase leading-[1.15] tracking-tight text-forest sm:text-[2.5rem]"
          >
            {story.title}
          </TextReveal>

          {story.quote && (
            <FadeUp delay={0.1} className="mt-6 flex gap-3 border-l-2 border-gold pl-5">
              <Quote className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                {story.quote}
              </p>
            </FadeUp>
          )}

          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {story.excerpt}
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-8">
            <Button href={`/stories/${story.slug}`} variant="secondary">
              Read {story.author?.split(" ")[0] ?? "the"}&apos;s story
            </Button>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
