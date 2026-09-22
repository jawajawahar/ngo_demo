import { images } from "./images";
import type { Story } from "@/types";

export const stories: Story[] = [
  {
    slug: "amara-finds-her-classroom",
    title: "Amara Finds Her Classroom",
    excerpt:
      "After walking two hours each way to the nearest school, Amara nearly stopped going. A renovated classroom closer to home changed her path.",
    category: "education",
    location: "Kolda Region",
    date: "2026-02-14",
    readTime: "5 min read",
    quote:
      "I used to fall asleep in class because of the walk. Now I actually get to learn.",
    author: "Amara D.",
    authorRole: "Grade 5 student",
    image: images.kidsPeaceSigns,
    imageAlt: "A group of children smiling together outdoors",
    content: [
      "Amara used to leave for school before sunrise. The walk took nearly two hours each way, along a road that flooded every rainy season — and by the time she reached her desk, she was often too tired to concentrate.",
      "She isn't alone. Across the Kolda region, long distances and under-resourced classrooms have pushed thousands of children — especially girls — out of school before they finish primary education.",
      "In 2025, our education program partnered with Amara's community to renovate a half-built classroom block just fifteen minutes from her home, and to train two local teachers in literacy-focused instruction.",
      "Amara transferred that September. Her teacher says her reading level has jumped two grades in a single year — and she now walks her younger brother to school every morning.",
    ],
    results: [
      { value: "2 grades", label: "Reading level improvement in one year" },
      { value: "15 min", label: "New walk to school, down from two hours" },
    ],
    featured: true,
  },
  {
    slug: "the-well-that-changed-marul",
    title: "The Well That Changed Marul",
    excerpt:
      "For years, women in Marul spent up to five hours a day collecting water. A community-led well project gave that time back.",
    category: "community",
    location: "Marul Village",
    date: "2025-11-02",
    readTime: "6 min read",
    quote: "Now that time belongs to us. We spend it on our farms, our businesses, our children.",
    author: "Fatoumata S.",
    authorRole: "Marul Community Council",
    image: images.farmland,
    imageAlt: "Farmland surrounding the village of Marul",
    content: [
      "Before 2025, the nearest reliable water source to Marul was a three-kilometer walk down a steep ravine — a trip most women in the village made two or three times a day.",
      "The community council had asked visiting officials for a well for over a decade. When our community development team began working in the region, well access topped the list in every planning meeting.",
      "Rather than build the well ourselves, we funded the materials and technical training, while a locally elected committee — six women and three men — managed construction and now oversees maintenance.",
      "The well was completed in under four months. Council members estimate it has returned more than four hours a day to the households it serves — time now going toward small businesses, farming, and school.",
    ],
    results: [
      { value: "4+ hrs/day", label: "Time returned to households, per council estimate" },
      { value: "9", label: "Community members trained to maintain the well" },
    ],
    featured: false,
  },
  {
    slug: "rebuilding-after-the-flood",
    title: "Rebuilding After the Flood",
    excerpt:
      "When the river broke its banks, 40 families in Cerro Alto lost their homes overnight. Here's how the first 72 hours unfolded.",
    category: "emergency-relief",
    location: "Cerro Alto",
    date: "2025-09-18",
    readTime: "7 min read",
    quote: "The relief team arrived before we'd even finished counting what we'd lost.",
    author: "Julio M.",
    authorRole: "Cerro Alto resident",
    image: images.heroVillageChildren,
    imageAlt: "Children in a village community rebuilding after a disaster",
    content: [
      "The river rose nearly three meters overnight. By morning, 40 families in Cerro Alto had lost their homes, and the only access road into the village was underwater.",
      "Our emergency response team, pre-positioned in the regional capital, deployed within hours of the first reports — reaching the village by boat with emergency shelter kits, water purification tablets, and food packages.",
      "Over the following weeks, the team shifted from emergency response to recovery: working with families to rebuild on higher ground, and supporting the reopening of the village's single primary school.",
      "Eight months later, every displaced family in Cerro Alto has a rebuilt home, and the community has formed its own flood-response committee to prepare for the next rainy season.",
    ],
    results: [
      { value: "40", label: "Families supported through recovery" },
      { value: "< 24 hrs", label: "Time to first relief delivery" },
    ],
    featured: false,
  },
  {
    slug: "a-clinic-on-wheels",
    title: "A Clinic on Wheels",
    excerpt:
      "For families in the highlands, the nearest hospital is a full day's travel. A mobile clinic is closing that gap one village at a time.",
    category: "healthcare",
    location: "Highland Districts",
    date: "2025-07-30",
    readTime: "4 min read",
    image: images.doctorPhone,
    imageAlt: "A health worker reviewing patient information",
    content: [
      "Twice a month, a small team and a converted van make the winding drive up into the highland districts — bringing basic check-ups, vaccinations, and prenatal care to villages that otherwise go without.",
      "For expecting mothers like Consuelo, who had lost a previous pregnancy without access to care, the mobile clinic has meant regular prenatal check-ups for the first time.",
      "Community health workers, trained by our team, stay behind between visits — following up on treatment plans and flagging cases that need urgent attention.",
    ],
    featured: false,
  },
  {
    slug: "seedlings-for-the-next-season",
    title: "Seedlings for the Next Season",
    excerpt:
      "A reforestation project on degraded hillside land is giving farmers a reason to believe in next year's harvest.",
    category: "environment",
    location: "Rift Highlands",
    date: "2025-05-12",
    readTime: "5 min read",
    image: images.bambooForest,
    imageAlt: "Dense green forest canopy",
    content: [
      "Three years of erratic rainfall had left hillside farms around the Rift Highlands increasingly bare — topsoil washing away with every storm, and yields shrinking season after season.",
      "Working with a cooperative of 60 farming families, our environment team began a native reforestation and terracing project aimed at stabilizing the hillsides while restoring long-term soil health.",
      "The first planting season put more than 40,000 native seedlings in the ground. Early results are promising: cooperative members report visibly less runoff during this year's rains.",
    ],
    featured: false,
  },
  {
    slug: "from-volunteer-to-neighbor",
    title: "From Volunteer to Neighbor",
    excerpt:
      "What started as a two-week volunteer placement turned into a five-year relationship with one community.",
    category: "community",
    location: "Northern Province",
    date: "2025-03-21",
    readTime: "4 min read",
    image: images.volunteerGroupStairs,
    imageAlt: "A group of volunteers together outdoors",
    content: [
      "When Priya signed up for a two-week volunteer placement, she expected to help build a footbridge and go home. Instead, she found herself returning every year since.",
      "\"The first year, I was there to help with a project,\" she says. \"By the third year, I was going back because people I care about live there.\"",
      "Priya now helps coordinate our volunteer orientation program, preparing new volunteers for the kind of long-term relationship that, for her, changed everything.",
    ],
    featured: false,
  },
];

export function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getFeaturedStory() {
  return stories.find((story) => story.featured) ?? stories[0];
}

export function getRelatedStories(slug: string, limit = 3) {
  return stories.filter((story) => story.slug !== slug).slice(0, limit);
}
