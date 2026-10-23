import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import ImageReveal from "@/components/animations/ImageReveal";
import ProgramCard from "@/components/cards/ProgramCard";
import CTABand from "@/components/sections/CTABand";
import { programs } from "@/data/programs";
import { getStoryBySlug } from "@/data/stories";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Voice of Need Foundation's five programs: education, community development, environment, healthcare, and emergency relief.",
};

export default function OurWorkPage() {
  const featuredProgram = programs[1];
  const communityStory = featuredProgram.storySlug
    ? getStoryBySlug(featuredProgram.storySlug)
    : undefined;
  const gallery = programs.flatMap((program) => program.gallery).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Five programs. One community-led approach."
        description="Every program below is designed and directed with the community it serves — we bring funding, expertise, and long-term commitment."
        image={images.classroomStudents}
        imageAlt="Students working together in a classroom"
      />

      <section className="bg-white py-20 lg:py-28">
        <Container className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-balance text-lg leading-relaxed text-muted">
              We work across education, community development, the environment,
              healthcare, and emergency relief — not as separate initiatives, but as
              parts of the same long-term relationship with each community we partner
              with.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-cream py-4 lg:py-8">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={program.slug} program={program} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Project */}
      <section className="bg-white py-24 lg:py-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <ImageReveal className="relative aspect-[4/5] w-full rounded-lg lg:col-span-5">
            <Image
              src={featuredProgram.image}
              alt={featuredProgram.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>
          <div className="lg:col-span-7 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Featured Project
              </span>
            </div>
            <h2 className="mt-4 font-display text-[2rem] uppercase leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
              {featuredProgram.name}: {featuredProgram.shortDescription}
            </h2>
            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-ink/10 py-6">
              {featuredProgram.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-ink sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href={`/our-work/${featuredProgram.slug}`} variant="secondary">
                View program details
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Story */}
      {communityStory && (
        <section className="bg-forest-dark py-24 text-white lg:py-32">
          <Container className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Community Story
            </span>
            <p className="mt-6 text-balance font-display text-[1.75rem] leading-[1.35] sm:text-[2.25rem]">
              &ldquo;{communityStory.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm text-white/70">
              {communityStory.author}, {communityStory.authorRole}
            </p>
            <div className="mt-8">
              <Button href={`/stories/${communityStory.slug}`} variant="outline-light" showArrow>
                Read the full story
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Gallery */}
      <section className="bg-cream py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Gallery" title="From the field" className="max-w-xl" />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <ImageReveal
                key={`${item.src}-${index}`}
                delay={index * 0.05}
                className={
                  index === 0
                    ? "relative col-span-2 aspect-[16/9] w-full rounded-lg lg:col-span-1 lg:aspect-[4/5] lg:row-span-2"
                    : "relative aspect-square w-full rounded-lg"
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  className="object-cover"
                />
              </ImageReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Get Involved"
        title="Help us reach the next community."
        description="Every program depends on people who choose to fund, volunteer for, or partner on this work."
        primaryLabel="Donate now"
        primaryHref="/donate"
        secondaryLabel="Volunteer with us"
        secondaryHref="/get-involved/volunteer"
      />
    </>
  );
}
