import type { ImpactMetric, RegionImpact, ImpactReport } from "@/types";

export const impactMetrics: ImpactMetric[] = [
  {
    value: 412000,
    suffix: "+",
    label: "Lives reached",
    description: "People directly supported across all programs since 2015 (demo data).",
  },
  {
    value: 218000,
    suffix: "+",
    label: "Trees planted",
    description: "Native trees planted through community-led reforestation (demo data).",
  },
  {
    value: 64,
    label: "Communities partnered",
    description: "Long-term community partnerships across five regions (demo data).",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Volunteers mobilised",
    description: "Local volunteers who give their time on the ground (demo data).",
  },
];

export const regionImpact: RegionImpact[] = [
  { region: "Kolda Region", peopleReached: 96000, projects: 18 },
  { region: "Marul & Highlands", peopleReached: 74000, projects: 14 },
  { region: "Cerro Alto Basin", peopleReached: 51000, projects: 9 },
  { region: "Rift Highlands", peopleReached: 88000, projects: 16 },
  { region: "Northern Province", peopleReached: 103000, projects: 21 },
];

export const impactReports: ImpactReport[] = [
  {
    year: "2025",
    title: "Annual Impact Report",
    description:
      "A full breakdown of program outcomes, financials, and community partnerships for 2025 (demo data).",
    fileLabel: "2025-annual-report.pdf",
  },
  {
    year: "2024",
    title: "Annual Impact Report",
    description:
      "Program outcomes and financial transparency summary for 2024 (demo data).",
    fileLabel: "2024-annual-report.pdf",
  },
  {
    year: "2024",
    title: "Financial Transparency Summary",
    description:
      "A condensed look at how every donated dollar was allocated in 2024 (demo data).",
    fileLabel: "2024-financials-summary.pdf",
  },
];

export const changeProcess = [
  {
    step: "Listen",
    title: "We start by listening",
    description:
      "Every project begins with community members, not with us — through open planning sessions where local leaders define the priorities.",
  },
  {
    step: "Partner",
    title: "We partner, not prescribe",
    description:
      "We bring funding, technical expertise, and training, while local committees direct the work from day one.",
  },
  {
    step: "Act",
    title: "We act with urgency",
    description:
      "From classroom renovations to emergency response, we move quickly once a community is ready to build.",
  },
  {
    step: "Measure",
    title: "We measure what matters",
    description:
      "We track outcomes long after a project ends, and share what we learn — including what didn't work.",
  },
];
