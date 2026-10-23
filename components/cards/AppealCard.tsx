import Image from "next/image";
import Link from "next/link";
import type { Appeal } from "@/data/appeals";

export default function AppealCard({ appeal }: { appeal: Appeal }) {
  return (
    <article className="group/appeal flex h-full flex-col overflow-hidden rounded-md border border-ink/10 bg-white">
      <Link href={appeal.href} className="relative block aspect-[4/3] overflow-hidden" tabIndex={-1}>
        <Image
          src={appeal.image}
          alt={appeal.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover/appeal:scale-105 motion-reduce:transition-none"
        />
      </Link>

      <div className="flex flex-1 flex-col border-t-4 border-forest p-6">
        <h3 className="text-lg uppercase text-forest">
          <Link href={appeal.href} className="hover:underline">
            {appeal.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{appeal.description}</p>

        <Link
          href={appeal.donateHref}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-gold py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-gold-dark"
        >
          Donate now
        </Link>
      </div>
    </article>
  );
}
