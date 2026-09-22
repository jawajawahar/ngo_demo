import { images } from "./images";
import type { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "education",
    category: "education",
    name: "Education",
    shortDescription:
      "Building classrooms, training teachers, and keeping children in school through completion.",
    problem:
      "Across the regions we work in, thousands of children start primary school but never finish — pulled away by distance, cost, or classrooms without enough trained teachers or basic materials.",
    approach:
      "We partner with local education boards to renovate classrooms, train teachers in child-centered instruction, and provide scholarships and school supplies to the students most likely to drop out.",
    activities: [
      {
        title: "Classroom renovation",
        description:
          "Rebuilding unsafe or overcrowded classrooms in partnership with local communities and contractors.",
      },
      {
        title: "Teacher training",
        description:
          "Year-round coaching for local teachers in literacy instruction and inclusive classroom practices.",
      },
      {
        title: "Scholarships & supplies",
        description:
          "Direct support for students at risk of dropping out, covering fees, uniforms, and materials.",
      },
      {
        title: "Reading programs",
        description:
          "After-school literacy circles run by trained community volunteers.",
      },
    ],
    stats: [
      { value: "12,400", label: "Students supported (demo data)" },
      { value: "186", label: "Classrooms renovated (demo data)" },
      { value: "420", label: "Teachers trained (demo data)" },
    ],
    storySlug: "amara-finds-her-classroom",
    image: images.classroomTeaching,
    imageAlt: "A teacher leading a lesson in front of a classroom of students",
    gallery: [
      { src: images.classroomStudents, alt: "Students taking notes at their desks" },
      { src: images.communityChildrenGroup, alt: "Children sitting together listening to a lesson" },
      { src: images.kidsPlaying, alt: "Two children doing schoolwork outdoors" },
    ],
  },
  {
    slug: "community-development",
    category: "community",
    name: "Community Development",
    shortDescription:
      "Local infrastructure, clean water access, and economic opportunity led by the communities themselves.",
    problem:
      "Many rural communities lack reliable access to clean water, stable income sources, and the basic infrastructure needed to grow sustainably — and are rarely asked what they actually need first.",
    approach:
      "Every project starts with a community-led planning process. We provide funding, technical expertise, and training, while local leadership committees direct the work and manage it long after we're gone.",
    activities: [
      {
        title: "Water access",
        description:
          "Wells, filtration systems, and maintenance training led by trained local technicians.",
      },
      {
        title: "Microenterprise support",
        description:
          "Small grants and business training for local entrepreneurs, with a focus on women-led businesses.",
      },
      {
        title: "Community infrastructure",
        description:
          "Roads, footbridges, and shared facilities identified and prioritized by community councils.",
      },
      {
        title: "Savings groups",
        description:
          "Peer-run cooperative savings groups that build financial resilience within the community.",
      },
    ],
    stats: [
      { value: "64", label: "Communities partnered (demo data)" },
      { value: "31,000", label: "People with improved water access (demo data)" },
      { value: "1,150", label: "Small businesses supported (demo data)" },
    ],
    storySlug: "the-well-that-changed-marul",
    image: images.farmland,
    imageAlt: "Farmland worked by a local community",
    gallery: [
      { src: images.elderHands, alt: "Two people holding hands, one offering support" },
      { src: images.handsReaching, alt: "Two hands reaching toward each other" },
      { src: images.laptopCollaboration, alt: "Community members reviewing plans together" },
    ],
  },
  {
    slug: "environment",
    category: "environment",
    name: "Environment",
    shortDescription:
      "Reforestation, sustainable agriculture, and climate resilience training for vulnerable communities.",
    problem:
      "Deforestation, soil depletion, and unpredictable weather are eroding the land that rural families depend on — making it harder to grow food and earn a stable living each season.",
    approach:
      "We combine large-scale native tree planting with hands-on training in sustainable farming techniques, helping communities restore degraded land while building resilience to a changing climate.",
    activities: [
      {
        title: "Native reforestation",
        description:
          "Community-led planting of native tree species on degraded and at-risk land.",
      },
      {
        title: "Sustainable agriculture training",
        description:
          "Workshops on soil health, crop rotation, and water-efficient farming methods.",
      },
      {
        title: "Watershed protection",
        description:
          "Restoring vegetation along waterways to reduce erosion and protect water quality.",
      },
      {
        title: "Climate resilience planning",
        description:
          "Helping communities plan for droughts, floods, and shifting growing seasons.",
      },
    ],
    stats: [
      { value: "218,000", label: "Trees planted (demo data)" },
      { value: "4,900", label: "Acres under restoration (demo data)" },
      { value: "2,300", label: "Farmers trained (demo data)" },
    ],
    image: images.bambooForest,
    imageAlt: "Looking up through a dense bamboo forest canopy",
    gallery: [
      { src: images.mountainMist, alt: "Misty green mountains at sunrise" },
      { src: images.foggyForest, alt: "Fog settling over a pine forest" },
      { src: images.wildflowerMeadow, alt: "A wildflower meadow at dusk" },
    ],
  },
  {
    slug: "healthcare",
    category: "healthcare",
    name: "Healthcare",
    shortDescription:
      "Mobile clinics, maternal health support, and health worker training in underserved areas.",
    problem:
      "The nearest clinic can be hours away for many rural families, leaving preventable illnesses untreated and putting mothers and newborns at serious risk during pregnancy and childbirth.",
    approach:
      "We run mobile health clinics that bring basic care directly to remote villages, train community health workers to provide ongoing support, and support safe maternal care before and after birth.",
    activities: [
      {
        title: "Mobile clinics",
        description:
          "Regular clinic visits bringing check-ups, vaccinations, and basic treatment to remote villages.",
      },
      {
        title: "Maternal health support",
        description:
          "Prenatal check-ups, safe birth kits, and postnatal follow-up care for new mothers.",
      },
      {
        title: "Community health workers",
        description:
          "Training local residents to deliver basic care and health education year-round.",
      },
      {
        title: "Health education",
        description:
          "Workshops on nutrition, sanitation, and preventive care for families and schools.",
      },
    ],
    stats: [
      { value: "89,000", label: "Patients treated (demo data)" },
      { value: "310", label: "Community health workers trained (demo data)" },
      { value: "6,200", label: "Safe births supported (demo data)" },
    ],
    image: images.doctorPhone,
    imageAlt: "A health worker in a clinic coat reviewing information on a phone",
    gallery: [
      { src: images.elderHands, alt: "A caregiver holding the hands of an elderly patient" },
      { src: images.communityChildrenGroup, alt: "Children waiting together at a community health session" },
      { src: images.handsReaching, alt: "Two hands reaching toward each other in support" },
    ],
  },
  {
    slug: "emergency-relief",
    category: "emergency-relief",
    name: "Emergency Relief",
    shortDescription:
      "Rapid-response food, shelter, and recovery support for communities facing crisis.",
    problem:
      "When flooding, drought, or displacement strikes, families often lose everything within days — and the first weeks of response determine how quickly a community can recover.",
    approach:
      "We maintain pre-positioned emergency supplies and trained rapid-response teams so we can deliver food, clean water, and temporary shelter within 72 hours, then stay for the longer recovery.",
    activities: [
      {
        title: "Rapid-response deployment",
        description:
          "Pre-positioned supplies and trained teams ready to deploy within 72 hours of a crisis.",
      },
      {
        title: "Emergency shelter & food",
        description:
          "Temporary shelter materials, clean water, and food packages for displaced families.",
      },
      {
        title: "Recovery & rebuilding",
        description:
          "Longer-term support to rebuild homes, restore livelihoods, and reopen schools.",
      },
      {
        title: "Preparedness training",
        description:
          "Working with at-risk communities before disaster strikes to build local response plans.",
      },
    ],
    stats: [
      { value: "47", label: "Emergency responses (demo data)" },
      { value: "156,000", label: "People reached with relief supplies (demo data)" },
      { value: "72h", label: "Average response time (demo data)" },
    ],
    image: images.communityChildrenGroup,
    imageAlt: "A community gathered together during a relief distribution",
    gallery: [
      { src: images.heroVillageChildren, alt: "Children in a village community" },
      { src: images.volunteerGroupStairs, alt: "A volunteer response team together" },
      { src: images.handsReaching, alt: "Two hands reaching toward each other in support" },
    ],
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
