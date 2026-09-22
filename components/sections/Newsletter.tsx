import Container from "@/components/layout/Container";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Newsletter() {
  return (
    <section className="bg-sage/10 py-20 lg:py-28">
      <Container className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <TextReveal as="h2" className="font-display text-[2rem] text-ink sm:text-[2.5rem]">
          Field notes, once a month
        </TextReveal>
        <FadeUp delay={0.08}>
          <p className="max-w-md text-base text-muted">
            No noise, no pressure — just real updates from the communities and programs
            you&apos;re helping support.
          </p>
        </FadeUp>
        <FadeUp delay={0.14} className="w-full max-w-md">
          <NewsletterForm />
        </FadeUp>
      </Container>
    </section>
  );
}
