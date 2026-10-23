export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  cause: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "fathima-kinniya",
    name: "Fathima Rameeza",
    role: "Livelihood Grant Recipient & Mother",
    location: "Kinniya, Trincomalee",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
    quote:
      "After losing my husband, providing two daily meals was an everyday struggle. The sewing machine and fabric grant allowed me to start a tailoring service from home. Today, I earn with dignity and send all three of my children to school.",
    cause: "Livelihood Micro-Grants",
  },
  {
    id: "sivakumar-vavuniya",
    name: "M. Sivakumar",
    role: "Village Council Elder",
    location: "Nedunkeni, Vavuniya",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    quote:
      "Our children used to walk miles in the heat to fetch contaminated well water, constantly falling ill during exam months. Since the deep-tube water filtration well was installed, 340 village families have safe, clean drinking water right at their doorsteps.",
    cause: "Clean Drinking Water Project",
  },
  {
    id: "selvarani-batticaloa",
    name: "K. Selvarani",
    role: "Mother of Four & Flood Survivor",
    location: "Eravur, Batticaloa",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    quote:
      "When the monsoon river overflowed into our mud home, we lost our stored rice and cooking pots. The emergency relief team arrived by boat with emergency dry rations, milk powder, and clean water within 24 hours. They saved our family from despair.",
    cause: "Emergency Flood Relief",
  },
  {
    id: "rizwan-hatton",
    name: "Mohamed Rizwan",
    role: "Tea Estate Community Worker",
    location: "Hatton, Nuwara Eliya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote:
      "Healthcare has always been out of reach for our estate community. When the mobile medical camp visited our division, my elderly mother received free cataract screening and prescription medicines that restored her vision.",
    cause: "Mobile Health Clinic",
  },
  {
    id: "tharsini-kilinochchi",
    name: "Tharsini Kandasamy",
    role: "Grade 8 Student & Scholarship Recipient",
    location: "Kilinochchi, Northern Province",
    avatar: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400",
    quote:
      "Without schoolbooks and uniforms, my mother was going to pull me out of classes. Getting this scholarship pack with school supplies and nutritious breakfast gave me the chance to keep studying toward my dream of becoming a teacher.",
    cause: "Student Education & Nutrition",
  },
  {
    id: "rasheed-puttalam",
    name: "Abdul Rasheed",
    role: "Smallholder Farmer",
    location: "Wanathawilluwa, Puttalam",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    quote:
      "During the dry season, our village well dried up and our crop harvest was at risk. The solar pump and drip-irrigation support rescued our produce and secured daily food for 18 farming households in our cooperative.",
    cause: "Agricultural Relief Fund",
  },
];
