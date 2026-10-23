import Image from "next/image";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24",
        image ? "min-h-[62vh] text-white" : "bg-cream text-ink"
      )}
    >
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      <Container className="relative z-10">
        <FadeUp>
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.2em]",
              image ? "text-white/85" : "text-gold"
            )}
          >
            {eyebrow}
          </span>
        </FadeUp>
        <TextReveal
          as="h1"
          className="mt-4 max-w-3xl text-balance font-display text-[2.5rem] uppercase leading-[1.08] tracking-tight sm:text-[3.5rem] lg:text-[4.25rem]"
        >
          {title}
        </TextReveal>
        {description && (
          <FadeUp delay={0.12}>
            <p
              className={cn(
                "mt-6 max-w-xl text-lg leading-relaxed",
                image ? "text-white/85" : "text-muted"
              )}
            >
              {description}
            </p>
          </FadeUp>
        )}
      </Container>
    </section>
  );
}
