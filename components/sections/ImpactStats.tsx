import FadeUp from "@/components/animations/FadeUp";
import Counter from "@/components/animations/Counter";
import Container from "@/components/layout/Container";
import DemoBadge from "@/components/ui/DemoBadge";
import { impactMetrics } from "@/data/impact";

export default function ImpactStats() {
  return (
    <section className="border-y border-ink/8 bg-white py-20 lg:py-28">
      <Container>
        <FadeUp className="mb-12 flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Our impact, at a glance
          </h2>
          <DemoBadge />
        </FadeUp>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {impactMetrics.map((metric, index) => (
            <FadeUp key={metric.label} delay={index * 0.08} className="border-l-2 border-gold pl-6">
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                className="font-display text-4xl text-ink sm:text-5xl"
              />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-forest">
                {metric.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{metric.description}</p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
