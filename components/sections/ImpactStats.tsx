import FadeUp from "@/components/animations/FadeUp";
import Counter from "@/components/animations/Counter";
import Container from "@/components/layout/Container";
import { impactMetrics } from "@/data/impact";

export default function ImpactStats() {
  return (
    <section className="bg-forest py-16 text-white lg:py-20">
      <Container>
        <FadeUp>
          <h2 className="text-center font-display text-2xl uppercase sm:text-3xl">
            Our impact so far
          </h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-white/20">
          {impactMetrics.map((metric, index) => (
            <FadeUp key={metric.label} delay={index * 0.08} className="px-4 text-center">
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                className="block font-display text-4xl sm:text-5xl"
              />
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-white/85">
                {metric.label}
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
