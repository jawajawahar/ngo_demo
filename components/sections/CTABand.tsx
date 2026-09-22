import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";

interface CTABandProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABand({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABandProps) {
  return (
    <section className="bg-forest py-20 text-white lg:py-28">
      <Container className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        {eyebrow && (
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </span>
          </FadeUp>
        )}
        <TextReveal as="h2" className="text-balance font-display text-[2rem] sm:text-[2.75rem]">
          {title}
        </TextReveal>
        {description && (
          <FadeUp delay={0.1}>
            <p className="max-w-lg text-white/80">{description}</p>
          </FadeUp>
        )}
        <FadeUp delay={0.16} className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline-light" size="lg" showArrow={false}>
              {secondaryLabel}
            </Button>
          )}
        </FadeUp>
      </Container>
    </section>
  );
}
