import HomeHero from "@/components/hero/HomeHero";
import SriLankaStory from "@/components/sections/SriLankaStory";
import AppealsSection from "@/components/sections/AppealsSection";
import GivingWaysSection from "@/components/sections/GivingWaysSection";
import ImpactStats from "@/components/sections/ImpactStats";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FeaturedStory from "@/components/sections/FeaturedStory";
import HowWeCreateChange from "@/components/sections/HowWeCreateChange";
import VolunteerCTA from "@/components/sections/VolunteerCTA";
import StoriesSection from "@/components/sections/StoriesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <HomeHero />
      <SriLankaStory />
      <AppealsSection />
      <GivingWaysSection />
      <ImpactStats />
      <TestimonialsSection />
      <FeaturedStory />
      <HowWeCreateChange />
      <VolunteerCTA />
      <StoriesSection />
      <PartnersSection />
      <Newsletter />
    </>
  );
}
