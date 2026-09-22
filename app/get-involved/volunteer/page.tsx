import type { Metadata } from "next";
import { Quote, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";
import FaqAccordion from "@/components/ui/FaqAccordion";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { images } from "@/data/images";
import {
  volunteerOpportunities,
  volunteerTypes,
  volunteerTestimonials,
  volunteerFaqs,
} from "@/data/volunteer";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Explore volunteer opportunities with Voice of Need Foundation — on-site placements and remote roles across five programs.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved · Volunteer"
        title="Bring your time and skills to the field."
        description="From on-site placements to remote mentoring, our volunteers extend what our field teams can do."
        image={images.volunteerFriendsPortrait}
        imageAlt="A group of young volunteers sitting together outdoors"
      />

      {/* Why volunteer */}
      <section className="bg-white py-20 lg:py-28">
        <Container className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-balance text-lg leading-relaxed text-muted">
              Every program depends on people willing to show up — in a classroom, on a
              build site, or behind a laptop. Volunteers bring skills our field teams
              don&apos;t always have time to build in-house, and a lot of the trust our
              long-term programs are built on.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* Opportunities */}
      <section className="bg-cream py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Open Opportunities"
            title="Where we need help right now"
            className="max-w-xl"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {volunteerOpportunities.map((opportunity, index) => (
              <FadeUp
                key={opportunity.slug}
                delay={index * 0.05}
                className="border-l-2 border-gold bg-white p-6 sm:p-8"
              >
                <h3 className="font-display text-xl text-ink">{opportunity.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {opportunity.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {opportunity.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {opportunity.commitment}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteer types */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="How You Can Volunteer"
            title="Three ways to get involved"
            className="max-w-xl"
          />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {volunteerTypes.map((type, index) => (
              <FadeUp key={type.title} delay={index * 0.08}>
                <span className="font-display text-3xl text-gold">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl text-ink">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{type.description}</p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-forest py-24 text-white lg:py-32">
        <Container>
          <SectionHeading eyebrow="From Our Volunteers" title="What it's like" light className="max-w-xl" />
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {volunteerTestimonials.map((testimonial, index) => (
              <FadeUp key={testimonial.name} delay={index * 0.08}>
                <Quote className="size-6 text-gold" aria-hidden="true" />
                <p className="mt-4 text-lg leading-snug">{testimonial.quote}</p>
                <p className="mt-4 text-sm text-white/60">
                  {testimonial.name} — {testimonial.role}
                </p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section className="bg-cream py-24 lg:py-32">
        <Container className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Apply"
            title="Start your application"
            description="Tell us a little about yourself. This demo form doesn't submit anywhere real."
          />
          <div className="mt-10">
            <VolunteerForm />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 lg:py-32">
        <Container className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently asked" />
          <div className="mt-10">
            <FaqAccordion items={volunteerFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
