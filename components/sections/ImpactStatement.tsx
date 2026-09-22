import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/layout/Container";

export default function ImpactStatement() {
  return (
    <section className="bg-cream py-24 lg:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TextReveal
            as="p"
            className="text-balance font-display text-[1.75rem] leading-[1.3] text-ink sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            We don&apos;t believe change can be delivered from the outside. It has to be
            built alongside the people who live it — one classroom, one well, one season
            at a time.
          </TextReveal>
          <FadeUp delay={0.15} className="mt-8">
            <p className="text-base text-muted">
              This is our approach to community-led development.
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
