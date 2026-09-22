import { images } from "./images";
import type { Campaign } from "@/types";

export const activeCampaign: Campaign = {
  slug: "clean-water-for-marul-valley",
  title: "Clean Water for Marul Valley",
  description:
    "We're expanding the well program that transformed Marul village to eleven more communities across the valley — bringing safe water access to an estimated 18,000 more people over the next year.",
  image: images.farmland,
  imageAlt: "Farmland in the Marul Valley region",
  goal: 120000,
  raised: 78400,
  currency: "USD",
  donorCount: 642,
  daysLeft: 34,
};

export const campaigns: Campaign[] = [activeCampaign];
