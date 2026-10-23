import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";
import ImageReveal from "@/components/animations/ImageReveal";
import CTABand from "@/components/sections/CTABand";
import { programs, getProgramBySlug } from "@/data/programs";
import { getStoryBySlug } from "@/data/stories";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};

  return {
    title: program.name,
    description: program.shortDescription,
    openGraph: {
      title: `${program.name} — Voice of Need Foundation`,
      description: program.shortDescription,
      images: [{ url: program.image }],
    },
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const story = program.storySlug ? getStoryBySlug(program.storySlug) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={program.name}
        description={program.shortDescription}
        image={program.image}
        imageAlt={program.imageAlt}
      />

      {/* Problem + Approach */}
      <section className="bg-white py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The Problem
            </span>
            <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
              {program.problem}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Approach
            </span>
            <p className="mt-5 text-lg leading-relaxed text-muted">{program.approach}</p>
          </FadeUp>
        </Container>
      </section>

      {/* Activities */}
      <section className="bg-cream py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="What We Do" title="Core activities" className="max-w-xl" />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {program.activities.map((activity, index) => (
              <FadeUp key={activity.title} delay={index * 0.06} className="border-l-2 border-gold pl-5">
                <h3 className="font-display text-xl text-ink">{activity.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {activity.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="mb-10 flex items-center gap-3">
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Program impact</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 border-y border-ink/10 py-10 sm:grid-cols-3">
            {program.stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={index * 0.08}>
                <p className="font-display text-4xl text-ink sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Story */}
      {story && (
        <section className="bg-forest-dark py-24 text-white lg:py-32">
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Project Story
              </span>
              <h2 className="mt-4 font-display text-[2rem] uppercase leading-[1.15] tracking-tight sm:text-[2.5rem]">
                {story.title}
              </h2>
              <p className="mt-5 max-w-lg text-white/80">{story.excerpt}</p>
              <div className="mt-8">
                <a
                  href={`/stories/${story.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-forest"
                >
                  Read the full story
                </a>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Gallery */}
      <section className="bg-cream py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Gallery" title="From the field" className="max-w-xl" />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {program.gallery.map((item, index) => (
              <ImageReveal
                key={item.src}
                delay={index * 0.06}
                className="relative aspect-square w-full rounded-lg lg:aspect-[4/5]"
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
        eyebrow="How You Can Help"
        title={`Support the ${program.name.toLowerCase()} program`}
        description="Your gift or your time goes directly toward the work above."
        primaryLabel="Donate now"
        primaryHref="/donate"
        secondaryLabel="Volunteer with us"
        secondaryHref="/get-involved/volunteer"
      />
    </>
  );
}
