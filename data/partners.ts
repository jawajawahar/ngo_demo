export interface PartnerItem {
  name: string;
  category: string;
  focus: string;
  location: string;
  initials: string;
  type: "grantmaker" | "wash" | "healthcare" | "livelihood" | "education" | "logistics";
}

export const partners: PartnerItem[] = [
  {
    name: "Northbridge Trust",
    category: "Institutional Grantmaker",
    focus: "Emergency flood relief funding & village community grants",
    location: "UK & Sri Lanka",
    initials: "NT",
    type: "grantmaker",
  },
  {
    name: "Clearwater Alliance",
    category: "WASH Engineering",
    focus: "68m deep-tube filtration wells & gravity purifiers",
    location: "Global WASH Network",
    initials: "CA",
    type: "wash",
  },
  {
    name: "Solace Health Collective",
    category: "Public Health Alliance",
    focus: "Mobile plantation medical camps & sponsored eye care",
    location: "Central Province",
    initials: "SH",
    type: "healthcare",
  },
  {
    name: "Greenline Cooperative",
    category: "Rural Livelihoods",
    focus: "Post-disaster home garden seed packs & micro-tillage",
    location: "Eastern Province",
    initials: "GC",
    type: "livelihood",
  },
  {
    name: "Harborlight Foundation",
    category: "Education Infrastructure",
    focus: "Off-grid rooftop solar labs & digital literacy tools",
    location: "Northern Province",
    initials: "HF",
    type: "education",
  },
  {
    name: "Meridian Partners",
    category: "Humanitarian Logistics",
    focus: "Last-mile relief distribution & warehouse storage",
    location: "Island-wide",
    initials: "MP",
    type: "logistics",
  },
  {
    name: "Ceylon Civic Aid",
    category: "Grassroots Networks",
    focus: "Local Grama Niladhari committees & village councils",
    location: "Sri Lanka",
    initials: "CC",
    type: "grantmaker",
  },
  {
    name: "Lanka Clean Water Fund",
    category: "Aquifer Stewardship",
    focus: "Groundwater testing, community pumps & filter sets",
    location: "Dry Zone Districts",
    initials: "LC",
    type: "wash",
  },
];
