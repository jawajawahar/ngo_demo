import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageReveal from "@/components/animations/ImageReveal";
import type { Story } from "@/types";
import { cn } from "@/lib/utils";

const categoryLabels: Record<Story["category"], string> = {
  education: "Education",
  community: "Community Development",
  environment: "Environment",
  healthcare: "Healthcare",
  "emergency-relief": "Emergency Relief",
};

export default function StoryCard({
  story,
  size = "sm",
}: {
  story: Story;
  size?: "sm" | "lg";
}) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group/story block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <ImageReveal
        className={cn(
          "relative w-full rounded-md",
          size === "lg" ? "aspect-[16/10]" : "aspect-[4/3]"
        )}
      >
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          sizes={size === "lg" ? "(min-width: 1024px) 60vw, 90vw" : "(min-width: 1024px) 30vw, 90vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover/story:scale-105 motion-reduce:transition-none motion-reduce:group-hover/story:scale-100"
        />
      </ImageReveal>
      <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
        <span>{categoryLabels[story.category]}</span>
        <span className="text-muted">·</span>
        <span className="text-muted">{story.readTime}</span>
      </div>
      <h3
        className={cn(
          "mt-3 font-display leading-snug text-ink",
          size === "lg" ? "text-2xl sm:text-3xl" : "text-xl"
        )}
      >
        {story.title}
      </h3>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
        {story.excerpt.length > 100 ? `${story.excerpt.slice(0, 100)}…` : story.excerpt}
        <ArrowUpRight
          className="size-3.5 shrink-0 transition-transform duration-300 group-hover/story:translate-x-0.5 group-hover/story:-translate-y-0.5 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </p>
    </Link>
  );
}
