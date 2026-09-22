export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export type ProgramCategory =
  | "education"
  | "community"
  | "environment"
  | "healthcare"
  | "emergency-relief";

export interface ProgramActivity {
  title: string;
  description: string;
}

export interface ProgramStat {
  value: string;
  label: string;
}

export interface Program {
  slug: string;
  category: ProgramCategory;
  name: string;
  shortDescription: string;
  problem: string;
  approach: string;
  activities: ProgramActivity[];
  stats: ProgramStat[];
  storySlug?: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
}

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  category: ProgramCategory;
  location: string;
  date: string;
  readTime: string;
  quote?: string;
  author?: string;
  authorRole?: string;
  image: string;
  imageAlt: string;
  content: string[];
  results?: ProgramStat[];
  featured?: boolean;
}

export interface ImpactMetric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface RegionImpact {
  region: string;
  peopleReached: number;
  projects: number;
}

export interface ImpactReport {
  year: string;
  title: string;
  description: string;
  fileLabel: string;
}

export interface Campaign {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  goal: number;
  raised: number;
  currency: string;
  donorCount: number;
  daysLeft: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface VolunteerOpportunity {
  slug: string;
  title: string;
  location: string;
  commitment: string;
  category: ProgramCategory;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PartnerLogo {
  name: string;
}
