import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import ImageReveal from "@/components/animations/ImageReveal";
import FadeUp from "@/components/animations/FadeUp";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, fundraise, or partner with Voice of Need Foundation — find the way you want to help.",
};

const paths = [
  {
    title: "Volunteer",
    href: "/get-involved/volunteer",
    description:
      "On-site placements and remote roles across all five programs — for individuals and skilled professionals.",
    image: images.volunteerGroupStairs,
    imageAlt: "A group of volunteers together outdoors",
  },
  {
    title: "Fundraise",
    href: "/get-involved/fundraise",
    description:
      "Start a personal campaign, host an event, or rally your community around a program you care about.",
    image: images.cafeMeeting,
    imageAlt: "Friends meeting together at a cafe table",
  },
  {
    title: "Partner With Us",
    href: "/get-involved/partner",
    description:
      "Corporate, institutional, and foundation partnerships that fund and scale long-term programs.",
    image: images.officeMeeting,
    imageAlt: "A team meeting together around a table",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Find your way to help."
        description="Time, money, and reach all move this work forward — pick the path that fits you best."
        image={images.laptopCollaboration}
        imageAlt="Community members collaborating together"
      />

      <section className="bg-white py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {paths.map((path, index) => (
            <FadeUp key={path.href} delay={index * 0.08}>
              <Link href={path.href} className="group/path block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                <ImageReveal className="relative aspect-[4/5] w-full rounded-lg">
                  <Image
                    src={path.image}
                    alt={path.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover/path:scale-105 motion-reduce:transition-none"
                  />
                </ImageReveal>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl uppercase tracking-tight text-ink">{path.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {path.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 size-5 shrink-0 text-forest transition-transform duration-300 ease-out group-hover/path:translate-x-1 group-hover/path:-translate-y-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </FadeUp>
          ))}
        </Container>
      </section>
    </>
  );
}
