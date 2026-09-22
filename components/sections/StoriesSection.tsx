import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import StoryCard from "@/components/cards/StoryCard";
import { stories } from "@/data/stories";

export default function StoriesSection() {
  const [primary, ...rest] = stories;
  const secondary = rest.slice(0, 2);

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Stories"
            title="Reporting from the field"
            description="Editorial dispatches from the communities and programs we work alongside."
            className="max-w-xl"
          />
          <FadeUp>
            <Button href="/stories" variant="secondary">
              All stories
            </Button>
          </FadeUp>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <StoryCard story={primary} size="lg" />
          </div>
          <div className="flex flex-col gap-12 lg:col-span-5">
            {secondary.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
