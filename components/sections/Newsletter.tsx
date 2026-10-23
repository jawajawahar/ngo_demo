import Container from "@/components/layout/Container";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Newsletter() {
  return (
    <section className="bg-cream pb-20 lg:pb-28">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-md border border-forest/20 bg-white px-6 py-14 text-center sm:px-12">
        <TextReveal as="h2" className="font-display text-[2rem] uppercase leading-tight tracking-tight text-forest sm:text-[2.5rem]">
          Stay close to the people you help
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
        </div>
      </Container>
    </section>
  );
}
