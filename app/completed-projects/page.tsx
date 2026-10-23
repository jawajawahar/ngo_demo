import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import ImageReveal from "@/components/animations/ImageReveal";
import ImpactStats from "@/components/sections/ImpactStats";
import RegionImpact from "@/components/sections/RegionImpact";
import CTABand from "@/components/sections/CTABand";
import { images } from "@/data/images";
import { programs } from "@/data/programs";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Completed Projects",
  description:
    "Explore our completed projects and sustainable impact delivered in partnership with local communities.",
};

export default function CompletedProjectsPage() {
  const completedShowcase = [
    {
      title: "Clean Water Infrastructure Initiative",
      region: "Kolda & Surrounding Villages",
      impact: "18,000+ residents with clean water",
      year: "2024",
      image: images.heroVillageChildren,
      imageAlt: "Children in a village community celebrating clean water",
      description:
        "Engineered and constructed 24 community boreholes and solar-powered distribution points, ensuring permanent access to tested drinking water.",
      outcomes: ["24 deep-well water systems", "Zero waterborne illnesses recorded", "Managed by local village water committee"],
    },
    {
      title: "Primary Schools Modernization & Safe Classrooms",
      region: "Highlands & Rural Districts",
      impact: "186 classrooms restored",
      year: "2024",
      image: images.classroomTeaching,
      imageAlt: "A teacher and pupils in a renovated classroom",
      description:
        "Replaced dilapidated structures with climate-resilient classrooms, solar illumination, gender-segregated sanitation, and learning materials.",
      outcomes: ["12,400+ students in safe environments", "420 teachers trained in literacy", "94% attendance rate maintained"],
    },
    {
      title: "Indigenous Agroforestry & Mangrove Restorations",
      region: "Coastal & Riverine Basins",
      impact: "218,000 native trees planted",
      year: "2023 - 2024",
      image: images.wildflowerMeadow,
      imageAlt: "Reforested native habitat and meadows",
      description:
        "Community-led green barriers protecting coastlines against extreme weather, with sustainable agroforestry supporting farming families.",
      outcomes: ["1,400 hectares protected", "Community nursery established", "12 local eco-guards employed"],
    },
    {
      title: "Mobile Health Clinics & Preventative Care",
      region: "Remote Mountain Settlements",
      impact: "64,000 medical consultations",
      year: "2023",
      image: images.doctorPhone,
      imageAlt: "Healthcare volunteers and medical staff",
      description:
        "Deployed all-terrain mobile clinics equipped with diagnostic laboratories, maternal care, and immunisation campaigns across isolated settlements.",
      outcomes: ["100% vaccination coverage in target zones", "Prenatal kits distributed", "Telemedicine link to district hospitals"],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Track Record of Trust"
        title="Completed Projects."
        description="Every project represents promises made and promises kept. Explore how community leadership turns contributions into enduring transformation."
        image={images.volunteerGroupStairs}
        imageAlt="Community volunteers finishing a successful planting day"
      />

      {/* Impact Stats */}
      <ImpactStats />

      {/* Completed Projects Showcase */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Milestones & Delivery"
            title="Delivered initiatives that stand the test of time"
            description="We complete projects with sustainable handovers to local leadership councils so benefits continue indefinitely."
            className="max-w-2xl"
          />

          <div className="mt-14 space-y-16">
            {completedShowcase.map((project, idx) => (
              <FadeUp key={project.title} delay={idx * 0.08}>
                <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-ink/10 bg-cream p-6 lg:grid-cols-12 lg:gap-12 lg:p-10">
                  <ImageReveal
                    className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl lg:col-span-6 ${
                      idx % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 90vw"
                      className="object-cover"
                    />
                  </ImageReveal>

                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">
                        {project.year} Completed
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {project.region}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-ink sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-gold">
                      Result: {project.impact}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-ink/10 pt-4">
                      {project.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-center gap-2.5 text-sm text-ink/80">
                          <CheckCircle2 className="size-4 shrink-0 text-forest" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Region distribution */}
      <RegionImpact />

      {/* Stories From Completed Work */}
      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Community Voice"
              title="Stories from the field"
              description="Hear directly from families and leaders whose lives were changed."
            />
            <Button href="/stories" variant="secondary" showArrow>
              View all stories
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, 3).map((story, i) => (
              <FadeUp key={story.slug} delay={i * 0.08}>
                <Link
                  href={`/stories/${story.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-white transition-shadow hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-forest">
                      {story.location}
                    </span>
                    <h4 className="mt-2 font-display text-xl text-ink transition-colors group-hover:text-forest">
                      {story.title}
                    </h4>
                    <p className="mt-3 line-clamp-3 text-sm text-muted">
                      {story.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold uppercase tracking-wider text-gold">
                      Read story <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Join Our Journey"
        title="Ready to power the next breakthrough?"
        description="Every completed project started with someone deciding to give. Partner with us today."
        primaryLabel="Support an appeal"
        primaryHref="/our-work"
        secondaryLabel="Donate now"
        secondaryHref="/donate"
      />
    </>
  );
}
