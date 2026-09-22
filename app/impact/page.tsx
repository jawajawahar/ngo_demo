import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ImpactStats from "@/components/sections/ImpactStats";
import RegionImpact from "@/components/sections/RegionImpact";
import ReportsSection from "@/components/sections/ReportsSection";
import ProgramCard from "@/components/cards/ProgramCard";
import CTABand from "@/components/sections/CTABand";
import { images } from "@/data/images";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See Voice of Need Foundation's impact statistics, regional reach, active projects, and annual reports. All figures are demo data.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="What community-led work looks like at scale."
        description="Every number below represents a program run in partnership with the community it serves — never done to them."
        image={images.wildflowerMeadow}
        imageAlt="A wildflower meadow at dusk"
      />

      <ImpactStats />
      <RegionImpact />

      <section className="bg-cream py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Active Projects" title="What's underway right now" className="max-w-xl" />
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={program.slug} program={program} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <ReportsSection />

      <CTABand
        eyebrow="Be Part of the Numbers"
        title="Help us reach further next year."
        primaryLabel="Donate now"
        primaryHref="/donate"
        secondaryLabel="See our work"
        secondaryHref="/our-work"
      />
    </>
  );
}
