import { images } from "./images";

export interface UpdateItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Disaster Relief" | "Education" | "Clean Water" | "Healthcare" | "Livelihood";
  date: string;
  location: string;
  district: string;
  readTime: string;
  shortSummary: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  fieldOfficer: {
    name: string;
    role: string;
    avatar: string;
  };
  impactStats: Array<{
    value: string;
    label: string;
  }>;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  keyTakeaways: string[];
  content: Array<{
    heading?: string;
    paragraphs: string[];
  }>;
  tags: string[];
}

export const updates: UpdateItem[] = [
  {
    id: "update-eravur-flood-relief-phase-2",
    slug: "eravur-flood-emergency-relief-distribution",
    title: "Phase 2 Emergency Rations & Water Filter Kits Dispatched to 1,250 Families in Eravur",
    subtitle: "Ground teams reach marooned agrarian communities following unprecedented monsoon flooding across Batticaloa district.",
    category: "Disaster Relief",
    date: "October 20, 2026",
    location: "Eravur, Batticaloa District",
    district: "Eastern Province",
    readTime: "4 min read",
    shortSummary:
      "Following heavy monsoon runoff, our rapid response units delivered emergency dry rations, milk powder packs, and gravity-fed water purifiers directly to cut-off households in Eravur.",
    featured: true,
    image: images.handsReaching,
    imageAlt: "Relief workers and village elders distributing emergency supplies",
    fieldOfficer: {
      name: "Pradeep Jeyakumar",
      role: "Emergency Response Coordinator, Eastern Division",
      avatar: images.team2,
    },
    impactStats: [
      { value: "1,250", label: "Families Supplied with Dry Rations" },
      { value: "35,000L", label: "Drinkable Water Distributed" },
      { value: "480", label: "Emergency Water Filter Buckets Given" },
      { value: "100%", label: "Direct Field Handover Verified" },
    ],
    quote: {
      text: "The flood waters inundated our kitchen overnight. If the emergency rations team hadn't arrived by motor boat, my children would have slept hungry for the third consecutive night.",
      author: "K. Selvarani",
      role: "Mother of four, Eravur East",
    },
    keyTakeaways: [
      "Immediate distribution of 2-week dry food rations (rice, dhal, sugar, infant milk, and hygiene soap).",
      "Deployment of 480 ceramic gravity filters to prevent waterborne dysentery and typhoid outbreaks.",
      "Partnership with local Fishermen's Cooperative boats to access waterlogged backwater hamlets.",
      "Phase 3 housing rehabilitation survey commenced with village development officers.",
    ],
    content: [
      {
        heading: "Responding to the Rising Waters in Batticaloa",
        paragraphs: [
          "Over four days of torrential northeastern monsoon downpours caused the Mundeni Aru river basin to breach its natural embankments, inundating low-lying farming settlements across Eravur Pattu. More than 4,200 villagers were temporarily displaced or cut off from municipal access roads.",
          "Our rapid humanitarian convoy mobilized from the Batticaloa regional warehouse within six hours of the disaster call. Working in tandem with Grama Niladhari village officers, our ground teams prioritized isolated mothers, elderly pensioners, and households with infants under two years old.",
        ],
      },
      {
        heading: "Clean Water: The First Line of Defense",
        paragraphs: [
          "With shallow village wells contaminated by sediment and livestock runoff, access to safe drinking water was the most critical immediate threat. In addition to daily mobile water bowsers delivering 35,000 liters, our engineers distributed 480 ceramic gravity-filtration units that require zero electricity to purify up to 20 liters per day.",
          "Local youth volunteers were trained on proper filter maintenance and safe container storage, ensuring sustained water security even as flood waters gradually recede.",
        ],
      },
      {
        heading: "What Comes Next: Rehabilitation & Seeds",
        paragraphs: [
          "As water levels stabilize, our field staff have initiated damage assessment for smallholder vegetable plots that suffered total crop loss. Phase 3 of this emergency appeal will furnish 650 home garden seed packs and basic micro-tillage grants so affected families can regain self-sufficiency before the next planting window closes.",
        ],
      },
    ],
    tags: ["Flood Relief", "Batticaloa", "Emergency Response", "Clean Water", "Food Security"],
  },
  {
    id: "update-kilinochchi-stem-lab-opening",
    slug: "kilinochchi-rural-schools-solar-stem-labs",
    title: "Solar-Powered Digital STEM Labs Open in Three Rural Kilinochchi Schools",
    subtitle: "Over 820 rural students now have daily access to computers, coding software, and science apparatus without power interruptions.",
    category: "Education",
    date: "October 14, 2026",
    location: "Kandavalai & Poonakary, Kilinochchi",
    district: "Northern Province",
    readTime: "3 min read",
    shortSummary:
      "Three under-resourced rural schools in Kilinochchi received 45 refurbished computers, rooftop solar inverters, and high-speed satellite learning resources, closing the digital divide for 820+ students.",
    featured: false,
    image: images.classroomStudents,
    imageAlt: "Students working on computers in a bright renovated classroom",
    fieldOfficer: {
      name: "Sujitha Thirunavukarasu",
      role: "Education Program Lead, Northern Region",
      avatar: images.team1,
    },
    impactStats: [
      { value: "3", label: "Schools Fully Outfitted" },
      { value: "820+", label: "Students with Daily PC Access" },
      { value: "10 kW", label: "Clean Solar Energy Installed" },
      { value: "18", label: "Teachers Trained in Digital Curriculum" },
    ],
    quote: {
      text: "I used to only see pictures of computer hardware in our Tamil textbooks. Today I wrote my first Python loop and simulated physics experiments.",
      author: "Tharsini Kandasamy",
      role: "Grade 8 Student, Kandavalai Maha Vidyalayam",
    },
    keyTakeaways: [
      "Complete rooftop solar installations guarantee 8 hours of uninterrupted power for the computer labs.",
      "45 high-efficiency desktop workstations equipped with offline educational encyclopedias and coding tools.",
      "Certified 3-week computer pedagogy workshop completed by 18 local science and math teachers.",
    ],
    content: [
      {
        heading: "Overcoming Chronic Grid Disruptions",
        paragraphs: [
          "For years, schools in the agricultural belt of Kandavalai and Poonakary faced daily 4-to-6 hour power outages during classroom hours, making digital learning impossible. Out of 820 enrolled secondary students, less than 6% had ever used a keyboard before this term.",
          "Our educational infrastructure fund designed a resilient off-grid package: 10kW rooftop photovoltaic panels paired with lithium-iron phosphate battery storage, ensuring completely reliable daytime power for the digital lab and science equipment.",
        ],
      },
      {
        heading: "Teacher Training and Curriculum Integration",
        paragraphs: [
          "Hardware alone does not transform learning outcomes. We partnered with provincial educational advisors to deliver a rigorous 40-hour hands-on training module for 18 local teachers, focusing on practical programming, digital research skills, and multimedia math instruction.",
        ],
      },
    ],
    tags: ["Education", "Solar Energy", "Kilinochchi", "Digital Literacy", "STEM"],
  },
  {
    id: "update-vavuniya-deep-tube-well",
    slug: "vavuniya-drought-resilient-community-wells",
    title: "Deep-Tube Water Filtration Well Restores Clean Drinking Water for 340 Families in Nedunkeni",
    subtitle: "A solar-driven deep bore well reaching 68 meters ends a multi-year reliance on high-fluoride contaminated village surface pools.",
    category: "Clean Water",
    date: "October 08, 2026",
    location: "Nedunkeni, Vavuniya North",
    district: "Northern Province",
    readTime: "3 min read",
    shortSummary:
      "A new 68-meter solar-pumped deep well and multi-stage filtration plant in Nedunkeni now supplies 42,000 liters of pure, lab-tested water daily to 340 farming households.",
    featured: false,
    image: images.communityChildrenGroup,
    imageAlt: "Village community gathering around a newly completed water pump station",
    fieldOfficer: {
      name: "Ramesh Shanmugam",
      role: "WASH (Water & Sanitation) Senior Engineer",
      avatar: images.team4,
    },
    impactStats: [
      { value: "340", label: "Households Connected" },
      { value: "42,000L", label: "Daily Filtered Water Output" },
      { value: "0", label: "Electricity Cost (100% Solar Driven)" },
      { value: "9", label: "Elected Village Water Board Stewards" },
    ],
    quote: {
      text: "Our children used to walk miles in the heat to fetch murky water. Since this deep filtration well was installed, chronic kidney disease complaints have dropped and attendance at school has rebounded.",
      author: "M. Sivakumar",
      role: "Village Council Elder, Nedunkeni",
    },
    keyTakeaways: [
      "Borewell drilled to 68 meters through subterranean rock into pristine mineral-free aquifer.",
      "Multi-stage sand and carbon filtration removes iron, fluoride, and bacterial particulates.",
      "Community water management committee formed with 60% female leadership to ensure maintenance and equitable distribution.",
    ],
    content: [
      {
        heading: "Solving a Decades-Old Health Crisis",
        paragraphs: [
          "Nedunkeni in Vavuniya North has historically suffered from high rates of chronic kidney disease (CKD) tied to high minerals and agrochemical seepage in shallow surface wells. During the dry season between June and September, village women regularly walked over 3 kilometers under scorching sun to collect brownish water.",
          "Through donor backing, our hydrogeology team conducted electrical resistivity surveys to map clean fracture zones 68 meters below ground level, safely isolated from surface contaminants.",
        ],
      },
      {
        heading: "Community Stewardship for Lifelong Impact",
        paragraphs: [
          "Rather than imposing external maintenance, a democratically elected 9-member village committee was established and trained with spare part toolkits. A tiny community maintenance fund guarantees the solar pumps and replacement filters will operate seamlessly for decades.",
        ],
      },
    ],
    tags: ["Clean Water", "Vavuniya", "Solar Pumping", "Public Health", "WASH"],
  },
  {
    id: "update-nuwara-eliya-mobile-health-camp",
    slug: "nuwara-eliya-tea-estate-mobile-clinic-reaches-1100-workers",
    title: "Mobile Medical Clinic Delivers Free Primary Care and Eye Screenings to 1,120 Tea Estate Workers",
    subtitle: "Bringing specialist physicians, free chronic medicine supplies, and prescription glasses to remote high-elevation division lines.",
    category: "Healthcare",
    date: "September 29, 2026",
    location: "Hatton & Maskeliya, Nuwara Eliya",
    district: "Central Province",
    readTime: "4 min read",
    shortSummary:
      "A 3-day mobile healthcare expedition screened 1,120 plantation tea pluckers and elders in Hatton, delivering free diabetes medications, pediatric vitamins, and 340 pairs of custom prescription glasses.",
    featured: false,
    image: images.elderHands,
    imageAlt: "Doctor checking the health of an elderly tea estate worker",
    fieldOfficer: {
      name: "Dr. Ananya Perera",
      role: "Community Health Director",
      avatar: images.team3,
    },
    impactStats: [
      { value: "1,120", label: "Patients Treated at Zero Cost" },
      { value: "340", label: "Custom Prescription Spectacles Delivered" },
      { value: "48", label: "Cataract Surgeries Fully Sponsored" },
      { value: "3 Mos", label: "Free Chronic Medicine Supply per Patient" },
    ],
    quote: {
      text: "Healthcare has always been out of reach for our division. When the mobile medical camp visited, my elderly mother received free cataract screening and medicines that restored her vision.",
      author: "Mohamed Rizwan",
      role: "Tea Estate Community Worker, Hatton",
    },
    keyTakeaways: [
      "On-site diagnostic lab providing instant blood sugar, hemoglobin, and blood pressure checks.",
      "Comprehensive optometry clinic with immediate lens fitting and 48 scheduled cataract interventions at the regional hospital.",
      "Nutritional supplement packages distributed to 240 pregnant and lactating mothers.",
    ],
    content: [
      {
        heading: "Bridging the Distance to Medical Care",
        paragraphs: [
          "Living on steep hillside estates 15 to 25 kilometers from the nearest government base hospital, tea plantation workers frequently forfeit an entire day's wage just to travel for a routine prescription checkup. Preventable ailments like hypertension, anemia, and untreated cataracts routinely worsen unnoticed.",
          "Our mobile healthcare team converted two all-terrain vans into fully equipped diagnostic and dispensary consultation rooms, staffed by 4 volunteer physicians, 3 optometrists, and 6 Tamil-speaking nursing officers.",
        ],
      },
      {
        heading: "Restoring Sight and Dignity",
        paragraphs: [
          "Vision loss severely impairs tea pluckers whose livelihoods depend on delicate manual leaf harvesting. The mobile camp dispensed 340 prescription reading and distance glasses on the spot, and enrolled 48 senior estate workers with dense cataracts into our sponsored surgical schedule in Kandy.",
        ],
      },
    ],
    tags: ["Healthcare", "Nuwara Eliya", "Mobile Clinic", "Tea Estate Communities", "Vision Care"],
  },
];

export function getAllUpdates(): UpdateItem[] {
  return updates;
}

export function getFeaturedUpdate(): UpdateItem {
  return updates.find((u) => u.featured) || updates[0];
}

export function getLatestUpdates(limit = 4): UpdateItem[] {
  return updates.slice(0, limit);
}

export function getUpdateBySlug(slug: string): UpdateItem | undefined {
  return updates.find((u) => u.slug === slug);
}

export function getRelatedUpdates(currentSlug: string, limit = 3): UpdateItem[] {
  return updates.filter((u) => u.slug !== currentSlug).slice(0, limit);
}
