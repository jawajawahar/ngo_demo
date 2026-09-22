import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import ProgramCard from "@/components/cards/ProgramCard";
import FadeUp from "@/components/animations/FadeUp";
import { programs } from "@/data/programs";

export default function OurWorkSection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="Five programs, one approach"
            description="Every program is led by the community it serves — we bring resources, training, and long-term commitment."
            className="max-w-xl"
          />
          <FadeUp>
            <Button href="/our-work" variant="secondary" showArrow>
              View all programs
            </Button>
          </FadeUp>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.slug} program={program} priority={index === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
