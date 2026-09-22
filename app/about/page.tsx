import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";
import ImageReveal from "@/components/animations/ImageReveal";
import TeamCard from "@/components/cards/TeamCard";
import PartnersSection from "@/components/sections/PartnersSection";
import CTABand from "@/components/sections/CTABand";
import { images } from "@/data/images";
import { changeProcess } from "@/data/impact";
import { leadership, governanceBoard, timeline, orgValues } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Voice of Need Foundation's story, mission, approach, leadership, and governance. Demo NGO content.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Rooted in community, built for the long term."
        description="Voice of Need began with a single classroom renovation in 2015. A decade later, we still work the same way — starting with the people who live the problem."
        image={images.libraryTeamwork}
        imageAlt="A team collaborating together around a table of books"
      />

      {/* Story */}
      <section className="bg-white py-24 lg:py-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <ImageReveal className="relative aspect-[4/5] w-full rounded-lg lg:col-span-5">
            <Image
              src={images.cafeMeeting}
              alt="Founding team members in an early planning meeting"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>
          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeading eyebrow="Our Story" title="How Voice of Need started" />
            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-muted">
              <FadeUp>
                <p>
                  Voice of Need Foundation was founded in 2015 after a group of educators and
                  engineers spent a summer helping rebuild a single flood-damaged
                  classroom in the Kolda region. What was meant to be a one-time project
                  turned into a decade-long relationship with that community.
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <p>
                  That first classroom taught us something we&apos;ve carried into every
                  program since: lasting change doesn&apos;t come from outside experts
                  parachuting in with solutions. It comes from communities directing the
                  work, with the right resources and training behind them.
                </p>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p>
                  Today we work across five program areas in five regions — still
                  applying the same principle: listen first, build what&apos;s actually
                  needed, and stay long enough to see it through.
                </p>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* Why We Exist */}
      <section className="bg-forest py-24 text-white lg:py-32">
        <Container className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Why We Exist
          </span>
          <p className="mt-6 text-balance font-display text-[1.75rem] leading-[1.35] sm:text-[2.25rem]">
            Millions of families live within reach of a solution that never arrives —
            not because it doesn&apos;t exist, but because it was never built with them
            in mind. We exist to close that distance.
          </p>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cream py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <FadeUp className="border-t-2 border-forest pt-6">
            <h3 className="font-display text-2xl text-ink">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              To partner with communities on education, clean water, healthcare, the
              environment, and emergency relief — providing resources and expertise
              while local leadership directs the work.
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="border-t-2 border-gold pt-6">
            <h3 className="font-display text-2xl text-ink">Our Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A world where every community has the resources, infrastructure, and
              opportunity to shape its own future — without depending on outside aid to
              get there.
            </p>
          </FadeUp>
        </Container>

        <Container className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {orgValues.map((value) => (
            <FadeUp key={value.title}>
              <Check className="size-5 text-forest" aria-hidden="true" />
              <h4 className="mt-3 font-display text-xl text-ink">{value.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </FadeUp>
          ))}
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="Four principles behind every program"
            className="max-w-xl"
          />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {changeProcess.map((step, index) => (
              <FadeUp key={step.step} delay={index * 0.08} className="border-l-2 border-gold pl-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                  0{index + 1}
                </span>
                <h4 className="mt-3 font-display text-xl text-ink">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Our History" title="A decade of showing up" className="max-w-xl" />
          <div className="mt-14 flex flex-col">
            {timeline.map((entry, index) => (
              <FadeUp
                key={entry.year}
                delay={index * 0.05}
                className="grid grid-cols-1 gap-2 border-t border-ink/10 py-6 sm:grid-cols-12 sm:gap-6"
              >
                <span className="font-display text-2xl text-forest sm:col-span-2">
                  {entry.year}
                </span>
                <h4 className="font-display text-xl text-ink sm:col-span-4">{entry.title}</h4>
                <p className="text-sm leading-relaxed text-muted sm:col-span-6">
                  {entry.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The team steering the work"
            className="max-w-xl"
          />
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Governance */}
      <section className="bg-cream py-24 lg:py-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Governance"
              title="Independent oversight"
              description="Voice of Need is governed by an independent volunteer board that reviews our finances, strategy, and program outcomes each quarter."
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeUp>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                Board of Directors
              </h4>
            </FadeUp>
            <ul className="mt-5 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
              {governanceBoard.map((member, index) => (
                <FadeUp
                  key={member}
                  delay={index * 0.04}
                  as="li"
                  className="py-4 text-base text-ink"
                >
                  {member}
                </FadeUp>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <PartnersSection />

      <CTABand
        eyebrow="Join Us"
        title="However you can help, there's a place for you here."
        description="Give your time, your skills, or your support — every path starts in the same place."
        primaryLabel="Donate now"
        primaryHref="/donate"
        secondaryLabel="Volunteer with us"
        secondaryHref="/get-involved/volunteer"
      />
    </>
  );
}
