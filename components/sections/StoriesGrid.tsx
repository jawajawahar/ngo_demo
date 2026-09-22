"use client";

import { useMemo, useState } from "react";
import StoryCard from "@/components/cards/StoryCard";
import type { ProgramCategory, Story } from "@/types";
import { cn } from "@/lib/utils";

const categories: { label: string; value: ProgramCategory | "all" }[] = [
  { label: "All Stories", value: "all" },
  { label: "Education", value: "education" },
  { label: "Community Development", value: "community" },
  { label: "Environment", value: "environment" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Emergency Relief", value: "emergency-relief" },
];

export default function StoriesGrid({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState<ProgramCategory | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? stories : stories.filter((story) => story.category === active)),
    [active, stories]
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter stories by category"
      >
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            role="tab"
            aria-selected={active === category.value}
            onClick={() => setActive(category.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === category.value
                ? "border-forest bg-forest text-cream"
                : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-14 text-muted">No stories in this category yet.</p>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}
