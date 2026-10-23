import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import AppealCard from "@/components/cards/AppealCard";
import { appeals } from "@/data/appeals";

export default function AppealsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Appeals"
          title="How your donation creates change"
          description="Choose an appeal and your gift goes directly to that project."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appeals.map((appeal, index) => (
            <FadeUp key={appeal.slug} delay={(index % 3) * 0.08} className="h-full">
              <AppealCard appeal={appeal} />
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-12 flex justify-center">
          <Button href="/our-work" variant="secondary" showArrow={false}>
            View all appeals
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
