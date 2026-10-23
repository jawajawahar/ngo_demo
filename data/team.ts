import { images } from "./images";
import type { TeamMember, TimelineEntry } from "@/types";

export const leadership: TeamMember[] = [
  {
    name: "Dara Whitfield",
    role: "Executive Director",
    bio: "Dara has spent over fifteen years working in community-led development across three continents before co-founding Voice of Need in 2015.",
    image: images.team3,
    imageAlt: "Portrait of Dara Whitfield",
  },
  {
    name: "Samuel Okonkwo",
    role: "Director of Programs",
    bio: "Samuel leads program design and oversees our field teams across all five regions, with a background in public health infrastructure.",
    image: images.team5,
    imageAlt: "Portrait of Samuel Okonkwo",
  },
  {
    name: "Lena Ruiz",
    role: "Director of Partnerships",
    bio: "Lena builds and maintains the community, donor, and institutional partnerships that make our long-term programs possible.",
    image: images.team1,
    imageAlt: "Portrait of Lena Ruiz",
  },
  {
    name: "Michael Osei",
    role: "Director of Finance & Operations",
    bio: "Michael ensures every donated dollar is tracked, reported, and spent in line with our commitment to transparency.",
    image: images.team4,
    imageAlt: "Portrait of Michael Osei",
  },
];

export const governanceBoard = [
  "Priya Nathan, Board Chair",
  "Elena Kowalski, Treasurer",
  "James Whitfield, Secretary",
  "Adaeze Nwosu, Board Member",
  "Tomás Herrera, Board Member",
];

export const timeline: TimelineEntry[] = [
  {
    year: "2015",
    title: "Grassroots Beginnings in Sri Lanka",
    description:
      "Voice of Need began its journey delivering urgent food relief, safe water, and school rebuilding alongside rural communities.",
  },
  {
    year: "2017",
    title: "Safe Drinking Water Initiative",
    description:
      "Expanded clean water access with community filtration units and wells in vulnerable dry-zone districts.",
  },
  {
    year: "2019",
    title: "Healthcare & Mobile Clinics",
    description:
      "Introduced mobile clinics to reach central tea estate communities and remote villages lacking medical care.",
  },
  {
    year: "2021",
    title: "Emergency Relief Capacity",
    description:
      "Established rapid-response food package distribution and essential aid during economic crises and seasonal monsoon floods.",
  },
  {
    year: "2023",
    title: "Education & Student Nutrition",
    description:
      "Launched student nutrition programs, classroom supplies, and sustainable livelihood support for families.",
  },
  {
    year: "2025",
    title: "Island-Wide Dedicated Mission",
    description:
      "Serving thousands of vulnerable children and families across northern, eastern, central, and coastal Sri Lanka.",
  },
];

export const orgValues = [
  {
    title: "Community first",
    description:
      "Communities direct the work. We provide resources and expertise — never top-down solutions.",
  },
  {
    title: "Radical transparency",
    description:
      "We publish where funding goes, including the projects that fell short of their goals.",
  },
  {
    title: "Built to last",
    description:
      "Every program is designed with an exit plan — local ownership from day one, not permanent dependency.",
  },
];
