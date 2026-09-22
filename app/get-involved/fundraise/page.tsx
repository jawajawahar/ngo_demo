import type { Metadata } from "next";
import { Gift, Share2, Users2 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";
import CTABand from "@/components/sections/CTABand";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Fundraise",
  description:
    "Start a personal fundraiser or host an event to support Voice of Need Foundation's programs.",
};

const steps = [
  {
    icon: Gift,
    title: "Pick a program",
    description: "Choose the program or campaign you want your fundraiser to support.",
  },
  {
    icon: Share2,
    title: "Share your page",
    description: "We'll set up a personal fundraising page you can share with friends, family, and colleagues.",
  },
  {
    icon: Users2,
    title: "Rally your community",
    description: "Whether it's a birthday, a race, or a workplace drive — every fundraiser adds up.",
  },
];

const ideas = [
  "Dedicate your birthday fundraiser to a program you care about",
  "Organize a workplace giving campaign or matching gift drive",
  "Host a community event — a bake sale, run, or trivia night",
  "Challenge your network with a personal fitness or hobby goal",
];

export default function FundraisePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved · Fundraise"
        title="Turn your network into new possibilities."
        description="Personal fundraisers and community events make up a meaningful share of the support behind our programs."
        image={images.cafeMeeting}
        imageAlt="Friends meeting together at a cafe table"
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Three simple steps" className="max-w-xl" />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeUp key={step.title} delay={index * 0.08}>
                  <Icon className="size-6 text-forest" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Ideas To Get Started"
              title="Fundraisers that have worked well"
            />
          </div>
          <ul className="flex flex-col divide-y divide-ink/10 border-t border-ink/10 lg:col-span-6 lg:col-start-7">
            {ideas.map((idea, index) => (
              <FadeUp key={idea} as="li" delay={index * 0.05} className="py-5 text-base text-ink">
                {idea}
              </FadeUp>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        eyebrow="Ready When You Are"
        title="Let's set up your fundraiser."
        description="Reach out and our partnerships team will help you get a fundraising page live within a few days."
        primaryLabel="Contact our team"
        primaryHref="/contact"
        secondaryLabel="Donate directly instead"
        secondaryHref="/donate"
      />
    </>
  );
}
