import HomeHero from "@/components/hero/HomeHero";
import ImpactStatement from "@/components/sections/ImpactStatement";
import ImpactStats from "@/components/sections/ImpactStats";
import OurWorkSection from "@/components/sections/OurWorkSection";
import FeaturedStory from "@/components/sections/FeaturedStory";
import HowWeCreateChange from "@/components/sections/HowWeCreateChange";
import CampaignSection from "@/components/sections/CampaignSection";
import VolunteerCTA from "@/components/sections/VolunteerCTA";
import StoriesSection from "@/components/sections/StoriesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ImpactStatement />
      <ImpactStats />
      <OurWorkSection />
      <FeaturedStory />
      <HowWeCreateChange />
      <CampaignSection />
      <VolunteerCTA />
      <StoriesSection />
      <PartnersSection />
      <Newsletter />
    </>
  );
}
