import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";
import { changeProcess } from "@/data/impact";

export default function HowWeCreateChange() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="From urgent need to lasting change"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {changeProcess.map((step, index) => (
            <FadeUp key={step.step} as="li" delay={index * 0.08} className="border-t-4 border-forest pt-6">
              <span className="font-display text-4xl text-gold">0{index + 1}</span>
              <h3 className="mt-3 text-lg uppercase text-forest">{step.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </FadeUp>
          ))}
        </ol>
      </Container>
    </section>
  );
}
