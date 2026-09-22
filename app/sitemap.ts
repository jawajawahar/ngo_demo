import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { stories } from "@/data/stories";

const baseUrl = "https://www.voiceofneed.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/our-work",
    "/impact",
    "/stories",
    "/get-involved",
    "/get-involved/volunteer",
    "/get-involved/fundraise",
    "/get-involved/partner",
    "/donate",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const programRoutes = programs.map((program) => ({
    url: `${baseUrl}/our-work/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const storyRoutes = stories.map((story) => ({
    url: `${baseUrl}/stories/${story.slug}`,
    lastModified: new Date(story.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...programRoutes, ...storyRoutes];
}
