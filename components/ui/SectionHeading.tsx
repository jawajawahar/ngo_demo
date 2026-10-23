import type { ElementType } from "react";
import TextReveal from "@/components/animations/TextReveal";
import FadeUp from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleAs?: ElementType;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleAs = "h2",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <FadeUp y={12} duration={0.7}>
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]",
              light ? "text-white/80" : "text-gold"
            )}
          >
            {eyebrow}
          </span>
        </FadeUp>
      )}
      <TextReveal
        as={titleAs}
        className={cn(
          "font-display text-balance text-[2.1rem] uppercase leading-[1.1] tracking-tight sm:text-[2.6rem] lg:text-[3rem]",
          light ? "text-white" : "text-forest"
        )}
      >
        {title}
      </TextReveal>
      {description && (
        <FadeUp delay={0.1}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed sm:text-lg",
              light ? "text-white/80" : "text-muted"
            )}
          >
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
