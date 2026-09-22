import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageReveal from "@/components/animations/ImageReveal";
import type { Program } from "@/types";

export default function ProgramCard({
  program,
  priority = false,
}: {
  program: Program;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/our-work/${program.slug}`}
      className="group/card block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <ImageReveal className="relative aspect-[4/5] w-full rounded-lg">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 motion-reduce:transition-none motion-reduce:group-hover/card:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
      </ImageReveal>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-ink">{program.name}</h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            {program.shortDescription}
          </p>
        </div>
        <ArrowUpRight
          className="mt-1 size-5 shrink-0 text-forest transition-transform duration-300 ease-out group-hover/card:translate-x-1 group-hover/card:-translate-y-1 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
