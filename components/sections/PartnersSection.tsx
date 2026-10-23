import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <Container>
        <FadeUp className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            In partnership with
          </p>
        </FadeUp>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {partners.map((partner, index) => (
            <FadeUp
              key={partner.name}
              delay={index * 0.05}
              className="font-display text-xl text-ink/40 grayscale transition-colors duration-300 hover:text-ink/70 sm:text-2xl"
            >
              {partner.name}
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
