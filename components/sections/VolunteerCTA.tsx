import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import { images } from "@/data/images";

export default function VolunteerCTA() {
  return (
    <section className="relative overflow-hidden bg-forest-dark py-28 text-white lg:py-40">
      <div className="absolute inset-0">
        <Image
          src={images.volunteerGroupStairs}
          alt="A group of volunteers together, smiling"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/85 to-forest-dark/60" />
      </div>

      <Container className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeUp>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Get Involved
          </span>
        </FadeUp>
        <TextReveal
          as="h2"
          className="mt-5 text-balance font-display text-[2.25rem] leading-[1.1] sm:text-[3rem] lg:text-[3.5rem]"
        >
          Your time changes what money alone can&apos;t.
        </TextReveal>
        <FadeUp delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            From on-site placements to remote mentoring, there&apos;s a role for the
            skills you already have.
          </p>
        </FadeUp>
        <FadeUp delay={0.2} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/get-involved/volunteer" size="lg">
            Become a volunteer
          </Button>
          <Button href="/get-involved" variant="outline-light" size="lg" showArrow={false}>
            See all ways to help
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
