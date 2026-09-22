import type { VolunteerOpportunity, FaqItem } from "@/types";

export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    slug: "classroom-literacy-mentor",
    title: "Classroom Literacy Mentor",
    location: "Remote or on-site — Kolda Region",
    commitment: "3+ hours / week, 3-month minimum",
    category: "education",
    description:
      "Support after-school reading circles with lesson planning, materials, and remote mentoring for local teachers.",
  },
  {
    slug: "community-water-technician",
    title: "Community Water Technician",
    location: "On-site — Marul & Highlands",
    commitment: "2–4 week placements",
    category: "community",
    description:
      "Support well construction and train local maintenance committees on-site alongside our field engineers.",
  },
  {
    slug: "reforestation-crew",
    title: "Reforestation Crew Volunteer",
    location: "On-site — Rift Highlands",
    commitment: "1–2 week placements, seasonal",
    category: "environment",
    description:
      "Join seasonal planting crews working alongside farming cooperatives to restore degraded hillside land.",
  },
  {
    slug: "mobile-clinic-support",
    title: "Mobile Clinic Support (Medical)",
    location: "On-site — Highland Districts",
    commitment: "2+ week placements, licensed medical background",
    category: "healthcare",
    description:
      "Licensed nurses and physicians support mobile clinic visits and community health worker training.",
  },
  {
    slug: "emergency-response-volunteer",
    title: "Emergency Response Volunteer",
    location: "On-call — deployable teams",
    commitment: "On-call, background check required",
    category: "emergency-relief",
    description:
      "Join our trained rapid-response roster, ready to deploy for relief distribution after a disaster.",
  },
  {
    slug: "remote-grant-writer",
    title: "Remote Grant Writer",
    location: "Remote",
    commitment: "4+ hours / week",
    category: "community",
    description:
      "Support our partnerships team by researching and drafting funding proposals for program expansion.",
  },
];

export const volunteerTypes = [
  {
    title: "On-site placements",
    description:
      "Multi-week placements working directly alongside field teams and community partners.",
  },
  {
    title: "Remote support",
    description:
      "Ongoing remote roles in mentoring, writing, design, and research from anywhere in the world.",
  },
  {
    title: "Local & regional",
    description:
      "Short-term, in-person opportunities for volunteers based near one of our program regions.",
  },
];

/** Illustrative placeholder quotes — replace with real volunteer testimonials. */
export const volunteerTestimonials = [
  {
    quote:
      "I went in expecting to teach. I left having learned more about resourcefulness than any classroom back home ever taught me.",
    name: "Priya R.",
    role: "Classroom Literacy Mentor, 2024",
  },
  {
    quote:
      "The onboarding was thorough and honest about what to expect — no surprises, just clear expectations and real support in the field.",
    name: "Marcus T.",
    role: "Reforestation Crew Volunteer, 2025",
  },
  {
    quote:
      "Remote doesn't mean disconnected. I get monthly updates from the team I support, and I can see exactly where the proposals I write end up.",
    name: "Hana K.",
    role: "Remote Grant Writer, since 2023",
  },
];

export const volunteerFaqs: FaqItem[] = [
  {
    question: "Do I need previous experience to volunteer?",
    answer:
      "Most remote and local roles don't require prior experience — just reliability and a willingness to learn. On-site technical placements (like medical or engineering roles) do require relevant qualifications.",
  },
  {
    question: "Are on-site placements paid or unpaid?",
    answer:
      "On-site placements are unpaid but include accommodation and meals during your placement. Travel costs are the volunteer's responsibility, and we can help you find fundraising resources.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "Most applicants hear back within two weeks. On-site placements involve an additional interview and background check, which can take three to four weeks total.",
  },
  {
    question: "Can I volunteer as part of a group or company team?",
    answer:
      "Yes — we regularly host corporate and group volunteer placements. Contact our partnerships team directly to discuss options for your group.",
  },
];
