import { programs } from "./programs";
import { activeCampaign } from "./campaigns";
import { images } from "./images";

export interface Appeal {
  slug: string;
  href: string;
  donateHref: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const programAppeals: Appeal[] = programs.map((program) => ({
  slug: program.slug,
  href: `/our-work/${program.slug}`,
  donateHref: `/donate?cause=${program.slug}`,
  title: program.name,
  description: program.shortDescription,
  image: program.image,
  imageAlt: program.imageAlt,
}));

const campaignAppeal: Appeal = {
  slug: activeCampaign.slug,
  href: "/our-work/community-development",
  donateHref: "/donate?cause=community-development",
  title: activeCampaign.title,
  description:
    "Bringing safe drinking water to eleven more villages — an estimated 18,000 people.",
  image: images.heroVillageChildren,
  imageAlt: "Children in a village community that will benefit from new wells",
};

const order = ["emergency-relief", "education", "healthcare"];

export const appeals: Appeal[] = [
  ...order.map((slug) => programAppeals.find((appeal) => appeal.slug === slug)!),
  campaignAppeal,
  ...programAppeals.filter((appeal) => !order.includes(appeal.slug)),
].slice(0, 6);
