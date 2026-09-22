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
    title: "Founded in Kolda Region",
    description:
      "Voice of Need began as a single classroom renovation project in partnership with one village council.",
  },
  {
    year: "2017",
    title: "First community water program",
    description:
      "Expanded into community development with our first well and water access initiative.",
  },
  {
    year: "2019",
    title: "Healthcare program launched",
    description:
      "Introduced mobile clinics to reach highland communities without access to regular medical care.",
  },
  {
    year: "2021",
    title: "Emergency relief capacity built",
    description:
      "Established a rapid-response team and pre-positioned supplies after flooding in Cerro Alto.",
  },
  {
    year: "2023",
    title: "Environment program launched",
    description:
      "Began large-scale reforestation and sustainable agriculture training across degraded farmland.",
  },
  {
    year: "2025",
    title: "412,000+ lives reached",
    description:
      "Crossed a major milestone across all five programs, working in 64 partner communities (demo data).",
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
