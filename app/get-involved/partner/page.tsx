import type { Metadata } from "next";
import { Building2, HandCoins, Landmark } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";
import PartnersSection from "@/components/sections/PartnersSection";
import CTABand from "@/components/sections/CTABand";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Corporate, institutional, and foundation partnership opportunities with Voice of Need Foundation.",
};

const partnershipTypes = [
  {
    icon: Building2,
    title: "Corporate Partnerships",
    description:
      "Employee giving programs, matching gifts, skilled volunteering, and cause-aligned sponsorships.",
  },
  {
    icon: Landmark,
    title: "Foundation & Institutional",
    description:
      "Multi-year program funding, capacity-building grants, and joint monitoring & evaluation.",
  },
  {
    icon: HandCoins,
    title: "In-Kind & Technical",
    description:
      "Equipment donations, pro bono technical expertise, and logistics or supply chain support.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved · Partner"
        title="Partnerships that scale community-led work."
        description="We work with companies, foundations, and institutions who want their support to go directly into long-term, locally-led programs."
        image={images.officeMeeting}
        imageAlt="A team meeting together around a table"
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Partnership Types"
            title="Ways organizations work with us"
            className="max-w-xl"
          />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <FadeUp key={type.title} delay={index * 0.08} className="border-l-2 border-gold pl-5">
                  <Icon className="size-6 text-forest" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl text-ink">{type.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{type.description}</p>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-24">
        <Container className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-balance text-lg leading-relaxed text-muted">
              Every partnership starts with a conversation about outcomes, not just
              funding — what would meaningful success look like for your organization
              and for the communities we&apos;d work in together.
            </p>
          </FadeUp>
        </Container>
      </section>

      <PartnersSection />

      <CTABand
        eyebrow="Let's Talk"
        title="Start a conversation with our partnerships team."
        primaryLabel="Contact our team"
        primaryHref="/contact"
      />
    </>
  );
}
